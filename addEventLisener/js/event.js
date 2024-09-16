console.log('this is separate JS file');
//option 1
//<button onclick="console.log(7)">Click Me</button>

//option 2 maje maje use korbo
function makeRed(){
    document.body.style.backgroundColor = 'red';
}

//option 3
const makeBlue = document.getElementById('make-blue');
makeBlue.onclick = makeBlueFun;

function makeBlueFun(){
    document.body.style.backgroundColor = 'blue';
}
//option 3 another
const makePurple = document.getElementById('make-purple');
makePurple.onclick = function makePurpleFun(){
    document.body.style.backgroundColor = 'purple';
}

//option 4
const makePink = document.getElementById('make-pink');
makePink.addEventListener('click', makePinkFun);

function makePinkFun(){
    document.body.style.backgroundColor = 'pink';
}

//option 4 another
const makeGreen = document.getElementById('make-green');
makeGreen.addEventListener('click', function makeGreenFun(){
    document.body.style.backgroundColor = 'green';
})

//option 04 Final
const makeGoldenRod = document.getElementById('make-golden-rod').addEventListener('click',function(){
    document.body.style.backgroundColor = 'goldenrod'
});
