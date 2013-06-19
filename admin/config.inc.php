<?php
	$hostname = "localhost";
	$database = "db";
	$username = "root";
	$password = "bitnami";
    $mysql_link = mysql_connect("localhost", "root", "bitnami");   
    mysql_select_db("ananya") or die("Could not select database");
    $images_dir = "photos";
?>
