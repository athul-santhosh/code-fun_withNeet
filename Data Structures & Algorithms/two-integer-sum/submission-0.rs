impl Solution {
    pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
        let mut indices = HashMap::new();

        for (i,&n) in nums.iter().enumerate() {
            indices.insert(n,i);
        }

        for (i,&n) in nums.iter().enumerate() {
            let diff = target - n;
            if let Some(&j) = indices.get(&diff) {
                if j  != i {
                    return vec![i as i32, j as i32];
                }
            }
            
        }

        vec![]
    }
}
