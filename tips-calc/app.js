let tips = [];
let finalBills = [];

function calcTip(bill){

    if(bill <= 50){
        const tip = bill * 0.2;
        const totalBill = bill * 1.2;
        tips.push(tip);
        finalBills.push(totalBill);
    }
    else if(bill > 50 && bill <= 200) {
        const tip = bill * 0.15;
        const totalBill = bill * 1.15;
        tips.push(tip);
        finalBills.push(totalBill);
    }
    else {
        const tip = bill * 0.10;
        const totalBill = bill * 1.10;
        tips.push(tip);
        finalBills.push(totalBill);
    }
}

calcTip(124);
calcTip(48);
calcTip(268);
console.log('tips', tips);
console.log('total bills', finalBills)

