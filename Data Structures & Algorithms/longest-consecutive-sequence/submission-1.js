class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        // i can do brute force and for every number find the lenght of the rest of the sequence. but that means Big O Tn^2, and S1
        // it'd be easier if i could do the search for the next and next in sequence faster, so i could use extra space Sn and reduce time to Tn. 
        // i could also shave some iterations by not checking for numbers that aren't the start of the sequence. 
        let maxLen = 0;
        let numSet = new Set(nums);
        for(let n of numSet){
            if(numSet.has(n-1)) continue;
            let i = n
            while(numSet.has(i)){
                i++;
            }
            maxLen = Math.max(maxLen,i - n);
        }
        return maxLen;
    }
}
