<?php
include 'connection.php';
$target_dir = "upload/images";
if(!file_exists($target_dir))
{
	mkdir($target_dir,0777,true);
}
$target_dir = $target_dir ."/".rand() .'_'.time() .".jpeg";

		
		$actualpath = "http://192.168.8.101/ReactPhp/$target_dir";
		
		$sql = "INSERT INTO imageurl(url) VALUES ('$actualpath')";
		mysqli_query($link,$sql);

if(move_uploaded_file($_FILES['image']['tmp_name'],$target_dir))
{
	echo json_encode([
	"Message" => "The file has been uploaded.",
	"Status" => "OK"
	]);
}else
{
		echo json_encode([
	"Message" => "Sorry,There is error while uploading.",
	"Status" => "Error"
	]);
}


?>