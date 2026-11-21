class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let deduped = new Set(nums);
        let res = 0;
        for (let n of deduped) {
            if (deduped.has(n - 1)) continue;
            let i = n;
            let len = 1;
            while (deduped.has(i + 1)) {
                len++;
                i++;
            }
            res = Math.max(res, len);
        }
        return res;
    }
}
