drawArea = document.querySelector('#drawing-area');
buttons = document.querySelectorAll('.grid-size-button');
let hueColor=0;
document.getElementById("rainbox-style-checkbox").checked = false;

for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', (e)=>{
        console.log("pressed" + e.target.id);
        initialize(e.target.id);
    })
}

function initialize(buttonPressed) {
    let elementCount;
    let sizeClass;
    drawArea.innerText='';
    switch(buttonPressed){
        case 'button16':
            elementCount=256;
            drawArea.style['grid-template-columns']= 'repeat(16, 6.25%)';
            drawArea.style['grid-template-rows']= 'repeat(16, 6.25%)';
            break;
        case 'button32':
            elementCount=1024;
            drawArea.style['grid-template-columns']= 'repeat(32, 3.125%)';
            drawArea.style['grid-template-rows']= 'repeat(32, 3.125%)';
            break;
        case 'button64':
            elementCount=4096;
            drawArea.style['grid-template-columns']= 'repeat(64, 1.5625%)';
            drawArea.style['grid-template-rows']= 'repeat(64, 1.5625%)';
            break;
    }
    for (let i = 1; i < elementCount; i++) {
        cell = document.createElement('div');
        cell.classList.add('draw-cell');
        cell.addEventListener('mouseover',(e)=>{
            if(document.getElementById("rainbox-style-checkbox").checked === true){
                hueColor=(hueColor+5)%360;
                e.target.style['background-color']=`hsl(${hueColor},100%,50%)`;
            } else {
                e.target.style['background-color']=`white`;
            }
        })
        drawArea.appendChild(cell);
    }
}

initialize('button16');