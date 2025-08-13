import nodemailer from "nodemailer";

export default async function handler(req, res) {
   console.log({
    host: process.env.SMTP_HOST
   });
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }
 
  const { name, email, message, company } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Missing fields" });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true, // Port 465 requires secure true
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

      await transporter.sendMail({
        from: `"${name}" <${process.env.SMTP_USER}>`,
        to: process.env.RECEIVER_EMAIL,
        subject: "New Inquiry from Website Contact Form",
        text: `
          You have received a new message from the website contact form.
        
          Name: ${name}
          Email: ${email}
          Company: ${company || "N/A"}
        
          Message:
          ${message}
        `,
        html: `
          <div style="font-family: Arial, sans-serif; color: #000000; background-color: #ffffff; padding: 20px; border: 1px solid #FF6600;">
            <h2 style="color: #FF6600; margin-bottom: 20px;">New Inquiry from Website Contact Form</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Company:</strong> ${company || "N/A"}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-line;">${message}</p>
          </div>
        `,
      });

    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ message: error });
  }
}