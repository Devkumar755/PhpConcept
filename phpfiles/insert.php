<?php
include 'connection.php';

$json = file_get_contents('php://input');
$obj = json_decode($json,true);

$email = $obj['email'];
$password = $obj['password'];

if(mysqli_query($link,"INSERT INTO reactvalue(email,password) VALUES('$email','$password')"))
	
	{
		echo json_encode('Insert success');
	}else
	{
		
		echo json_encode('Insert failed');
	}
  mysqli_close($link);
?>