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
            <section id="contact-details" className="section-p1">
                {/* ... Your existing HTML ... */}
            </section>
            <section id="form-details">
                <div id="form">
                    <form ref={form} onSubmit={sendEmail}>
                        <span>Leave A MESSAGE</span>
                        <h2>We love to hear from you</h2>
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
