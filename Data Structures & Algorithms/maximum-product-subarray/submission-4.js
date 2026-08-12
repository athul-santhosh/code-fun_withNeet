class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {

        let product = nums[0];

        let leftProduct = 1;
        let rightProduct = 1;

        const n = nums.length;

        for (let index =0; index < n; index++) {

            leftProduct =  leftProduct == 0 ? 1 : leftProduct;
            rightProduct = rightProduct == 0 ? 1: rightProduct;

            leftProduct *= nums[index];
            rightProduct *= nums[n-index-1];
            product = Math.max(product,Math.max(leftProduct , rightProduct))
        }


        return product == -0 ? 0 : product;

    }
}
