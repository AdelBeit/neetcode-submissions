class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freqs = new Map();
        for(let n of nums){
            if(!freqs.has(n)) freqs.set(n,0);
            freqs.set(n,freqs.get(n)+1);
        }
        let bucket = new Array(nums.length+1).fill(0).map(i => []);
        for(let [n,freq] of freqs.entries()){
            bucket[freq].push(n);
        }
        let res = [];
        while(bucket.length){
            res.push(...bucket.pop());
        }
        return res.slice(0,k);
    }
}
