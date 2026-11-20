class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // i have to check if the two arrays have the same chars. i could count frequency of each char and then compare the frequency array for both arrays. thats o(n) time m being max(s.lenght,t.length). and o(n) space complexity
        // i could sort both arrays and just go through both one by one, thats o1 space, and o(nlogn) time complexity
        if(s.length !== t.length) return false;
        let arrS = s.split('').sort();
        let arrT = t.split('').sort();
        for(let i in arrS){
            if(arrT[i] !== arrS[i]) return false;
        }
        return true;
    }
}
