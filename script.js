const container = document.getElementById("container"); //Accessing the div container from script.js file

function getGrid() {
    const numGrid = document.getElementById("myInput").value;
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