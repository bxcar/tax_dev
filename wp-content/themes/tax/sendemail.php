<?php

$sendto  = 'malanchukdima@mail.ru'; //Адреса, куда будут приходить письма

$email  = $_POST['email'];
$name  = $_POST['name'];
$text  = $_POST['text'];
$order  = $_POST['order'];
$source = $_POST['source'];

// Формирование заголовка письма

$subject  = '[Новая заявка - Tax.ua]';
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html;charset=utf-8 \r\n";

// Формирование тела письма

$msg  = "<html><body style='font-family:Arial,sans-serif;'>";
$msg .= "<h2 style='font-weight:bold;border-bottom:1px dotted #ccc;'>Новая заявка - Tax.ua</h2>\r\n";
$msg .= "<p><strong>Имя:</strong> ".$name."</p>\r\n";
$msg .= "<p><strong>Email:</strong> ".$email."</p>\r\n";
$msg .= "<p><strong>Текст:</strong> ".$text."</p>\r\n";
$msg .= "<p><strong>Форма:</strong> ".$order."</p>\r\n";
$msg .= "<p><strong>Источник:</strong> ".$source."</p>\r\n";
$msg .= "</body></html>";

// отправка сообщения
if(mail($sendto, $subject, $msg, $headers)) {
    echo "true";
} else {
    echo "false";
}

?>