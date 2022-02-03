// Generating random values and takes names as inout and alerts the output

function loveCalc() {

    var name1 = prompt("Your name:");
    var name2 = prompt("Other person's name:");

    var lovePercentage = Math.floor(Math.random()*100) +1;

    if (lovePercentage > 70) {
        alert("You got over 70 points gongrats!!!!! your love percentage is " + lovePercentage + "%");
    }

    if (lovePercentage > 30 && lovePercentage <= 70) {
        alert("Your love percentage is " + lovePercentage + "%")
    } else {
        alert(name1 +  " loves " + name2 + " " + lovePercentage + "%");
    }


}

loveCalc()
