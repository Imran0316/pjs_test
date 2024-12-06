// QUESTION # 1 Write a JavaScript program to adds a given element to the beginning of an array.

// let vegetables = ["tomato","potato","carrot","peas","pumpkin","turnip"];

// vegetables.unshift("ladyfinger")


// for(i=0;i<vegetables.length;i++){
//     console.log(vegetables[i]);
// }

// QUESTION # 3 

let persons = {
    pname : "john doe",
    age : 30,
    job : "Developer",
    ismarried : "false"
}


// console.log(persons.pname);


persons.address = "123 main street";
// console.log(persons.address);

persons.age=35;
// console.log(persons.age);

delete persons.ismarried;
// console.log(persons.ismarried);


for (const key in persons) {
    if (Object.hasOwnProperty.call(persons, key)) {
        const element = persons[key];
        console.log(element);
    }
}