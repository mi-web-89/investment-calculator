import "./App.css";
import { useState } from "react";
import Header from "./components/header";
import UserInput from "./components/user-input";
import ResultInvest from "./components/result-invest";

function App() {
  const [investment, setInvestment] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  // const inputIsValid = investment.duration >= 1;

  function handleInput(inputIdentifier, newValue) {
    setInvestment((prevInvestment) => {
      return {
        ...prevInvestment,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      {/* two way binding */}
      <UserInput investment={investment} onChangeInput={handleInput} />
      {/* {!inputIsValid && <p className="center">please enter valid input data</p>} */}
      {/* {inputIsValid && <ResultInvest invest={investment} />} */}
      <ResultInvest invest={investment} />
    </>
  );
}

export default App;
