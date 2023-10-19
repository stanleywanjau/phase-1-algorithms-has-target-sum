function hasTargetSum(array, target) {
  // Write your algorithm here
  
    for (let item of array){
        const num1 = target - item;
        if (array.includes(num1)) {
            return true;
        }
    };
    return false;
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;

// function add(arr , target){
//   let result = [];
//   for (let item of arr){
//       const num1 = target - item;
//       if (arr.includes(num1)) {
//           return result.concat(num1 , item);
//       }
//   };
//   return "Unfortunately there is no answer";
// }

// const result = add([3,4,5,6,10] , 16);

// // will print [10, 6]
// console.log(result)