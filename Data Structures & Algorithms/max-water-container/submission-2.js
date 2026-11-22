class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        // i have a list of integers i have to find the pair with the highest product (min(j,k) * j-k)
        // i want to keep the highest bars so i should move the smaller bar until it finds a higher one
        let maxArea = 0;
        let [left, right] = [0, heights.length - 1];
        while (left < right) {
            maxArea = Math.max(maxArea, (right - left) * Math.min(heights[left], heights[right]));
            if (heights[left] <= heights[right]) left++;
            else right--;
        }
        return maxArea;
    }
}
