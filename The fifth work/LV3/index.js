function deepClone(obj) {
  let copy;
  if(Array.isArray(obj)) {
      copy = [...obj];
  }
  else {
      copy = {...obj};
  }
  //数组和对象使用不同方式的扩展
  for (const key in copy) {
    if (typeof copy[key] === "object") {
      copy[key] = deepClone(copy[key]);
      //如果是对象，再次使用扩展运算符
    }
  }
  return copy;
}

const person = {
  name: '佐科姐姐',
  age: 1000000,
  address: {
    city: 'ChongQing',
    area: 'NanShan'
  },
  title: ['student',{year:2022, title:'GoodStudent'}]
}

const obj=deepClone(person);
person.name="?";
console.log(obj.name);