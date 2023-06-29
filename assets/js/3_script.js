/*
function pintar() {
    ele = document.getElementById("ele1");
    ele.style.backgroundColor = 'yellow';
}

ele = document.getElementById("ele1");
ele.addEventListener("click", pintar);
*/

function pintar(ele, color = "green") {
    ele.style.backgroundColor = color;
}

document.getElementById("ele1").addEventListener("click", e => pintar(e.target, 'yellow'));
