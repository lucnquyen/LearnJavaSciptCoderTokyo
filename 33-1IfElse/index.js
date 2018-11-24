function tossCoin() {
    // tao gia tri ngua nhine
    var value = Math.random();

    if(value < 0.5) {
        console.log("Mat sap");
    } else {
        console.log("Nat ngua");
    }
}

// tossCoin();

function shouldDateGirl() {
    var value = Math.random();

    if(value < 0.5) {
        console.log("Yes, do it");
    } else {
        console.log("No, do it, it 's ok, nothing to care");
    }
}

// shouldDateGirl();

function countBills(bills) {
    var totals =0;
    for(var bill of bills) {
       if(!bill.fake) {
        totals += bill.value;
       } else {
           console.log('fake bills', bill);
           break;
       }
    }

    return totals;
}

var bills = [
    {value : 1000 },
    {value : 2000},
    {value : 3000, fake : true},
    {value : 4000}
];

var totals = countBills(bills);
console.log(totals);