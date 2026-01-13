
import React from 'react';
import { Link } from 'react-router-dom';
import LeadForm from '../components/LeadForm';
import { NEIGHBORHOODS, TESTIMONIALS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="overflow-x-hidden pt-28">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Houston Skyline Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/id/122/1920/1080" 
            alt="Houston Skyline" 
            className="w-full h-full object-cover brightness-[0.35]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-transparent"></div>
        </div>

        {/* Diagonal Design Overlay */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-white hidden lg:block transform origin-bottom-left -rotate-6 translate-x-12 z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 text-white">
            <h1 className="text-5xl md:text-8xl font-serif font-black leading-[0.9] mb-6">
              Houston & <br/> 
              <span className="text-[#BD1015]">Clear Lake</span><br/>
              <span className="font-signature text-white text-4xl md:text-6xl lowercase block mt-2 opacity-90">Real Estate</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-lg leading-relaxed font-light">
              Strategic guidance for the Houston Bay Area. Expert neighborhood insight with professional flood-risk awareness.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/buy" className="bg-[#BD1015] hover:bg-white hover:text-black text-white px-10 py-5 rounded-sm font-bold transition-all uppercase tracking-[0.2em] text-xs">
                Start Buying
              </Link>
              <Link to="/sell" className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white hover:text-black text-white px-10 py-5 rounded-sm font-bold transition-all uppercase tracking-[0.2em] text-xs">
                Get Home Value
              </Link>
            </div>
          </div>

          <div className="lg:w-1/2 w-full max-w-lg">
            <LeadForm 
              type="general" 
              title="Professional Consultation" 
              subtitle="Get started with a no-obligation analysis of your goals." 
            />
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-white py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div className="group">
              <div className="text-3xl font-serif font-bold text-gray-900 group-hover:text-[#BD1015] transition-colors">100%</div>
              <div className="text-[10px] font-bold uppercase text-gray-400 tracking-[0.3em] mt-2">Local Focus</div>
            </div>
            <div className="group">
              <div className="text-3xl font-serif font-bold text-gray-900 group-hover:text-[#BD1015] transition-colors">KW</div>
              <div className="text-[10px] font-bold uppercase text-gray-400 tracking-[0.3em] mt-2">Elite Network</div>
            </div>
            <div className="group">
              <div className="text-3xl font-serif font-bold text-gray-900 group-hover:text-[#BD1015] transition-colors">TREC</div>
              <div className="text-[10px] font-bold uppercase text-gray-400 tracking-[0.3em] mt-2">Certified Expert</div>
            </div>
            <div className="group">
              <div className="text-3xl font-serif font-bold text-gray-900 group-hover:text-[#BD1015] transition-colors">713</div>
              <div className="text-[10px] font-bold uppercase text-gray-400 tracking-[0.3em] mt-2">Houston Native</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Neighborhoods */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Explore <span className="italic text-[#BD1015]">Houston</span></h2>
            <div className="w-16 h-0.5 bg-gray-200 mx-auto mb-6"></div>
            <p className="text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">From the aerospace corridor to urban hotspots, discover the neighborhood that matches your lifestyle.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {NEIGHBORHOODS.map((area) => (
              <Link to="/neighborhoods" key={area.id} className="group relative overflow-hidden aspect-[4/5] bg-black">
                <img src={area.image} alt={area.name} className="w-full h-full object-cover transition-all duration-700 opacity-80 group-hover:scale-105 group-hover:opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 text-white w-full">
                  <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#BD1015] mb-2">Area Spotlight</div>
                  <h3 className="text-3xl font-serif font-bold mb-4">{area.name}</h3>
                  <div className="h-0.5 w-0 group-hover:w-12 bg-[#BD1015] transition-all duration-500"></div>
                  <p className="text-sm text-gray-300 mt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">{area.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Houston Realities Section (Diagonal Design) */}
      <section className="relative bg-[#1A1A1A] text-white overflow-hidden py-36">
        <div className="absolute top-0 left-0 w-full h-32 bg-white diagonal-swoosh transform -translate-y-1"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-10 leading-tight">Strategic <br/><span className="italic text-[#BD1015]">Real Estate</span></h2>
            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="text-[#BD1015] font-serif text-3xl font-black italic">01</div>
                <div>
                  <h4 className="text-lg font-bold mb-3 uppercase tracking-widest">Flood Intelligence</h4>
                  <p className="text-gray-500 font-light leading-relaxed">Deep-dive flood history analysis and insurance coordination for total peace of mind.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="text-[#BD1015] font-serif text-3xl font-black italic">02</div>
                <div>
                  <h4 className="text-lg font-bold mb-3 uppercase tracking-widest">Tax Efficiency</h4>
                  <p className="text-gray-500 font-light leading-relaxed">Expert navigation of MUD/PID special districts and property tax protests.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="text-[#BD1015] font-serif text-3xl font-black italic">03</div>
                <div>
                  <h4 className="text-lg font-bold mb-3 uppercase tracking-widest">Logistics Mapping</h4>
                  <p className="text-gray-500 font-light leading-relaxed">Optimizing your commute to NASA, the Med Center, or Downtown Houston.</p>
                </div>
              </div>
            </div>
            <Link to="/resources" className="mt-14 inline-block border border-white/20 hover:border-[#BD1015] hover:bg-[#BD1015] text-white px-10 py-4 rounded-sm font-bold transition-all uppercase tracking-[0.2em] text-xs">
              View Resources
            </Link>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 border border-[#BD1015]/30 translate-x-4 translate-y-4 -z-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700"></div>
            <img src="https://picsum.photos/id/124/800/800" alt="Houston Living" className="w-full grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 shadow-2xl" />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-32 bg-white diagonal-swoosh-reverse transform translate-y-1"></div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#BD1015] mb-4">Client Success</div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold">Trusted by Houstonians</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="bg-gray-50 p-10 relative">
                <div className="font-serif text-6xl text-gray-200 absolute top-6 right-8">"</div>
                <p className="text-gray-600 mb-8 font-light italic leading-relaxed relative z-10">"{t.text}"</p>
                <div className="border-t border-gray-200 pt-6">
                  <p className="font-bold uppercase tracking-widest text-xs text-gray-900">{t.name}</p>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gray-900 py-32 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full font-serif text-[40vw] font-black text-white/5 whitespace-nowrap -translate-y-1/2">HOUSTON</div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-5xl md:text-7xl font-serif font-bold mb-8">Ready to <span className="italic text-[#BD1015]">Begin?</span></h2>
          <p className="text-lg mb-12 text-gray-400 font-light max-w-xl mx-auto leading-relaxed">Whether it's your first home or your next luxury investment, experience real estate with a higher standard.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="tel:7134926278" className="bg-[#BD1015] text-white px-12 py-5 rounded-sm font-bold text-xs hover:bg-white hover:text-black transition-all uppercase tracking-[0.2em]">
              (713) 492-6278
            </a>
            <Link to="/contact" className="bg-white text-black px-12 py-5 rounded-sm font-bold text-xs hover:bg-[#BD1015] hover:text-white transition-all uppercase tracking-[0.2em]">
              Book Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
