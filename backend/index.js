const express = require('express');
const app = express();
const path = require('path'); 
app.listen(5000, () => console.log('listening at 5000'));
app.use(express.static('public'));



// require('dotenv').config();
// const cors = require('cors');
// const nodemailer = require('nodemailer');
// console.log('bro im here')

// app.use(cors());
// app.use(express.json());

app.post('/api/send-evaluation', (req, res) => {
  // const form = req.body;
  console.log("i got a request")
  console.log(req.body);
  // Create transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  // Compose email
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_TO,
    subject: 'New Home Evaluation Request',
    text: JSON.stringify(form, null, 2)
  };

  // try {
  //   await transporter.sendMail(mailOptions);
  //   res.status(200).json({ message: 'Email sent!' });
  // } catch (err) {
  //   res.status(500).json({ error: 'Error sending email', details: err.message });
  // }
});