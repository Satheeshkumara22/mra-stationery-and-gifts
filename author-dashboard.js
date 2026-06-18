const products =
JSON.parse(localStorage.getItem("products")) || [];

document.getElementById("totalProducts").innerText =
products.length;

const visitors =
localStorage.getItem("visitors") || 0;

document.getElementById("totalVisitors").innerText =
visitors;

document.getElementById("topProduct").innerText =
"Coming Soon";

document.getElementById("totalSales").innerText =
"₹0";