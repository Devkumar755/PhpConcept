<?php
 
	if($_SERVER['REQUEST_METHOD']=='POST'){
		
		//$image = $_FILES['image'];
		
		require_once('connection.php');
		
		$path = "uploads/images";
		
		$actualpath = "http://192.168.8.101/$path";
		
		$sql = "INSERT INTO imageurl(url) VALUES ('$actualpath')";
		
		if(mysqli_query($link,$sql)){
			move_uploaded_file($_FILES['image']['tmp_name'],$path);
			$messagae ="save successfully";
			echo json_encode($messagae);
		}
		
		mysqli_close($link);
	}else{
		 $massage= "Error";
		 echo json_encode($massage);
	}