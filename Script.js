let box = document.getElementById('box');
var color = ['#EDFFEC',"#61E786","#5A5766"]
var i = 0
document.onmousemove = (event) => {
    box.style.left = event.clientX - (box.clientWidth/2) + 'px'; 
    box.style.top  = event.clientY - (box.clientHeight/2)+ 'px';
}
document.onclick  = function () { 
i = i < color.length ? ++i: 0;
box.style.background = color[i]
}