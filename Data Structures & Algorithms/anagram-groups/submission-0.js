class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(s) {
        /*

        s = ['12','af']

        'abcdefghijklmnopqrstuvwxyz'
         00-100-00000000000000000000000

        {
            'act' : [act,tac, cat, atc]
            'hat' :[ath, hta]
        }
        
        */

        const anagramMap = {};
        const alpha = 'abcdefghijklmnopqrstuvwxyz';


        function makeWordToIdentifier (w) {
            const alphaKey = new Array(26).fill(0);
            // [0,0,0,0,... 0];
            for (let c of w) {
                let cIndex = c.charCodeAt(0) - 'a'.charCodeAt(0);
                alphaKey[cIndex] = (alphaKey[cIndex] || 0) + 1;
            }

            return alphaKey.join('-');
             
        }

        for (let word of s) {
            let wordIdentifier = makeWordToIdentifier(word);
            if (wordIdentifier in anagramMap) {
                anagramMap[wordIdentifier].push(word);
            } else {
                anagramMap[wordIdentifier] = [word];
            }
        }

        return Object.values(anagramMap);

    }
}
