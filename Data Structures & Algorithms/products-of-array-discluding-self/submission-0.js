class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        /*

        1     2   3  4 

        [24, 12,  8 , 6]

        L R :: prefixProduct  = 6;
         res[i] = prefixProduct;
         prefixProduct *= nums[i];

        [1, 2, 3, 4]

        [24, 12 ,8, 6]
         !

        R::L :: postfixProduct = 24;

        res[i] *= postFixProduct;
        postFixProduct *= postFixProduct * nums[i]
 

        */


        const res = new Array(nums.length).fill(1);

        let prefixProduct = 1;
        // L :: R 
        for (let i =0 ; i < nums.length; i++) {
            res[i] = prefixProduct;
            prefixProduct *= nums[i];
        }

        let postfixProduct = 1;


        console.log(res);

        for (let i = nums.length-1; i >= 0 ; i--) {
            res[i] *= postfixProduct;
            postfixProduct *= nums[i];
        }

        return res;
    }
}
