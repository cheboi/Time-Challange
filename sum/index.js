// Given an array of integers, find the sum of its elements. 

// For example, if the array, [1,2,4,7], so return 14. 

const arr = [1,2,4,7]
const sumOfArr = arr.reduce((a,b) => {
  return a + b
})
console.log(sumOfArr);


// Using For Loop
function sumArray(array) {
  const ourArray = [1, 2, 4, 7];
  let sum = 0;

  for (let i = 0; i < ourArray.length; i += 1) {
    sum += ourArray[i];
  }
  
  return sum;
}

console.log(sumArray([1, 2, 4, 7]));


// using ForEach
function sumArray(array) {
  let sum = 0;

  array.forEach(item => {
    sum += item;
  });

  console.log(sum);
  return sum;
}

sumArray([1, 2, 4, 7]);

//for...of

function sumArray(array) {
  let sum = 0;

  /*loop over array and add each item to sum
   */
  for (const item of array) {
    sum += item;
  }

  // return the result
  console.log(sum);
  return sum;
}

sumArray([1, 2, 4, 7]); //logs 14