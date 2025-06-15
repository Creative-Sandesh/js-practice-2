// Callback
// 1. Create a function greetUser that accepts a name and a callback function
// 2. Inside greetUser, log "Welcome <name>!" and call the callback
// 3. Create a callback function showTime that logs the current time using new Date().toLocaleTimeString()
// 4. Call greetUser("Ram", showTime)

// 5. Create a function processOrder that logs "Processing your order"
// 6. Create a function confirmOrder that logs "Order confirmed!"
// 7. Pass confirmOrder as a callback to processOrder

// function greetUser(name,showTime){
//     console.log(`Welcome ${name} `)
//     showTime()

// }
// function showTime(){
//     const date = new Date().toLocaleDateString()
//     console.log(date)
// }

// greetUser("Sandesh",showTime)

// function processOrder(confirmOrder){
//     console.log("Processing your order.")
//     setTimeout(()=>{
//         confirmOrder();
//     },2000)
    
// }
// function confirmOrder(){
//     console.log("Order Confirmed!")
// }

// processOrder(confirmOrder);

// Promise
// 1. Create a Promise called myPromise that resolves with "Resolved successfully!" after 2 seconds
// 2. Use .then() to log the resolved value
// 3. Add a .finally() that logs "Finished executing promise"

// 4. Create a Promise that rejects with "Something went wrong" if a variable is not equal to 10
// 5. Use .catch() to handle the error and log it

// const myPromise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Resolved Successfully!");
//     },4000);
// });

// myPromise
// .then((data)=>{
//     console.log(data);
// })
// .finally((data)=>{
//     console.log("Finished executing promise!")
// });


// const value =(num)=>{
//     return new Promise((resolve,reject)=>{
//     if (num===10){
//         resolve("the num is executed!")
//     }else{
//         reject("Something went Wrong")
//     }
// });
// };

// value(10)
// .then((data)=>{
//     console.log(data);
// })
// .catch((err) => console.log(err))


// Async/Await
// 1. Create a function named getEvenNumber that returns a Promise
//    - Resolve if number is even
//    - Reject otherwise
async function getEvenNumber(num){
    const result = new Promise(function(res,rej){
        if (num%2==0){
            res("Number is Even!")
        }else{
            rej("Reject!")
        }
    });

    try{
        const data= await result;
        console.log(data)
    }catch(error){
        console.log("Error:",error);
    }finally{
        setTimeout(()=>{
            console.log("Data loaded!")
        },2000)
    }
}
getEvenNumber(10);
// 3. Use try/catch to await getEvenNumber() and log the result or error
// 4. Always log "Number is finally even!" in the finally block

// 5. Create another async function loadData that waits 2 seconds and logs "Data loaded!"