class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        // i can setup a delimiter that has a number and a specific string and then i can check for it when i get it
        const res = strs.map((str) => `${str.length}#${str}`).join("");

        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let final = [];
        let i = 0;
        while (i < str.length) {
            let start = i;
            let end = i;

            while (str[end] !== "#") {
                end++;
            }
            let len = parseInt(str.slice(start, end));

            start = end + 1;
            final.push(str.slice(start, start + len));
            i = start + len;
        }
        return final;
    }
}
