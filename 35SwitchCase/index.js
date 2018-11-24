//
//
// discount:
// bronze 2%
// silver 5%
// glod 7%
// diamond 10%

var memberCard = {
    tier : 'bronze'
};

function getTotal(price, card) {
    var discountRate;

    if(card.tier === 'bronze') {
        discountRate = 0.02;
    } else if(card.tier  === 'silver') {
        discountRate = 0.05;
    } else if(card.tier  === 'gold') {
        discountRate = 0.07;
    } else {
        discountRate = 0.1;
    }
    
    return price = (1 - discountRate);
}


var total = getTotal(1000, memberCard);
console.log(total);