import { render } from "@react-email/render";
import nodemailer from "nodemailer";
import { Email } from "./email";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "morosow",
    pass: "",
  },
});

const emailHtml = render(<Email url="morosow.iwan@gmail.com" />);

const options = {
  from: "user@gmail.com",
  to: "morosow.iwan@gmail.com",
  subject: "hello world",
  html: emailHtml,
};

transporter.sendMail(options);
