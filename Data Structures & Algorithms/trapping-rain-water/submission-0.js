class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let n = height.length;
        let left = 0;
        let right = n - 1;
        let rmax = height[right];
        let lmax = height[left];
        let res = 0;
        while (left < right) {
            while (left < right && lmax <= rmax) {
                lmax = Math.max(height[left + 1], lmax);
                res += Math.max(0, lmax - height[left + 1]);

                left++;
            }
            while (left < right && lmax > rmax) {
                rmax = Math.max(height[right - 1], rmax);
                res += Math.max(0, rmax - height[right - 1]);

                right--;
            }
        }
        return res;
    }
}
