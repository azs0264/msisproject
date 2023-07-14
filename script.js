document.addEventListener('DOMContentLoaded', function() {
var loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", function(event) {
event.preventDefault();
console.log("Form submitted");
var userId = document.getElementById("user-id").value;
var password = document.getElementById("password").value;
if (userId === "Administrator" && password === "Testuser") {
window.location.href = "https://azs0264.github.io/msisproject/mainpage.html";} 
else {alert("Invalid credentials. Please try again.");}});

var newAsnForm = document.getElementById("new-asn-form");
newAsnForm.addEventListener("submit", function(event) {
event.preventDefault();
console.log("Form submitted");

var sapshipmentnumber = document.getElementById("sap-shipment-number").value;
var plannedshipdate = document.getElementById("planned-ship-date").value;
var customerid = document.getElementById("customer-id").value;
var partnumber = document.getElementById("part-number").value;
var weight = document.getElementById("weight").value;
var height = document.getElementById("height").value;
var length = document.getElementById("length").value;
var width = document.getElementById("width").value;
var aesnumber = document.getElementById("aes-number").value;
var url = "processed-asn.html" +
"?sapshipmentnumber=" + encodeURIComponent(sapshipmentnumber) +
"&plannedahipdate=" + encodeURIComponent(plannedshipdate) +
"&customerid=" + encodeURIComponent(customerid) +
"&partnumber=" + encodeURIComponent(partnumber) +
"&weight=" + encodeURIComponent(weight) +
"&height=" + encodeURIComponent(height) +
"&length=" + encodeURIComponent(length) +
"&width=" + encodeURIComponent(width) +
"&aesnumber=" + encodeURIComponent(aesnumber);
window.location.href = url;});

var sapshipmentnumber = document.getElementById("sapshipmentnumber");
var readyshipdate = document.getElementById("readyshipdate");
var carrierid = document.getElementById("carrierid");
var prepaidCollect = document.getElementById("prepaidCollect");
var priorityEconomy = document.getElementById("priorityEconomy");
var productdescription = document.getElementById("productdescription");
var weight = document.getElementById("weight");
var height = document.getElementById("height");
var length = document.getElementById("length");
var width = document.getElementById("width");
var loadingdockrequired = document.getElementById("loadingdockrequired");
var url = "processed-shipment.html" +
"?sapshipmentnumber=" + encodeURIComponent(sapshipmentnumber) +
"&readyshipdate=" + encodeURIComponent(readyshipdate) +
"&carrierid=" + encodeURIComponent(carrierid) +
"&prepaidCollect=" + encodeURIComponent(prepaidCollect) +
"&priorityEconomy=" + encodeURIComponent(priorityEconomy) +
"&productdescription=" + encodeURIComponent(productdescription) +
"&weight=" + encodeURIComponent(weight) +
"&height=" + encodeURIComponent(height) +
"&length=" + encodeURIComponent(length) +
"&width=" + encodeURIComponent(width) +
"&loadingdockrequired=" + encodeURIComponent(loadingdockrequired);
window.location.href = url;});