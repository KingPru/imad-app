console.log('Loaded!');

alert('hi');
var rt = document.getElementById('main');

rt.innerHTML = "new value";

var img = document.getElementById('fun');
var marginLeft = 0;
function moveRight() {
    marginLeft = marginLeft+1;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function () {
    var interval = setinterval(moveRight, 50);
};
