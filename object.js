const person1 = {
    Name : "Sandesh Bohara",
    age : 20.
    
}
const update ={
    CollegeName :"Techspire college",
    location : "Kathmandu"
}
const result = Object.assign(person1,update)


const profile ={
    ...person1
}
console.log(profile)
