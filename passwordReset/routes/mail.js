import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'giri@gmail.com',
    pass: 'jpjv qdkz gsdk epbi'
  }
});

export const mailOptions = {
  from: 'giri@gmail.com',
  to: '',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};
