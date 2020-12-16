var dayHours = ["10", "11", "12", "13", "14", "15", "16", "17"];













// Creating elements

for (i=0; i < dayHours.length; i++) {
var row = $("<div>");
row.addClass("row time-block");
    var hour = $("<div>");
    hour.addClass("hour col-1").text(dayHours[i]);
    row.append(hour);

    var textArea = $("<textarea>")
    textArea.addClass("past description col-10");
    row.append(textArea);

    var button = $("<button>");
    button.addClass("saveBtn fas fa-save col-1");
    row.append(button)
$(".container").append(row);
};
