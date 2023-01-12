console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function plus (number){
    return function (plusNumber){
      return plusNumber +number;
}
}

let plus15= plus(15);

console.log(plus15(10));

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

let users = [
  {
    name: "Frodo",
    age: 50,
    score: 85,
    isActive: false,
  },
  {
    name: "Sam",
    age: 38,
    score: 94,
    isActive: true,
  },
  {
    name: "Merry",
    age: 36,
    score: 82,
    isActive: true,
  },
  {
    name: "Pippin",
    age: 26,
    score: 77,
    isActive: false,
  },
];


users.forEach((hobbit) =>{
  console.log(hobbit.name);
}
)

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

const mappedUsers = users.map((user,index,array)=>{
  return{
    name: user.name,
    score: user.score
  }
});

console.log(mappedUsers);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

function keepActiveUsers(element, index, array){
  if (element.isActive){
    return true;
  }
  return false;
}
const filteredUsers = users.filter(keepActiveUsers);
//const filteredUsers = users.filter(user=> user.isActive==true);

console.log(filteredUsers);

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

users.sort((a,b)=> {
    if (a.score < b.score){
      return -1;
    }
    if (a.score > b.score){
      return 1;
    } return 0;
});

console.log(users);

// Exercise 6 Section
console.log("EXERCISE 6:\n==========\n");

const sumOfScores = users.reduce((acc,curr)=>{
  acc = current.score;
}, 0 );

console.log(sumOfScores/users.length);