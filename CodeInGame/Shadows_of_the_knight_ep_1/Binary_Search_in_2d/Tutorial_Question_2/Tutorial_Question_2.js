// using a strictly sorted matrix, where the first element of a row is greater than the last element of the previous row
const strictlySortedMatrix = [[31, 39, 42, 47, 49], 
                              [53, 58, 61, 62, 65], 
                              [70, 74, 76, 79, 80], 
                              [83, 88, 95, 105, 111]];
const target = parseInt(prompt("Enter a search target:", 42));

let lbr = 0, ubr = strictlySortedMatrix.length - 1, searchLoc = 0;
let mc = Math.floor((0 + (strictlySortedMatrix[0].length - 1)) / 2);
let mr = Math.floor((lbr + ubr) / 2);
let targetFound = false;

function oneDArrayBinSort(lb, rb, searchTarget, sortedArray) {
    while (lb <= rb) {
        let mid = Math.floor((lb + rb) / 2);
        if (sortedArray[mid] === searchTarget) {
            searchLoc = mid;
            return true;
        }
        else if (sortedArray[mid] > searchTarget) {
            rb = mid - 1;
        }
        else {
            lb = mid + 1;
        }
    }
    return false;
}

// while (lbr <= ubr) {
//     targetFound = oneDArrayBinSort(0, strictlySortedMatrix[mr].length - 1, target, strictlySortedMatrix[mr]);
//     if(targetFound) {
//         break;
//     }
//     else if (strictlySortedMatrix[mr][mc] > target) {
//         ubr = mr - 1;
//     }
//     else if (strictlySortedMatrix[mr][mc] < target) {
//         lbr = mr + 1;
//     }
//     mr = Math.floor((lbr + ubr) / 2);
// }

// code suggested by a youtube comment; same time complexity as teacher's complicated code
while (lbr <= ubr) {
    if (target >= strictlySortedMatrix[mr][0] && target <= strictlySortedMatrix[mr][strictlySortedMatrix[mr].length - 1]){
        targetFound = oneDArrayBinSort(0, strictlySortedMatrix[mr].length - 1, target, strictlySortedMatrix[mr]);
        if(targetFound) {
            break;
        }
    }
    else if (strictlySortedMatrix[mr][mc] > target) {
        ubr = mr - 1;
    }
    else if (strictlySortedMatrix[mr][mc] < target) {
        lbr = mr + 1;
    }
    mr = Math.floor((lbr + ubr) / 2);
}

console.log(targetFound? `Target ${target} found at location strictlySortedMatrix[${mr}][${searchLoc}]` : `Target ${target} not found`);  
