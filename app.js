function calculateTax() {
    // Get income from input
    const income = parseFloat(document.getElementById("incomeInput").value);

    const oldTaxRegimeDeductions = calculateOldRegimeTaxDeductions();
    // Calculate taxes for both regimes
    const oldRegimeTax = calculateOldRegimeTax(
        income - oldTaxRegimeDeductions
    );
    const newRegimeTax = calculateNewRegimeTax(income);

    // Display result
    const resultElement = document.getElementById("result");
    resultElement.innerHTML = `
        <div class="regime-comparison">
            <div class="regime-column">
                <h4>Old Tax Regime</h4>
                <p>Gross Income: ₹${income.toLocaleString()}</p>
                <p>Basic Exemption: ₹50,000</p>
                <p>Taxable Income: ₹${Math.max(
                    income - 50000 - oldTaxRegimeDeductions,
                    0
                ).toLocaleString()}</p>
                <p>Total Tax Payable: ₹${Math.round(
                    oldRegimeTax
                ).toLocaleString()}</p>
            </div>
            <div class="regime-column">
                <h4>New Tax Regime</h4>
                <p>Gross Income: ₹${income.toLocaleString()}</p>
                <p>Basic Exemption: ₹75,000</p>
                <p>Taxable Income: ₹${Math.max(
                    income - 75000,
                    0
                ).toLocaleString()}</p>
                <p>Total Tax Payable: ₹${Math.round(
                    newRegimeTax
                ).toLocaleString()}</p>
            </div>
        </div>
        <div class="text-center mt-3">
            <p class="fw-bold">
                ${
                    oldRegimeTax < newRegimeTax
                        ? "Old Regime is More Beneficial"
                        : "New Regime is More Beneficial"
                }
            </p>
        </div>
    `;
}
