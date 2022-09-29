<?php

$to = "xyz@somedomain.com";
$from = $_post['email'];
$subject = $_POST['subject'];

$message = $_POST['message'];

$header = "From:$from \r\n";
$header .= "Cc:afgh@somedomain.com \r\n";
$header .= "MIME-Version: 1.0\r\n";
$header .= "Content-type: text/html\r\n";
echo json_encode("Message sent successfully...");

// $retval = mail($to, $subject, $message, $header);

// if ($retval == true) {
//     echo json_encode("Message sent successfully...");
// } else {
//     echo json_encode("Message could not be sent...");
// }
