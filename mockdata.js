<!DOCTYPE html>
<html>
<head>
    <style>
        table {
            border-collapse: collapse;
            width: 100%;
        }
        th, td {
            padding: 8px;
            text-align: left;
            border-bottom: 1px solid #ddd;
        }
    </style>
</head>
<body>
    <table id="shipment-table">
        <thead>
            <tr>
                <th>SAP Shipment Number</th>
                <th>Planned Ship Date</th>
                <th>Customer ID</th>
                <th>Part Number</th>
                <th>Carrier ID</th>
                <th>Weight</th>
                <th>Height</th>
                <th>Length</th>
                <th>Width</th>
                <th>AES Number</th>
            </tr>
        </thead>
        <tbody></tbody>
    </table>

    <script>
    var mockdata = [
    {"SAP Shipment Number": "900", "Planned Ship Date": "2023-06-20", "Customer ID": "CA1006", "Part Number": "997-3450",
    "Carrier ID": "XYZ", "Weight": "1500", "Height": "60", "Length": "60", "Width": "60", "AES Number": "NA"},
    {"SAP Shipment Number": "901", "Planned Ship Date": "2023-06-25", "Customer ID": "CB1001", "Part Number": "997-6670",
    "Carrier ID": "ABA", "Weight": "500", "Height": "48", "Length": "36", "Width": "72", "AES Number": "NA"},
    {"SAP Shipment Number": "908", "Planned Ship Date": "2023-06-29", "Customer ID": "CC4001", "Part Number": "997-3450",
    "Carrier ID": "UPS", "Weight": "1500", "Height": "60", "Length": "60", "Width": "60", "AES Number": "X2023062854321"},
    {"SAP Shipment Number": "910", "Planned Ship Date": "2023-07-02", "Customer ID": "CC5001", "Part Number": "998-1150",
    "Carrier ID": "FDX", "Weight": "3500", "Height": "121", "Length": "101", "Width": "105", "AES Number": "X2023070112345"},
    {"SAP Shipment Number": "999", "Planned Ship Date": "2023-07-14", "Customer ID": "CC5001", "Part Number": "999-1150",
    "Carrier ID": "FDX", "Weight": "3500", "Height": "121", "Length": "101", "Width": "105", "AES Number": "X2023070112345"}
];

document.addEventListener('DOMContentLoaded', function() {
    var tableBody = document.getElementById("shipment-table").getElementsByTagName("tbody")[0];
    var rowsHTML = "";

    for (var i = 0; i < mockdata.length; i++) {
        var shipment = mockdata[i];
        rowsHTML += "<tr>" +
            "<td>" + shipment["SAP Shipment Number"] + "</td>" +
            "<td>" + shipment["Planned Ship Date"] + "</td>" +
            "<td>" + shipment["Customer ID"] + "</td>" +
            "<td>" + shipment["Part Number"] + "</td>" +
            "<td>" + shipment["Carrier ID"] + "</td>" +
            "<td>" + shipment["Weight"] + "</td>" +
            "<td>" + shipment["Height"] + "</td>" +
            "<td>" + shipment["Length"] + "</td>" +
            "<td>" + shipment["Width"] + "</td>" +
            "<td>" + shipment["AES Number"] + "</td>" +
            "</tr>";
    }

    tableBody.innerHTML = rowsHTML;
});
    </script>
</body>
</html>