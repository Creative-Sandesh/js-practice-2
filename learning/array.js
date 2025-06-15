// const array1=[1,2,3,"test1","test2"]

// //push method in array1
// //to add new item in array at the last

// array1.push("test4","test5")
// console.log(array1);

// //pop method in array1
// // it is used for removing the last item from the array

// const fake=array1.pop()
// console.log(fake);


// //this is the dummyData of array which contain object

// const dummyData =[
//     {
//         name :"sandesh",
//         age : 20    
//     },
//     {
//         name:"sital",
//         age:20
//     },
//     {
//         name :"dickshit",
//         age:20
//     }
// ];


// const array = [1,2,3,4,5];

//using shift method =>  it help to remove first element of first array
// array.shift();

//using unshift method => it help to add first element of first array
// array.unshift("name")

// using concate method => it help to add multiple element in array
// const array = [1,2,3,4,5];
// const array1 = ['A','B','C'];
// const newArray = array1.concat(array)
// console.log(newArray);

//using splice method => it help to removeout part of an array starting form array element
const array = [1,2,3,4,5];
const newArray = array.splice(2);// 0 to 2 (so 1,2 are removed out 3 is isn't remove because 2 is explict value)
console.log(newArray);


    