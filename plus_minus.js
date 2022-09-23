/**
 * Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.
Example

There are  elements, two positive, two negative and one zero. Their ratios are ,  and . Results are printed as:

0.400000
0.400000
0.200000
 */

function plusMinus(arr) {
    // Write your code here
    let positive = 0;
    let negative = 0;
    let zero = 0;
    const result = [];
    
    for (let i = 0; i< arr.length; i++) {
        if(arr[i] == 0) {
            zero++;
        } else if(arr[i]<0) {
            negative++;
        } else {
            positive++;
        }
    }
    
    if(positive && arr.length) {
        console.log(Number(positive/arr.length).toFixed(6));
    }  else {
        console.log(Number(0).toFixed(6));
    }
    
    if(negative && arr.length) {
        console.log(Number(negative/arr.length).toFixed(6));
    }  else {
        console.log(Number(0).toFixed(6));
    }
    
    if(zero && arr.length) {
        console.log(Number(zero/arr.length).toFixed(6));
    }  else {
        console.log(Number(0).toFixed(6));
    }
}

plusMinus([-4, 3, -9, 0, 4, 1])