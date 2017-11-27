let canvas = document.createElement('canvas'),
    ctx = canvas.getContext('2d');
canvas.setAttribute('id','1dCanvas');
$('body')[0].append(canvas);

console.log($.get('./data.csv'));