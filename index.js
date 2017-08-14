
const chalk = require('chalk');

var moment = require('moment');
moment().format();

//above are requirements




if (moment().isDST()) {
  var dtime  = "is"
}

// above is daylight savings time

if (moment().isLeapYear()) {
  var leapTime = "is"
} else {
  var leapTime = "is not"
}

var now = moment()

var secs = (now.format("H")*3600) + (now.format("M")*60) + (now.format("s"))
console.log(secs)

// above can be exported/required in seperate file?
//above is leap year functions


  console.log("it is " + (chalk.blue (moment().format("dddd, MMMM Do YYYY, h:mm:ss a"))) +".")
  console.log("it is the " + (chalk.magenta (moment().format("DDDo"))) +" day of the year.")
  console.log("it " + (chalk.greenBright (dtime)) + " during daylight savings time.")
  console.log("it is " + (chalk.yellow (secs)) + " seconds into the day.")
  console.log("it " + (chalk.red (leapTime)) + " a leap year.")
