var getTimeStamp = moment();
var day = getTimeStamp.format('Do');
var month = getTimeStamp.format('MMMM');
var weekDay = getTimeStamp.format('dddd');

// display current day on header
let currentDayEl = `${weekDay}, ${month} ${day}`;
$("#currentDay").text(currentDayEl);
let hour = moment().format().split("T")[1].split(":")[0];

// retrieve storage for 9am - 5pm
var hours = JSON.parse(localStorage.getItem("hoursState")) || [
    {
        timeEl: "9am",
        timeValue: 9,
        note: "",
    },
    {
        timeEl: "10am",
        timeValue: 10,
        note: "", 
    },
    {
        timeEl: "11am",
        timeValue: 11,
        note: "", 
    },
    {
        timeEl: "12pm",
        timeValue: 12,
        note: "", 
    },
    {
        timeEl: "1pm",
        timeValue: 13,
        note: "", 
    },
    {
        timeEl: "2pm",
        timeValue: 14,
        note: "", 
    },
    {
        timeEl: "3pm",
        timeValue: 15,
        note: "", 
    },
    {
        timeEl: "4pm",
        timeValue: 16,
        note: "", 
    },
    {
        timeEl: "5pm",
        timeValue: 17,
        note: "", 
    },
];

// display hours and notes in body
var hourEl = hours.map((h, i) => {
    var threeChar = h.timeEl.length === 3;
    var past = h.timeValue < hour;
    var present = h.timeValue === hour;
    var future = h.timeValue > hour;
    // work scheduler in body
    return `
        <div id="${`hours-${i}`}" class="row">
            <div class="hour">
                ${threeChar ? `${h.timeEl} ` : h.timeEl}
            </div>
            <textarea
                class="textarea ${past && "past"} ${present && "present"} ${future && "future"}
                ">${h.note}
            </textarea>
            <button class ="saveBtn">
                <i class="bi-save"></i>
            </button>
        </div>
    `;
});

// container for hours and notes
$("#container").empty().html(hourEl);