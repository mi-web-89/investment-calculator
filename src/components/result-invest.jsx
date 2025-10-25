import { calculateInvestmentResults, formatter } from "../util/investment";

export default function ResultInvest({ invest }) {
  const resultData = [];
  calculateInvestmentResults(invest, resultData);

  if(resultData.length === 0) {
    return <p className="center">Invalid data provided</p>
  }

  const initialInvestment =
    resultData[0].valueEndOfYear -
    resultData[0].interest -
    resultData[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultData.map((investData) => {
          const totalInterest =
            investData.valueEndOfYear -
            investData.annualInvestment * investData.year -
            initialInvestment;

          const totalAmountInvested = investData.valueEndOfYear - totalInterest;

          return (
            <tr key={investData.year}>
              <td>{investData.year}</td>
              <td>{formatter.format(investData.valueEndOfYear)}</td>
              <td>{formatter.format(investData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
