
import React from 'react';
import { COMPLIANCE_LINKS } from '../constants';

const ResourceCard: React.FC<{ title: string; desc: string; link?: string; items?: string[] }> = ({ title, desc, link, items }) => (
  <div className="bg-white p-8 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
    <h3 className="text-xl font-bold mb-3 uppercase tracking-tight text-[#BD1015]">{title}</h3>
    <p className="text-gray-600 mb-6 text-sm leading-relaxed">{desc}</p>
    {items && (
      <ul className="space-y-2 mb-6">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
            <span className="text-[#BD1015]">▶</span> {item}
          </li>
        ))}
      </ul>
    )}
    {link && (
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="inline-block bg-gray-900 text-white px-6 py-2 rounded text-xs font-bold uppercase tracking-widest hover:bg-[#BD1015] transition-colors"
      >
        Access Resource
      </a>
    )}
  </div>
);

const Resources: React.FC = () => {
  return (
    <div className="pt-40 pb-24 bg-[#F9F9F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 uppercase">Houston <span className="text-[#BD1015]">Resources</span></h1>
          <p className="text-gray-600 max-w-2xl text-lg">Essential tools, guides, and compliance notices for buyers and sellers in the Greater Houston Area.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ResourceCard 
            title="Compliance & Disclosures"
            desc="Required legal notices for all Texas real estate transactions to ensure consumer protection and transparency."
            items={[
              "TREC Information About Brokerage Services",
              "TREC Consumer Protection Notice (CN 1-2)",
              "KW Clear Lake Local Brokerage Disclosures"
            ]}
            link={COMPLIANCE_LINKS.TREC_CN_PDF}
          />

          <ResourceCard 
            title="Flood Risk & Insurance"
            desc="In Houston, flood awareness is non-negotiable. Learn how to research property history and understand insurance requirements."
            items={[
              "FEMA Flood Map Service Center",
              "Elevation Certificate Basics",
              "Flood Insurance (NFIP) Guidance"
            ]}
            link="https://msc.fema.gov/portal/home"
          />

          <ResourceCard 
            title="Taxes, MUDs & HOAs"
            desc="Understand how special districts like MUDs and PIDs affect your monthly payment and overall cost of home ownership."
            items={[
              "MUD (Municipal Utility District) Explained",
              "Harris & Galveston County Tax Lookups",
              "PID (Public Improvement District) Disclosures"
            ]}
          />

          <ResourceCard 
            title="Relocation Guide"
            desc="Moving to the Houston Bay Area for NASA or the Med Center? This guide covers neighborhoods, schools, and commute hacks."
            items={[
              "Top Area Employers",
              "Private & Public School Rankings",
              "Commute Mapping Resources"
            ]}
          />

          <ResourceCard 
            title="First-Time Buyer Checklist"
            desc="A step-by-step path to homeownership specifically tailored for the Texas real estate market process."
            items={[
              "Pre-approval to Closing Timeline",
              "Texas Option Period Explained",
              "Down Payment Assistance Programs"
            ]}
          />

          <ResourceCard 
            title="Seller Market Prep"
            desc="Maximize your equity with these Houston-specific staging and photography tips."
            items={[
              "Texas Seller Disclosure Requirements",
              "Impactful Renovation ROI",
              "Digital Marketing Strategy Overview"
            ]}
          />
        </div>

        <div className="mt-16 bg-white p-10 rounded-lg shadow-lg border-2 border-dashed border-[#BD1015] flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-2 uppercase">Need a specific resource?</h3>
            <p className="text-gray-600">I can provide custom market reports, HOA by-laws for specific neighborhoods, and more.</p>
          </div>
          <a href="mailto:jordanapplebe@outlook.com" className="bg-[#BD1015] text-white px-10 py-4 rounded font-bold uppercase tracking-widest hover:bg-black transition-all">
            Email Me Directly
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resources;
