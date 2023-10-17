import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "ibrahimfaizal1985@gmail.com",
    pass: "yaks cnqk olep fbma",
  },
});

 const sendResetPasswordEmail = async (to, resetLink) => {
  const mailOptions = {
    from: "ibrahimfaizal1985@gmail.com",
    to ,
    subject: "Password Reset",
    html: `Click the following link to reset your password: <a href="${resetLink}">${resetLink}</a>`,
    
  };

   
  await transporter.sendMail(mailOptions);
};
export default sendResetPasswordEmail;
 

