/*
lv1  (必做) : 编写一个函数 factorial(n) 计算 n!​
举个例子： ​​
factorial(1) = 1​
factorial(2) = 2 * 1 = 2​
factorial(3) = 3 * 2 * 1 = 6​
factorial(4) = 4 * 3 * 2 * 1 = 24​
factorial(10) = 10 * 9 * ... * 2 * 1 = 3628800​
注意用两种方式实现： ​
循环​
递归
*/

const factorial_1=function(jie=1){
    let result=1;
    for(let i=1;i<=jie;i++){
        result*=i;
    }
    return result;
}
console.log(factorial_1(4));

const factorial_2=(jie=1)=>{
    let result=1;
    (function iterate(){
        if(jie<=1) return;
        else {
            result*=jie;
            jie--;
            iterate();
        }
    })();
    return result;
}
console.log(factorial_2(4));