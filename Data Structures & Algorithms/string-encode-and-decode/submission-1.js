class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        // format: [n: 2 digits][length of each string: 3 digits each][all strings joined]
        // n < 100 fits in 2 digits, each length < 200 fits in 3 digits
        let n = strs.length;

        let twoDigits = Intl.NumberFormat("en-US", { minimumIntegerDigits: 2 });
        let threeDigits = Intl.NumberFormat("en-US", { minimumIntegerDigits: 3 });

        // store the LENGTH of each string, not its start offset.
        // offsets add up across strings and can get huge, lengths never pass 199
        let lengths = new Array(n).fill(0);
        for (let i = 0; i < n; i++) {
            let item = strs[i];
            lengths[i] = threeDigits.format(item.length);
        }

        let header = twoDigits.format(n) + lengths.join("");
        let body = strs.join("");
        return header + body;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        // first 2 chars: how many strings there are
        let n = parseInt(str.slice(0, 2));

        // next n * 3 chars: the length of each string
        let lengthsEnd = 2 + n * 3;
        let lengthsPart = str.slice(2, lengthsEnd);

        // everything after that: all the strings glued together
        let body = str.slice(lengthsEnd);

        let decoded = [];
        let start = 0; // where the current string begins inside body

        for (let i = 0; i < n; i++) {
            // read the i-th 3 digit length out of the header
            let lenStart = i * 3;
            let len = parseInt(lengthsPart.slice(lenStart, lenStart + 3));

            // cut that many chars out of the body, then move start forward
            let end = start + len;
            decoded.push(body.slice(start, end));
            start = end;
        }

        return decoded;
    }
}