import { calculateInvestmentResults, formatter } from "./Investment";

export default function Results({ userInput }) {
  console.log("userInput", userInput);
  const resultData = calculateInvestmentResults(userInput);
  console.log(userInput);
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment value</th>
          <th>interest</th>
          <th>Total interest</th>
          <th>Investment Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultData.map((yearData) => {
          const initialInvestment =
            resultData[0].valueEndOfYear -
            resultData[0].interest -
            resultData[0].annualInvestment;
          const totalInterest =
            yearData.valueEndOfYear -
            yearData.annualInvestment * yearData.year -
            initialInvestment;
          const totalAmountInvested = yearData.valueEndOfYear - totalInterest;
          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
