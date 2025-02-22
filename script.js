document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // يمكنك تعديل هذا الجزء للتحقق من البيانات
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "admin" && password === "1234") { 
        window.location.href = "video.html"; // توجيه المستخدم بعد تسجيل الدخول
    } else {
        alert("بيانات غير صحيحة!");
    }
});
