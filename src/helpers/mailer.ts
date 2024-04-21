import nodemailer from 'nodemailer'

export interface EmailData {
    email: String
    emailType: String
    userId: String
}

export const sendEmail = async ({ email, emailType, userId }: EmailData) => {
    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.forwardemail.net',
            port: 465,
            secure: true,
            auth: {
                user: '',
                pass: ''
            }
        })

        const mailOptions = {
            from: 'abc@gmail.com', // sender address
            to: email, // list of receivers
            subject: "Hello ✔", // Subject line
            html: "<b>Hello world?</b>", // html body
        }
        const mailResponse = await transporter.sendMail((mailOptions as any))
        return mailResponse
    } catch (error) {
        console.log(error)
    }
}