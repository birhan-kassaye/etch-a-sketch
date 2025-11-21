const container = document.getElementById("container"); //Accessing the div container from script.js file

function getGrid() {
    const numGrid = document.getElementById("myInput").value;
    for(let i=0; i<numGrid; i++){
        for(j=0; j<numGrid; j++){
            const gridItem = document.createElement("div");
            gridItem.textContent = `Raw${i+1} Column${j+1}`;
            container.append(gridItem);
        }
    }
}