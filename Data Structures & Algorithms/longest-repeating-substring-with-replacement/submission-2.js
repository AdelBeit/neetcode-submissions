class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let n = s.length;
        const freqs = new Map();
        let [left, right] = [0, 0];
        let maxLen = 0;
        let maxF = 0;
        while (right < n) {
            freqs.set(s[right], (freqs.get(s[right]) ?? 0) + 1);
            maxF = Math.max(maxF, freqs.get(s[right]))
            if (right-left+1 - maxF > k) {
                freqs.set(s[left],freqs.get(s[left]) - 1);
                left++;
            }
            maxLen = Math.max(right - left + 1, maxLen);
            right++;
        }
        return maxLen;
    }
}
