// This function receives the annual salary and calculates how much tax a person should pay annually based
// on Australian tax brackets. We're exporting this function so it can be used in other files.
export const calculateTax = (annualSalary) => {
  const MIN_AMOUNT = 18200; // This is the tax-free threshold — income up to $18,200 is not taxed in Australia.
  let incomeTax; // We declare a variable to hold the tax amount after the calculation.

  if (annualSalary <= MIN_AMOUNT) {
    incomeTax = 0; // If someone earns less than or equal to $18,200, they don’t pay any income tax.
  } else if (annualSalary <= 37000) {
    incomeTax = (annualSalary - MIN_AMOUNT) * 0.19; // This bracket is $18,201 – $37,000. You pay 19% tax only on the part above $18,200.
  } else if (annualSalary <= 80000) {
    incomeTax = (annualSalary - 37000) * 0.325 + 3572; // If your salary is between $37,001 and $80,000, you pay 32.5% on the amount above $37,000. The $3572 is the tax for the first bracket, already added.
  } else if (annualSalary <= 180000) {
    incomeTax = (annualSalary - 80000) * 0.37 + 17547; // If you earn between $80,001 and $180,000, the rate is 37% on the portion over $80,000. $17547 is the cumulative tax from previous brackets.
  } else {
    incomeTax = (annualSalary - 180000) * 0.45 + 54547; // If your income is over $180,000, you pay 45% tax on the excess. $54547 is the cumulative tax up to $180,000.
  }

  return incomeTax; //Finally, return the calculated total yearly tax.
};

// Returns a full payslip object from the form data
// This function accepts the form inputs (first name, last name, salary, super rate, etc.) and returns a detailed payslip.
export const calculatePayslip = (formData) => {
  const { firstName, lastName, annualSalary, superRate, paymentStart } =
    formData; // We extract all values from the form.

  // Convert string inputs into numbers. (because form data comes as strings)
  const salary = parseFloat(annualSalary);
  const super_rate = parseFloat(superRate);

  // This calculates monthly gross income. For example, if salary is $60,000/year → $5,000/month.
  const grossIncome = Math.round(salary / 12);
  // const grossIncomeBiWeekly = Math.round(salary / 26); // Assuming bi-weekly is 26 pay periods in a year
  const annualTax = calculateTax(salary); // We call the calculateTax function to get the total tax per year.
  const monthlyTax = Math.round(annualTax / 12); // We divide the annual tax by 12 to get monthly tax.
  const netIncome = Math.round(grossIncome - monthlyTax); // Net income = gross income − tax. This is the actual take-home pay per month.

  // We approximate bi-weekly net income (2 weeks' worth of take-home pay).
  const netIncomeBiWeekly = Math.round(netIncome / 4); // Assuming bi-weekly is 26 pay periods in a year
  const superAmount = Math.round(grossIncome * (super_rate / 100)); // Calculate superannuation (Australian retirement fund), based on a % of gross income.

  // We take the user's selected start date, create an end date using Date object that is one full month later, and set the day to the last day of that month.
  const startDate = new Date(paymentStart);
  const endDate = new Date(startDate);
  endDate.setMonth(endDate.getMonth() + 1);
  endDate.setDate(0);

  // This converts the start date into a nice string like "July 2025".
  const monthName = startDate.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  // Return the Payslip Object
  // We bundle all the calculated values into a JavaScript object, which gets passed to the UI to display a professional payslip.
  return {
    name: `${firstName} ${lastName}`,
    month: monthName,
    grossIncome,
    incomeTax: monthlyTax,
    netIncomeBiWeekly,
    netIncome,
    super: superAmount,
    payPeriod: `${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}`,
  };
};
