const arr = [1,[2,3],[4,5,[6,7,8]],9];
function flatten(arr){
    let fatarr=[];
    for(let i=0;i<arr.length;i++){
        if(typeof arr[i]==="object"){
            fatarr=fatarr.concat(flatten(arr[i]));
        }else fatarr.push(arr[i]);
    }
    return fatarr;
}

const fatarr=flatten(arr);
console.log(fatarr);

//结果 [1,2,3,4,5,6,7,8,9]