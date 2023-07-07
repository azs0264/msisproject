var mockdata = [
{"sapshipmentnumber": "900", "plannedshipdate": "2023-06-20", "customerid": "CA1006", "partnumber": "997-3450",
"carrierid": "XYZ", "weight": "1500", "height": "60", "length": "60", "width": "60", "aesnumber": "NA"},
{"sapshipmentnumber": "901", "plannedshipdate": "2023-06-25", "customerid": "CB1001", "partnumber": "997-6670",
"carrierid": "ABA", "weight": "500", "height": "48", "length": "36", "width": "72", "aesNumber": "NA"},
{"sapshipmentnumber": "908", "plannedshipdate": "2023-06-29", "customerid": "CC4001", "partnumber": "997-3450",
"carrierid": "UPS", "weight": "1500", "height": "60", "length": "60", "width": "60", "aesNumber": "X2023062854321"},
{"sapshipmentnumber": "910", "plannedshipdate": "2023-07-02", "customerid": "CC5001", "partnumber": "998-1150",
"carrierid": "FDX", "weight": "3500", "height": "121", "length": "101", "width": "105", "aesNumber": "X2023070112345"},
{"sapshipmentnumber": "999", "plannedshipdate": "2023-07-14", "customerid": "CC5001", "partnumber": "999-1150",
"carrierid": "FDX", "weight": "3500", "height": "121", "length": "101", "width": "105", "aesNumber": "X2023070112345"},];   
document.addEventListener('DOMContentLoaded', function() {
var tableBody = document.getElementById("shipment-table").getElementsByTagName("tbody")[0];
var rowsHTML = "";
for (var i = 0; i < mockdata.length; i++) {
var shipment = mockdata[i];
rowsHTML += "<tr>" +
"<td>" + shipment.sapshipmentnumber + "</td>" +
"<td>" + shipment.plannedshipdate + "</td>" +
"<td>" + shipment.customerid + "</td>" +
"<td>" + shipment.partnumber + "</td>" +
"<td>" + shipment.carrierid + "</td>" +
"<td>" + shipment.weight + "</td>" +
"<td>" + shipment.height + "</td>" +
"<td>" + shipment.length + "</td>" +
"<td>" + shipment.width + "</td>" +
"<td>" + shipment.aesnumber + "</td>" +
"</tr>";}
tableBody.innerHTML = rowsHTML;});