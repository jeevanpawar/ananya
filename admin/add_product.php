
<?php
	include("config.inc.php");
	
	error_reporting(0);
	// initialization
	$photo_upload_fields = "";
	$counter = 1;

	// default number of fields
	$number_of_fields = 1; 

// If you want more fields, then the call to this page should be like, 
// preupload.php?number_of_fields=20

	if( $_GET['number_of_fields'] )
	$number_of_fields = (int)($_GET['number_of_fields']);

	// Firstly Lets build the Category List

	

// Lets build the Photo Uploading fields
	while( $counter <= $number_of_fields )
	{
$photo_upload_fields .=<<<__HTML_END
<tr>
	<td>
	    Select Image
	</td>
	<td>
	    <input name='photo_filename[]' type='file' />
	</td>
</tr>
__HTML_END;
	$counter++;
	}

// Final Output
echo <<<__HTML_END
<html>
<head>
	<meta http-equiv="Content-type" content="text/html; charset=utf-8" />
	<title>Image Gallery | Slate Admin</title>	
		
	<link rel="stylesheet" href="./css/screen.css" type="text/css" media="screen" title="no title" charset="utf-8" />	
	<link rel="stylesheet" href="./css/plugin.css" type="text/css" media="screen" title="no title" charset="utf-8" />	
	<link rel="stylesheet" href="./css/custom.css" type="text/css" media="screen" title="no title" charset="utf-8" />	
		
</head>
<body >
<form enctype='multipart/form-data' action='addupload.php' method='post' name='upload_form'>
<table width='90%' border='0' align='center' style='width: 90%;'>


<!-Insert the photo fields here -->
$photo_upload_fields


<tr>
	<td>
	 Product Name 
	</td>
	<td>
	    <input name='f_name' type='text' />
	</td>
</tr>

<tr>
	<td>
	Select Category
	</td>
	<td>
	    <select name='f_cat'>
		<option>Product</option>
		<option>Imitation</option>
		<option>Beauty</option>
		</select>
	</td>
</tr>
<tr>
	<td>
	Select Type
	</td>
	<td>
	    <select name='f_type'>
		<option>None</option>
		<option>Feature</option>
		<option>Latest</option>
		</select>
	</td>
</tr>

<tr>
	<td class="but">
	   		
	        <input type='submit' name='submit' value='Add Products' />
	</td>
</tr>

</table>

</form>
</body>
</html>
__HTML_END;
?>
