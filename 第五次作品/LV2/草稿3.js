const obj = { name: "Alice", age: 25 };
const copy = { ...obj };  //把原对象展开
console.log(copy); // 输出 { name: "Alice", age: 25 }