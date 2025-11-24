//const container = document.getElementById("container"); //Accessing the div container from script.js file
/*
function getGrid() {
        const numGrid = prompt("Enter the number of Grid: ");
    for(let i=0; i<numGrid; i++){
        for(j=0; j<numGrid; j++){
            const gridItem = document.createElement("div"); // The div created using javascript
            gridItem.textContent = `Raw${i+1} Column${j+1}`;
            gridItem.classList.add("grid-Item"); //Adding a class inside the div element
            gridItem.classList.add("grid-Item2"); //Adding a second new class in a div
            container.append(gridItem);
        }
    }
}
*/

document.addEventListener("DOMContentLoaded", ()=> {
    const container = document.getElementById("container");
    const button = document.getElementById("button");

    button.addEventListener('click', ()=> {
        container.innerHTML = '';
        //validate and convert prompt input in to a number
        let newGridnum = prompt("Num of Grid 1-100");
        newGridnum = parseInt(newGridnum);

        if (newGridnum >= 1 && newGridnum <= 100){
            //Create the grid cells
        for(let i=0; i<newGridnum; i++){
            const divRaw = document.createElement("div");
            divRaw.classList.add("grid-raw");
            for(let j=0; j<newGridnum; j++){
                const div = document.createElement("div");
                div.textContent = `Raw${i+1} Column${j+1}`;
                div.classList.add("grid-column");

                divRaw.append(div);
            }
            container.append(divRaw);
        }
        //Removes the button after it gets clicked
        button.remove();
        }else{
            alert("Please enter a number between 1-100");
        }
    })
})