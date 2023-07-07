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
            {"SAPShipmentNumber": "900", "PlannedShipDate": "2023-06-20", "CustomerID": "CA1006", "PartNumber": "997-3450",
            "CarrierID": "XYZ", "Weight": "1500", "Height": "60", "Length": "60", "Width": "60", "AESNumber": "NA"},
            {"SAPShipmentNumber": "901", "PlannedShipDate": "2023-06-25", "CustomerID": "CB1001", "PartNumber": "997-6670",
            "CarrierID": "ABA", "Weight": "500", "Height": "48", "Length": "36", "Width": "72", "AESNumber": "NA"},
            {"SAPShipmentNumber": "908", "PlannedShipDate": "2023-06-29", "CustomerID": "CC4001", "PartNumber": "997-3450",
            "CarrierID": "UPS", "Weight": "1500", "Height": "60", "Length": "60", "Width": "60", "AESNumber": "X2023062854321"},
            {"SAPShipmentNumber": "910", "PlannedShipDate": "2023-07-02", "CustomerID": "CC5001", "PartNumber": "998-1150",
            "CarrierID": "FDX", "Weight": "3500", "Height": "121", "Length": "101", "Width": "105", "AESNumber": "X2023070112345"},
            {"SAPShipmentNumber": "999", "PlannedShipDate": "2023-07-14", "CustomerID": "CC5001", "PartNumber": "999-1150",
            "CarrierID": "FDX", "Weight": "3500", "Height": "121", "Length": "101", "Width": "105", "AESNumber": "X2023070112345"}
        ];

        document.addEventListener('DOMContentLoaded', function() {
            var tableBody = document.getElementById("shipment-table").getElementsByTagName("tbody")[0];
            var rowsHTML = "";

            for (var i = 0; i < mockdata.length; i++) {
                var shipment = mockdata[i];
                rowsHTML += "<tr>" +
                    "<td>" + shipment.SAPShipmentNumber + "</td>" +
                    "<td>" + shipment.PlannedShipDate + "</td>" +
                    "<td>" + shipment.CustomerID + "</td>" +
                    "<td>" + shipment.PartNumber + "</td>" +
                    "<td>" + shipment.CarrierID + "</td>" +
                    "<td>" + shipment.Weight + "</td>" +
                    "<td>" + shipment.Height + "</td>" +
                    "<td>" + shipment.Length + "</td>" +
                    "<td>" + shipment.Width + "</td>" +
                    "<td>" + shipment.AESNumber + "</td>" +
                    "</tr>";
            }

            tableBody.innerHTML = rowsHTML;
        });
    </script>
</body>
</html>