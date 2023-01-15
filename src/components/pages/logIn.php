<?php

    session_start();

    include "database.php";

    if ($_SERVER["REQUEST_METHOD"] == "POST") {

        $username = htmlspecialchars($_POST["username"]);
        $password = htmlspecialchars($_POST["password"]);

        if (empty($username) || empty($password)) {

            echo "<h2>Var snäll fyll i alla fält</h2>";

        } else {

            $sql = "SELECT Username, Password FROM log_in_details";

            $result = mysqli_query($conn, $sql);

            if (mysqli_num_rows($result) > 0) {

                $row = mysqli_fetch_assoc($result);

                if ($row["Username"] === $username && $row["Password"] === $password) {

                    $_SESSION["Username"] = $row["Username"];

                    echo '<script>window.location.replace("https://adamkumlin.se/")</script>';

                } else {

                    echo '<script>window.location.replace("https://adamkumlin.se/cv")</script>';
                }
            }
        }
    }
?>