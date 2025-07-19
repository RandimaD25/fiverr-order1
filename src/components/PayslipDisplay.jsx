import React from "react";
import { Download, FileText, CheckCircle } from "lucide-react";
import SummaryCards from "./SummaryCards"; // Importing a custom component (SummaryCard) to display summary info

// This is a functional React component that receives a `payslip` prop
const PayslipDisplay = ({ payslip }) => {
  // If no payslip is generated, show a default empty state
  if (!payslip) {
    return (
      <div className="lg:col-span-3">
        <div className="bg-white border border-slate-200/60 rounded-xl shadow-sm">
          <div className="p-12 text-center">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="w-8 h-8 text-slate-400" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              No Payslip Generated
            </h3>
            <p className="text-slate-500 text-sm max-w-sm mx-auto">
              Complete the employee information form and click "Generate
              Payslip" to create a professional payment statement.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // If a payslip is available, display the detailed UI
  return (
    <div className="lg:col-span-3">
      <div className="bg-white border border-slate-200/60 rounded-xl shadow-sm">
        <div className="divide-y divide-slate-100">
          {" "}
          {/* Divides each section with a line */}
          <div className="p-6 bg-gradient-to-r from-slate-50 to-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-600" />{" "}
                  {/* Green success icon */}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    Payment Statement
                  </h3>
                  <p className="text-sm text-slate-500">
                    Generated successfully
                  </p>
                </div>
              </div>
              <button className="inline-flex items-center space-x-2 px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-all">
                <Download className="w-4 h-4" />
                <span>Export PDF</span>{" "}
                {/* NOTE: Button functionality not implemented here */}
              </button>
            </div>
          </div>
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <p className="text-sm text-slate-500">Employee Name</p>
                <p className="font-semibold text-slate-900">{payslip.name}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-slate-500">Pay Period</p>
                <p className="font-semibold text-slate-900">
                  {payslip.payPeriod}
                </p>
              </div>
            </div>
          </div>
          <div className="p-6">
            <SummaryCards payslip={payslip} />{" "}
            {/* Reusable component for 3 stats */}
            <div className="bg-slate-50/50 rounded-lg border border-slate-100">
              <div className="px-4 py-3 border-b border-slate-200 bg-slate-50 rounded-t-lg">
                <h4 className="font-semibold text-slate-900 text-sm">
                  Payment Breakdown
                </h4>
              </div>
              <div className="p-0">
                <div className="divide-y divide-slate-100">
                  <div className="flex justify-between items-center px-4 py-3 hover:bg-slate-50/50 transition-colors">
                    <span className="text-sm font-medium text-slate-700">
                      Pay Period
                    </span>
                    <span className="text-sm text-slate-900 font-mono">
                      {payslip.month}
                    </span>
                  </div>
                  <div className="flex justify-between items-center px-4 py-3 hover:bg-slate-50/50 transition-colors">
                    <span className="text-sm font-medium text-slate-700">
                      Gross Monthly Income
                    </span>
                    <span className="text-sm text-emerald-700 font-semibold font-mono">
                      ${payslip.grossIncome.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center px-4 py-3 hover:bg-slate-50/50 transition-colors">
                    <span className="text-sm font-medium text-slate-700">
                      Income Tax Withheld
                    </span>
                    <span className="text-sm text-red-700 font-semibold font-mono">
                      -${payslip.incomeTax.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center px-4 py-3 bg-slate-100/50 hover:bg-slate-100 transition-colors">
                    <span className="text-sm font-bold text-slate-900">
                      Net Take - Home Pay
                    </span>
                    <span className="text-lg font-bold text-slate-900 font-mono">
                      ${payslip.netIncome.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center px-4 py-3 bg-slate-100/50 hover:bg-slate-100 transition-colors">
                    <span className="text-sm font-bold text-slate-900">
                      Net Take - Pay Bi Weekly
                    </span>
                    <span className="text-lg font-bold text-slate-900 font-mono">
                      ${payslip.netIncomeBiWeekly.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center px-4 py-3 hover:bg-slate-50/50 transition-colors">
                    <span className="text-sm font-medium text-slate-700">
                      Superannuation
                    </span>
                    <span className="text-sm text-purple-700 font-semibold font-mono">
                      ${payslip.super.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="px-6 py-4 bg-slate-50/50 rounded-b-xl">
            <p className="text-xs text-slate-500 text-center">
              Tax calculations based on Australian Tax Office rates for 2024-25
              financial year
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Export the component so it can be used in other files
export default PayslipDisplay;
