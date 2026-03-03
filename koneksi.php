<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "db_3dlife_20236020";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

