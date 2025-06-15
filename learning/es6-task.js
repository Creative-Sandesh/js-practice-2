// backtick

// const personName = "Ramesh"
// console.log("Hello," + personName);
// console.log(`hello, ${personName}`);


// var //

// var sum = 2;
// function add(){
//     var sum = 10 +20;
//     console.log(sum);
// }
// add();
// console.log(sum);



// Array destructuring
// const [a,b]=[1,2];
// console.log(a,b);

//object destrucutring
// const user ={name: "Sandesh",age:20};
// const {name,age}=user;
// console.log(user);


//  assign parameter value

// function greet(name="sandesh"){
//     console.log(`hello ${name}`);
// }
// greet("Ramesh");




// spread operator

// const arr1 =[1,2];
// const arr2 =[...arr1,3,4];
// console.log(arr2);

// const userProfile ={ name:"sandesh",age:20};
// const newUser ={...userProfile,location:"kathmandu"};
// console.log(newUser);


//Rest parameters

// function sum(...nums){
//     return nums.reduce((acc,curr)=> acc+curr,0);
// }

// console.log(sum(1,2,3))



// optional chaining

// const userProfile = {name:undefined};
// console.log(userProfile?.name);


// const profile ={
//     profile:{
//         name:"sandesh",
        
//     }
// };

// const userProfileName = profile.profile?.name;
// const phone = profile.profile?.phone;

// console.log(userProfileName);
// console.log(phone);


// nullish coalescing

// const input = null;
// const result = input ?? "guest user";
// console.log(result);



// logical && and ||

const username = "" || "Anonomyus";
const userAge = 0 || 25;

console.log(username);
console.log(userAge);

const isLoggedIn = true && "Welcome!";
const isOnline = "You are online" && false;

console.log(isLoggedIn,isOnline)



// Double not(!!)
console.log(!!0,
!!"hello",
!!{},)