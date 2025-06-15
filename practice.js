// create an array of number from 1 to 10
const arr = [1,2,3,4,5,6,7,8,9,10]
console.log(arr);

// using map() tp create a new array where each number is doubled
const doubled = arr.map(num=>num*2)
console.log(doubled);

//using map() to create a array of string  like "number:1", nmber:2

arr.map((val)=>{
    console.log(`number:${val}`);
})


// Use filter() to return only even numbers
let evenNum = arr.filter(n => n%2===0);
console.log(evenNum);

// Use filter() to return numbers greater than 5

let greaterNum = arr.filter(n=>n>=5 );
console.log(greaterNum);

// Use find() to get the first number greater than 3


// Use find() to get the first number divisible by 4
// let find = arr.find(n=> n%4==0);
// console.log(find)

// Use some() to check if there is any number less than 0
// let some = arr.some(n=> n<0)
// console.log(some)

// Use some() to check if any number is greater than 8

// Use every() to check if all numbers are less than or equal to 10
let every  = arr.every( n => n<=10 )
console.log(every)

// Use every() to check if all numbers are positive

// Use forEach() to log each number multiplied by its index

// Use forEach() to log whether the number is even or odd

// Use reduce() to calculate the sum of all numbers

// Use reduce() to find the maximum value in the array
