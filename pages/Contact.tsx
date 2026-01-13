
import React from 'react';
import LeadForm from '../components/LeadForm';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 bg-gray-50 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 uppercase">Let's <span className="text-[#BD1015]">Connect</span></h1>
          <p className="text-gray-600 max-w-2xl text-lg">Whether you have a quick question or are ready to list, I'm just a call or click away.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border-t-4 border-gray-900">
              <h3 className="text-lg font-bold mb-4 uppercase tracking-widest text-[#BD1015]">Direct Contact</h3>
              <div className="space-y-4">
                <a href="tel:7134926278" className="flex items-center gap-3 text-gray-700 hover:text-[#BD1015] transition-colors group">
                  <span className="bg-gray-100 p-3 rounded group-hover:bg-[#BD1015] group-hover:text-white">📞</span>
                  <span className="font-bold">(713) 492-6278</span>
                </a>
                <a href="mailto:jordanapplebe@outlook.com" className="flex items-center gap-3 text-gray-700 hover:text-[#BD1015] transition-colors group">
                  <span className="bg-gray-100 p-3 rounded group-hover:bg-[#BD1015] group-hover:text-white">✉️</span>
                  <span className="font-bold break-all">jordanapplebe@outlook.com</span>
                </a>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border-t-4 border-gray-900">
              <h3 className="text-lg font-bold mb-4 uppercase tracking-widest text-[#BD1015]">Office Location</h3>
              <div className="flex items-start gap-3 text-gray-700 mb-6">
                <span className="bg-gray-100 p-3 rounded shrink-0">📍</span>
                <span className="font-bold">18050 Saturn Ln. Suite 100,<br/> Houston, TX 77058</span>
              </div>
              <div className="w-full h-48 rounded overflow-hidden">
                <iframe 
                  title="Office Location"
                  width="100%" 
                  height="100%" 
                  frameBorder="0" 
                  scrolling="no" 
                  marginHeight={0} 
                  marginWidth={0} 
                  src="https://maps.google.com/maps?q=18050%20Saturn%20Ln.%20Suite%20100,%20Houston,%20TX%2077058&t=&z=13&ie=UTF8&iwloc=&output=embed"
                />
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border-t-4 border-[#BD1015]">
              <h3 className="text-lg font-bold mb-4 uppercase tracking-widest">Business Hours</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex justify-between"><span>Monday - Friday</span> <span>8:00 AM - 7:00 PM</span></li>
                <li className="flex justify-between"><span>Saturday</span> <span>10:00 AM - 4:00 PM</span></li>
                <li className="flex justify-between"><span>Sunday</span> <span>By Appointment</span></li>
              </ul>
              <p className="mt-4 text-xs text-gray-400 italic">Available via call/text 24/7 for urgent matters.</p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <LeadForm type="general" title="How can I help you today?" subtitle="Fill out the form below and I'll get back to you as soon as possible." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
