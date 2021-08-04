document.getElementById('loanForm').addEventListener('submit', calculateResults);

function calculateResults(e) {

    //form variables 
    const uiLoanAmount = document.getElementById('LoadAmount');
    const uiAnnualInterest = document.getElementById('AnnualInterest');
    const uiRepaymentYears = document.getElementById('RepaymentYears');

    const monthlyPayment = document.getElementById('MonthlyPayment');
    const totalPayment = document.getElementById('TotalPayment');
    const totalInterest = document.getElementById('TotalInterest');

    //amount declarations
    const loanAmount = parseFloat(uiLoanAmount.value) / 100 / 12;;
    const annualInterest = parseFloat(uiAnnualInterest.value) * 12;
    const RepaymentYears = parseFloat(uiRepaymentYears.value);

    //Compute Monthly Payment 
    const x = Math.pow(1 + annualInterest, RepaymentYears);
    const monthly = (loanAmount * x * annualInterest) / (x - 1);

    if (isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayments) - loanAmount).toFixed(2);
    } else {
        console.log("error");
    }

    e.preventDefault();

}