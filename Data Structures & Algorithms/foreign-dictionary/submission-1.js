class Solution {
    /**
     * @param {string[]} words
     * @returns {string}
     */
    foreignDictionary(words) {
        const adj = {};
        for(let w of words){
            for(let c of w){
                adj[c] = new Set();
            }
        }
        let res = [];
        for(let i = 0; i<words.length-1;i++){
            let w1= words[i];
            let w2 = words[i+1];
            let n = Math.min(w1.length,w2.length);
            if(w1.length>w2.length && w1.slice(0,n) == w2.slice(0,n)){
                return "";
            }
            for(let j=0;j<n;j++){
                if(w1[j] !== w2[j]){
                    adj[w1[j]].add(w2[j]);
                    break;
                }
            }
        }

        let visited = {};
        function dfs(c){
            if(c in visited) return visited[c];
            visited[c] = true;
            for(let neighbor of adj[c]){
                if(dfs(neighbor)) return true;
            }
            visited[c] = false;
            res.push(c);
        }
        for(let character of Object.keys(adj)){
            if(dfs(character)) return "";
        }

        res.reverse();
        return res.join("");
    }
}
