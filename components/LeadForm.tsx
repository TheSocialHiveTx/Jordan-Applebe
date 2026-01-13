
import React, { useState } from 'react';
import { LeadFormData } from '../types';

interface Props {
  type: 'buyer' | 'seller' | 'general';
  title?: string;
  subtitle?: string;
}

const LeadForm: React.FC<Props> = ({ type, title, subtitle }) => {
  const [formData, setFormData] = useState<Partial<LeadFormData>>({
    type,
    name: '',
    email: '',
    phone: '',
    message: '',
    timeframe: '',
    address: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white p-12 shadow-2xl text-center">
        <div className="text-[#BD1015] text-6xl mb-6 font-serif italic">✓</div>
        <h3 className="text-2xl font-serif font-bold mb-4">Request Received</h3>
        <p className="text-gray-500 font-light leading-relaxed">Jordan will review your information and contact you within one business day.</p>
        <button 
          onClick={() => setSubmitted(false)}
          className="mt-10 text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 hover:text-[#BD1015] transition-colors"
        >
          Submit New Request
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-10 shadow-2xl border-t-[6px] border-[#BD1015]">
      {title && <h3 className="text-2xl font-serif font-bold mb-2 text-gray-900">{title}</h3>}
      {subtitle && <p className="text-gray-400 mb-8 text-sm font-light leading-relaxed">{subtitle}</p>}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-1">
          <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Full Name</label>
          <input 
            type="text" 
            required
            className="w-full border-b border-gray-200 p-3 bg-gray-50 focus:bg-white focus:border-[#BD1015] outline-none transition-all text-sm font-medium"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            placeholder="John Smith"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-1">
            <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Email Address</label>
            <input 
              type="email" 
              required
              className="w-full border-b border-gray-200 p-3 bg-gray-50 focus:bg-white focus:border-[#BD1015] outline-none transition-all text-sm font-medium"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              placeholder="smith@example.com"
            />
          </div>
          <div className="space-y-1">
            <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Phone</label>
            <input 
              type="tel" 
              required
              className="w-full border-b border-gray-200 p-3 bg-gray-50 focus:bg-white focus:border-[#BD1015] outline-none transition-all text-sm font-medium"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              placeholder="(713) 555-0100"
            />
          </div>
        </div>

        {type === 'seller' && (
          <div className="space-y-1">
            <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Property Address</label>
            <input 
              type="text" 
              required
              className="w-full border-b border-gray-200 p-3 bg-gray-50 focus:bg-white focus:border-[#BD1015] outline-none transition-all text-sm font-medium"
              value={formData.address}
              onChange={(e) => setFormData({...formData, address: e.target.value})}
              placeholder="Street, City, Zip"
            />
          </div>
        )}

        <div className="space-y-1">
          <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Goal Timeframe</label>
          <select 
            className="w-full border-b border-gray-200 p-3 bg-gray-50 focus:bg-white focus:border-[#BD1015] outline-none transition-all text-sm font-medium appearance-none"
            value={formData.timeframe}
            onChange={(e) => setFormData({...formData, timeframe: e.target.value})}
          >
            <option value="">Select an option...</option>
            <option value="immediate">ASAP / Immediate</option>
            <option value="1-3-months">1-3 Months</option>
            <option value="3-6-months">3-6 Months</option>
            <option value="just-browsing">Just Researching</option>
          </select>
        </div>

        <div className="space-y-1">
          <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Message / Goals</label>
          <textarea 
            rows={3}
            className="w-full border-b border-gray-200 p-3 bg-gray-50 focus:bg-white focus:border-[#BD1015] outline-none transition-all text-sm font-medium"
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            placeholder="Share your primary objectives..."
          ></textarea>
        </div>

        <button 
          type="submit" 
          className="w-full bg-[#BD1015] text-white py-5 rounded-sm font-bold uppercase tracking-[0.3em] text-[10px] hover:bg-black transition-all transform hover:-translate-y-1 shadow-lg"
        >
          {type === 'seller' ? 'Request Property Analysis' : 'Submit Consultation Request'}
        </button>
      </form>
    </div>
  );
};

export default LeadForm;
