//const csv = require('jquery-csv');


//var data = $.csv.toArray("data.csv", options, callback)

let foodDiv = document.getElementById("food")
let miscDiv = document.getElementById("misc")
let foodBut = document.getElementById("add-food")
let miscBut = document.getElementById("add-misc")

foodDiv.innerHTML += '<p> testing 1 </p>'
miscDiv.innerHTML += '<p> testing 2 </p>'


foodBut.addEventListener("click", function() {
    alert("Hello World");
})

