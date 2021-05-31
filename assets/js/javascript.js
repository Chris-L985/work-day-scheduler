var getTimeStamp = moment();
var day = getTimeStamp.format('Do');
var month = getTimeStamp.format('MMMM');
var weekDay = getTimeStamp.format('dddd');

// display current day on header
let currentDayEl = `${weekDay}, ${month} ${day}`;
$("#currentDay").text(currentDayEl);
let hour = moment().format().split("T")[1].split(":")[0];