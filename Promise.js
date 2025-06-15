const result= new Promise((resolve,reject)=>{
    const gift="Watch";

    if (gift.startsWith("Watch")){
        
        resolve("Thank You as the gift!");
        
    }else{
        
        reject("I want the Watch");
    }

});

result
.then((data) =>{
console.log(data);
return "Again thank you for the gift!"
    })
.then((data) =>{
console.log(data);
return "Again thank you for the gift!"
    })
.then((data) =>{
console.log(data);
return "Again thank you for the gift!"
    })
.then((data) =>{
console.log(data);
return "Again thank you for the gift!"
    })
    .then((data)=>{
        console.log(data);
    })
    .catch((err)=> console.log(err,"error"))
    .finally(()=> console.log("SUccessful promise Operation"));



//async and await

    
async function getResult(){
     const result= new Promise(function(res,rej){
        const gift = "Watch";

        if(gift.startsWith("Watch")){
            res("Thank you for watch");

        }else{
            rej("I want watch as gift.")
        }

     });

     try{
        const message = await result;
        console.log(message);

     }catch(error){
        console.log("Error:", error);
     }finally{
        console.log("Successfull promise operation!")
     }
    
}


getResult();