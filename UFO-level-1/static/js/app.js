// from data.js
var dataTable = data;

// YOUR CODE HERE!

// Table body
var tbody = d3.select("tbody");

console.log(data);

dataTable.forEach((UFOsighting) => {
    console.log(UFOsighting);
    var row = tbody.append("tr");
    Object.entries(UFOsighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

// Filter Button and Input Element
var submit = d3.select("#filter-btn");
var form = d3.select("#form");
submit.on("click", runEnter);
form.on("submit", runEnter);

// Input Element and Value Property
function runEnter() {
    d3.event.preventDefault();
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
 
   // Filter Data
   var filteredData = dataTable.filter(row => row.datetime === inputValue)

   console.log(filteredData)

   tbody.selectAll('tr').remove()

    filteredData.forEach((UFOsighting) => {
        var row = tbody.append("tr");
        Object.entries(UFOsighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
};

