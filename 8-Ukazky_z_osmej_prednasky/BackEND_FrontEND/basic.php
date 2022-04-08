<?php
   $meno = $_POST['name'];
   $body = $_POST['body'];
    
   $host        = "host = 127.0.0.1";
   $port        = "port = 5600";
   $dbname      = "dbname = postgres";
   $credentials = "user = postgres password=123456789";

   $db = pg_connect("$host $port $dbname $credentials");
   if(!$db) {
      echo "Error : Unable to open database\n";
   } else {
      echo "Opened database successfully\n";
   }
   
   //Vkladanie do DBS
   $sql = "INSERT INTO skore (meno, body) VALUES ('".$meno."' , ".$body.")";

   $ret = pg_query($db, $sql);
   if(!$ret) {
      echo pg_last_error($db);
      exit;
   }

   pg_close($db);
 
   echo "Operation done successfully\n";
   echo "";
