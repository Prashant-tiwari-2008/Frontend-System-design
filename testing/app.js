const users = [
    {user : "Prashant", age : 32},
    {user : "Pradeep", age : 39},
    {user : "prakash", age : 60},
    {user : "shail", age : 55},
    {user : "sweta", age : 37},
    {user : "tarus", age : 7},
    {user : "chiki", age : 2},
]

function sortData() {
    const data = users.sort((a, b) => a.age - b.age);
    return data;
}

// console.log(sortData());

module.exports = sortData;