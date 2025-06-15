// for => loop when you know how many times to run

// for (let i=0; i<5;i++){
//     console.log(i);
// }

// for(let i=5; i>0;i--){
//     console.log(i);
// }

//while => loop untilll a condition become false 

// let i=0;
// while(i<5){
//     console.log(i);
//     i++;
// }

// let i =5;
// while (i>0){
//     console.log(i);
//     i--;
// }



//do...while=>  run at least once before checking the condition

// let i =0;
// do{
//     console.log(i);
//     i++;
// }while(i>5)


//for...in => loop through object keys (properties )
const obj = {a:1,b:2};
for(let key in obj){
    console.log(key,obj[key]);
}

// for..of => loop through iterable values (arrays,string etc)
const arr=[10,20,30]
for (let val of arr){
    console.log(val);
}

