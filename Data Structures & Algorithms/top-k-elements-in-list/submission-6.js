class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // count frequencies
        // store counts as array buckets or i can compare it to every other count and then find out the positiion of it within counts and figure out if its within 2 items
        // once i have the count return it, also need to push to the array and then merge all of them
        const freqs = new Map();
        for (let n of nums) {
            freqs.set(n, (freqs.get(n) ?? 0) + 1);
        }

        let bucket = new Array(nums.length+1).fill(0).map((i) => []);
        for (let [num, freq] of freqs.entries()) {
            bucket[freq].push(num);
        }
        let res = bucket
            .reduce((acc, arr) => {
                acc.push(...arr);
                return acc;
            }, [])
            .slice(-k);
        console.log(res);
        return res;
    }
}
