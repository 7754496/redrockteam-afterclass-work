/*
const obj = { name: "Alice", age: 25 };
const copy = { ...obj };  //把原对象展开
console.log(copy); // 输出 { name: "Alice", age: 25 }
*/

/* 纯手动实现浅拷贝 */

const obj = {
    name: "Sans",
    age: 25,
    obj:{
        name: "Sans",
        age: 25,
    },
};
const copy={};
for(const i in obj) copy[i]=obj[i];
obj.obj.name="Chara";
console.log(copy); //obj的改变同步到了
/*
{
    name: "Sans",
    age: 25,
    obj:{
        name: "Chara",
        age: 25,
    },
}
*/

在JavaScript中，对象变量不同于普通的值变量
对象变量是对原对象的引用
如果直接赋值拷贝两个变量都是引用的同一个对象，对对象的操作会同步到两个变量

如果想避免这一情况，可以新建一个对象进行浅拷贝

浅拷贝无法避免对象的某些属性值又为对象
对于对象属性可以重复递归拷贝，实现深拷贝