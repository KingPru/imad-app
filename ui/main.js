console.log('Loaded!');

alert('hi');
var rt = document.getElementById('main');

rt.innerHTML = "new value";

var img = document.getElementById('fun');

img.onclick = function () {
    img.style.marginleft = "100px";
};