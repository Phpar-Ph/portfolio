/* eslint-disable no-undef */
import React, { useRef } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          Swal.fire({
            title: "Success!",
            text: "Message sent successfully!",
            icon: "success",
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
          console.log(import.meta.env.VITE_APP_EMAILJS_SERVICE_ID); // For Vite
          console.log(import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID);
          console.log(import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY);
        }
      );
  };

  return (
    <div className="min-h-screen pt-16 text-textPrimary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Get in Touch</h2>
          <p className="subHeading">
            Let's discuss your project and see how we can work together to bring
            your ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="cardStyle p-6">
              <h3 className="text-2xl font-semibold mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="bg-blue-500/10 p-3 rounded-lg">
                    <Mail className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p>philip.nioda19@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="bg-purple-500/10 p-3 rounded-lg">
                    <Phone className="text-purple-400" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <p>09947918269</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="bg-pink-500/10 p-3 rounded-lg">
                    <MapPin className="text-pink-400" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p>Salinas Drive Apas, Cebu City</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className=" p-8 cardStyle">
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input type="text" name="name" className="formFocus" required />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full px-4 py-3 formFocus"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  className="formFocus"
                  required
                />
              </div>

              <button
                type="submit"
                value="Send"
                className="w-full  py-3 rounded-lg font-medium  bg-bgCTA hover:bg-bgColorSecondary transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <Send
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
