// Checking if the given name is in the guestlist

// creating an array
var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];

guestList.push("Suvi")

// removing last item from the array
guestList.pop()

function isInList() {

    var name = prompt("Write your name:");

    if (guestList.includes(name)){
        alert("Welcome " + name + "!");
    } else {
        alert("Sorry you are not invited");
    }

}

isInList()
