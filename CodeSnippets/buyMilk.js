// calculating the amount of purchased milk bottles based on the given amount and
// calculating the change

function getMilk(money){
    var price = 1.5;
    bottles = Math.floor(money / price);
    var change = money % price;
    console.log('buy ' + bottles + ' bottles of milk');
    console.log(change + " euros left")

}

getMilk(5)
