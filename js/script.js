const container = document.getElementById('container');
const changeGridBtn = document.getElementById('changeGrid');
let currentGridSize = 16;

// Initialize the grid
createGrid(currentGridSize);

// Function to create the grid
function createGrid(size) {
    // Clear the container
    container.innerHTML = '';
    
    // Calculate the size of each grid item
    const itemSize = 960 / size;
    
    for (let i = 0; i < size * size; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.style.width = `${itemSize}px`;
        gridItem.style.height = `${itemSize}px`;
        
        // Add hover effect
        gridItem.addEventListener('mouseover', () => {
            gridItem.classList.add('hovered');
        });
        
        // Add mouseout event to remove the hover effect
        gridItem.addEventListener('mouseout', () => {
            gridItem.classList.remove('hovered');
        });
        
        container.appendChild(gridItem);
    }
}

// Button click event to change grid size
changeGridBtn.addEventListener('click', () => {
    let newSize = prompt('Enter number of squares per side (max 100):', currentGridSize);
    
    // Validate input
    newSize = parseInt(newSize);
    if (isNaN(newSize) || newSize <= 0 || newSize > 100) {
        alert('Please enter a number between 1 and 100');
        return;
    }
    
    currentGridSize = newSize;
    createGrid(currentGridSize);
});