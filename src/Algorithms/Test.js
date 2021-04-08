let animations = [];
export function getMergeSortAnimations(arr){
    animations = [];
    mergeSort(arr, 0, arr.length - 1);
    animations.push(["completed"]);
    return animations;
}
function mergeSort(arr, leftIdx, rightIdx){
    if(leftIdx < rightIdx){
        let midIdx = Math.floor((leftIdx+rightIdx) / 2);

        mergeSort(arr, leftIdx, midIdx);
        mergeSort(arr, midIdx+1, rightIdx);

        merge(arr, leftIdx, midIdx, rightIdx);

    }
}

function merge(arr, start, mid, end){
    let start2 = mid + 1;
    console.log(`Merging left : ${arr.slice(start, mid+1)} right : ${arr.slice(start2,end+1)}`);
    animations.push(["merge", arr.slice(start, mid+1), arr.slice(start2, end+1)]);

    if(arr[mid] <= arr[start2]) {
        return;
    }

    while(start <= mid && start2 <= end){
        if(arr[start] <= arr[start2] ) {
            animations.push(["compare", arr[start], arr[start2]]);
            start++;
        }else {
            let value = arr[start2];
            let index = start2;

            // Shift all the elements between element 1
            // element 2, right by 1.
            while (index != start) {
                console.log(`Moving ${index-1} to ${index}`)
                animations.push([index, arr[index-1]]);
                arr[index] = arr[index - 1];
                index--;
            }
            arr[start] = value;

            // Update all the pointers
            start++;
            mid++;
            start2++;
        }
    }
}