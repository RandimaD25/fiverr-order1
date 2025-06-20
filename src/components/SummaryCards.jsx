import React from 'react';

const SummaryCards = ({ payslip }) => {
  return (
    <div className="grid md:grid-cols-3 gap-4 mb-6">
      <div className="bg-gradient-to-r from-emerald-50 to-emerald-50/50 border border-emerald-200/50 rounded-lg p-4">
        <p className="text-sm text-emerald-700 font-medium">Gross Income</p>
        <p className="text-2xl font-bold text-emerald-800">${payslip.grossIncome.toLocaleString()}</p>
      </div>
      <div className="bg-gradient-to-r from-red-50 to-red-50/50 border border-red-200/50 rounded-lg p-4">
        <p className="text-sm text-red-700 font-medium">Income Tax</p>
        <p className="text-2xl font-bold text-red-800">${payslip.incomeTax.toLocaleString()}</p>
      </div>
      <div className="bg-gradient-to-r from-blue-50 to-blue-50/50 border border-blue-200/50 rounded-lg p-4">
        <p className="text-sm text-blue-700 font-medium">Net Income</p>
        <p className="text-2xl font-bold text-blue-800">${payslip.netIncome.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default SummaryCards;