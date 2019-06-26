var i = 1;
const maxboxes = 100;


    while (i <= maxboxes){
    const container = document.querySelector('#container');

    const div = document.createElement ('div');
    
    div.classList.add('gridSquare');
    div.id = i;

    container.appendChild (div);
        i++;
    }

changeGridSize();


function changeGridSize(){
    grid = prompt("please enter grid size", "10");
   
}

//add event listener for hovering to a group of nodes

    const boxes = document.querySelectorAll('.gridSquare');
    boxes.forEach((box) => {
        box.addEventListener ('mouseover',(e) =>{
            var boxnum = event.currentTarget.id;
            paint (boxnum);
        });
    });

//changes color of hovered box

function paint (boxnum){
    const drawOn = document.getElementById(boxnum);
    drawOn.id = "painted";
}


