// export function getBubbleSortAnimation(array){
//     let animations = [];
//     let passedArr = array.slice();
//     for(let i=passedArr.length; i>0; i--){
//         var noSwaps = true;
//         for(let j=0; j<(i-1); j++){
//             if(passedArr[j] > passedArr[j+1]) {
//                 animations.push([passedArr[j],passedArr[j+1]]);
//                 let temp   = passedArr[j+1];
//                 passedArr[j+1] = passedArr[j];
//                 passedArr[j]   = temp;
//                 noSwaps = false;
//             }
//         }
//         if(noSwaps) break;
//     }
//     return animations;
// }

export function getBubbleSortAnimation(array){
    let animations = [];
    let passedArr = array.slice();
    for(let i=passedArr.length; i>0; i--){
        let j;
        for(j=0; j<(i-1); j++){
            animations.push([passedArr[j],passedArr[j+1]]);
            if(passedArr[j] > passedArr[j+1]) {
                let temp   = passedArr[j+1];
                passedArr[j+1] = passedArr[j];
                passedArr[j]   = temp;
            }
        }
        animations.push([passedArr[j]]);
    }
    return animations;
}
