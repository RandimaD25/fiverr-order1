import React from "react"; // React must be imported in every component file to use JSX (even if newer versions don't require it explicitly for JSX compilation).
// imports icons from the lucide-react library. These are used as SVG icons inside the UI for visual clarity.
import {
  Calendar,
  Calculator,
  User,
  DollarSign,
  ArrowRight,
} from "lucide-react";

// This is a functional component called EmployeeForm and it receives props:
// 1. formData (an object holding the current values of the form (e.g., name, salary)
// 2. onInputChange: a function to call when any input changes (the function is handleInputChange define in the App.jsx)
// 3. onCalculate: function to generate the payslip (the function is handleCalculatePayslip define in the App.jsx)
// 4. isCalculating: a boolean that indicates whether calculation is in progress (for loading UI)
const EmployeeForm = ({
  formData,
  onInputChange,
  onCalculate,
  isCalculating,
}) => {
  return (
    <div className="lg:col-span-2">
      <div className="bg-white border border-slate-200/60 rounded-xl shadow-sm p-6">
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-2 bg-slate-100 rounded-lg">
            <User className="w-5 h-5 text-slate-700" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              Employee Information
            </h2>
            <p className="text-sm text-slate-500">
              Enter employee details below
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {/* Creates a 2-column grid layout (side-by-side inputs) */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName} // Controlled input
                onChange={onInputChange} //When user types, onInputChange updates the value
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
              {" "}
              {/* relative container so the icon can be absolutely positioned inside the input */}
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

          {/* Button that triggers payslip calculation */}
          <button
            onClick={onCalculate}
            disabled={isCalculating} // prevents re-clicking while loading
            className="w-full bg-slate-900 hover:bg-slate-800 disabled:bg-slate-400 text-white font-medium py-2.5 px-4 rounded-lg transition-all flex items-center justify-center space-x-2 text-sm"
          >
            {/* Conditional rendering */}
            {/* If calculating: show a spinner + “Calculating…” */}
            {/* Otherwise: show the button label and icons */}
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

// Makes the component available for importing in other files like App.jsx
export default EmployeeForm;
