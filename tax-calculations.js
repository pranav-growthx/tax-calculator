function calculateOldRegimeTax(income) {
    // Old Regime Tax Calculation
    const basicExemption = 50000;
    let taxableIncome = income - basicExemption;

    // If income is less than or equal to basic exemption, no tax
    if (taxableIncome <= 0) {
        return 0;
    }

    let tax = 0;

    // Slab 1: 2.5L-5L @ 5%
    if (taxableIncome > 250000) {
        const slab1 = Math.min(taxableIncome, 500000) - 250000;
        tax += slab1 * 0.05;
    }

    // Slab 3: 5L-10L @ 20%
    if (taxableIncome > 500000) {
        const slab3 = Math.min(taxableIncome, 1000000) - 500000;
        tax += slab3 * 0.2;
    }

    // Slab 4: Above 10L @ 30%
    if (taxableIncome > 1000000) {
        const slab4 = taxableIncome - 1000000;
        tax += slab4 * 0.3;
    }

    // Add 4% cess
    tax *= 1.04;

    return tax;
}

function calculateOldRegimeTaxDeductions() {
    const deductions = {
        "80c": document.getElementById("80c").value,
        "80ccd1b": document.getElementById("80ccd1b").value,
        "80eea": document.getElementById("80eea").value,
        "80e": document.getElementById("80e").value,
        "80eeb": document.getElementById("80eeb").value,
        "80d": document.getElementById("80d").value,
    };

    return Object.entries(deductions).reduce(
        (acc, curr) => acc + curr[1],
        0
    );
}

function calculateNewRegimeTax(income) {
    // New Regime Tax Calculation
    const basicExemption = 75000;
    const taxableIncome = income - basicExemption;
    const maxRebate = 1200000;
    
    // If income is less than or equal to basic exemption, no tax
    if (taxableIncome <= maxRebate) {
        return 0;
    }

    let tax = 0;

    // Slab 1: 4-8 lakh @ 5%
    if (taxableIncome > 400000) {
        const slab1 = Math.min(taxableIncome, 800000) - 400000;
        tax += slab1 * 0.05;
    }

    // Slab 2: 8-12 lakh @ 10%
    if (taxableIncome > 800000) {
        const slab2 = Math.min(taxableIncome, 1200000) - 800000;
        tax += slab2 * 0.1;
    }

    // Slab 3: 12-16 lakh @ 15%
    if (taxableIncome > 1200000) {
        const slab3 = Math.min(taxableIncome, 1600000) - 1200000;
        tax += slab3 * 0.15;
    }

    // Slab 4: 16-20 lakh @ 20%
    if (taxableIncome > 1600000) {
        const slab4 = Math.min(taxableIncome, 2000000) - 1600000;
        tax += slab4 * 0.2;
    }

    // Slab 5: 20-24 lakh @ 25%
    if (taxableIncome > 2000000) {
        const slab5 = Math.min(taxableIncome, 2400000) - 2000000;
        tax += slab5 * 0.25;
    }

    // Slab 6: Above 24 lakh @ 30%
    if (taxableIncome > 2400000) {
        const slab6 = taxableIncome - 2400000;
        tax += slab6 * 0.3;
    }

    tax *= 1.04; // Add 4% cess

    return tax;
}
