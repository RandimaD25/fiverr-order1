import React, { useState } from "react"; // useState is a React hook used to manage local component state

// Follow imports are custom component and utility imports:
// Header: likely displays the app title/header.
// EmployeeForm: form to input employee details.
// PayslipDisplay: shows generated payslip after calculation.

// calculatePayslip: a function that contains the logic to calculate salary breakdown.
import Header from "./components/Header";
import EmployeeForm from "./components/EmployeeForm";
import PayslipDisplay from "./components/PayslipDisplay";
import { calculatePayslip } from "./utils/taxCalculator";

// This is the main functional component. Everything inside it defines the app’s logic and render behavior.
function App() {
  //   formData: stores user inputs from the form.
  // setFormData: function to update formData.
  // Initially all values are empty strings.
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    annualSalary: "",
    superRate: "",
    paymentStart: "",
  });

  //   Holds the final calculated payslip data.
  // When it's null, nothing will be shown in the PayslipDisplay.
  const [payslip, setPayslip] = useState(null);

  // Tracks the loading state when the payslip is being calculated (e.g., to show a spinner or disable the button temporarily).
  const [isCalculating, setIsCalculating] = useState(false);

  // This is a generic input handler for all fields in the form.
  // it extracts the input’s name and value, then updates the matching field in formData.
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // This function runs when the user clicks the "Generate Payslip" button.
  const handleCalculatePayslip = async () => {
    const {
      firstName,
      lastName,
      annualSalary,
      superRate,
      paymentStart,
    } = // Destructure inputs.
      formData;

    if (
      !firstName ||
      !lastName ||
      !annualSalary ||
      !superRate ||
      !paymentStart
    ) {
      alert("Please fill in all fields"); // Alerts and returns if any field is empty.
      return;
    }

    // Converts string inputs to numbers. (parseFloat())
    const salary = parseFloat(annualSalary);
    const super_rate = parseFloat(superRate);

    // Validates:
    // Salary must be positive.
    // Superannuation rate must be between 0% and 12%.
    if (salary <= 0 || super_rate < 0 || super_rate > 12) {
      alert("Please enter valid salary and super rate (0-12%)");
      return;
    }
    // Sets loading state to true.
    setIsCalculating(true);

    // Waits 800ms (to simulate real API behavior or loading).
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Calls the imported calculatePayslip() function with current form data.
    const calculatedPayslip = calculatePayslip(formData);

    // Saves the result into state.
    setPayslip(calculatedPayslip);

    // Ends the loading state.
    setIsCalculating(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <Header />

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* EmployeeForm receives current data, input handler, calculation handler, and loading state as props. */}
          <EmployeeForm
            formData={formData}
            onInputChange={handleInputChange}
            onCalculate={handleCalculatePayslip}
            isCalculating={isCalculating}
          />

          {/* payslipDisplay receives the payslip to conditionally show results.*/}
          <PayslipDisplay payslip={payslip} />
        </div>
      </div>
    </div>
  );
}

// Exports the App component as default so it can be used in main.jsx.
export default App;

// State Management	handles form inputs and result data using useState.
// Validation	ensures all fields are filled, values are valid before calculating.
// Calculation trigger	Runs payslip generation using a utility function.
// Component composition	Combines Header, Form, and Display into one layout.
// Styling TailwindCSS is used for layout, spacing, and responsiveness.
