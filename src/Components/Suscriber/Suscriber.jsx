import React, { useRef , useState} from 'react';
import "./Suscriber.css"
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Suscriber = () => {

    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');
        
        const formData = new FormData(form.current);

        const requiredFields = [ 'message'];
        const isAnyFieldEmpty = requiredFields.some(fieldName => formData.get(fieldName) === '');

        if (isAnyFieldEmpty) {
            toast.error("Please fill the required fields!"); // Display an error toast
            setLoading(false);
            return;
        }
  
      emailjs.sendForm('service_blgqfon', 'template_b3u1tnq', form.current, 'sD-UiYCl_eZJRRZH8')
        .then((result) => {
            toast.success("Message was sent successfully!"); // Display a success toast
        }, (error) => {
            toast.error('An error occurred while sending the message.'); // Disp
        }).finally(() => {
            setLoading(false);
        });
    };
    return (
        <section id="newspaper" class="section-p1">
            <div className="newstext">
                <h2>Sign Up For Newsletters</h2>
                <p>Get E-mail updates about our latest shop and <span>special offers</span></p>
            </div>
            <form className="form flex gap-0 flex-wrap" ref={form} onSubmit={sendEmail}>
                <input type="email" placeholder="Your email address"  name="message"   className=' outline-none py-[10px] px-[7px] w-full rounded-none sm:w-[220px]'/>
                <button className='outline-none rounded-none bg-blue-500 py-[10px] sm:w-[100px] w-full border-r-[0px]' type="submit" disabled={loading}> {loading ? "Loading..." : "Submit"}</button>
            </form>
            <ToastContainer position="top-right" autoClose={5000} /> {/* Position and autoClose settings */}
              
        </section>
    )
}

export default Suscriber
