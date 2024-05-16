import nodemailer from 'nodemailer';
import postmarkTransport from 'nodemailer-postmark-transport';

export default async (req, res) => {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport(postmarkTransport({
      auth: {
        apiKey: process.env.POSTMARK_API_KEY
      }
    }));

    const mailData = {
      from: email,
      to: 'kalvin.khuu@mail.mcgill.ca',
      subject: `Message from ${name}`,
      text: message,
      replyTo: email
    };

    try {
      await transporter.sendMail(mailData);
      res.status(200).json({ status: 'OK' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error sending email' });
    }
  } else {
    res.status(405).json({ error: 'We only accept POST' });
  }
};