// calculate how many months, weeks and days you have left based on your age

function lifeInWeeks(age) {

    var months = (90*12) - (age*12)
    var weeks = (90*52) - (age*52)
    var days = (90*365) - (age*365)
    console.log("You have " + days + " days, " + weeks + " weeks, " + "and " + months + " months left." )
