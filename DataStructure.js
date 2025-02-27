// 1. Implement Bubble Sort
// Write a function that sorts an array using the Bubble Sort algorithm.
// Optimize it by stopping early if the array becomes sorted before all passes are completed.

let arr = [5, 3, 8, 4, 2];

function bubbleSort(arr) {
    for (let index = 0; index < arr.length; index++) {
        let count = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[index] < arr[j]) {
                let temp = arr[index];
                arr[index] = arr[j];
                arr[j] = temp;
                count++;
            }
        }
        if (count === 0) {
            break;
        }
    }

    console.log('sorted array: ', arr);
}

// bubbleSort(arr);

// 2. Implement Binary Search
// Write a function that performs Binary Search on a sorted array.
// If the target element is found, return its index; otherwise, return -1.

function binarySearch(array, target) {
    for (let index = 0; index < array.length; index++) {

        if (array[index] == target)
            return index;
    }
}


console.log(binarySearch(arr, 2))

// 3. Implement a Stack Using an Array
// Create a Stack class with methods: push(), pop(), peek(), and isEmpty().

class Stack {
    constructor() {
        this.arr = [];
    }
    push(value) {
        this.arr.p
    }
    pop() {

    }
}
let stack = new Stack();
stack.push(10);
stack.push(20);
console.log(stack.pop()); // Output: 20


// 4. Implement a Queue Using a Linked List
// Create a Queue class using a linked list.
// Implement enqueue(), dequeue(), and front() methods.


