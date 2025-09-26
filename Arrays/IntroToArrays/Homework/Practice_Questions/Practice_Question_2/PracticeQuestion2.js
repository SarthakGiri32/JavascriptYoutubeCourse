/* An array exists with the price of 5 items. Change the array values to store final price after
   applying offer */
let itemPriceArray = [250, 645, 300, 900, 50];

for (let i = 0; i < itemPriceArray.length; i++) {
    itemPriceArray[i] *= 0.9;
}

console.log(`The discounted items: ${itemPriceArray}`);
