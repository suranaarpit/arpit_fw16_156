var user = [
    { id: 1, name: "Arpit", age: 20, salary: 500000 },
    { id: 2, name: "Ankur", age: 25, salary: 1000000 },
    { id: 3, name: "Bala", age: 19, salary: 10000 },
    { id: 4, name: "Chandra", age: 30, salary: 2000000 },
    { id: 5, name: "Nrupul", age: 40, salary: 5000000 },
    { id: 6, name: "Akshay", age: 29, salary: 200000 },
    { id: 7, name: "Ajay", age: 30, salary: 100000 },
    { id: 8, name: "Deepak", age: 27, salary: 600000 },
];
console.table(user);
// using inbuild .sort method
// const sort = (user: UserInfo[]) =>
//   user.sort((userA: UserInfo, userB: UserInfo) => {
//     return userA.age - userB.age;
//   });
// const sortedAge = sort(user);
// console.table(sortedAge);
// using own custom sort method: [Bubble Sort]
