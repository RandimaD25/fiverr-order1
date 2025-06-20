import React, { useState } from 'react';
import Header from './components/Header';
import EmployeeForm from './components/EmployeeForm';
import PayslipDisplay from './components/PayslipDisplay';
import { calculatePayslip } from './utils/taxCalculator';

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    annualSalary: '',
    superRate: '',
    paymentStart: ''
  });

  const [payslip, setPayslip] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCalculatePayslip = async () => {
    const { firstName, lastName, annualSalary, superRate, paymentStart } = formData;
    
    if (!firstName || !lastName || !annualSalary || !superRate || !paymentStart) {
      alert('Please fill in all fields');
      return;
    }

    const salary = parseFloat(annualSalary);
    const super_rate = parseFloat(superRate);
    
    if (salary <= 0 || super_rate < 0 || super_rate > 12) {
      alert('Please enter valid salary and super rate (0-12%)');
      return;
    }

    setIsCalculating(true);
    
    await new Promise(resolve => setTimeout(resolve, 800));

    const calculatedPayslip = calculatePayslip(formData);
    setPayslip(calculatedPayslip);
    
    setIsCalculating(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <Header />
      
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-5 gap-8">
          <EmployeeForm 
            formData={formData}
            onInputChange={handleInputChange}
            onCalculate={handleCalculatePayslip}
            isCalculating={isCalculating}
          />
          
          <PayslipDisplay payslip={payslip} />
        </div>
      </div>
    </div>
  );
}

export default App;