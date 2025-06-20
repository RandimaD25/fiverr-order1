export const calculateTax = (annualSalary) => {
  const MIN_AMOUNT = 18200;
  let incomeTax;
  
  if (annualSalary <= MIN_AMOUNT) {
    incomeTax = 0;
  } else if (annualSalary <= 37000) {
    incomeTax = (annualSalary - MIN_AMOUNT) * 0.19;
  } else if (annualSalary <= 80000) {
    incomeTax = (annualSalary - 37000) * 0.325 + 3572;
  } else if (annualSalary <= 180000) {
    incomeTax = (annualSalary - 80000) * 0.37 + 17547;
  } else {
    incomeTax = (annualSalary - 180000) * 0.45 + 54547;
  }
  
  return incomeTax;
};

export const calculatePayslip = (formData) => {
  const { firstName, lastName, annualSalary, superRate, paymentStart } = formData;
  
  const salary = parseFloat(annualSalary);
  const super_rate = parseFloat(superRate);
  
  const grossIncome = Math.round(salary / 12);
  // const grossIncomeBiWeekly = Math.round(salary / 26); // Assuming bi-weekly is 26 pay periods in a year
  const annualTax = calculateTax(salary);
  const monthlyTax = Math.round(annualTax / 12);
  const netIncome = Math.round(grossIncome - monthlyTax);
  const netIncomeBiWeekly = Math.round(netIncome/ 4); // Assuming bi-weekly is 26 pay periods in a year
  const superAmount = Math.round(grossIncome * (super_rate / 100));

  const startDate = new Date(paymentStart);
  const endDate = new Date(startDate);
  endDate.setMonth(endDate.getMonth() + 1);
  endDate.setDate(0);
  
  const monthName = startDate.toLocaleString('default', { month: 'long', year: 'numeric' });

  return {
    name: `${firstName} ${lastName}`,
    month: monthName,
    grossIncome,
    incomeTax: monthlyTax,
    netIncomeBiWeekly,
    netIncome,
    super: superAmount,
    payPeriod: `${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}`
  };
};