document.addEventListener("DOMContentLoaded", ()=> {
    const container = document.getElementById("container");
    const button = document.getElementById("gridButton");

    button.addEventListener('click', ()=> {
        container.innerHTML = '';
        //validate and convert prompt input in to a number
        let newGridnum = prompt("Num of Grid 1-100");
        newGridnum = parseInt(newGridnum);

        if (newGridnum >= 1 && newGridnum <= 100){
            //Create the grid cells
            for(let i=0; i<newGridnum*newGridnum; i++){
                    const div = document.createElement("div");
                    div.classList.add("grid-item");

                    container.append(div);
                }
            //Remove the button after creation
            button.remove();
            
            const gridSquares = document.querySelectorAll(".grid-item");
            gridSquares.forEach(square =>{
                square.addEventListener('mouseover', ()=>{
                    const r=Math.floor(Math.random()*256);
                    const g=Math.floor(Math.random()*256);
                    const b=Math.floor(Math.random()*256);
                    square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
                })
            })
        }else{
            alert("Please enter a number between 1-100");
        }
    })
})