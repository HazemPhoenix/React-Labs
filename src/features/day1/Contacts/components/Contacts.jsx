import React, { useState } from "react";
import SocialLink from "./SocialLink";

function Contacts() {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const socialLinks = [
    {
      url: "https://github.com/hazemphoenix",
      icon: "fab fa-github",
      color: "hover:text-gray-100",
    },
    {
      url: "https://linkedin.com/in/hazemphoenix",
      icon: "fab fa-linkedin",
      color: "hover:text-blue-400",
    },
    {
      url: "https://twitter.com/hazemphoenix",
      icon: "fab fa-twitter",
      color: "hover:text-blue-400",
    },
    {
      url: "mailto:hazemabdulmoneim@gmail.com",
      icon: "fas fa-envelope",
      color: "hover:text-purple-400",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitForm = (e) => {
    e.preventDefault();
    alert("Message sent!");
  };

  return (
    <footer
      id="contact"
      className="relative min-h-[60vh] flex items-center justify-center overflow-hidden py-20"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/3 w-72 h-72 bg-blue-500/8 rounded-full blur-3xl animate-pulse delay-300"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-purple-500/8 rounded-full blur-3xl animate-pulse delay-800"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
          <div className="space-y-8">
            <div>
              <div className="mb-6">
                <span className="px-5 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-500/30 text-blue-300 text-md font-medium">
                  Get In Touch
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent py-1 mb-4">
                Let's Work Together
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Have a project in mind or just want to say hello? I'd love to
                hear from you. Send me a message and I'll get back to you as
                soon as possible.
              </p>
            </div>
            <form onSubmit={submitForm} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-300 text-sm font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={contactForm.name}
                    onChange={handleInputChange}
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-purple-300 placeholder-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-300 text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={contactForm.email}
                    onChange={handleInputChange}
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-purple-300 placeholder-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-300 text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  value={contactForm.message}
                  onChange={handleInputChange}
                  name="message"
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-purple-300 placeholder-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none transition-all duration-300 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Tell me about your project or just say hello..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-pink-600 hover:to-purple-600 text-white rounded-lg cursor-pointer font-semibold text-lg hover:shadow-xl hover:shadow-purple-500/25 hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <span>
                  <i className="fas fa-paper-plane mr-2"></i>
                  Send Message
                </span>
              </button>
            </form>
          </div>
          <div className="flex flex-col items-center justify-center text-center space-y-6">
            <div>
              <h4 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-2">
                Connect With Me
              </h4>
              <p className="text-gray-400 text-sm">
                Let's stay connected across platforms
              </p>
            </div>
            <div className="flex space-x-6">
              {socialLinks.map((social, index) => (
                <SocialLink social={social} index={index} />
              ))}
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-700/50">
          <div className="text-center">
            <div className="text-gray-400 text-sm">
              © 2025 Hazem Abdulmoneim. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Contacts;
