// using a strictly sorted matrix, where the first element of a row is greater than the last element of the previous row
const strictlySortedMatrix = [[31, 39, 42, 47, 49], 
                              [53, 58, 61, 62, 65], 
                              [70, 74, 76, 79, 80], 
                              [83, 88, 95, 105, 111]];
const target = parseInt(prompt("Enter a search target:", 42));

let lbr = 0, ubr = strictlySortedMatrix.length - 1, searchLoc = 0;
let mc = Math.floor((0 + (strictlySortedMatrix[0].length - 1)) / 2);
let mr = Math.floor((lbr + ubr) / 2), targetFound = false;

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

if (strictlySortedMatrix[0].length === 0) {
    console.log("Invalid 2d array");
}
if (strictlySortedMatrix.length === 1) {
    targetFound = oneDArrayBinSort(0, strictlySortedMatrix[0].length - 1, target, strictlySortedMatrix[0]);
    console.log(targetFound? `Target ${target} found at location strictlySortedMatrix[${0}][${searchLoc}]` : `Target ${target} not found`);
}

// run loop till 2 rows are remaining
while (lbr < ubr - 1) {
    if (strictlySortedMatrix[mr][mc] === target) {
        targetFound = true;
        break;
    }
    else if (strictlySortedMatrix[mr][mc] < target) {
        lbr = mr;
    }
    else {
        ubr = mr;
    }
    mr = Math.floor((lbr + ubr) / 2)
}

if (targetFound) {
    console.log(`Target ${target} found at location strictlySortedMatrix[${mr}][${mc}]`);
} // now 2 rows are remaining; check whether the target is in the mid column of the 2 rows
else if (strictlySortedMatrix[lbr][mc] === target) {
     console.log(`Target ${target} found at location strictlySortedMatrix[${lbr}][${mc}]`);
}
else if (strictlySortedMatrix[ubr][mc] === target) {
     console.log(`Target ${target} found at location strictlySortedMatrix[${ubr}][${mc}]`);
}
else {
    if (target >= strictlySortedMatrix[lbr][0] && target <= strictlySortedMatrix[lbr][mc - 1]) {
        targetFound = oneDArrayBinSort(0, mc - 1, target, strictlySortedMatrix[lbr]);
        // searching in 1st half: row: lbr; cols: 0 to mc - 1
        console.log(targetFound? `Target ${target} found at location strictlySortedMatrix[${lbr}][${searchLoc}]` : `Target ${target} not found`);
    }
    else if (target >= strictlySortedMatrix[lbr][mc + 1] && target <= strictlySortedMatrix[lbr][strictlySortedMatrix[lbr].length - 1]) {
        targetFound = oneDArrayBinSort(mc + 1, strictlySortedMatrix[lbr].length - 1, target, strictlySortedMatrix[lbr]);
        // searching in 2nd half: row: lbr; cols: mc + 1 to strictlySortedMatrix[lbr].length - 1
        console.log(targetFound? `Target ${target} found at location strictlySortedMatrix[${lbr}][${searchLoc}]` : `Target ${target} not found`);
    }
    else if (target >= strictlySortedMatrix[ubr][0] && target <= strictlySortedMatrix[ubr][mc - 1]) {
        targetFound = oneDArrayBinSort(0, mc - 1, target, strictlySortedMatrix[ubr]);
        // searching in 3rd half: row: ubr; cols: 0 to mc - 1
        console.log(targetFound? `Target ${target} found at location strictlySortedMatrix[${ubr}][${searchLoc}]` : `Target ${target} not found`);
    }
    else if (target >= strictlySortedMatrix[ubr][mc + 1] && target <= strictlySortedMatrix[ubr][strictlySortedMatrix[ubr].length - 1]) {
        targetFound = oneDArrayBinSort(mc + 1, strictlySortedMatrix[ubr].length - 1, target, strictlySortedMatrix[ubr]);
        // searching in 4th half: row: ubr; cols: mc + 1 to strictlySortedMatrix[ubr].length - 1
        console.log(targetFound? `Target ${target} found at location strictlySortedMatrix[${ubr}][${searchLoc}]` : `Target ${target} not found`);
    }
    else {
        console.log(`Target ${target} not found`);
    }
}
