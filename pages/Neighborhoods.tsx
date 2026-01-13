
import React from 'react';
import { NEIGHBORHOODS } from '../constants';
import { Link } from 'react-router-dom';

const Neighborhoods: React.FC = () => {
  return (
    <div className="pt-32 bg-white pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 uppercase leading-none">Houston & <br/><span className="text-[#BD1015]">Bay Area</span> Guides</h1>
          <p className="text-gray-600 max-w-2xl text-lg mt-4">Exploring the distinct personalities, price ranges, and lifestyles of our local communities.</p>
        </div>

        <div className="space-y-24">
          {NEIGHBORHOODS.map((area, idx) => (
            <div key={area.id} className={`flex flex-col lg:flex-row gap-12 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-1/2 group relative">
                <div className="absolute inset-0 bg-[#BD1015] transform translate-x-4 translate-y-4 rounded-lg z-0 transition-transform group-hover:translate-x-6 group-hover:translate-y-6"></div>
                <img src={area.image} alt={area.name} className="w-full h-[400px] object-cover rounded-lg shadow-xl relative z-10" />
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 uppercase">{area.name}</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">{area.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-50 p-6 rounded border-l-4 border-[#BD1015]">
                    <h4 className="font-bold text-xs uppercase tracking-widest text-gray-400 mb-2">Best For</h4>
                    <p className="text-sm font-semibold">{area.whoItsFor}</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded border-l-4 border-gray-900">
                    <h4 className="font-bold text-xs uppercase tracking-widest text-gray-400 mb-2">Commute Note</h4>
                    <p className="text-sm font-semibold">{area.commuteNote}</p>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="font-bold text-xs uppercase tracking-widest text-gray-400 mb-3">Lifestyle Highlights</h4>
                  <div className="flex flex-wrap gap-2">
                    {area.highlights.map((h, i) => (
                      <span key={i} className="bg-white border border-gray-200 px-3 py-1 rounded-full text-xs font-bold text-gray-600 shadow-sm">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

                <Link to="/contact" className="inline-block bg-[#BD1015] text-white px-8 py-3 rounded font-bold hover:bg-black transition-all uppercase tracking-widest text-sm">
                  Get Listings in {area.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-32 text-center bg-gray-900 text-white p-16 rounded-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Don't see your neighborhood?</h2>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto">I serve the entire Greater Houston area including EaDo, Midtown, Sugar Land, and beyond. Contact me for a custom guide.</p>
          <Link to="/contact" className="bg-white text-black px-10 py-4 rounded font-bold hover:bg-[#BD1015] hover:text-white transition-all uppercase">
            Request Custom Neighborhood Guide
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Neighborhoods;
