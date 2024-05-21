const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <>
      <div className="container">
        <button className="close-btn">&times;</button>
        <div className="steps">
          <div className="step active">1</div>
          <div className="step">2</div>
          <div className="step">3</div>
        </div>
        <div className="message">
          <p>Step 1:Learn React</p>
        </div>
        <div className="actionBtns">
          <button className="btn">Previous</button>
          <button className="btn">Next</button>
        </div>
      </div>
    </>
  );
}
