class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // bucket sort wil give me Sn and Tn
        let freqs = new Map();
        nums.forEach((n) => {
            if (!freqs.has(n)) freqs.set(n, 0);
            freqs.set(n, freqs.get(n) + 1);
        });

        let bucket = new Array(nums.length + 1).fill(0).map((a) => []);
        for (let [k, v] of freqs.entries()) {
            bucket[v].push(k);
        }
        return bucket
            .reduce((acc, arr) => {
                acc.push(...arr);
                return acc;
            }, [])
            .slice(-k);
    }
}
