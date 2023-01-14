<?php

  $servername = "localhost";
  $username = "uqafhyuz";
  $password = "62aAEy7)]eh0WJ";
  $database = "uqafhyuz_database";

  $conn = mysqli_connect($servername, $username, $password, $database);

  if (!$conn) {
    echo "fail";
  } else {
    echo "success";
  }
?> 