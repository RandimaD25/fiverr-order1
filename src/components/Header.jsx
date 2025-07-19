import React from "react";

// FileText is an icon from the lucide-react icon library. It represents a document and is used as a visual indicator for the app's purpose — dealing with documents/payslips.
import { FileText } from "lucide-react";

// Declares a React functional component named Header.
// No props are passed because this header is static — it doesn't need external data.
const Header = () => {
  return (
    // border-slate-200/60: uses Tailwind’s light gray color with 60% opacity
    // sticky top-0: makes the header stick to the top when scrolling
    // z-10: sets the z-index to ensure the header appears above other elements
    <div className="border-b border-slate-200/60 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-slate-900 rounded-lg">
            <FileText className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-900">PaySlip Pro</h1>
            <p className="text-sm text-slate-600">
              Professional payroll calculator
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Makes the Header component available to be imported in App.jsx or any other component.
export default Header;
