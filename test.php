<?php
$to = "issam.s.g22@gmail.com";  // ضع هنا إيميلك
$subject = "اختبار إرسال بريد";
$message = "هذا مجرد اختبار لإرسال البريد عبر PHP!";
$headers = "From: no-reply@yourdomain.com";

if (mail($to, $subject, $message, $headers)) {
    echo "✅ تم إرسال البريد بنجاح!";
} else {
    echo "❌ فشل إرسال البريد!";
}
?>
