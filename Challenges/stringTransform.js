function transformString(str) {
    const length = str.length;
    let result = str;

    // Check if the length is divisible by both 3 and 5
    if (length % 3 === 0 && length % 5 === 0) {
        result = result.split('').reverse().join('');
        result = result.split('').map(char => char.charCodeAt(0)).join(' ');
    } else if (length % 3 === 0) { // Check if the length is divisible by 3
        result = result.split('').reverse().join('');
    } else if (length % 5 === 0) { // Check if the length is divisible by 5
        result = result.split('').map(char => char.charCodeAt(0)).join(' ');
    }

    return result;
}

// Example 
const input = "Hello it is Tresor";
console.log(transformString(input));  
