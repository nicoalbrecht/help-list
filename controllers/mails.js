const nodemailer = require('nodemailer');
const templates = require('../utils/mailTemplates');
const Offer = require('../models/Offer');

exports.sendRequestChangeTokenMail = async (req, res) => {
    const transporter = nodemailer.createTransport({
        sendmail: true,
        newline: 'unix',
        path: '/usr/sbin/sendmail'
    });
    const offer = await Offer.findById(req.params.id)
    // const msg = templates.OfferChangeTokenRequest(req.)
    transporter.sendMail({
        from: '',
        to: '',
        subject: '',
        // html: msg
    });

    transporter.close();
};
