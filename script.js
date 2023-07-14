document.addEventListener('DOMContentLoaded', function() {
var loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", function(event) {
event.preventDefault();
console.log("Form submitted");
var userId = document.getElementById("user-id").value;
var password = document.getElementById("password").value;
if (userId === "Administrator" && password === "Testuser") {
window.location.href = "https://azs0264.github.io/msisproject/mainpage.html";} 
else {alert("Invalid credentials. Please try again.");}
});

var newAsnForm = document.getElementById("new-asn-form");
newAsnForm.addEventListener("submit", function(event) {
event.preventDefault();
console.log("Form submitted");
var sapShipmentNumber = document.getElementById("sap-shipment-number").value;
var plannedShipDate = document.getElementById("planned-ship-date").value;
var customerId = document.getElementById("customer-id").value;
var partNumber = document.getElementById("part-number").value;
var weight = document.getElementById("weight").value;
var height = document.getElementById("height").value;
var length = document.getElementById("length").value;
var width = document.getElementById("width").value;
var aesNumber = document.getElementById("aes-number").value;
var url = "processed-asn.html" +
"?sapShipmentNumber=" + encodeURIComponent(sapShipmentNumber) +
"&plannedShipDate=" + encodeURIComponent(plannedShipDate) +
"&customerId=" + encodeURIComponent(customerId) +
"&partNumber=" + encodeURIComponent(partNumber) +
"&weight=" + encodeURIComponent(weight) +
"&height=" + encodeURIComponent(height) +
"&length=" + encodeURIComponent(length) +
"&width=" + encodeURIComponent(width) +
"&aesNumber=" + encodeURIComponent(aesNumber);
window.location.href = url;});

var bookingForm = document.getElementById("booking-form");
bookingForm.addEventListener("submit", function(event) {
event.preventDefault();
console.log("Form submitted");
var sapShipmentNumber = document.getElementById("sap-shipment-number").value;
var readyShipDate = document.getElementById("ready-ship-date").value;
var carrierId = document.getElementById("carrier-id").value;
var prepaidCollect = document.getElementById("prepaid-collect").value;
var priorityEconomy = document.getElementById("priority-economy").value;
var productDescription = document.getElementById("product-description").value;
var weight = document.getElementById("weight").value;
var height = document.getElementById("height").value;
var length = document.getElementById("length").value;
var width = document.getElementById("width").value;
var loadingDockRequired = document.getElementById("loading-dock-required").value;
var url = "processed-shipment.html" +
"?sapShipmentNumber=" + encodeURIComponent(sapShipmentNumber) +
"&readyShipDate=" + encodeURIComponent(readyShipDate) +
"&carrierId=" + encodeURIComponent(carrierId) +
"&prepaidCollect=" + encodeURIComponent(prepaidCollect) +
"&priorityEconomy=" + encodeURIComponent(priorityEconomy) +
"&productDescription=" + encodeURIComponent(productDescription) +
"&weight=" + encodeURIComponent(weight) +
"&height=" + encodeURIComponent(height) +
"&length=" + encodeURIComponent(length) +
"&width=" + encodeURIComponent(width) +
"&loadingDockRequired=" + encodeURIComponent(loadingDockRequired);
window.location.href = url;});
});