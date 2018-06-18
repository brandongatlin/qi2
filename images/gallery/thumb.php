<?php
$dir = $_GET['f'];
$cached = "thumbs/".$dir;
$new_width = 500;
//$new_height = 100;
if(!is_file($cached)){ 
	 
	list(,,$type) = getimagesize($dir);
    $type = image_type_to_extension($type);
	 $t = 'imagecreatefrom'.$type;
    $t = str_replace('.','',$t);
    $img = $t($dir);
	
	$width = imagesx( $img );
	$height = imagesy( $img );
	
	
	$new_height = floor( $height * ( $new_width / $width ) );

	$tmp_img = imagecreatetruecolor( $new_width, $new_height );
	imagealphablending( $tmp_img, false );
	imagesavealpha( $tmp_img, true );
	imagecopyresized( $tmp_img, $img, 0, 0, 0, 0, $new_width, $new_height, $width, $height );

	$c = 'image'.$type;
	$c = str_replace('.','',$c);
	$c( $tmp_img, $cached );
}
$handle = fopen($cached, "rb");
	$contents = fread($handle, filesize($cached));
	fclose($handle);
	header('Content-type: image/jpeg'); 
	echo $contents;

