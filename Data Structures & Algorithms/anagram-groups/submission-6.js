class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // the first goal is to find out if an input is an anagram of the target. we could build a freq list and compare it for each one. that woul dbe o(n*m) time m being max Lenght of strs[i] which is 100 which isnt much . space would be o(n) or constant if we build just the 2 and scrap the freq list of the second item post determination
        // we could also use a count sort or id string and compare it, given that the alphabet of the input is tiny. lowercase english letters that 26 len string. for each input we build the hash which is the count of what letters it uses in those indices and then compare strings string comparison is faster i think . that would give o(m*n) time complexity and space would be o(n), the length of str[i] is negligible.
        // we cant get better than o(m*n) time because we have to looka t every char of every item. the space we could improve on if we build the id at read time and scrap it. now when we group the anagrams of the first item, we wna tto move to the next item and build the anagrams of it, we want to make sure its not been seen before, we can either do a loop of the output which would approximately reach the limit of n^2 . we could store the id of the ones we have added to an array in a set perhaps and that way we skip over them? but then we need to still be able to know which sub array to add the current i to.
        // i could also have a hashet of all the groups and their id. that way i can quickly match the id of thes tring with the gtroup. that would expand my space to o(n) but time would remain at n*m. if i wanted to save on space i could mybe change the input and the current item could have its index in the output prepended? i could or i could build the output in that hashmap and then put all them together.
        const mapping = new Map();
        for (let word of strs) {
            let idArr = new Array(26).fill(0);
            for (let char of word) {
                idArr[char.charCodeAt(0) - "a".charCodeAt(0)]++;
            }
            let key = idArr.join('.');
            if(!mapping.has(key)) mapping.set(key,[]);
            mapping.get(key).push(word);
        }
        return [...mapping.values()];
    }
}
