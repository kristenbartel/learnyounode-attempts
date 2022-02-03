// console.log(process.argv);
function addArray(arr) {
    let sum = 0;
    for (let i = 2; i < arr.length; i++) {
        let theNumber = Number(arr[i]);
        sum += theNumber;
    }
    // console.log(sum)
}
addArray(process.argv);
