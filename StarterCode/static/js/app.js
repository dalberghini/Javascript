// from data.js
var tableData = data;
var tbody = d3.select("tbody");
var button = d3.select("button");
var form = d3.select("form");
// YOUR CODE HERE!
function create_table(tableData) {
    tableData.forEach((data_list) =>{
        var row = tbody.append("tr");
        Object.entries(data_list).forEach(([key,value])=>{
            var cell = row.append("td");
            cell.text(value);
        });
    });
}
create_table(tableData);
button.on("click", runFilter);
form.on("submit", runFilter);


function runFilter() {
    d3.event.preventDefault();
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    var filteredData = tableData.filter(filtering => filtering.datetime === inputValue);
    tbody.html("");
    filteredData.forEach((filtering) => {
        var row = tbody.append("tr");
        Object.entries(filtering).forEach(([key,value])=>{
            var cell = row.append("td");
            cell.text(value);
        });
    });
    if (inputValue === "") {
        create_table(tableData);
    }
}