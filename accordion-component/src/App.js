import logo from "./logo.svg";
import "./App.css";
import Accordion from "./accordion.tsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ marginBottom: "5px" }}>
          Frequently Asked Questions (FAQs)
        </h1>
        <p>
          Got questions? We’ve got answers! Whether you’re curious about our
          student programs, the application process, or what it’s like to work
          at CNL, we’ve gathered the most common questions to help guide you.
        </p>
      </header>

      <div className="FAQ-content">
        <Accordion />
      </div>
    </div>
  );
}

export default App;
