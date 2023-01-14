<?php

    if ($_SERVER["REQUEST_METHOD"] == "POST") {

        session_start();

        include "database.php";

        $user_name = htmlspecialchars($_POST["username"]);
        $user_password = htmlspecialchars($_POST["password"]);

        if (empty($user_name) || empty($user_password)) {

            echo "<h2>Var snäll fyll i alla fält</h2>";

        } else {

            $sql = "SELECT * FROM log_in_details WHERE Username='$user_name' AND Password='$user_password'";

            $result = mysqli_query($conn, $sql);

            if (mysqli_fetch_assoc($result) === 1 ) {

                $row = mysqli_fetch_assoc($result);

                if ($row["Username"] === $user_name && $row["Password"] === $user_password) {

                    echo "<h2>logged in</h2>";


                } else {

                    echo "<h2>fail</h2>";
                }
            }
        }

    }
?>