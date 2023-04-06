const express = require('express')
const router = express.Router()
router.post("/applyjob", async (req, res) => {
    //if not fields return error fields are necessary
    console.log("in the apply");
    try {
      let replacements = req.body;
      //  let receiverEmail= jobPost.find
      let receiverEmail = req.body.receiverEmail;
      try {
        transporter = nodemailer.createTransport({
          host: "smtp.gmail.com",
          port: 465,
          secure: true,
          auth: {
            user: "umairmuatafa254@gmail.com",
            pass: "umair1234567890.",
          },
        });
        readHTMLFile("./htmlTemplate/email.html", function (err, html) {
          var template = handlebars.compile(html);
          const htmlToSend = template(replacements);
  
          var mailOptions = {
            from: "shopJOB <foobar@example.com>",
            to: `${receiverEmail}`,
            subject: "Email for Job Application",
            html: htmlToSend,
          };
  
          transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
              console.log(error);
            } else {
              console.log("Email sent: " + info.response);
              return res.status(200).json({ message: "Email Sent!" });
            }
          });
        });
      } catch (error) {
        console.log(error);
        return res.status(400).json({ error: error });
      }
    } catch (err) {
      console.log(err);
    }
  });
  
  module.exports = router;