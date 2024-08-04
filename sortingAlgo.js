
// Sorting algorithms

/**************************************Linear Search Algorithm**********************************/

//linear search - ['a','b','c'] in linear search all the elements are checked one by one
// js indexof, includes , find , findindex all methods uses linear search

let array = ['anupam','megha','manish','pranav','rohit','paras']

//code to find index if it present otherwise return -1
//console.log(findIndex(array,'megha'))
function findIndex(array,text){
    for(let i=0;i<array.length;i++){
        if(text==array[i]){
            return i
        }
    }

    return -1;
}

/****************************************************************************************************/

/*****************Binary Search**********************************************************************/
    let nums = [1,6,8,9];
    console.log(binarySearch(nums,91))
    function binarySearch(arr, target) {
        let left = 0;
        let right = arr.length - 1;
    
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            
            if (arr[mid] === target) {
                return mid; // Target found at index `mid`
            } else if (arr[mid] < target) {
                left = mid + 1; // Search in the right half
            } else {
                right = mid - 1; // Search in the left half
            }
        }
    
        return -1; // Target not found
    }
    

/****************************************************************************************************/