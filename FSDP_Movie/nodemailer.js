//nodemailer
const nodemailer = require('nodemailer');
const config = {
    host: 'smtp.gmail.com',
    port: 465,
    auth: {
        user: 'jiapengss22@gmail.com',
        pass: 'jbnknptybeypahiy'
    }
};
const transporter = nodemailer.createTransport(config);

//send email
module.exports = function (mail){
    transporter.sendMail(mail, function(error, info){
        if(error) {
            return console.log(error);
        }
        console.log('mail sent:', info.response);
    });
};