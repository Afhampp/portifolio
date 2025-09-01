import React from "react";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const { h2: H2motion, p: Pmotion, Dmotion } = motion;

export default function Contact() {
  const contacts = [
    {
      icon: <Mail className="w-6 h-6 text-amber-500" />,
      title: "Email",
      detail: "afhamdunnurpp@gmail.com",
    },
    {
      icon: <Phone className="w-6 h-6 text-amber-500" />,
      title: "Phone",
      detail: "+91 9074827194",
    },
    {
      icon: <MapPin className="w-6 h-6 text-amber-500" />,
      title: "Location",
      detail: "Malapurrum, India",
    },
    {
      icon: <Linkedin className="w-6 h-6 text-amber-600" />,
      title: "LinkedIn",
      detail: "afham dunur",
    },
  ];

  return (
    <section
      id="contact"
      className="pt-20 pb-28 px-6 text-center bg-slate-950 "
    >
      {/* Title + Subtitle */}
      <H2motion
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
        className="text-3xl font-bold mb-2 bg-gradient-to-r from-amber-200 via-amber-300 to-amber-600 bg-clip-text text-transparent relative
    after:content-[''] after:block after:w-24 after:h-1 after:mx-auto after:mt-3
    after:bg-gradient-to-r after:from-amber-200 after:via-amber-400 after:to-amber-600 
    after:rounded-full "
      >
        Get in Touch
      </H2motion>
      <Pmotion
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
        className="text-gray-400 max-w-2xl mx-auto mb-10"
      >
        Whether you have a project in mind, want to discuss opportunities, or
        just want to say hello, I'd love to hear from you.
      </Pmotion>

      {/* Contact Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
        {contacts.map((item, index) => (
          <Dmotion
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            viewport={{ once: false, amount: 0.3 }}
            key={index}
            className="bg-slate-900 border border-gray-700 rounded-2xl shadow-md p-6 flex flex-col items-center transform transition-transform duration-300 hover:shadow-[0_4px_3px_rgba(251,191,36,0.7)] hover:scale-105"
          >
            <div className="mb-3">{item.icon}</div>
            <h3 className="font-semibold text-lg text-gray-100">
              {item.title}
            </h3>
            <p className="text-gray-400 text-sm mt-1">{item.detail}</p>
          </Dmotion>
        ))}
      </div>
    </section>
  );
}
