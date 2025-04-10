function changeBackground(element) {
    var a = document.getElementById('main');
    a.innerHTML = element.alt;
    a.style.backgroundImage = "url(\'" + element.src + "\')";
}

function recover() {
    var a = document.getElementById('main');
    a.innerHTML = "HOVER OVER AN IMAGE BELOW";
    a.style.backgroundImage = "none";
}