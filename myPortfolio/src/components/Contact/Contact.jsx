import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import whatsapp_icon from '../../assets/whatsapp.svg'
import call_icon from '../../assets/call_icon.svg'
const Contact = () => {
  return (
    <div className="contact">
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="contact-section">
            <div className="content-left">
                <h1>Let's talk</h1>
                <p>diupiuedijndp9uuhhpndnpiufviubdpsjiuuvvvofnvfnvdifvdfvdfvndfnvdfnvdfn</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" /><p>maleeshadimal20@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={call_icon} alt="" /><p>+94 767924138</p>
                    </div>
                    <div className="contact-detail">
                        <img src={whatsapp_icon} alt="" /><p>+94 767924138</p>
                    </div>
                </div>
            </div>
            <form action="" className="content-right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your name' name='name'/>
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter Your email' name="email" />
                <label htmlFor="">Write Message</label>
                <textarea name="message" rows="8" placeholder='Type Your Message'></textarea>
                <button type='submit' className="contact-submit" >Contact</button>
            </form>
        </div>
    </div>
  )
}

export default Contact