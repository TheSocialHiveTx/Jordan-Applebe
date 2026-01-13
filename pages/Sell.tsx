
import React from 'react';
// Added Link import from react-router-dom
import { Link } from 'react-router-dom';
import LeadForm from '../components/LeadForm';

const Sell: React.FC = () => {
  return (
    <div className="pt-32">
      <section className="bg-white text-gray-900 py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 uppercase leading-none">The Houston <span className="text-[#BD1015]">Seller</span> Plan</h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Don't just list your home—market it. My proven strategy blends high-end photography, digital targeting, and local market insight.
            </p>
            <div className="space-y-4 text-gray-700">
               <div className="flex items-center gap-3">
                 <span className="text-[#BD1015] font-bold">✓</span> Professional 4K HDR Photography & Video
               </div>
               <div className="flex items-center gap-3">
                 <span className="text-[#BD1015] font-bold">✓</span> Targeted Social Media Ad Campaigns
               </div>
               <div className="flex items-center gap-3">
                 <span className="text-[#BD1015] font-bold">✓</span> Comprehensive Flood Disclosure Support
               </div>
               <div className="flex items-center gap-3">
                 <span className="text-[#BD1015] font-bold">✓</span> Direct Access to My Professional Network
               </div>
            </div>
          </div>
          <div className="md:w-1/2 w-full">
            <LeadForm type="seller" title="Free Home Evaluation" subtitle="Find out what your Houston area home is worth in today's market." />
          </div>
        </div>
      </section>

      <section className="bg-gray-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight">How We Maximize <span className="text-[#BD1015]">Equity</span></h2>
            <div className="w-24 h-1 bg-[#BD1015] mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-[#BD1015]">1. Preparation</h3>
              <p className="text-gray-400">From curb appeal tips to minor repairs that yield the highest ROI, we get your home "Bay Area Ready" before the first photo is taken.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-[#BD1015]">2. Pricing Strategy</h3>
              <p className="text-gray-400">A data-driven approach based on hyper-local comps in neighborhoods like Clear Lake and League City ensures you don't leave money on the table.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-[#BD1015]">3. Global Reach</h3>
              <p className="text-gray-400">Leveraging the power of the KW global network alongside local HAR dominance to put your home in front of the right buyers.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-1/2 p-12">
              <h2 className="text-3xl font-bold mb-6 uppercase">The Flood Disclosure <span className="text-[#BD1015]">Advantage</span></h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                In Houston, honesty is your best marketing tool. I help you navigate the Texas Seller Disclosure forms with accuracy, protecting you from future liability while building trust with prospective buyers.
              </p>
              <ul className="space-y-2 text-sm text-gray-500 mb-8">
                <li>• Comprehensive review of flood history records</li>
                <li>• Assistance with FEMA map clarifications</li>
                <li>• Clear communication of elevation features</li>
              </ul>
              <Link to="/contact" className="inline-block border-2 border-[#BD1015] text-[#BD1015] px-8 py-3 rounded font-bold hover:bg-[#BD1015] hover:text-white transition-all uppercase tracking-widest">
                Request Listing Consultation
              </Link>
            </div>
            <div className="md:w-1/2">
              <img src="https://picsum.photos/id/111/800/800" alt="Houston Real Estate" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sell;
