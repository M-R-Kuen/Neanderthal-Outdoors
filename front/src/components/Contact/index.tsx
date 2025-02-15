"use client";
import React from "react";

const ContactComponent = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Formulario enviado!");
  };

  return (
    <section className="py-16 glass-background container m-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-cyBold mb-4 text-white">Contact Us</h2>
            <p className="text-white mb-4 typography-thin w-3/4">
              Have questions or need assistance? Reach out to us and we will get
              back to you as soon as possible.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 1a7 7 0 100 14 7 7 0 000-14zm0 5a1 1 0 011 1v5a1 1 0 01-2 0v-5a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-white">
                  123 Outdoors St, Adventure City, ABC 12345
                </span>
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 4a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1h-5.586a1 1 0 00-.707.293L7.707 18H4a1 1 0 01-1-1V4zm2 2v10h10V6H5z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-white">info@outdoorsstore.com</span>
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 1a7 7 0 100 14 7 7 0 000-14zm3.707 11.707a1 1 0 01-1.414 1.414l-1.586-1.586a1 1 0 010-1.414l1.586-1.586a1 1 0 011.414 1.414l-1.293 1.293 1.293 1.293z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-white">+1 234 567 890</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-cyBold mb-4 text-white">
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm typography-custom text-white"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full text-white border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm typography-custom text-white"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full text-white border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm typography-custom text-white"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full text-white border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  required
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-block bg-darkMustard text-white py-2 px-6 rounded-md transition duration-300 ease-in-out"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactComponent;
