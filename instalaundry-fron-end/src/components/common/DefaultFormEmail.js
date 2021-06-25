import React from 'react';
import emailjs from 'emailjs-com';


export default function DefaultFormEmail() {

    function sendEmail(e) {
        e.preventDefault();
        let body = {
            'to_name': 'ali',
            'message': 'engrzahid612@gmail.com',
            'user_email': 'this is message'
        }
        emailjs.sendForm('service_siowrj7', 'template_0bvfsqc', body, 'user_ef7lljg2cLfLEVyVsoysv')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <form className="contact-form" onSubmit={sendEmail}>
            <input type="hidden" name="to_name" />
            <label>Name</label>
            <input type="text" name="message" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
        </form>
    );
}