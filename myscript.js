numGrid = sizeOfGrid();
var i = 1;
const maxboxes = numGrid*numGrid;

    while (i <= maxboxes){
    const container = document.querySelector('#container');

    const div = document.createElement ('div');
    
    div.classList.add('gridSquare');
    div.id = i;

    container.appendChild (div);
        i++;
    }


//calculates size of boxes;
function sizeOfGrid(){
    numGrid = prompt("please enter grid size", "10");
    gridSize = (700 - 0.1*numGrid*2)/numGrid;
   return numGrid;
}


//add event listener for hovering to a group of nodes

    const boxes = document.querySelectorAll('.gridSquare');
    boxes.forEach((box) => {
        box.addEventListener ('mouseover',(e) =>{
            var boxnum = event.currentTarget.id;
            paint (boxnum);
        });
        box.style.width = gridSize + 'px';
        box.style.height = gridSize + 'px';
    });

//changes color of hovered box

function paint (boxnum){
    const drawOn = document.getElementById(boxnum);
    drawOn.id = "painted";
}



