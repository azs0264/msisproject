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
            {"sapshipmentNumber": "900", "plannedshipdate": "2023-06-20", "customerid": "CA1006", "partnumber": "997-3450",
            "carrierid": "XYZ", "weight": "1500", "height": "60", "length": "60", "width": "60", "aesnumber": "NA"},
            {"sapshipmentNumber": "901", "plannedshipdate": "2023-06-25", "customerid": "CB1001", "partnumber": "997-6670",
            "carrierid": "ABA", "weight": "500", "height": "48", "length": "36", "width": "72", "aesnumber": "NA"},
            {"sapshipmentNumber": "908", "plannedshipdate": "2023-06-29", "customerid": "CC4001", "partnumber": "997-3450",
            "carrierid": "UPS", "weight": "1500", "height": "60", "length": "60", "width": "60", "aesnumber": "X2023062854321"},
            {"sapshipmentNumber": "910", "plannedshipdate": "2023-07-02", "customerid": "CC5001", "partnumber": "998-1150",
            "carrierid": "FDX", "weight": "3500", "height": "121", "length": "101", "width": "105", "aesnumber": "X2023070112345"},
            {"sapshipmentNumber": "999", "plannedshipdate": "2023-07-14", "customerid": "CC5001", "partnumber": "999-1150",
            "carrierid": "FDX", "weight": "3500", "height": "121", "length": "101", "width": "105", "aesnumber": "X2023070112345"}
        ];

        document.addEventListener('DOMContentLoaded', function() {
            var tableBody = document.getElementById("shipment-table").getElementsByTagName("tbody")[0];
            var rowsHTML = "";

            for (var i = 0; i < mockdata.length; i++) {
                var shipment = mockdata[i];
                rowsHTML += "<tr>" +
                    "<td>" + shipment.sapshipmentNumber + "</td>" +
                    "<td>" + shipment.plannedshipdate + "</td>" +
                    "<td>" + shipment.customerid + "</td>" +
                    "<td>" + shipment.partnumber + "</td>" +
                    "<td>" + shipment.carrierid + "</td>" +
                    "<td>" + shipment.weight + "</td>" +
                    "<td>" + shipment.height + "</td>" +
                    "<td>" + shipment.length + "</td>" +
                    "<td>" + shipment.width + "</td>" +
                    "<td>" + shipment.aesnumber + "</td>" +
                    "</tr>";
            }

            tableBody.innerHTML = rowsHTML;
        });
    </script>
</body>
</html>