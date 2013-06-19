<?php
	include("config.inc.php");

	error_reporting(0);
	
	// initialization
	$result_final = "";
	$counter = 0;

	// List of our known photo types
	$known_photo_types = array( 
						'image/pjpeg' => 'jpg',
						'image/jpeg' => 'jpg',
						'image/gif' => 'gif',
						'image/bmp' => 'bmp',
						'image/x-png' => 'png'
					);
	
	// GD Function List
	$gd_function_suffix = array( 
						'image/pjpeg' => 'JPEG',
						'image/jpeg' => 'JPEG',
						'image/gif' => 'GIF',
						'image/bmp' => 'WBMP',
						'image/x-png' => 'PNG'
					);

	// Fetch the photo array sent by preupload.php
	$photos_uploaded = $_FILES['photo_filename'];

	// Fetch the photo caption array
	
	while( $counter <= count($photos_uploaded) )
	{
		if($photos_uploaded['size'][$counter] > 0)
		{
			if(!array_key_exists($photos_uploaded['type'][$counter], $known_photo_types))
			{
				$result_final .= "File ".($counter+1)." is not a photo<br />";
			}
			else
			{
				mysql_query( "INSERT INTO slider(`p_name`) VALUES('0')" );
				$new_id = mysql_insert_id();
				$filetype = $photos_uploaded['type'][$counter];
				$extention = $known_photo_types[$filetype];
				$filename = $new_id.".".$extention;

				mysql_query( "UPDATE slider SET p_name='".addslashes($filename)."' WHERE p_id='".addslashes($new_id)."'" );
				header("location:slider.php");
				// Store the orignal file
				copy($photos_uploaded['tmp_name'][$counter], $images_dir."/".$filename);

				// Let's get the Thumbnail size
				
							
			}
		}
	$counter++;
	}

	// Print Result
echo <<<__HTML_END

<html>
<head>
	<title>Photos uploaded</title>
</head>
<body >
	
</body>
</html>

__HTML_END;
?>
