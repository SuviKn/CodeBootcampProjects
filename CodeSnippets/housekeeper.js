// Creating constructor function and objects


function HouseKeeper (name, age, yearsOfExperience, cleaningRepertoire) {
    this.name = name;
    this.age = age;
    this.yearsOfExperience = yearsOfExperience;
    this.cleaningRepertoire = cleaningRepertoire;
    this.cleaning = function() {
        alert("Cleaning in progress");
    }
}

var houseKeeper1 = new HouseKeeper("Julia", 24, 2, ["bathroom", "lobby"]);

var houseKeeper2 = new HouseKeeper("Josh", 19, 1, ["bathroom", "bedroom"]);
