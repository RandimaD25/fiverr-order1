import React from 'react';
import { FileText } from 'lucide-react';

const Header = () => {
  return (
    <div className="border-b border-slate-200/60 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-slate-900 rounded-lg">
            <FileText className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-900">PaySlip Pro</h1>
            <p className="text-sm text-slate-600">Professional payroll calculator</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;