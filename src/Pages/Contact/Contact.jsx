import React, { useRef, useState } from 'react';
import emailjs from "@emailjs/browser"
import "./Contact.css"

const Contact = () => {
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        const formData = new FormData(form.current);

        const requiredFields = ['from_name', 'from_email', 'from_subject', 'message'];
        const isAnyFieldEmpty = requiredFields.some(fieldName => formData.get(fieldName) === '');

        if (isAnyFieldEmpty) {
            setMessage("Please fill the required field!");
            setLoading(false);
            return;
        }

        emailjs.sendForm('service_fuv7usl', 'template_37sy0nb', form.current, 'BmBRoInz2nzpO4_Mo')
            .then((result) => {
                setMessage("Message was sent successfully!");
            }).catch((error) => {
                console.log(`Error found: ${error}`);
                setMessage('An error occurred while sending the message.');
            }).finally(() => {
                setLoading(false);
            });
    }; return (
        <>
            <section id="contact-details" className="section-p1">
                <div className="details">
                    <span>GET IN TOUCH</span>
                    <h2>Visit one of our agency locations or contact us today</h2>
                    <h3>Head Office</h3>
                    <ul> {/* Changed <div> to <ul> for proper list structure */}
                        <li>
                            <i className="far fa-map"></i>
                            <span>56 Glassford Street Glasgow G1 1UL New York</span>
                        </li>
                        <li>
                            <i className="fas fa-envelope"></i>
                            <span>contact@example.com</span>
                        </li>
                        <li>
                            <i className="fas fa-phone-alt"></i>
                            <span>contact@example.com</span>
                        </li>
                        <li>
                            <i className="far fa-clock"></i>
                            <span>Monday to Saturday: 9:00am to 4:00pm</span> {/* Corrected time format */}
                        </li>
                    </ul>
                </div>
                <div className="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14128.096058794943!2d85.34925340000001!3d27.716544800000015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb197d9d23f7ed%3A0x2724281b4393865d!2sChabahil%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1679573420987!5m2!1sen!2snp"
                        width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </section>
            <section id="form-details">
                <div id="form" >
                    <form ref={form} onSubmit={sendEmail}>
                        <span>Leave A MESSAGE</span>
                        <h2>We love to hear from you</h2>
                        <input type="text" placeholder="Enter your Name" name='from_name' />
                        <input type="email" placeholder="E-mail" name='from_email' />
                        <input type="text" placeholder="Subject" name='from_subject' /> {/* Corrected capitalization */}
                        <textarea name="message" id="" cols="30" rows="10" placeholder="Your Message" ></textarea>
                        <button type="submit" disabled={loading}>{loading ? "loading..." : "Submit"}</button>
                    </form>
                    <div className="aftersubmit">
                        <p>{message}</p>
                    </div>
                </div>
            </section >
        </>
    )
}


export default Contact;
