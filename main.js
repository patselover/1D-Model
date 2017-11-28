let canvas = document.createElement('canvas'),
    ctx = canvas.getContext('2d'),
    data = null;
canvas.setAttribute('id','1dCanvas');
$('body')[0].append(canvas);
canvas.height = 600;
canvas.width = 1000;

$.get('./data.csv').done(function(e){
    data = Papa.parse(e,{
        delimiter: "",	// auto-detect
        newline: "",	// auto-detect
        quoteChar: '"',
        header: true,
        dynamicTyping: false,
        preview: 0,
        encoding: "",
        worker: false,
        comments: false,
        step: undefined,
        complete: undefined,
        error: undefined,
        download: false,
        skipEmptyLines: false,
        chunk: undefined,
        fastMode: undefined,
        beforeFirstChunk: undefined,
        withCredentials: undefined
    });
    buildGraph(data);
})

function buildGraph(data){
    let countMale = {},
        countFemale = {},
        min = Infinity,
        max = 0;
    for(let i = 0; i < data.data.length; ++i){
        let tempHeight = data.data[i].Ft * 12 + data.data[i].In * 1;
        if(data.data[i].Sex === 'Male'){
            countMale[tempHeight] = countMale[tempHeight] + 1 || 1;
            min = (min<tempHeight)?min:tempHeight;
            max = (max>tempHeight)?max:tempHeight;
        }
        else 
            countFemale[tempHeight] = countFemale[tempHeight] + 1|| 1;
            min = (min<tempHeight)?min:tempHeight;
            max = (max>tempHeight)?max:tempHeight;
    }
    ctx.strokeStyle = 'blue';
    let count = 0;
    for(let i = min; i < max; ++i){
        if(countMale[i]){
            ctx.strokeStyle = 'blue';
            ctx.fillStyle = 'blue';
            ctx.strokeRect(10 + count * 20, 600, 20, - countMale[i]/2);
        }
        if(countFemale[i]){
            ctx.strokeStyle = 'pink';
            ctx.fillStyle = 'pink';
            ctx.strokeRect(10 + count * 20, 600, 20, - countFemale[i]/2);
        }
        ++count;
    }
}