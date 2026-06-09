

// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import nodemailer from "nodemailer";

// dotenv.config();

// const app = express();

// app.use(cors());
// app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("primesheild Services Backend Server is running");
// });

// const BRAND_NAME = "PesSave Services";
// const BRAND_BROWN = "#5C4033";
// const BRAND_YELLOW = "#F2C12E";
// const BRAND_CREAM = "#FDFBF7";
// const BRAND_DARK = "#3F2C24";

// // MAIN CONTACT FORM
// app.post("/api/contact", async (req, res) => {
//   try {
//     const { name, email, phone, postcode, service, message } = req.body;

//     if (!name || !phone || !postcode || !message || !email) {
//       return res.status(400).json({
//         success: false,
//         message: "Name, email, phone number, postcode and message are required",
//       });
//     }

//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     await transporter.sendMail({
//       from: `"${BRAND_NAME}" <${process.env.EMAIL_USER}>`,
//       to: process.env.RECEIVER_EMAIL,
//       replyTo: email,
//       subject: `[PesSave Lead] 🚨 New Job: ${service || "Contact Form Submission"}`,
//       html: `
//         <!DOCTYPE html>
//         <html lang="en">
//         <head>
//           <meta charset="utf-8" />
//           <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//           <title>New PesSave Enquiry</title>
//         </head>

//         <body style="margin:0; padding:40px 10px; background-color:${BRAND_CREAM}; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
//           <div style="max-width:520px; margin:0 auto; background-color:#ffffff; border-radius:16px; overflow:hidden; box-shadow:0 12px 30px rgba(92,64,51,0.18); border:1px solid rgba(92,64,51,0.15);">
            
//             <div style="background:linear-gradient(135deg, ${BRAND_BROWN} 0%, ${BRAND_DARK} 100%); padding:36px 22px; text-align:center; border-bottom:4px solid ${BRAND_YELLOW};">
//               <div style="font-size:38px; margin-bottom:10px;">📩</div>
//               <h1 style="margin:0; font-size:23px; font-weight:900; color:#ffffff; text-transform:uppercase; letter-spacing:-0.03em;">
//                 New Enquiry<br/>Received
//               </h1>
//               <p style="margin:10px 0 0; color:${BRAND_YELLOW}; font-size:12px; font-weight:800; text-transform:uppercase; letter-spacing:0.12em;">
//                 PesSave Services
//               </p>
//             </div>

//             <div style="padding:30px 25px; color:#3f3f46;">
//               <p style="margin:0 0 10px; font-size:15px; font-weight:800; color:${BRAND_BROWN};">
//                 Hello PesSave Team,
//               </p>

//               <p style="margin:0 0 25px; font-size:13px; color:#71717a; line-height:1.6;">
//                 A new customer enquiry has been submitted through the website. Customer details are below:
//               </p>

//               ${[
//                 ["Name", name, "#111827"],
//                 ["Email", `<a href="mailto:${email}" style="color:${BRAND_BROWN}; text-decoration:none;">${email}</a>`, BRAND_BROWN],
//                 ["Postcode", postcode, "#111827"],
//                 ["Phone Number", `<a href="tel:${phone}" style="color:#111827; text-decoration:none;">${phone}</a>`, "#111827"],
//                 ["Requested Service", service || "Not selected", BRAND_YELLOW],
//               ]
//                 .map(
//                   ([label, value, color]) => `
//                     <div style="background-color:${BRAND_CREAM}; padding:14px 18px; margin-bottom:10px; border-radius:8px; border:1px solid rgba(92,64,51,0.12);">
//                       <table style="width:100%; border-collapse:collapse;">
//                         <tr>
//                           <td style="color:#71717a; font-size:13px; font-weight:600; width:38%;">${label}</td>
//                           <td style="color:${color}; font-size:13px; font-weight:800; text-align:right; word-break:break-word;">${value}</td>
//                         </tr>
//                       </table>
//                     </div>
//                   `
//                 )
//                 .join("")}

//               <div style="margin-top:20px;">
//                 <h4 style="margin:0 0 10px; font-size:11px; font-weight:800; color:${BRAND_BROWN}; text-transform:uppercase; letter-spacing:0.08em;">
//                   Message Details
//                 </h4>

//                 <div style="background-color:${BRAND_CREAM}; border:1px solid rgba(92,64,51,0.12); border-radius:10px; padding:16px; font-size:13px; line-height:1.7; color:#3f3f46; font-style:italic;">
//                   "${message}"
//                 </div>
//               </div>

//               <p style="margin:30px 0 0; font-size:12px; color:#71717a; font-style:italic; text-align:center;">
//                 Please review and follow up with this lead as soon as possible.
//               </p>
//             </div>

//             <div style="padding:18px; background-color:${BRAND_BROWN}; text-align:center; border-top:1px solid rgba(242,193,46,0.25);">
//               <p style="margin:0; font-size:10px; color:#ffffff;">
//                 Automated secure notification system for PesSave Services.
//               </p>
//             </div>
//           </div>
//         </body>
//         </html>
//       `,
//     });

//     res.status(200).json({
//       success: true,
//       message: "Message sent successfully",
//     });
//   } catch (error) {
//     console.error("Email Error:", error);
//     res.status(500).json({
//       success: false,
//       message: "Email sending failed",
//     });
//   }
// });

// // QUICK CALLBACK FORM
// app.post("/api/callback", async (req, res) => {
//   try {
//     const { name, postcode, phone } = req.body;

//     if (!name || !postcode || !phone) {
//       return res.status(400).json({
//         success: false,
//         message: "Name, postcode, and phone number are required for call back",
//       });
//     }

//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     await transporter.sendMail({
//       from: `"${BRAND_NAME}" <${process.env.EMAIL_USER}>`,
//       to: process.env.RECEIVER_EMAIL,
//       subject: `[PesSave Callback] 📞 Quick Request from ${name}`,
//       html: `
//         <!DOCTYPE html>
//         <html lang="en">
//         <head>
//           <meta charset="utf-8" />
//           <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//           <title>Callback Request</title>
//         </head>

//         <body style="margin:0; padding:40px 10px; background-color:${BRAND_CREAM}; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
//           <div style="max-width:520px; margin:0 auto; background-color:#ffffff; border-radius:16px; overflow:hidden; box-shadow:0 12px 30px rgba(92,64,51,0.18); border:1px solid rgba(92,64,51,0.15);">
            
//             <div style="background:linear-gradient(135deg, ${BRAND_BROWN} 0%, ${BRAND_DARK} 100%); padding:36px 22px; text-align:center; border-bottom:4px solid ${BRAND_YELLOW};">
//               <div style="font-size:38px; margin-bottom:10px;">📞</div>
//               <h1 style="margin:0; font-size:23px; font-weight:900; color:#ffffff; text-transform:uppercase; letter-spacing:-0.03em;">
//                 Call Back<br/>Requested
//               </h1>
//               <p style="margin:10px 0 0; color:${BRAND_YELLOW}; font-size:12px; font-weight:800; text-transform:uppercase; letter-spacing:0.12em;">
//                 PesSave Services
//               </p>
//             </div>

//             <div style="padding:30px 25px; color:#3f3f46;">
//               <p style="margin:0 0 10px; font-size:15px; font-weight:800; color:${BRAND_BROWN};">
//                 Hello PesSave Team,
//               </p>

//               <p style="margin:0 0 25px; font-size:13px; color:#71717a; line-height:1.6;">
//                 A user requested an immediate callback through the website. Details below:
//               </p>

//               ${[
//                 ["Name", name],
//                 ["Postcode", postcode],
//                 ["Phone Number", `<a href="tel:${phone}" style="color:${BRAND_BROWN}; text-decoration:none;">${phone}</a>`],
//               ]
//                 .map(
//                   ([label, value]) => `
//                     <div style="background-color:${BRAND_CREAM}; padding:14px 18px; margin-bottom:10px; border-radius:8px; border:1px solid rgba(92,64,51,0.12);">
//                       <table style="width:100%; border-collapse:collapse;">
//                         <tr>
//                           <td style="color:#71717a; font-size:13px; font-weight:600; width:38%;">${label}</td>
//                           <td style="color:#111827; font-size:13px; font-weight:800; text-align:right; word-break:break-word;">${value}</td>
//                         </tr>
//                       </table>
//                     </div>
//                   `
//                 )
//                 .join("")}

//               <p style="margin:30px 0 0; font-size:12px; color:#71717a; font-style:italic; text-align:center;">
//                 Please respond to this callback request as soon as possible.
//               </p>
//             </div>

//             <div style="padding:18px; background-color:${BRAND_BROWN}; text-align:center; border-top:1px solid rgba(242,193,46,0.25);">
//               <p style="margin:0; font-size:10px; color:#ffffff;">
//                 Automated lead routing system for PesSave Services.
//               </p>
//             </div>
//           </div>
//         </body>
//         </html>
//       `,
//     });

//     res.status(200).json({
//       success: true,
//       message: "Call back request sent successfully!",
//     });
//   } catch (error) {
//     console.error("Callback Email Error:", error);
//     res.status(500).json({
//       success: false,
//       message: "Email sending failed",
//     });
//   }
// });

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`PesSave Services server running on port ${PORT}`);
// });

// export default app;














import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Root Route
app.get("/", (req, res) => {
  res.send("Prime Shield Services Backend Server is running");
});

// BRAND CONFIGURATION (Updated from Logo)
const BRAND_NAME = "Prime Shield Services";
const BRAND_ORANGE = "#E66E26";
const BRAND_GREY = "#464749";
const BRAND_CREAM = "#FAF9F6";
const BRAND_DARK = "#1E2022";

// MAIN CONTACT FORM
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, phone, postcode, service, message } = req.body;

    if (!name || !phone || !postcode || !message || !email) {
      return res.status(400).json({
        success: false,
        message: "Name, email, phone number, postcode and message are required",
      });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${BRAND_NAME}" <${process.env.EMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      replyTo: email,
      subject: `[Prime Shield Lead] 🚨 New Job: ${service || "Contact Form Submission"}`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>New Prime Shield Enquiry</title>
        </head>

        <body style="margin:0; padding:40px 10px; background-color:${BRAND_CREAM}; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
          <div style="max-width:520px; margin:0 auto; background-color:#ffffff; border-radius:16px; overflow:hidden; box-shadow:0 12px 30px rgba(70,71,73,0.15); border:1px solid rgba(70,71,73,0.12);">
            
            <div style="background:linear-gradient(135deg, ${BRAND_DARK} 0%, ${BRAND_GREY} 100%); padding:36px 22px; text-align:center; border-bottom:4px solid ${BRAND_ORANGE};">
              <div style="font-size:38px; margin-bottom:10px;">🛡️</div>
              <h1 style="margin:0; font-size:23px; font-weight:900; color:#ffffff; text-transform:uppercase; letter-spacing:-0.03em;">
                New Enquiry<br/>Received
              </h1>
              <p style="margin:10px 0 0; color:${BRAND_ORANGE}; font-size:12px; font-weight:800; text-transform:uppercase; letter-spacing:0.12em;">
                ${BRAND_NAME}
              </p>
            </div>

            <div style="padding:30px 25px; color:#3f3f46;">
              <p style="margin:0 0 10px; font-size:15px; font-weight:800; color:${BRAND_GREY};">
                Hello Prime Shield Team,
              </p>

              <p style="margin:0 0 25px; font-size:13px; color:#71717a; line-height:1.6;">
                A new customer enquiry has been submitted through the website. Customer details are below:
              </p>

              ${[
                ["Name", name, "#111827"],
                ["Email", `<a href="mailto:${email}" style="color:${BRAND_ORANGE}; text-decoration:none;">${email}</a>`, BRAND_ORANGE],
                ["Postcode", postcode, "#111827"],
                ["Phone Number", `<a href="tel:${phone}" style="color:#111827; text-decoration:none;">${phone}</a>`, "#111827"],
                ["Requested Service", service || "Not selected", BRAND_ORANGE],
              ]
                .map(
                  ([label, value, color]) => `
                    <div style="background-color:${BRAND_CREAM}; padding:14px 18px; margin-bottom:10px; border-radius:8px; border:1px solid rgba(70,71,73,0.1);">
                      <table style="width:100%; border-collapse:collapse;">
                        <tr>
                          <td style="color:#71717a; font-size:13px; font-weight:600; width:38%;">${label}</td>
                          <td style="color:${color}; font-size:13px; font-weight:800; text-align:right; word-break:break-word;">${value}</td>
                        </tr>
                      </table>
                    </div>
                  `
                )
                .join("")}

              <div style="margin-top:20px;">
                <h4 style="margin:0 0 10px; font-size:11px; font-weight:800; color:${BRAND_GREY}; text-transform:uppercase; letter-spacing:0.08em;">
                  Message Details
                </h4>

                <div style="background-color:${BRAND_CREAM}; border:1px solid rgba(70,71,73,0.1); border-radius:10px; padding:16px; font-size:13px; line-height:1.7; color:#3f3f46; font-style:italic;">
                  "${message}"
                </div>
              </div>

              <p style="margin:30px 0 0; font-size:12px; color:#71717a; font-style:italic; text-align:center;">
                Please review and follow up with this lead as soon as possible.
              </p>
            </div>

            <div style="padding:18px; background-color:${BRAND_GREY}; text-align:center; border-top:1px solid rgba(230,110,38,0.25);">
              <p style="margin:0; font-size:10px; color:#ffffff;">
                Automated secure notification system for ${BRAND_NAME}.
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    res.status(200).json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error("Email Error:", error);
    res.status(500).json({
      success: false,
      message: "Email sending failed",
    });
  }
});

// QUICK CALLBACK FORM
app.post("/api/callback", async (req, res) => {
  try {
    const { name, postcode, phone } = req.body;

    if (!name || !postcode || !phone) {
      return res.status(400).json({
        success: false,
        message: "Name, postcode, and phone number are required for call back",
      });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${BRAND_NAME}" <${process.env.EMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: `[Prime Shield Callback] 📞 Quick Request from ${name}`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Callback Request</title>
        </head>

        <body style="margin:0; padding:40px 10px; background-color:${BRAND_CREAM}; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
          <div style="max-width:520px; margin:0 auto; background-color:#ffffff; border-radius:16px; overflow:hidden; box-shadow:0 12px 30px rgba(70,71,73,0.15); border:1px solid rgba(70,71,73,0.12);">
            
            <div style="background:linear-gradient(135deg, ${BRAND_DARK} 0%, ${BRAND_GREY} 100%); padding:36px 22px; text-align:center; border-bottom:4px solid ${BRAND_ORANGE};">
              <div style="font-size:38px; margin-bottom:10px;">📞</div>
              <h1 style="margin:0; font-size:23px; font-weight:900; color:#ffffff; text-transform:uppercase; letter-spacing:-0.03em;">
                Call Back<br/>Requested
              </h1>
              <p style="margin:10px 0 0; color:${BRAND_ORANGE}; font-size:12px; font-weight:800; text-transform:uppercase; letter-spacing:0.12em;">
                ${BRAND_NAME}
              </p>
            </div>

            <div style="padding:30px 25px; color:#3f3f46;">
              <p style="margin:0 0 10px; font-size:15px; font-weight:800; color:${BRAND_GREY};">
                Hello Prime Shield Team,
              </p>

              <p style="margin:0 0 25px; font-size:13px; color:#71717a; line-height:1.6;">
                A user requested an immediate callback through the website. Details below:
              </p>

              ${[
                ["Name", name],
                ["Postcode", postcode],
                ["Phone Number", `<a href="tel:${phone}" style="color:${BRAND_ORANGE}; text-decoration:none;">${phone}</a>`],
              ]
                .map(
                  ([label, value]) => `
                    <div style="background-color:${BRAND_CREAM}; padding:14px 18px; margin-bottom:10px; border-radius:8px; border:1px solid rgba(70,71,73,0.1);">
                      <table style="width:100%; border-collapse:collapse;">
                        <tr>
                          <td style="color:#71717a; font-size:13px; font-weight:600; width:38%;">${label}</td>
                          <td style="color:#111827; font-size:13px; font-weight:800; text-align:right; word-break:break-word;">${value}</td>
                        </tr>
                      </table>
                    </div>
                  `
                )
                .join("")}

              <p style="margin:30px 0 0; font-size:12px; color:#71717a; font-style:italic; text-align:center;">
                Please respond to this callback request as soon as possible.
              </p>
            </div>

            <div style="padding:18px; background-color:${BRAND_GREY}; text-align:center; border-top:1px solid rgba(230,110,38,0.25);">
              <p style="margin:0; font-size:10px; color:#ffffff;">
                Automated lead routing system for ${BRAND_NAME}.
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    res.status(200).json({
      success: true,
      message: "Call back request sent successfully!",
    });
  } catch (error) {
    console.error("Callback Email Error:", error);
    res.status(500).json({
      success: false,
      message: "Email sending failed",
    });
  }
});

// Server Initialization
const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`${BRAND_NAME} server running on port ${PORT}`);
// });

export default app;