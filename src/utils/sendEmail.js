import nodemailer from 'nodemailer';

export async function sendEmail(){

const transporter = nodemailer.createTransport({
   service: 'gmail',
    auth: {
      user: "shadisbaih.dev@gmail.com",
      pass: "hkwd dvcl loxs afmr",
    },
  });
  const info = await transporter.sendMail({
    from: '" Shadi Sbaih-Node JS 👻" <shadisbaih.dev@gmail.com>', // sender address
    to: "hibadado11@gmail.com", // list of receivers
    subject: "Hello ✔ TEST ", // Subject line
    text: "Hello world? does it worked?", // plain text body
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4; text-align: center;">
        <div style="max-width: 600px; background: white; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); margin: auto;">
          <h1 style="color: #3498db;">🌟 Hello, World! 🌟</h1>
          <p style="font-size: 16px; color: #333;">This is a test email sent using <strong>Node.js & Nodemailer</strong>.</p>
          <p style="color: #666;">Hope it works perfectly! 🚀</p>
          <hr style="border: 1px solid #ddd;">
          <p style="font-size: 14px; color: #777;">Best Regards,</p>
          <p style="font-weight: bold; color: #2c3e50;">Shadi Sbaih</p>
          <a href="https://images.unsplash.com/photo-1509248961158-e54f6934749c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Nhcnl8ZW58MHx8MHx8fDA%3D" style="text-decoration: none; color: white; background-color: #3498db; padding: 10px 20px; border-radius: 5px; display: inline-block;">Visit My Website</a>
        </div>
      </div>
    `, 
  });
}