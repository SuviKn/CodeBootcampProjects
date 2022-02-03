// Practicing While & For loops with fizz buzz sequence
// if the number is divisible by 3 push "Fizz"
// if the number is divisible by 5 push "Buzz"
// if with both push "FizzBuzz"

var output = []
var count = 1;

function fizzBuzz() {


    while (count <= 100) {

        if (count % 3 === 0 && count % 5 === 0) {
            output.push("FizzBuzz");
        }
            else if (count % 3 === 0) {
                output.push("Fizz");
            }
            else if (count % 5 === 0) {
                output.push("Buzz");
            }

            else {
                output.push(count);
            }


        count++;
    }

    console.log(output);
}



function fizzBuzzFor() {

    var output = [];
    for (var count=1; count < 101; count++) {

        if (count % 3 === 0 && count % 5 === 0) {
            output.push("FizzBuzz");
        }
            else if (count % 3 === 0) {
                output.push("Fizz");
            }
            else if (count % 5 === 0) {
                output.push("Buzz");
            }

            else {
                output.push(count);
            }


    }

    console.log(output);
}
