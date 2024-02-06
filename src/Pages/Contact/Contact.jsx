/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const formData = new FormData(form.current);

    const requiredFields = [
      "from_name",
      "from_email",
      "from_subject",
      "message",
    ];
    const isAnyFieldEmpty = requiredFields.some(
      (fieldName) => formData.get(fieldName) === ""
    );

    if (isAnyFieldEmpty) {
      toast.error("Please fill the required fields!"); // Display an error toast
      setLoading(false);
      return;
    }

    emailjs
      .sendForm(
        "service_fuv7usl",
        "template_37sy0nb",
        form.current,
        "BmBRoInz2nzpO4_Mo"
      )
      .then((result) => {
        toast.success("Message was sent successfully!"); // Display a success toast
      })
      .catch((error) => {
        console.log(`Error found: ${error}`);
        toast.error("An error occurred while sending the message."); // Display an error toast
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="">
      <section
        id="contact-details"
        class="flex sm:flex-row sm:justify-between gap-[7px] sm:items-center py-10 px-[20px]  flex-col  w-full  items-stretch "
      >
        <div class="flex flex-col items-start justify-between px-5 gap-6">
          <div>
            {" "}
            <span className="text-[30px] font-ubuntu font-bold">
              GET IN TOUCH
            </span>
            <h2 className="text-[16px] font-ubuntu font-bold">
              Visit one of our Foodie Nepal
            </h2>
            <h3 className="text-[15px] font-ubuntu font-bold">Head Office</h3>
          </div>
          <div className="flex flex-col items-start">
            <li className="flex gap-2 items-center">
              <i class="far fa-map text-[18px] "></i>
              <span className="text-[14px] font-ubuntu font-semibold">
                chahabil, mitrapark street
              </span>
            </li>
            <li className="flex gap-2 items-center">
              <i class="fas fa-envelope text-[18px] "></i>
              <span className="text-[14px] font-ubuntu font-semibold">
                +977-9848255044
              </span>
            </li>
            <li className="flex gap-2 items-center">
              <i class="fas fa-phone-alt text-[18px] "></i>
              <span className="text-[14px] font-ubuntu font-semibold">
                sarojgt326@gmail.com
              </span>
            </li>
            <li className="flex gap-2 items-center">
              <i class="far fa-clock text-[18px] "></i>
              <span className="text-[14px] font-ubuntu font-semibold">
                24hrs available
              </span>
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
            className="lg:w-[400px] lg:h-[300px] sm:w-[300px] sm:h-[250px] w-[100%] h-[300px]"
          ></iframe>
        </div>
      </section>

      <section className="flex flex-col gap-5  items-stretch px-[10px]  sm:items-center justify-center py-10 ">
        <div>
          <span className="text-black text-[20px] font-ubuntu font-bold">
            Leave A MESSAGE
          </span>
          <h2 className="text-gray-600 text-[15px] font-ubuntu font-semibold">
            We love to hear from you
          </h2>
        </div>
        <div className="flex flex-col ">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col gap-7  "
          >
            <input
              type="text"
              placeholder="Enter your Name"
              name="from_name"
              className="py-[6px] px-[10px] border-[1px] outline-none border-black rounded-md"
            />
            <input
              type="email"
              placeholder="E-mail"
              name="from_email"
              className="py-[6px] px-[10px] border-[1px] outline-none border-black rounded-md"
            />
            <input
              type="text"
              placeholder="Subject"
              name="from_subject"
              className="py-[6px] px-[10px] border-[1px] outline-none border-black rounded-md"
            />
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              placeholder="Your Message"
              className="py-[6px] px-[10px] border-[1px] border-black rounded-md outline-none"
            ></textarea>
            <button
              className="bg-blue-500 py-[7px] rounded-sm hover:bg-blue-600"
              type="submit"
              disabled={loading}
            >
              {loading ? "Loading..." : "Submit"}
            </button>
          </form>
          <ToastContainer position="top-right" autoClose={5000} />{" "}
          {/* Position and autoClose settings */}
        </div>
      </section>
    </div>
  );
};

export default Contact;
