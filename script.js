function threeSum(arr, target) {
	//your code here
	arr.sort()
	let min_diff = Number.MAX_VALUE;
	let ans = 0;
	let found_target = false
	for (let i = 0; i < arr.length; i++) {
	    if(found_target) 
	        break;
		let left = i + 1, right = arr.length - 1
		while (left < right) {
			let sum = arr[i] + arr[left] + arr[right]
			let diff = (sum >= target)	? (sum - target) : (target - sum)
			if(diff == 0) {
			    found_target = true
			    break;
			}
			else if(diff < min_diff) {
				min_diff = diff
				ans = sum
			}	
			(sum > target) ? right-- : left++
		}
	}
	return ans
}

module.exports = threeSum;
