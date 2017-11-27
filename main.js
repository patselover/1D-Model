let canvas = document.createElement('canvas'),
    ctx = canvas.getContext('2d');
canvas.setAttribute('id','1dCanvas');
$('body')[0].append(canvas);

$.get('./data.csv');