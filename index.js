function padGrid(size){
    let pad= document.querySelector('.drawing-pad');
    let cells= pad.querySelectorAll('div');
    cells.forEach((div)=> div.remove());

pad.style.gridTemplateColumns=`repeat(${size}, 1fr)`;
pad.style.gridTemplateRows=`repeat(${size}, 1fr)`;



    for (let i=0; i<size*size; i++){
        let cell=document.createElement('div');
        cell.addEventListener('mouseover', colorHover)
        cell.style.backgroundColor='white';
         pad.insertAdjacentElement('beforeend', cell)
    }

}
padGrid(16);


function cellSize(confirmed){
    if(confirmed>=2 && confirmed<100){ 
        padGrid(confirmed)
    }
    else{
        console.log('Exceeded the maximum!')
    }
}

let color= 'black';
let click=true;
function colorHover(){
    if(click){
    if (color==='random'){
        // let randomColor= Math.floor(Math.random()*360).toString(16);
        this.style.backgroundColor=`hsl(${Math.random()*360}, 100%, 50%)`;
    }
    else{
    this.style.backgroundColor=color;
}
}}
function colorChanger(newColor){
    color= newColor;
}
function reset(){
    let pad= document.querySelector('.drawing-pad');
    let cells= pad.querySelectorAll('div');
    cells.forEach((div)=> div.style.backgroundColor='white');

}
document.querySelector('#body').addEventListener('click', clickOrNot);
function clickOrNot(){
    click=!click;
}