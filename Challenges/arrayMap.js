function subArraySum(arr, target) {
    let currentSum = 0;
    let start = 0;

    for (let end = 0; end < arr.length; end++) {
        currentSum += arr[end];

        while (currentSum > target && start <= end) {
            currentSum -= arr[start];
            start++;
        }

        if (currentSum === target) {
            return true;
        }
    }

    return false;
}

// Example 
const arr = [4, 2, 7, 1, 9, 5];
const target = 14;
console.log(subArraySum(arr, target)); 
