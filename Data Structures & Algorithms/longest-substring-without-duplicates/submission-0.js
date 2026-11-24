class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if (!s.length) return 0;
        let fast = 0;
        let slow = 0;
        let maxLen = 1;
        let seen = new Set();
        while (fast < s.length) {
            if (fast !== slow && seen.has(s[fast])) {
                seen.delete(s[slow]);
                slow++;
                continue;
            }
            seen.add(s[fast]);
            maxLen = Math.max(seen.size, maxLen);
            fast++;
        }
        // if (!seen.has(s[fast - 1])) maxLen = Math.max(seen.size, maxLen);
        return maxLen;
    }
}
