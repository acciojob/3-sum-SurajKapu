function threeSum(arr, target) {
	//your code here
	let min_diff;
	let ans;
	for (let i = 0; i < arr.length; i++) {
		let left = i + 1, right = arr.length - 1
		while (left < right) {
			let sum = arr[i] + arr[left] + arr[right]
			let diff = (sum >= target)	? sum - target : target - sum
			if(diff < min_diff) {
				min_diff = diff
				ans = sum			
			}	
			left++
			right--
		}
	}
	return ans
}

module.exports = threeSum;
