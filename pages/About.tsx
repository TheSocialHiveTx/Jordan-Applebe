
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pt-32">
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="absolute -top-4 -left-4 w-full h-full border-4 border-[#BD1015] z-0"></div>
            <img 
              src="https://picsum.photos/id/64/800/1000" 
              alt="Jordan Applebe" 
              className="w-full rounded-lg shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </div>
          <div className="lg:w-1/2">
            <h1 className="text-5xl md:text-7xl font-signature text-gray-900 mb-4">Jordan Applebe</h1>
            <h2 className="text-xl font-bold text-[#BD1015] uppercase tracking-[0.2em] mb-8">Houston REALTOR® | Local Expert</h2>
            
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                Real estate is more than just property—it's about the communities we build and the futures we secure. Based in the Clear Lake area, I specialize in helping families find their footing in one of the most dynamic markets in the world: Greater Houston.
              </p>
              <p>
                With a deep background in local market analytics and a focus on transparency, my goal is to simplify the complex. Whether it's navigating the intricacies of Texas flood disclosures or negotiating the best terms for a first-time buyer in Pearland, I'm here to provide high-level strategy with a personal touch.
              </p>
              <p>
                As a member of Keller Williams Realty Clear Lake, I leverage global reach with local grit. I believe in honest communication, data-driven decisions, and the persistent pursuit of my clients' best interests.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              <div className="border border-gray-200 p-4 rounded text-center min-w-[120px]">
                <span className="block text-2xl font-bold text-[#BD1015]">713</span>
                <span className="text-[10px] uppercase font-bold text-gray-400">Area Code Roots</span>
              </div>
              <div className="border border-gray-200 p-4 rounded text-center min-w-[120px]">
                <span className="block text-2xl font-bold text-[#BD1015]">CCISD</span>
                <span className="text-[10px] uppercase font-bold text-gray-400">Local Area Expert</span>
              </div>
              <div className="border border-gray-200 p-4 rounded text-center min-w-[120px]">
                <span className="block text-2xl font-bold text-[#BD1015]">KW</span>
                <span className="text-[10px] uppercase font-bold text-gray-400">World-Class Tech</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-900 text-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8 uppercase tracking-widest">My Mission</h2>
          <p className="text-2xl font-light italic leading-relaxed text-gray-300">
            "To empower Houston buyers and sellers through radical transparency, expert hyper-local knowledge, and a commitment to protecting their investment like my own."
          </p>
          <div className="mt-12">
            <a href="tel:7134926278" className="bg-[#BD1015] text-white px-10 py-4 rounded font-bold hover:bg-white hover:text-black transition-all uppercase">
              Call Jordan Directly
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
