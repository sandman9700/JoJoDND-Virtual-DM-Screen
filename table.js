$(document).ready(function() {
    $.getJSON('actionEconomy.json', function(data) {
        let tableContent = "<thead><tr>";

        // Create the table headers
        for (const category in data) {
            tableContent += "<th>" + category.replace("_", " ") + "</th>";
        }

        tableContent += "</tr></thead><tbody>";

        // Find the maximum number of rows needed
        const maxRows = Math.max(...Object.values(data).map(arr => arr.length));

        // Create the rows
        for (let i = 0; i < maxRows; i++) {
            tableContent += "<tr>";
            for (const category in data) {
                tableContent += "<td>" + (data[category][i] || "") + "</td>";
            }
            tableContent += "</tr>";
        }

        tableContent += "</tbody>";

        // Update the table's HTML
        $("#box").html(tableContent);
    });
});