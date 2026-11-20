class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // i can sort the input and check for the missign piece of the current item  thatll give me onlogn time complexity and constant space
        // i can use extra space and get o(n) time and space with hashmap of visited list
        // im gonna go with hashset
        // if its sorted i can also use two pointer and get o(n) time and o(0) space, but binary search would land me the same thing
        let seen = new Map();
        for(let i in nums){
            const n = nums[i];
            const missing = target - n;
            if(seen.has(missing)) return [parseInt(seen.get(missing)),parseInt(i)].toSorted();
            if(!seen.has(n)) seen.set(n,i);
        }
        return [-1,-1];
    }
}
