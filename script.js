const container = document.querySelector('#container');


for(let i = 0; i < 256; i++) {
    const box = document.createElement('div');
        box.classList.add('box');
    
    const change = document.querySelector('.box');
        box.addEventListener('mouseover', black);

    function black(){
        box.style.backgroundColor = 'black';
    }

container.appendChild(box)
}

function startState() {
    
const container = document.querySelector('#container');

    for(let i = 0; i < 256; i++) {
        const box = document.createElement('div');
            box.classList.add('box');
        
        const change = document.querySelector('.box');
            box.addEventListener('mouseover', black);
    
        function black(){
            box.style.backgroundColor = 'black';
        }
    }

container.appendChild(box)
}

function resetState(){
    const old = document.querySelector('#container');
    old.innerHTML = '';
    }


const options = document.querySelector('#options')

const start = document.createElement('button');
    start.classList.add('start');
    start.textContent = 'Start!';

options.appendChild(start);

const reset = document.createElement('button');
    reset.classList.add('reset');
    reset.textContent = 'Reset';

options.appendChild(reset);


const resetClick = document.querySelector('.reset');
reset.addEventListener('click', resetState);


const startClick = document.querySelector('.start');
start.addEventListener('click', startState);





