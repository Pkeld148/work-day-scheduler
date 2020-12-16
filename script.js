var dayHours = ["10", "11", "12", "13", "14", "15", "16", "17"];








for (i=0; i < dayHours.length; i++) {
var row = $("<div>");
row.addClass("row time-block");
    var hour = $("<div>");
    hour.addClass("hour col-1").text(dayHours[i] + ":00");
    row.append(hour);

    var textArea = $("<textarea>")
    textArea.addClass("past description col-10");
    textArea.attr("textIndex", i+1);
    row.append(textArea);

    var button = $("<button>");
    button.addClass("saveBtn fas fa-save col-1");
    button.attr("buttonIndex", i+1);
    row.append(button)
$(".container").append(row);
};

$(".saveBtn").on("click", function() {
    console.log("YOU CLICKED A SAVE BUTTON");
    console.log("YOU CLICKED BUTTON WITH BUTTON INDEX = " + $(this).attr("buttonIndex"));

});


// var textIndex = $("textIndex");
// textIndex.text("YO WAT UP");

// $("<textarea>").textIndex[3].text("YO WAT UP");
// $("#textIndex[3]").text("YO WAT UP");



// TODO: GET CURRENT DATE/TIME TO DISPLAY AT TOP

// var currentTime = $("#currentDay");
// currentTime.text("FIGURE THIS MOMENT SHIT OUT LATER");