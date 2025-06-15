// // create a variable named city = "akthmandu" and city2 = "bhaktapur"
// //log welcome to kathmandu and bhaktapur using backtick and variable

// const city ="Kathmandu"
// const city2 = "Bhaktapur"

// console.log(`Welcome to ${city} and ${city2}`)


// // Create an array [100, 200]
// // Destructure the first and second values
// // Log those destructured values

// const [arr,newArr] =[100,200];

// console.log(arr,newArr);



// // Create an object { product: "Mobile", price: 20000 }
// // Destructure the product and price into separate variables
// // Log product and price

// const obj ={
//     product : "Mobile Phone"
//     , price : 10000
// };

// const {productName, Price}=obj;
// console.log(productName,Price);



// // Create a function called sayHi that takes a name and place with
// // default values name = "John Doe" and place = "kathmandu"
// // Inside the function, log: "Hi, <name>. I am from <place>"
// // Call the function once with a name and place, once without a name and place


// function sayHi(name,place){
//     console.log(`Hello ${name} welcome to ${place}`)

// }
// sayHi("John Doe","Kathmandu");
// sayHi();


// // Create array one = [1, 2]
// // Use spread operator to fetch all data from array one to array 2 and add further data
// // Log array two

// const arr1 =[1,2];
// arr2=[...arr1,34,45];
// console.log(arr2);




// // Create user = { username: "admin" }
// // Use spread operator to fetch all data from user to user2 and add further data
// // Log newUser

// const user={ username:"admin"}
// const user2={...user,role:"admin"}
// console.log(user2);





// // Create a function called multiplyAll(...nums)
// // Return the product of all numbers using reduce
// // Call multiplyAll with 2, 3, 4



// function multiplyAll(...nums){
//     return nums.reduce((acc,curr)=>acc+curr,0);
// }

// nums=[2,3,4];
// console.log(multiplyAll(1,2,3,4,5));








// 1. Create a user object with no profile property
// const user ={profile:"No Property"};
// console.log(user?.profile);


// 2. Safely access user.profile.name using optional chaining
const user ={
    profile:{
        name:"Sams"
    }
};
console.log(user.profile?.name)

// 3. Set loginStatus = undefined
// 4. Create status = loginStatus ?? "Offline" and log it
// const loginStatus = undefined;

// const Status= loginStatus ?? "Offline";
// console.log(Status);




// 5. Create a variable msg = "" and fallback = msg || "No message"
// 6. Log fallback
// const msg = " ";
// const fallback = msg || "No message";
// console.log(fallback);

// 7. Create isLoggedIn = true
// 8. Show a welcome message only if isLoggedIn is true using &&

const isLoggedIn= true
 

// 9. Convert each of these to boolean using !! and log:
//    - ""
//    - "ok"
//    - 0
//    - 100

console.log(1 + "1")
