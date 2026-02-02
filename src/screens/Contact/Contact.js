import React from 'react';
import contactImg from '../../imgs/contact.jpg';

const Contact = () => {
  return (
    <div className="bg-white font-['Poppins']">
      {/* Header Section */}
      <section 
        className="relative h-[40vh] flex items-center justify-center bg-slate-900"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${contactImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="text-center text-white">
          <h1 className="text-5xl md:text-7xl font-['Playfair_Display'] mb-4">Contact Us</h1>
          <p className="text-premium tracking-[0.3em] uppercase text-xs">Reach out to SNG Luxury</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        <div className="grid md:grid-cols-3 gap-16">
          
          {/* Contact Info Side */}
          <div className="md:col-span-1 space-y-12">
            <div>
              <h2 className="text-2xl font-['Playfair_Display'] mb-6 text-slate-800">Get in Touch</h2>
              <p className="text-slate-500 text-sm leading-relaxed">
                Have questions about our suites or services? Our concierge team is available 24/7 to assist you with your requirements.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="text-premium text-xl mt-1"><i className="fa fa-map-marker"></i></div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm uppercase tracking-wider">Address</h4>
                  <p className="text-slate-500 text-sm">4671 Sugar Camp Road, <br />Owaton, Minnesota, 55060</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-premium text-xl mt-1"><i className="fa fa-phone"></i></div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm uppercase tracking-wider">Phone</h4>
                  <p className="text-slate-500 text-sm">507-475-6094</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-premium text-xl mt-1"><i className="fa fa-envelope"></i></div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm uppercase tracking-wider">Email</h4>
                  <p className="text-slate-500 text-sm">concierge@snghotels.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Side */}
          <div className="md:col-span-2 bg-slate-50 p-8 md:p-12 rounded-sm shadow-sm">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label className="text-[10px] uppercase tracking-widest text-slate-400 mb-2">Full Name</label>
                <input type="text" className="border-b border-slate-300 bg-transparent py-2 focus:border-premium outline-none transition-colors" required />
              </div>
              <div className="flex flex-col">
                <label className="text-[10px] uppercase tracking-widest text-slate-400 mb-2">Email Address</label>
                <input type="email" className="border-b border-slate-300 bg-transparent py-2 focus:border-premium outline-none transition-colors" required />
              </div>
              <div className="md:col-span-2 flex flex-col">
                <label className="text-[10px] uppercase tracking-widest text-slate-400 mb-2">Your Message</label>
                <textarea rows="4" className="border-b border-slate-300 bg-transparent py-2 focus:border-premium outline-none transition-colors resize-none" required></textarea>
              </div>
              <div className="md:col-span-2">
                <button className="bg-slate-900 text-white px-12 py-4 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-premium transition-all duration-500 shadow-lg">
                  Send Message
                </button>
              </div>
            </form>
          </div>

        </div>
      </section>
    </div>
  );
}

export default Contact;