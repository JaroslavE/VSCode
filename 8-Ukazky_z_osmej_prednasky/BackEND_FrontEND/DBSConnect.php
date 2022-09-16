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
   $host        = "host = 127.0.0.1";
   $port        = "port = 5500";
   $dbname      = "dbname = postgres";
   $credentials = "user = postgres password=123456789";

   $db = pg_connect("$host $port $dbname $credentials");
   if(!$db) {
      echo "Error : Unable to open database\n";
   } else {
      echo "Opened database successfully\n";
   }
   
   /*Vytvorenie tabulky v PostgreSQL databaze, SQL zapis v PostgreSQL je iny ako v MySQL
   $sql = "CREATE TABLE Skore 
      (id BIGSERIAL PRIMARY KEY,
      meno TEXT NOT NULL,
      body INT NOT NULL)";
   */

   //Vyberanie z DBS
   $sql ="SELECT * from score ORDER BY body DESC";

   $ret = pg_query($db, $sql);
   if(!$ret) {
      echo pg_last_error($db);
      exit;
   }
   echo "<table><tr>
            <th>ID</th>
            <th>Meno</th>
            <th>Body</th>
         </tr>";
   while($row = pg_fetch_row($ret)) {
      echo "<tr>";
      echo "<td>". $row[0] . "</td>";
      echo "<td>". $row[1] . "</td>";
      echo "<td>". $row[2] . "</td>";
      echo "</tr>";
   }
   echo "</table>";
   pg_close($db);
 
   echo "Operation done successfully\n";
   echo "";
?>
</body>
</html>