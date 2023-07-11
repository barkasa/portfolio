const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(
  "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"
);

function sendEmail(recipient, sender, subject, message) {
  const msg = {
    to: recipient,
    from: sender,
    subject: subject,
    text: message,
  };

  return sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error);
    });
}

module.exports = sendEmail;
