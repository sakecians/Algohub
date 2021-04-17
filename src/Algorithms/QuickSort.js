
function pivot(arr, start = 0, end = arr.length - 1, animation) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  // We are assuming the pivot is always the first element
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    animation.push(["compare", pivot, arr[i]]);  
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
      animation.push([arr[swapIdx], arr[i]]);
    }
  }

  // Swap the pivot from the start the swapPoint
  animation.push([arr[start], arr[swapIdx]]);
  swap(arr, start, swapIdx);
  animation.push(["placed", arr[swapIdx]]);
  return swapIdx;
}


export function getQuickSortAnimation(arr, left = 0, right = arr.length -1, animation=[]){
    if(left < right){
        let pivotIndex = pivot(arr, left, right, animation) //3
        //left
        getQuickSortAnimation(arr,left,pivotIndex-1, animation);
        //right
        getQuickSortAnimation(arr,pivotIndex+1,right, animation);
      }
     return animation;
} 





