<?php
$servername = "localhost";
$username = "uqafhyuz";
$password = "62aAEy7)]eh0WJ";

try {
$conn = new PDO("mysql:host=$servername;dbname=uqafhyuz_database", $username, $password);
  // set the PDO error mode to exception
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  echo "Connected successfully";
} catch(PDOException $e) {
echo "Connection failed: " . $e->getMessage();
}
?> 