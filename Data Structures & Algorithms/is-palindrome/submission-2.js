class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        // two pointers from left and right meet in the middle
        let legal = 'abcdefghijklmnopqrstuvwxyz1234567890';
        let newS = [...s.toLowerCase()].filter(c => legal.includes(c.toLowerCase()));
        newS = newS.join('');
        let left = 0;
        let right = newS.length-1;
        while(left<right){
            if(newS[left].toLowerCase() !== newS[right].toLowerCase()) return false;
            left++;
            right--;
        }
        return true;
    }
}
