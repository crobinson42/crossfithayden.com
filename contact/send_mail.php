<?php
require 'PHPMailer/PHPMailerAutoload.php';

$host = 'crossfithayden.com';

$username = 'info@crossfithayden.com';
// $username = 'cory@crossfithayden.com';

$password = 'Ironfist1';
// $password = 'aJ8ysx|n?8-KxQ';

$subject = 'CFH - Website Contact Form: ' . addslashes(strip_tags($_POST['subject']));

$send = false;

$name = addslashes(strip_tags($_POST['name']));

$email = addslashes(strip_tags($_POST['email']));

$message = addslashes(strip_tags($_POST['message']));

if (empty($name) || !isset($name) || empty($_POST['g-recaptcha-response'])) {
  exit('Bad form values');
}

$htmlmessage = <<<MESSAGE
    <html>
    	<head>
            <title>$subject</title>
    	</head>

        <body>
            <p><strong>Name: </strong>$name</p>
            <p><strong>Email: </strong>$email</p>
            <p><strong>Message: </strong>$message</p>
        </body>
    </html>
MESSAGE;

$mail = new PHPMailer;

$mail->isSMTP();
$mail->SMTPAuth = TRUE;
$mail->Host = $host;
$mail->Username = $username;
$mail->Password = $password;

$mail->From = $email;
$mail->FromName = $name;

// Add receive email address
$mail->addAddress($username);

$mail->isHTML(true);

$mail->Subject = $subject;

$mail->Body    = $htmlmessage;

//send the message, check for errors
if ( $mail->send())
{
    $send = true;
}

echo json_encode($send);
