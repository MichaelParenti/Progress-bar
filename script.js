let a = document.querySelector("#a");
let b = document.querySelector("#b");
let c = document.querySelector("#c");
let d = document.querySelector("#d");
let e = document.querySelector("#e");

a.onclick = function(){
    document.getElementById('amount').style.width = '20%';
    document.querySelector('h1').innerHTML = '20%';
}
b.onclick = function(){
    document.getElementById('amount').style.width = '40%';
    document.querySelector('h1').innerHTML = '40%';
}
c.onclick = function(){
    document.getElementById('amount').style.width = '60%';
    document.querySelector('h1').innerHTML = '60%';
}
d.onclick = function(){
    document.getElementById('amount').style.width = '80%';
    document.querySelector('h1').innerHTML = '80%';
}
e.onclick = function(){
    document.getElementById('amount').style.width = '100%';
    document.querySelector('h1').innerHTML = '100%';
}