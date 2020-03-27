<?php
include 'connection.php';
  $result = mysqli_query($link,"SELECT * FROM reactvalue");

if(mysqli_num_rows($result))
	{
	while($row[] = mysqli_fetch_assoc($result))
	{
		$json = json_encode($row);
	}
}else
{
	echo 'response is zero';
}
echo $json;
mysqli_close($link);
?>