import {calculateInvestmentResults,formatter} from '../util/investment'

export default function Results({inputs}){
   const resultsData= calculateInvestmentResults(inputs);
   const initialInvestment=resultsData[0].valueEndOfYear-resultsData[0].interest-resultsData[0].annualInvestment;
   console.log(resultsData);

    return <table id="result">
   <thead>
    <tr>
        
            <th>Year</th>
            <th>InvestmentValue</th>
            <th>Interest(Year)</th>
            <th>Total Interest</th>
            <th>Investment Capital</th>
        
    </tr>
   </thead>
   <tbody>
    {resultsData.map((yearData)=>{
        const totalInterest=yearData.valueEndOfYear-yearData.annualInvestment*yearData.year-initialInvestment;
        const totalAmountInvest=yearData.valueEndOfYear-totalInterest
        return (
            <tr key={yearData.year}>
                <td>{yearData.year}</td>
                <td>{formatter.format(yearData.valueEndOfYear)}</td>
                <td>{formatter.format(yearData.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(totalAmountInvest)}</td>
            </tr>
        );
        }
    )}

   </tbody>
    </table>


}