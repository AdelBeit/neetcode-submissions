class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        // i can add the length of each string to the beginnign of it and a designated char for delimiter that way i can always recognize it
        return strs.map((str) => `${str.length}#${str}`).join("");
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        // loop till the delim then slice forward using the num

        let i = 0;
        let res = [];
        while (i < str.length) {
            let len = i;
            while (str[len] !== "#") {
                len++;
            }
            res.push(str.slice(len + 1, len + 1 + parseInt(str.slice(i, len))));
            i = len + 1 + parseInt(str.slice(i, len));
        }

        return res;
    }
}
