$(document).ready(function() {
    $.getJSON('actionEconomy.json', function(data) {
        let tableContent = "<thead><tr>";

        for (const category in data) {
            tableContent += "<th>" + category.replace("_", " ") + "</th>";
        }

        tableContent += "</tr></thead><tbody>";


        const maxRows = Math.max(...Object.values(data).map(arr => arr.length));

        for (let i = 0; i < maxRows; i++) {
            tableContent += "<tr>";
            for (const category in data) {
                tableContent += "<td>" + (data[category][i] || "<textarea type=text placeholder='More' class='notepad bg-warning'></textarea>") + "</td>";
            }
            tableContent += "</tr>";
        }

        tableContent += "</tbody>";


        $("#box").html(tableContent);
    });
});