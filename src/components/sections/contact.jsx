import React, { useState } from "react";
import emailjs from "emailjs-com";

import ScrollBar from "../scrollbar";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVER_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then((result) => {
        alert("Message sent successfully");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch(() => alert("Message failed to send"));
  };
  return (
    <section
      id="contact"
      className="max-h-screen flex items-center justify-center py-60 "
    >
      <ScrollBar>
        <div className="px-4 w-90 md:w-150 mx-auto  pb-10 ">
          <h2 className="text-3xl font-bold  text-center  bg-gradient-to-l from-[#0463fa] to-white bg-clip-text text-transparent leading-tight ">
            Get in Touch
          </h2>{" "}
          <form className="space-y-4 mt-8" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                id="name"
                value={formData.name}
                required
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-[#0463fa]/30 focus:bg-[#0463fa]/5"
                placeholder="Name..."
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div className="relative">
              <input
                type="email"
                id="email"
                value={formData.email}
                required
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-[#0463fa]/30 focus:bg-[#0463fa]/5"
                placeholder="example@gmail.com"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div className="relative">
              <textarea
                type="text"
                id="message"
                value={formData.message}
                required
                rows={5}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-[#0463fa]/30 focus:bg-[#0463fa]/5"
                placeholder="Message..."
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#0463fa] text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Send Message
            </button>
          </form>
        </div>
      </ScrollBar>
    </section>
  );
};

export default Contact;
