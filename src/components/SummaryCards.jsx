import React from "react";

// This is a React functional component called SummaryCards.
// It receives a payslip object as a prop which contains all the calculated salary data (like gross income, tax, etc.)
// and displays three info cards using Tailwind CSS for styling.
// We're destructuring payslip directly from props for easier access.
const SummaryCards = ({ payslip }) => {
  return (
    // This div uses Tailwind’s CSS Grid layout to organize 3 cards side by side.
    <div className="grid md:grid-cols-3 gap-4 mb-6">
      <div className="bg-gradient-to-r from-emerald-50 to-emerald-50/50 border border-emerald-200/50 rounded-lg p-4">
        <p className="text-sm text-emerald-700 font-medium">Gross Income</p>
        <p className="text-2xl font-bold text-emerald-800">
          ${payslip.grossIncome.toLocaleString()}
        </p>{" "}
        {/* .toLocaleString() adds commas to large numbers (e.g., 50000 → 50,000). */}
      </div>
      <div className="bg-gradient-to-r from-red-50 to-red-50/50 border border-red-200/50 rounded-lg p-4">
        <p className="text-sm text-red-700 font-medium">Income Tax</p>
        <p className="text-2xl font-bold text-red-800">
          ${payslip.incomeTax.toLocaleString()}
        </p>{" "}
        {/* Displays: payslip.incomeTax. */}
      </div>
      <div className="bg-gradient-to-r from-blue-50 to-blue-50/50 border border-blue-200/50 rounded-lg p-4">
        <p className="text-sm text-blue-700 font-medium">Net Income</p>
        <p className="text-2xl font-bold text-blue-800">
          ${payslip.netIncome.toLocaleString()}
        </p>{" "}
        {/* Display value from payslip.netIncome */}
      </div>
    </div>
  );
};

export default SummaryCards;
