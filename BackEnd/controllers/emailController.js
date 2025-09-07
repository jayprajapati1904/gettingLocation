import nodemailer from "nodemailer";
import fetch from "node-fetch";

// Send email
export const sendEmail = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    // Configure transporter (using Gmail example)
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "jay1904prajapati@gmail.com",
        pass: "oqon rfpl clbn byur", // Use Gmail App Password
      },
    });

    const verifyLink = `https://getting-location.vercel.app/api/email/verify?email=${encodeURIComponent(
      email
    )}`;

    await transporter.sendMail({
      from: '"Your App" <yourgmail@gmail.com>',
      to: email,
      subject: "Verify your email",
      html: `<p>Click to verify: <a href="${verifyLink}">${verifyLink}</a></p>`,
    });

    res.json({ message: "Verification email sent ✅" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Email sending failed" });
  }
};

// Verify email + capture location
// export const verifyEmail = async (req, res) => {
//   try {
//     const userIp = req.headers["x-forwarded-for"] || req.socket.remoteAddress;

//     console.log(userIp);

//     // Call free IP geolocation API
//     const geoRes = await fetch(`https://ipapi.co/${userIp}/json/`);
//     const geoData = await geoRes.json();

//     console.log("User verified from:", geoData);

//     res.send(
//       `✅ Email verified! Approximate location: ${geoData.city}, ${geoData.country_name}`
//     );
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Verification failed" });
//   }
// };

export const verifyEmail = async (req, res) => {
  try {
    const userIp = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
    const geoRes = await fetch(`https://ipapi.co/${userIp}/json/`);
    const geoData = await geoRes.json();

    console.log("User verified from:", geoData);

    // Encode geoData into URL
    const geoDataEncoded = encodeURIComponent(JSON.stringify(geoData));

    return res.redirect(
      `https://getting-location-osw3.vercel.app/verify-success?email=${req.query.email}&geoData=${geoDataEncoded}`
    );
  } catch (error) {
    console.error(error);
    return res.redirect(
      "https://getting-location-osw3.vercel.app/verify-failed"
    );
  }
};
