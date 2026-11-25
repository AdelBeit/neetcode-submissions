class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        // for each number i can find the next number in the list and when i reach the end of the list and update max length
        // i could also just store it all in a hashmap and treat it like a linked list where i can find the next number in constant time. then i could instead of searching for every n only search for ns that are the beginnign of a list 
        let nSet = new Set(nums);
        let maxLen = 0;
        for(let n of nSet){
            if(!nSet.has(n-1)){
                let len = n;
                while(nSet.has(len)){
                    len++;
                }
                maxLen = Math.max(len-n,maxLen);
            }
        }
        return maxLen;
    }
}
