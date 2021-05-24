// 3 col
// 1 - explaination
// 2 - algorithm
// 3 - application

export const merge = {
    explaination: {
        exp: "Merge sort is a sorting technique based on divide and conquer technique. Merge sort first divides the array into equal halves and then combines them in a sorted manner. The merge() function is used for merging two halves. Merge sort keeps on dividing the list into equal halves until there is only a single element left in the list. The single element in the list is considered as sorted list. Merge sort combines the smaller sorted list and enters into the new list in sorted order.",
        timeComplexity: {
            bestCase: 'O(n log n)',
            avgCase: 'O(n log n)',
            worstCase: 'O(n log n)',
        },
        spaceComplexity: 'O(n)',
        algorithm: [
            'Break up the array into halves until you have arrays that are empty or have one element.',
            'Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array.',
            'Once the array has been merged back together, return the merged and sorted array',
        ],
    }
}

export const bubble = {
    explaination: {
        exp: "Bubble Sort is a simple algorithm which is used to sort a given set of n elements provided in form of an array with n number of elements. Bubble Sort compares all the element one by one and sort them based on their values. Bubble sort, also referred to as comparison sort.  It is known as bubble sort, because with every complete iteration the largest element in the given array, bubbles up towards the last place or the highest index, just like a water bubble rises up to the water surface.",
        timeComplexity: {
            bestCase: 'O(n)',
            avgCase: 'O(n^2)',
            worstCase: 'O(n^2)',
        },
        spaceComplexity: 'O(1)',
        algorithm: [
            'Starting with the first element(index = 0), compare the current element with the next element of the array.',
            'If the current element is greater than the next element of the array, swap them.',
            'If the current element is less than the next element, move to the next element. Repeat Step 1.',

            'If we have total n elements, then we need to repeat this process for n-1 times.',
        ],
    }
}

export const quick = {
    explaination: {
        exp: "Quick sort is a highly efficient sorting algorithm and is based on partitioning of array of data into smaller arrays. A large array is partitioned into two arrays one of which holds values smaller than the specified value, say pivot, based on which the partition is made and another array holds values greater than the pivot value. This algorithm is quite efficient for large-sized data sets.There are different versions:- 1] Always pick first element as pivot, 2]Always pick last element as pivot, 3]Pick a random element as pivot, 4]Pick median as pivot.",
        timeComplexity: {
            bestCase: 'O(n log n)',
            avgCase: 'O(n log n)',
            worstCase: 'O(n^2)',
        },
        spaceComplexity: 'O(n)',
        algorithm: [
            'Choose the highest index value has pivot',
            'Take two variables to point left and right of the list excluding pivot',
            'left points to the low index',
            'right points to the high',
            'while value at left is less than pivot move right',
            'while value at right is greater than pivot move left',
            'if both step 5 and step 6 does not match swap left and right',
            'if left ≥ right, the point where they met is new pivot',

        ],
    }
}

export const radix = {
    explaination: {
        exp: "Radix sort is one of the sorting algorithms used to sort a list of integer numbers in order. In radix sort algorithm, a list of integer numbers will be sorted based on the digits of individual numbers. Sorting is performed from least significant digit to the most significant digit. Radix sort algorithm requires the number of passes which are equal to the number of digits present in the largest number among the list of numbers. For example, if the largest number is a 3 digit number then that list is sorted with 3 passes.",
        timeComplexity: {
            bestCase: 'O(n+k)',
            avgCase: 'O(n+k)',
            worstCase: 'O(n+k)',
        },
        spaceComplexity: 'O(n+2^d)',
        algorithm: [
            'Define 10 queues each representing a bucket for each digit from 0 to 9.',
            'Consider the least significant digit of each number in the list which is to be sorted.',
            'Insert each number into their respective queue based on the least significant digit.',
            'Group all the numbers from queue 0 to queue 9 in the order they have inserted into their respective queues.',
            'Repeat from step 3 based on the next least significant digit.',
            'Repeat from step 2 until all the numbers are grouped based on the most significant digit.',
        ],
    }
}