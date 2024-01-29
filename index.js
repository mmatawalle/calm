var x = 5;
var y = 7;

var z;

z = y % x;

var p = document.getElementById('ppp')

p.innerHTML = z;
p.style.color = 'red';




function add(){

    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var g  = parseInt(num1) + parseInt(num2);

    p.innerHTML = g;
}