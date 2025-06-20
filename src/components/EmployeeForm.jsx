import React from 'react';
import { Calendar, Calculator, User, DollarSign, ArrowRight } from 'lucide-react';

const EmployeeForm = ({ formData, onInputChange, onCalculate, isCalculating }) => {
  return (
    <div className="lg:col-span-2">
      <div className="bg-white border border-slate-200/60 rounded-xl shadow-sm p-6">
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-2 bg-slate-100 rounded-lg">
            <User className="w-5 h-5 text-slate-700" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-slate-900">Employee Information</h2>
            <p className="text-sm text-slate-500">Enter employee details below</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={onInputChange}
                className="w-full px-3 py-2.5 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900/20 focus:border-slate-400 transition-all placeholder:text-slate-400"
                placeholder="Richard"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={onInputChange}
                className="w-full px-3 py-2.5 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900/20 focus:border-slate-400 transition-all placeholder:text-slate-400"
                placeholder="Anthony"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">
              Annual Salary
            </label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
              <input
                type="number"
                name="annualSalary"
                value={formData.annualSalary}
                onChange={onInputChange}
                className="w-full pl-9 pr-3 py-2.5 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900/20 focus:border-slate-400 transition-all placeholder:text-slate-400"
                placeholder="65,000"
                min="0"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">
              Superannuation Rate (%)
            </label>
            <input
              type="number"
              name="superRate"
              value={formData.superRate}
              onChange={onInputChange}
              className="w-full px-3 py-2.5 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900/20 focus:border-slate-400 transition-all placeholder:text-slate-400"
              placeholder="11.0"
              min="0"
              max="50"
              step="0.1"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">
              Pay Period Start
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
              <input
                type="date"
                name="paymentStart"
                value={formData.paymentStart}
                onChange={onInputChange}
                className="w-full pl-9 pr-3 py-2.5 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900/20 focus:border-slate-400 transition-all"
              />
            </div>
          </div>

          <button
            onClick={onCalculate}
            disabled={isCalculating}
            className="w-full bg-slate-900 hover:bg-slate-800 disabled:bg-slate-400 text-white font-medium py-2.5 px-4 rounded-lg transition-all flex items-center justify-center space-x-2 text-sm"
          >
            {isCalculating ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Calculating...</span>
              </>
            ) : (
              <>
                <Calculator className="w-4 h-4" />
                <span>Generate Payslip</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeForm;