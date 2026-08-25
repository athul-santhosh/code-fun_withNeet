class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let left = 0;
        let right = s.length - 1;


        function isValidChar (char) {
            
            const validChars = 'ABCDEFGHIKLMNOPQRSTUVWXYZ0123456789';
            return validChars.includes(char.toUpperCase());

        }


        while (left <= right) {
            if (!isValidChar(s[left])) {
                left++;
            }

            else if (!isValidChar(s[right])) {
                right--;
            }

            else if (s[left].toLowerCase() === s[right].toLowerCase()) {
                left++;
                right--;
            }
            else {
                return false;
            }

        }

        return true;
    }
}
