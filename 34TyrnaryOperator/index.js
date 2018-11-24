function tossCoin() {
    var value = Math.random();
    var result;

    result = (value < 0.5) ? 'Mat Sap' : 'Mat ngua';
    
    console.log(result);
}

tossCoin();

