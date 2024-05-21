import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);

  function handleNext() {
    if (step < 3) setStep((s) => s + 1);
  }

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }
  return (
    <>
      <div className="container">
        <button className="close-btn">&times;</button>
        <div className="steps">
          <div className={step >= 1 ? "active" : ""}>1</div>
          <div className={step >= 2 ? "active" : ""}>2</div>
          <div className={step >= 3 ? "active" : ""}>3</div>
        </div>
        <div className="message">
          <p>
            Step {step}: {messages[step - 1]}
          </p>
        </div>
        <div className="actionBtns">
          <button className="btn" onClick={handlePrevious}>
            Previous
          </button>
          <button className="btn" onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
    </>
  );
}
