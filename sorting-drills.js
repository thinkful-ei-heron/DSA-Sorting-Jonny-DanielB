const LinkedList = require("./LinkedList.js");

function swap(array, i, j) {
    const tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
}

function merge(left, right, array) {
    let leftIndex = 0;
    let rightIndex = 0;
    let outputIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            array[outputIndex++] = left[leftIndex++];
        } else {
            array[outputIndex++] = right[rightIndex++];
        }
    }

    for (let i = leftIndex; i < left.length; i++) {
        array[outputIndex++] = left[i];
    }

    for (let i = rightIndex; i < right.length; i++) {
        array[outputIndex++] = right[i];
    }
    return array;
}

function partition(array, start, end) {
    const pivot = array[end - 1];
    console.log(array, start, end, pivot);
    let j = start;
    for (let i = start; i < end - 1; i++) {
        if (array[i] <= pivot) {
            swap(array, i, j);
            j++;
        }
    }
    swap(array, end - 1, j);
    return j;
}

function bubbleSort(array) {
    let swaps = 0;
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            swap(array, i, i + 1);
            swaps++;
        }
    }

    if (swaps > 0) {
        return bubbleSort(array);
    }
    return array;
}

function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }
    const middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    let right = array.slice(middle, array.length);
    left = mergeSort(left);
    right = mergeSort(right);
    return merge(left, right, array);
}

function quickSort(array, start = 0, end = array.length) {
    if (start >= end) {
        return array;
    }

    const middle = partition(array, start, end);
    array = quickSort(array, start, middle);
    array = quickSort(array, middle + 1, end);
    return array;
}

function main1() {
    console.log(mergeSort([21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40]))
}

//main1();

//.1
//What is the resulting list that will be sorted after 3 recursive calls to mergesort?
//  [ 21, 1 ]
//
// What is the resulting list that will be sorted after 16 recursive calls to mergesort?
// [ 1, 2, 9, 16, 21, 26, 27, 28, 29, 34, 39, 40, 43, 45, 46, 49 ]
//
// What are the first 2 lists to be merged?
// [ 1, 21 ] + [ 26, 45 ] => [ 21, 1, 26, 45 ]
//
// Which two lists would be merged on the 7th merge?
// [ 1, 21, 26, 45 ] + [ 2, 9, 28, 29 ] => [ 21, 1, 26, 45, 29, 28, 2, 9 ]
//

function main2() {
    console.log(quickSort([3, 9, 1, 14, 17, 24, 22, 20]))
}

//main2();

//.2
// Which of the following statements is correct about the partition step? Explain your answer.
// Neither 14 nor 17 could have been the pivot we believe that the first partition step was 24.
//
// Given the following list of numbers 14, 17, 13, 15, 19, 10, 3, 16, 9, 12 show the resulting list after the second partitioning according to the quicksort algorithm.
//When using the last item on the list as a pivot
// [10,3,13,15,19][14,17,16,9,12]
// When using the first item on the list as a pivot
// [14,13,17,15,19][10,3,16,9,12]
//
//
//

function main34() {
    let arr = "89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5".split(" ").map(txt => parseInt(txt))
    console.log(quickSort(arr));
    console.log(mergeSort(arr));
}

//main34();

function main5() {
    let tomato = new LinkedList();
    tomato.insertFirst(89);
    tomato.insertFirst(30);
    tomato.insertFirst(25);
    tomato.insertFirst(32);
    tomato.insertFirst(72);
    tomato.insertFirst(70);
    tomato.insertFirst(51);
    tomato.insertFirst(42);
    tomato.insertFirst(25);
    tomato.insertFirst(24);
    tomato.insertFirst(53);

    let sortLinkedList = (LL) => {
        let Arr = [];
        if (LL.head === null) {
            return new Error('EMPTY');
        }
        let tempNode = LL.head;
        while (tempNode.next !== null) {
            Arr.push(tempNode.value);
            tempNode = tempNode.next;
        }
        Arr.push(tempNode.value);
        mergeSort(Arr);
        let newLL = new LinkedList();
        Arr.forEach(x => newLL.insertLast(x));
        return newLL;
    };
    console.log(sortLinkedList(tomato).display());
}

//main5();
function main6() {
    function arrSort(arr, min, max) {
        let array = new Array(max - min);
        for (let i = 0; i < arr.length; i++) {
            array[arr[i] - min] = arr[i];
        }
        return array.filter(n => n);
    }

    let arr = [3, 5, 9, 4, 6, 10, 12, 50, 48, 62, 75, 2, 14];
    console.log(arrSort(arr, 2, 75))

}

//main6();

//7
function main7() {
    function randomSort(arr) {
        for (let i = 0; i < Math.floor(arr.length / 2); i++) {
            swap(arr, i, Math.floor(Math.random() * (arr.length)))
        }
        return arr;
    }

    console.log(randomSort([1, 2, 3, 4, 5, 6, 7, 8]))
}

//main7();

function main8() {
    let arr = ['Lord of the Rings', 'Guardians of The Galaxy', 'Hitchhikers: Guide to the Galaxy', 'Go Giver', 'How to win friends', 'Spaghetti', 'The travels of Marco Polo'];
    // Expression of code :
    //Sorts alphabetically
    function bookSort(bookArr, x = 0, y = bookArr.length) {
        function pBook(bookArr, x, y) {
            const bookEnd = bookArr[y - 1];
            let k = x;
            for (let i = x; i < y - 1; i++) {
                if (bookArr[i] <= bookEnd) {
                    swap(bookArr, i, k);
                    k++;
                }
            }
            swap(bookArr, y - 1, k);
            return k;
        }

        if (x >= y) {
            return bookArr;
        }
        const mid = pBook(bookArr, x, y);
        bookArr = bookSort(bookArr, x, mid);
        bookArr = bookSort(bookArr, mid + 1, y);
        return bookArr;
    }
    console.log(bookSort(arr));
}

main8();