const partialSum = x =>
    y =>
        z => x+y+z;

const add1 = partialSum(1);
const add1and30 = add1(30);
const sum = add1and30(20);

console.log(sum);