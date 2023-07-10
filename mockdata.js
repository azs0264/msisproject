var mockdata = [
{"sapShipmentNumber": "900", "plannedshipdate": "2023-06-20", "customerid": "CA1006", "partnumber": "997-3450",
"carrierid": "XYZ", "weight": "1500", "height": "60", "length": "60", "width": "60"},
{"sapShipmentNumber": "901", "plannedshipdate": "2023-06-25", "customerid": "CB1001", "partnumber": "997-6670",
"carrierid": "ABA", "weight": "500", "height": "48", "length": "36", "width": "72"},
{"sapShipmentNumber": "908", "plannedshipdate": "2023-06-29", "customerid": "CC4001", "partnumber": "997-3450",
"carrierid": "SPD", "weight": "1500", "height": "60", "length": "60", "width": "60"},
{"sapShipmentNumber": "910", "plannedshipdate": "2023-07-02", "customerid": "CC5001", "partnumber": "998-1150",
"carrierid": "FDX", "weight": "3500", "height": "121", "length": "101", "width": "105"},
{"sapShipmentNumber": "912", "plannedshipdate": "2023-07-05", "customerid": "CA6001", "partnumber": "997-1150",
"carrierid": "XYZ", "weight": "2100", "height": "100", "length": "99", "width": "76"},
{"sapShipmentNumber": "918", "plannedshipdate": "2023-07-07", "customerid": "CC5001", "partnumber": "998-1150",
"carrierid": "FDX", "weight": "3500", "height": "121", "length": "101", "width": "105"},
{"sapShipmentNumber": "933", "plannedshipdate": "2023-07-10", "customerid": "CA1006", "partnumber": "997-1670",
"carrierid": "XYZ", "weight": "500", "height": "72", "length": "48", "width": "36"},
{"sapShipmentNumber": "933", "plannedshipdate": "2023-07-11", "customerid": "CB2001", "partnumber": "998-2676",
"carrierid": "TFR", "weight": "1000", "height": "84", "length": "48", "width": "48"},
{"sapShipmentNumber": "934", "plannedshipdate": "2023-07-14", "customerid": "CC3001", "partnumber": "999-1140",
"carrierid": "FDX", "weight": "1500", "height": "76", "length": "68", "width": "68"},
{"sapShipmentNumber": "999", "plannedshipdate": "2023-07-14", "customerid": "CC5001", "partnumber": "999-1150",
"carrierid": "TFR", "weight": "3500", "height": "121", "length": "101", "width": "105"},];   
document.addEventListener('DOMContentLoaded', function() {
var tableBody = document.getElementById("shipment-table").getElementsByTagName("tbody")[0];
var rowsHTML = "";
for (var i = 0; i < mockdata.length; i++) {
var shipment = mockdata[i];
rowsHTML += "<tr>" +
"<td>" + shipment.sapShipmentNumber + "</td>" +
"<td>" + shipment.plannedshipdate + "</td>" +
"<td>" + shipment.customerid + "</td>" +
"<td>" + shipment.partnumber + "</td>" +
"<td>" + shipment.carrierid + "</td>" +
"<td>" + shipment.weight + "</td>" +
"<td>" + shipment.height + "</td>" +
"<td>" + shipment.length + "</td>" +
"<td>" + shipment.width + "</td>" +
"</tr>";}
tableBody.innerHTML = rowsHTML;});