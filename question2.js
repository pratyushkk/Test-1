/* 
 Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

Example 1:
Input: s = "leetcode"
Output: 0

Example 2:
Input: s = "loveleetcode"
Output: 2

Example 3:
Input: s = "aabb"
Output: -1

Constraints:
a. 1 <= s.length <= 10^5
b. s consists of only lowercase English letters.

*/

function firstNonRepeatingCharacter(s) {
  let map = new Map();
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (map.has(char)) {
      map.set(char, map.get(char) + 1);
    } else {
      map.set(char, 1);
    }
  }
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (map.get(char) === 1) {
      return i;
    }
  }
  return -1;
}

console.log(firstNonRepeatingCharacter("leetcode")); // Output: 0
console.log(firstNonRepeatingCharacter("loveleetcode")); // Output: 2
console.log(firstNonRepeatingCharacter("aabb")); // Output: -1
