// a matrix is row and column wise sorted
let sortedMatrix = [[10, 20, 30, 40], 
                    [15, 25, 35, 45], 
                    [28, 29, 37, 49], 
                    [33, 34, 38, 50]];

const searchTarget = parseInt(prompt("Enter the value you want to search:", 37));
let elementFound = false;
let ubri = 0, ubci = sortedMatrix[0].length - 1;

while (ubri < sortedMatrix.length && ubci >= 0) {
    if (sortedMatrix[ubri][ubci] === searchTarget) {
        elementFound = true;
        break;
    }
    else if (sortedMatrix[ubri][ubci] < searchTarget) {
        ubri++;
    }
    else if (sortedMatrix[ubri][ubci] > searchTarget) {
        ubci--;
    }
}

console.log(elementFound ? `Element ${searchTarget} found in location sortedMatrix[${ubri}][${ubci}]` :
    `Element ${searchTarget} not found`);
