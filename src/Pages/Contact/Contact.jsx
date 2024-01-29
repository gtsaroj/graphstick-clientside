/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useRef, useState } from 'react';
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
            toast.error("Please fill the required fields!"); // Display an error toast
            setLoading(false);
            return;
        }

        emailjs.sendForm('service_fuv7usl', 'template_37sy0nb', form.current, 'BmBRoInz2nzpO4_Mo')
            .then((result) => {
                toast.success("Message was sent successfully!"); // Display a success toast
            }).catch((error) => {
                console.log(`Error found: ${error}`);
                toast.error('An error occurred while sending the message.'); // Display an error toast
            }).finally(() => {
                setLoading(false);
            });
    };

    return (
        <>  
            <section id="contact-details" class="section-p1">
        <div class="details">
            <span>GET IN TOUCH</span>
            <h2>Visit one of our Foodie Nepal</h2>
            <h3>Head Office</h3>
            <div>
                <li>
                    <i class="far fa-map"></i>
                    <span>chahabil, mitrapark street</span>
                </li>
                <li>
                    <i class="fas fa-envelope"></i>
                    <span>+977-9848255044</span>
                </li>
                <li>
                    <i class="fas fa-phone-alt"></i>
                    <span>sarojgt326@gmail.com</span>
                </li>
                <li>
                    <i class="far fa-clock"></i>
                    <span>24hrs available</span>
                </li>
            </div>
        </div>
        <div class="map">
        <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14128.096058794943!2d85.34925340000001!3d27.716544800000015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb197d9d23f7ed%3A0x2724281b4393865d!2sChabahil%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1679573420987!5m2!1sen!2snp"
  width={600}
  height={450}
  style={{ border: "0" }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>
  </div>

    </section>
           
            <section className="form-details">
            <span>Leave A MESSAGE</span>
                        <h2>We love to hear from you</h2>
                <div className="form">

                    <form ref={form} onSubmit={sendEmail}>
          
                        <input type="text" placeholder="Enter your Name" name='from_name' />
                        <input type="email" placeholder="E-mail" name='from_email' />
                        <input type="text" placeholder="Subject" name='from_subject' />
                        <textarea name="message" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
                        <button type="submit" disabled={loading}>{loading ? "Loading..." : "Submit"}</button>
                    </form>
                    <ToastContainer position="top-right" autoClose={5000} /> {/* Position and autoClose settings */}
                </div>
            </section>
        </>
    );
};

export default Contact;
