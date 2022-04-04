<!DOCTYPE html>
<html>
<head>
<style>
table {
  width: 100%;
  border-collapse: collapse;
}

table, td, th {
  border: 1px solid black;
  padding: 5px;
}

th {text-align: left;}
</style>
</head>
<body>
<?php
   $q = intval($_GET['q']);

   $host        = "host = 127.0.0.1";
   $port        = "port = 5500";
   $dbname      = "dbname = postgres";
   $credentials = "user = postgres password=123456789";

   $db = pg_connect( "$host $port $dbname $credentials"  );
   if(!$db) {
      echo "Error : Unable to open database\n";
   } else {
      echo "Opened database successfully\n";
   }

   /*$sql = "INSERT INTO SCORE (ID, NAME, BODY) VALUES (2 , 'Jozef' , 900)";*/
   $sql ="SELECT * from SCORE ORDER BY body DESC";

   $ret = pg_query($db, $sql);
   if(!$ret) {
      echo pg_last_error($db);
      exit;
   } 

   ?>
   <p><? echo ("<p>ble</p>"); ?></p>
   <?php

   while($row = pg_fetch_row($ret)) {
      echo "ID = ". $row[0] . "\n";
      echo "NAME = ". $row[1] ."\n";
      echo "BODY = ". $row[2] ."\n";
   }
   pg_close($db);


   
   echo "Operation done successfully\n";
   echo "";
?>
</body>
</html>