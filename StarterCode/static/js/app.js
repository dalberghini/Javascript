// from data.js
var tableData = data;
var tbody = d3.select("tbody");
// YOUR CODE HERE!
tableData.forEach((data_list) =>{
    console.log(data_list);
    var row = tbody.append("tr");
    Object.entries(data_list).forEach(([key,value])=>{
        var cell = row.append("td");
        cell.text(value);
    });
});