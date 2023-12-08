const person = {
  name: '佐科姐姐',
  age: 1000000,
  address: {
    city: 'ChongQing',
    area: 'NanShan'
  },
  title: ['student',{year:2022, title:'GoodStudent'}]
}

const {
    name,
    age:year,
    address: {
        city,
        area: mountain
    },
    title:[title1,{title:title2}]
}=person;

const [t1,t2,,t3]=person.title[1].title;
const title3=t1+t2+t3;

console.log(name) // 佐科姐姐
console.log(year) // 1000000 这里没有写错哈，就是要输出1000000，结合课件
console.log(city) // ChongQing
console.log(mountain) // NanShan //这里没有写错，就是要输出NanShan，结合课件
console.log(title1) // student
console.log(title2) // GoodStudent
console.log(title3) // God 结合课件