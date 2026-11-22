class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        // we can use binary search to find the number thats missing its sorted so we get log n time for search and we dont use extra space.there was something else about this 
        // we could also use a 2 pointer system and have left and right move inward, that would be Tn and S1. i just need to ensure i skip the ones ive already seen on each side each time i skip
        let left = 0;
        let right = numbers.length-1;
        while(left < right){
            let [leftN, rightN] = [numbers[left],numbers[right]];
            let currT = leftN+rightN;
            if(currT == target) return [left+1,right+1];
            if(currT > target) {
                while(numbers[right]==rightN && right > left){
                    right--;
                }
            } 
            if(currT < target) {
                while(numbers[left]==leftN && left < right) {
                    left++;
                }
            }
        }
    }
}
