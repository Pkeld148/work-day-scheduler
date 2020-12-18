var dayHours = ["10", "11", "12", "13", "14", "15", "16", "17", "18", "19"];

var buttonEl = $(".saveBtn");
var notesArea = $(".notes");
var currentDay = $("#currentDay");
var testDiv = $("#testDiv");


// CREATING ROW ELEMENTS
for (i = 0; i < dayHours.length; i++) {
  var row = $("<div>");
  row.addClass("row time-block");
  var hour = $("<div>");
  if (dayHours[i] > 12) {
    hour.addClass("hour col-1").text(dayHours[i] - 12 + ":00");
    row.append(hour);
  } else {
  hour.addClass("hour col-1").text(dayHours[i] + ":00");
  row.append(hour);
  }



  var textArea = $("<textarea>");
  if (moment().format('HH') > dayHours[i]) {
    textArea.addClass("past description col-10");
  } else if (moment().format('HH') < dayHours[i]) {
    textArea.addClass("future description col-10");
  } else {
    textArea.addClass("present description col-10");
  }
  textArea.attr("data-text", (i + 1));
  row.append(textArea);

  var button = $("<button>");
  button.addClass("saveBtn fas fa-save col-1");
  button.attr("data-button", (i + 1));
  row.append(button);
  $(".container").append(row);
}
currentDay.text(moment().format('MMMM Do YYYY'));

$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    var buttonIndex = $(this).attr("data-button");
    console.log($(this).attr("data-button"));
    console.log(" YOU CLICKED BUTTON: " + buttonIndex);
  });

  

});

// TODO: GET CURRENT DATE/TIME TO DISPLAY AT TOP

// var currentTime = $("#currentDay");
// currentTime.text("FIGURE THIS MOMENT SHIT OUT LATER");
