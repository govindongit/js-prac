const mySet = new Set();
mySet.add("California");
mySet.add("Mumbai");
mySet.add("California");
mySet.add(10);
mySet.add(10);
const myObject = {a:1,a:10};
mySet.add(myObject);

console.log(mySet);