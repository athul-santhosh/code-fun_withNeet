class Solution {
    /**
     * @param {string[]} words
     * @returns {string}
     */
    foreignDictionary(words) {

        const graph = new Map();
        const indegree = new Map();

        for (const word of words) {
            for (const c of word) {
                if (!graph[c]) {
                    graph.set(c,[]);
                    indegree.set(c,0);
                }
            }
        }


        // build dependency graph;

        for (let i=0; i < words.length-1; i++) {
            const word1 = words[i];
            const word2 = words[i+1];

            // abc -> ab invalid ordering  , return invalid 
            if(word1.length > word2.length && word1.startsWith(word2)) {
                return "";
            }

            // find the first differening character 

            for (let j =0; j<Math.min(word1.length, word2.length); j++) {
                const char1 = word1[j];
                const char2 = word2[j];

                if (char1 !== char2) {
                    graph.get(char1).push(char2);
                    indegree.set(char2,indegree.get(char2) + 1);
                    break; // We require only the first difference
                }
            }

        }

        const queue = [];
        const result = [];

        for (const [char,degree] of indegree) {
            if (degree == 0) {
                queue.push(char);
            }
        }

        while (queue.length > 0) {
            const char = queue.shift();
            result.push(char);

            for (const neighbour of graph.get(char)) {
                indegree.set(neighbour, indegree.get(neighbour) - 1);
                if (indegree.get(neighbour) === 0) {
                    queue.push(neighbour);
                }
            }
        }

        if (result.length !== indegree.size) {
            return "";
        }

        return result.join("");



    }
}
