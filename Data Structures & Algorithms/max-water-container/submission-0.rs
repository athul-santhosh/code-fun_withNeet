impl Solution {
    pub fn max_area(heights: Vec<i32>) -> i32 {
        let mut res = 0;
        for i in 0..heights.len() {
            for j in (i + 1)..heights.len() {
                res = res.max(heights[i].min(heights[j]) * (j-i) as i32);
            }
        }
        res
    }
}
