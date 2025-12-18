import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen font-thin  text-white px-4 py-20">
      
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-10 text-blue-400">
        Contact Us
      </h1>

      

      <div className="mt-16 max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        <div className="p-8 rounded-3xl border border-white/10 shadow-lg">
          <h3 className="text-xl text-blue-300 mb-3">📧 Email</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            webapp@o6u.edu.eg
          </p>

          <h3 className="text-xl text-blue-300 mt-6 mb-3">📞 Phone</h3>
          <p className="text-gray-300  text-sm leading-relaxed">
اهم حاجه الكود شغال 
          </p>

          <h3 className="text-xl text-blue-300 mt-6 mb-3">🏢 Address</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
الله ينور علينا 
          </p>
        </div>

        
        <div className="p-8 rounded-3xl border border-white/10 shadow-lg">
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-xl bg-white/10 text-white placeholder-gray-300 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-xl bg-white/10 text-white placeholder-gray-300 focus:outline-none"
            />
            <textarea
              placeholder="Your Message"
              className="p-3 rounded-xl bg-white/10 text-white placeholder-gray-300 focus:outline-none resize-none h-32"
            />
            <button
              type="submit"
              className="mt-4 py-3 rounded-full bg-blue-500 hover:bg-blue-600 transition-all duration-300 font-bold"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;
