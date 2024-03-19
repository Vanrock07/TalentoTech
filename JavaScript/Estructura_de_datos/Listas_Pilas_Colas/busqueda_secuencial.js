function bSecuencial(arr, value) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return i;
        }
    }
    return -1;
}
let arr = [5,6,1,8,12,4,67,9,4,-2,3,2];
console.log(bSecuencial(arr, 12));

