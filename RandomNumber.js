function randomNum(){
    return Math.floor(100+Math.random()*899);
}
let array=new Array()
for(let i=0;i<10;i++){
    let number=randomNum();
    array[i]=number;
    console.log(number)
}
var secondMax = function (){ 
    var array =  number;// use int arrays
    var max = Math.max.apply(null, array); // get the max of the array
    arr.splice(arr.indexOf(max), 1); // remove max from the array
    return Math.max.apply(null, array); // get the 2nd max
};
console.log(secondMax)