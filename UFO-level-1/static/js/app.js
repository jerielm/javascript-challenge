// from data.js
var tableData = data;

// variable references
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]
var inputcity = d3.select("#city");
var inputdate = d3.select("#datetime");
var button = d3.select("#filter-btn");
var tbody = d3.select("tbody");

// pushing data to html
var datatohtml = (dataInput) => { dataInput.forEach(ufo => {
    var row = tbody.append("tr");
    columns.forEach(column => row.append("td").text(ufo[column]))
});
};

datatohtml(tableData);

//button click event function

button.on("click",() => {
    d3.event.preventDefault();
    var sightingdate = inputdate.property("value").trim();
    var filterdate = tableData.filter(tableData => tableData.datetime === inputDate);
    tbody.html("");

    let response = {
        filterDate
    }
    if(response.filterDate.length !== 0) {
        addData(filterDate);
    }

        else {
            $tbody.append("tr").append("td").text("No Sightings");
        }
})