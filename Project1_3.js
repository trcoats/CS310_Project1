function buttonPressed(){
    var annualIncome = document.getElementById("income").value;
    var numberOfDependents = document.getElementById("dependents").value;
    var taxableIncome;
    var incomeTax;

    if(annualIncome > 450000){
        taxableIncome = annualIncome - (numberOfDependents * 1000);
        incomeTax = taxableIncome * .396;
    }
    else if(annualIncome > 378000 && annualIncome <= 450000){
        taxableIncome = annualIncome - (numberOfDependents * 1000);
        incomeTax = taxableIncome * .33;
    }
    else if(annualIncome > 192000 && annualIncome <= 378000){
        taxableIncome = annualIncome - (numberOfDependents * 1000);
        incomeTax = taxableIncome * .28;
    }
    else if(annualIncome > 71000 && annualIncome <= 192000){
        taxableIncome = annualIncome - (numberOfDependents * 1000);
        incomeTax = taxableIncome * .25;
    }
    else if(annualIncome > 15000 && annualIncome <= 71000){
        taxableIncome = annualIncome - (numberOfDependents * 1000);
        incomeTax = taxableIncome * .15;
    }
    else{
        taxableIncome = annualIncome - (numberOfDependents * 1000);
        incomeTax = taxableIncome * .1;
    }

    alert("Total income tax of an annual income of $" + annualIncome + " with " + numberOfDependents +
        " dependents is $" + incomeTax);
}