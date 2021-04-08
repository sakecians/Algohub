export const animations = [];
export function getMergeSortAnimations(arr){
    return;
}
// export function getMergeSortAnimations(arr){
//     if(arr.length <= 1){
//         return arr;
//     }
//     let mid = Math.floor(arr.length/2);
//     let left = getMergeSortAnimations(arr.slice(0, mid));
//     let right = getMergeSortAnimations(arr.slice(mid));
//     console.log(`left is ${left}`);
//     console.log(`right is ${right}`);
//     return merge(left, right);
// }

// function merge(arr1, arr2){
//     let results = [];
//     let i = 0;
//     let j = 0;
//     let k = 0;

//     while(i < arr1.length && j < arr2.length && (k < arr1.length || k < arr2.length)){
//         if(arr2[j] > arr1[i]){
//             results.push(arr1[i]);
//             animations.push([arr1[i], arr2[k]]);
//             k++;
//             i++;
//         } else {
//             animations.push([arr1[k], arr2[j]]);
//             results.push(arr2[j]);
//             k++;
//             j++;
//         }
//     }

//     while(i < arr1.length){
//         animations.push([arr1[i]])
//         results.push(arr1[i]);
//         i++;
//     }

//     while(j < arr2.length){
//         animations.push([arr2[j]])
//         results.push(arr2[j]);
//         j++;
//     }
//     console.log(`animations ${animations}`);
//     console.log(`results ${results}`)
//     return results;
// }





// export let animations = [];

// export function getMergeSortAnimations(array){
//     animations = [];
//     mergeSort(array);
//     return animations;
// }

// export function mergeSort(array){
//     if(array === null) return;
//     if(array.length > 1) {
//         let mid = Math.floor(array.length/2) ;

//         let left = array.slice(0 , mid);
//         let right = array.slice(mid);

//         mergeSort(left);
//         mergeSort(right);

//         animations.push(["merge", left, right]);
//         let i = 0;
//         let j = 0;
//         let k = 0;

//         while(i < left.length && j < right.length){
//             if(left[i] < right[j]){
//                 array[k] = left[i];
//                 animations.push([k, left[i]]);
//                 i++;
//             }else{
//                 array[k] = right[j];
//                 animations.push([k, right[j]]);
//                 j++;
//             }
//             k++;
//         }
//         while(i < left.length){
//             array[k] = left[i];
//             animations.push([k, left[i]]);
//             k++;
//             i++;
//         }
//         while(j < right.length){
//             array[k] = right[j];
//             animations.push([k, right[j]]);
//             k++;
//             j++;
//         }
//     }
// }
