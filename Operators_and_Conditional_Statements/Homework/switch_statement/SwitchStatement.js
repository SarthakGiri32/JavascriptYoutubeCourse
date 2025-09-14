const householdFoodItems = "Cucumbers";
switch (householdFoodItems) {
    case "Oranges":
        console.log("Oranges are $0.59 a pound.");
        break;
    case "Mangoes":
    case "Papayas":
        console.log("Mangoes and papayas are $2.79 a pound.");
        break;
    case "Bananas":
    case "Cucumbers":
    case "Onions":
    case "Tomatoes":
        console.log("Bananas, cucumbers, onions and tomatoes are $1.29 a pound.");
        break;
    case "Potatoes":
    case "Green Peppers":
        console.log("Potatoes and green peppers are $2.04 a pound.");
        break;
    default:
        console.log(`Sorry, we are out of ${householdFoodItems}.`);
}

// const action = "say_hello";
// switch (action) {
//   case "say_hello":
//     const message = "hello";
//     console.log(message);
//     break;
//   case "say_hi":
//     const message = "hi"; Uncaught SyntaxError: Identifier 'message' has already been declared
//     console.log(message);
//     break;
//   default:
//     console.log("Empty action received.");
// }
/* The case and default clauses are like labels: they indicate possible places that control flow 
may jump to. However, they don't create lexical scopes themselves */

// To fix this, whenever you need to use let or const declarations in a case clause, wrap it in a block.
const action = "say_hi";
switch (action) {
  case "say_hello": {
    const message = "hello";
    console.log(message);
    break;
  }
  case "say_hi": {
    const message = "hi";
    console.log(message);
    break;
  }
  default: {
    console.log("Empty/Unavailable action received.");
  }
}

const foo = 5;
switch (foo) {
  case 2:
    console.log(2);
    break; // it encounters this break so will not continue into 'default:'
  default:
    console.log("default");
  // fall-through
  case 1:
    console.log("1");
}