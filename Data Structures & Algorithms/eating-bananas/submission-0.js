class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */

    /*
    h >= piles.length 

    if h === piles.lenght , max of Piles would be the answer

    18 9 10 12 4  h = 6;

    k = 12

    1----910-----12
            
    
    */
    minEatingSpeed(piles, h) {


        function canFinish(k) {
            let totalHours = h;
            for(let pile of piles) {
                totalHours -= Math.ceil(pile/k); 
                if (totalHours < 0) return false;
            }
            return totalHours >= 0;
        }


        let low = 1;
        let high = Math.max(...piles);

        while (low < high) {
            let mid = Math.floor((low + high) / 2);

            if (canFinish(mid)) {
                high = mid;
            }
            else {
                low = mid + 1;
            }
        }

        return low;

    }
}
