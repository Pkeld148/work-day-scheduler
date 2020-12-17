var dayHours = ["10", "11", "12", "13", "14", "15", "16", "17"];

var buttonEl = $(".saveBtn");
var notesArea = $(".notes");

var notesObject = {};
var notesArray = [];

// CREATING ROW ELEMENTS
for (i = 0; i < dayHours.length; i++) {
  var row = $("<div>");
  row.addClass("row time-block");
  var hour = $("<div>");
  hour.addClass("hour col-1").text(dayHours[i] + ":00");
  row.append(hour);

  var textArea = $("<textarea>");
  textArea.addClass("past description col-10");
  textArea.attr("id", "notes" + (i + 1));
  row.append(textArea);

  var button = $("<button>");
  button.addClass("saveBtn fas fa-save col-1");
  button.attr("id", "button" + (i + 1));
  row.append(button);
  $(".container").append(row);
}

$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    console.log("YOU CLICKED A SAVE BUTTON");
    
 $(".description").text("THIS FUCKING SUCKS");


  });
});

// TODO: GET CURRENT DATE/TIME TO DISPLAY AT TOP

// var currentTime = $("#currentDay");
// currentTime.text("FIGURE THIS MOMENT SHIT OUT LATER");
