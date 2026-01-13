
import React from 'react';
import { COMPLIANCE_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h2 className="font-signature text-3xl mb-4">Jordan Applebe</h2>
          <p className="text-gray-400 text-sm mb-6">
            Providing expert real estate services across the Greater Houston area, specializing in Clear Lake and the Bay Area.
          </p>
          <div className="flex gap-4">
            <a href={COMPLIANCE_LINKS.FACEBOOK} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
               Facebook
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4 uppercase tracking-wider text-[#BD1015]">Contact</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li>📍 18050 Saturn Ln. Suite 100, Houston, TX 77058</li>
            <li>📞 <a href="tel:7134926278" className="hover:text-white">(713) 492-6278</a></li>
            <li>✉️ <a href="mailto:jordanapplebe@outlook.com" className="hover:text-white">jordanapplebe@outlook.com</a></li>
            <li>🏢 Keller Williams Realty Clear Lake</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4 uppercase tracking-wider text-[#BD1015]">Compliance</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li>
              <a href={COMPLIANCE_LINKS.HAR_BROKER_INFO} target="_blank" rel="noopener noreferrer" className="hover:text-white underline">
                Texas Real Estate Commission Brokerage Information (HAR)
              </a>
            </li>
            <li>
              <a href={COMPLIANCE_LINKS.TREC_CN_PDF} target="_blank" rel="noopener noreferrer" className="hover:text-white underline">
                TREC Consumer Protection Notice
              </a>
            </li>
            <li className="mt-4 flex items-center gap-2">
              <span className="text-[10px] border border-gray-600 px-1">REALTOR®</span>
              <span className="text-[10px] border border-gray-600 px-1">EQUAL HOUSING OPPORTUNITY</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
        <p>&copy; {new Date().getFullYear()} Jordan Applebe. All rights reserved. Licensed Realtor in the State of Texas.</p>
        <p className="mt-2">Real Estate website designed with expertise in Houston Market Realities.</p>
      </div>
    </footer>
  );
};

export default Footer;
