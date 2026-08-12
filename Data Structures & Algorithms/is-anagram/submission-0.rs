impl Solution {
    pub fn is_anagram(s: String, t: String) -> bool {
        if s.len() != t.len() {
            return false;
        }

        let mut s_sort: Vec<u8> = s.into_bytes();
        let mut t_sort: Vec<u8> = t.into_bytes();

        s_sort.sort_unstable();
        t_sort.sort_unstable();

        s_sort == t_sort
    }
}
