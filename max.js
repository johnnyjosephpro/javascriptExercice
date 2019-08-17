let arr = [1, 2, 3]
let max = arr.reduce(function(a,b) {
  return Math.max(a,b)
})

console.log(max)

x=Math.log2(240,000)

console.log(x)

const str = "  Hello World  ";

console.log(str.trimLeft());
// "Hello World  "

console.log(str.trimRight());
// "  Hello World"

console.log(str.trim());
// "Hello World"


// Maximum

let Array = [5,2,7,4,8,6,3,0,9];
        //console.log(Math.max(...Array));
let maximum=Array[0]

for (i=0; i<Array.length; i++){

    if (Array[i]>maximum)
        maximum=Array[i]
}
console.log(i)