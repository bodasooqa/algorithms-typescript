function twoSum(numbers: number[], target: number): number[] {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        const temp = numbers[left] + numbers[right];
        if (temp === target) return [left + 1, right + 1];
        else if (temp < target) left++;
        else right--;
    }

    return [];
}

console.log(twoSum([2, 7, 11, 15], 9)); // [1,2]
console.log(twoSum([2, 3, 4], 6)); // [1,3]
console.log(twoSum([-1, 0], -1)); // [1,2]
console.log(twoSum([3, 4], 5)); // []

