import nodemailer from "nodemailer";

export const sendEmail = async (to: string, html: string) => {
  //   const testAccount = await nodemailer.createTestAccount();
  //   console.log("testAccount: ", testAccount);

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: "wlwskyq3cwclyzkb@ethereal.email",
      pass: "YN7GzTDwQ6QP97GpFc",
    },
  });
  const info = await transporter.sendMail({
    from: '"Lireddit" <lireddit@noreply.com>',
    to,
    subject: "Change Password",
    html,
  });

  console.log("Message sent: " + info.messageId);

  console.log("Preview URL: " + nodemailer.getTestMessageUrl(info));
};
