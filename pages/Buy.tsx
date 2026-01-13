
import React from 'react';
import LeadForm from '../components/LeadForm';

const Buy: React.FC = () => {
  return (
    <div className="pt-32">
      <section className="bg-gray-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/id/115/1920/1080" 
            alt="Houston Homes" 
            className="w-full h-full object-cover brightness-[0.2]"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 uppercase">Buying in <span className="text-[#BD1015]">Houston</span></h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl leading-relaxed">
            Your dream home in Clear Lake, Pearland, or Friendswood starts with a strategic partner.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold mb-8 uppercase text-gray-900 border-l-4 border-[#BD1015] pl-4">How I help you win</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-2 text-[#BD1015]">01. Local Strategy</h3>
                <p className="text-gray-600">Every Houston neighborhood has its own rhythm. We analyze school districts, commute times, and flood risks before viewing houses.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-[#BD1015]">02. Expert Negotiation</h3>
                <p className="text-gray-600">In a competitive market, you need a strong advocate. I handle the high-stakes negotiations to get you the best terms.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-[#BD1015]">03. Inspection Clarity</h3>
                <p className="text-gray-600">From foundation issues to HVAC systems in the Houston heat, I guide you through the inspection process so there are no surprises.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-[#BD1015]">04. Closing Mastery</h3>
                <p className="text-gray-600">I coordinate with lenders, title companies, and inspectors to ensure your closing is as stress-free as possible.</p>
              </div>
            </div>
          </div>
          <div>
            <LeadForm type="buyer" title="Schedule Buyer Consultation" subtitle="Let's find your perfect place in the Houston area." />
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-12 uppercase">Houston-Specific <span className="text-[#BD1015]">Buyer Realities</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded shadow-sm">
              <div className="text-4xl mb-4">🏠</div>
              <h4 className="font-bold mb-2">Texas Property Taxes</h4>
              <p className="text-sm text-gray-600">Learn about MUDs, PIDs, and Homestead Exemptions to lower your annual bill.</p>
            </div>
            <div className="bg-white p-8 rounded shadow-sm">
              <div className="text-4xl mb-4">⛈️</div>
              <h4 className="font-bold mb-2">Flood Awareness</h4>
              <p className="text-sm text-gray-600">Insight into flood zones and flood history that Zillow won't always tell you.</p>
            </div>
            <div className="bg-white p-8 rounded shadow-sm">
              <div className="text-4xl mb-4">🚗</div>
              <h4 className="font-bold mb-2">The Commute</h4>
              <p className="text-sm text-gray-600">Real-world drive times to NASA, Med Center, and Downtown from various suburbs.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Buy;
