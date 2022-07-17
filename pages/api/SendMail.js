import nodemailer from 'nodemailer'
export default function handler(req, res) {
    const {email,name,message} = req.body.data
    const transport = nodemailer.createTransport({
        service: "Gmail",
        secure:false,
        auth:{
            user: 'eprogrammer786@gmail.com',
            pass: 'kavdmvvlvmzawssa'
        }
    })
    var mailOptions = {
        from: 'eprogrammer786@gmail.com',
        to: email, 
        subject:`Flx | ${name}`,
        text: message
    }

    transport.sendMail(mailOptions,err=>{
        if(err){
            console.log(err)
        }else{
            console.log('success')
        }
    })
    res.status(200).json({ status: 'ok' })
  }
  