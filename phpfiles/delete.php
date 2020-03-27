<?php
include 'connection.php';

$json = file_get_contents('php://input');
$obj = json_decode($json,true);

$email = $obj['email'];

if(mysqli_query($link,"DELETE FROM reactvalue where email='$email'"))
	
	{
		echo json_encode('Delete success');
	}else
	{
		
		echo json_encode('Delete failed');
	}
  mysqli_close($link);

?>