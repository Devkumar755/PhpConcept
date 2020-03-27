<?php

include 'connection.php';
/*

 
	
	$domain_name = "http://192.168.8.101/ReactPhp/" ;
	
	// Image uploading folder.
	$target_dir = "uploads";
	
	// Generating random image name each time so image name will not be same .
	$target_dir = $target_dir . "/" .rand() . "_" . time() . ".jpeg";
	

	
	// Receiving image sent from Application	
	if(move_uploaded_file($_FILES['image']['tmp_name'], $target_dir)){
		
		// Adding domain name with image random name.
		$target_dir = $domain_name . $target_dir ;
		
		// Inserting data into MySQL database.
		if(mysqli_query($link,"insert into imageurl(url) VALUES('$target_dir')"))
		{
		
		$MESSAGE = "Image Uploaded Successfully." ;
			
		// Printing response message on screen after successfully inserting the image .	
		echo json_encode($MESSAGE);
		}else
		{
			$MESSAGE = 'image failed';
			echo json_encode ($MESSAGE);
		}
	}else
	{
		
		$MESSAGE = "Image failed whie uploading";
		echo json_encode($MESSAGE);
	}
	*/
 
 /*
 $target_dir = "upload";
 if(!file_exists($target_dir))
 {
	 mkdir($target_dir,0777,true);
 }
 
 	$target_dir = $target_dir . "/" .rand() . "_" . time() . ".jpeg";
	
	if(move_uploaded_file($_FILES['image']['tmp_name'], $target_dir)){
		echo json_encode([
		"MESSAGE" => "The file hass been uploaded.",
		"Status" => "Ok"
		]);
	}else{
			echo json_encode([
		"MESSAGE" => "Sorry,here is proble",
		"Status" => "Errorn"
		]);
	}
	*/
	

 

	$image = $_POST['image'];

 
	// Type your website name or domain name here.
	
	
	// Image uploading folder.
	$target_dir = "uploads/images";
	
	$domain_name = "http://192.168.8.101/$target_dir" ;
	
	// Generating random image name each time so image name will not be same .
	//$target_image_name = $target_dir . "/" .rand() . "_" . time() . ".jpeg";
	
	// Receiving image tag sent from application.
	
	
	// Receiving image sent from Application	
	if(move_uploaded_file($_FILES['image']['tmp_name'], $target_dir)){
		
		// Adding domain name with image random name.
		//$target_dir = $domain_name . $target_dir ;
		
		// Inserting data into MySQL database.
		mysqli_query("insert into imageurl(url) VALUES('$domain_name')");
			//mysqli_connect($link,$query);
		
		$MESSAGE = "Image Uploaded Successfully." ;
			
		// Printing response message on screen after successfully inserting the image .	
		echo json_encode($MESSAGE);
	}
	
?>