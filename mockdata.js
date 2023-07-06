var mockdata = [
{"sapShipmentNumber": "900", "plannedShipDate": "2023-06-20", "customerId": "CA1006", "partNumber": "997-3450",
"carrierid": "XYZ", "weight": "1500", "height": "60", "length": "60", "width": "60", "aesNumber": "NA"},

{"sapShipmentNumber": "901", "plannedShipDate": "2023-06-25", "customerId": "CB1001", "partNumber": "997-6670",
"carrierid": "ABA", "weight": "500", "height": "48", "length": "36", "width": "72", "aesNumber": "NA"},

{"sapShipmentNumber": "908", "plannedShipDate": "2023-06-29", "customerId": "CC4001", "partNumber": "997-3450",
"carrierid": "UPS", "weight": "1500", "height": "60", "length": "60", "width": "60", "aesNumber": "X2023062854321"},

{"sapShipmentNumber": "910", "plannedShipDate": "2023-07-02", "customerId": "CC5001", "partNumber": "998-1150",
"carrierid": "FDX", "weight": "3500", "height": "121", "length": "101", "width": "105", "aesNumber": "X2023070112345"},
];   

document.addEventListener('DOMContentLoaded', function() {
var tableBody = document.getElementById("shipment-table").getElementsByTagName("tbody")[0];
var rowsHTML = "";
for (var i = 0; i < mockdata.length; i++) {
var shipment = mockdata[i];
rowsHTML += "<tr>" +
"<td>" + shipment.sapShipmentNumber + "</td>" +
"<td>" + shipment.plannedShipDate + "</td>" +
"<td>" + shipment.customerId + "</td>" +
"<td>" + shipment.partNumber + "</td>" +
"<td>" + shipment.carrierid + "</td>" +
"<td>" + shipment.weight + "</td>" +
"<td>" + shipment.height + "</td>" +
"<td>" + shipment.length + "</td>" +
"<td>" + shipment.width + "</td>" +
"<td>" + shipment.aesNumber + "</td>" +
"</tr>";}
tableBody.innerHTML = rowsHTML;}
);