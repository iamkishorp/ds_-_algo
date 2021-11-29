## Valid Anagram

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

Example 1:

```
Input: s = "anagram", t = "nagaram"
Output: true
```

Example 2:

```
Input: s = "rat", t = "car"
Output: false
```

Constraints:

```
1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
```

Solution

```
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  let sOb = {};
  let tOb = {};

  for (i = 0; i < s.length; i++) {
    sOb[s[i]] = sOb[s[i]] ? sOb[s[i]] + 1 : 1;
    tOb[t[i]] = tOb[t[i]] ? tOb[t[i]] + 1 : 1;
  }

  for (let key in sOb) {
    if (tOb[key] !== sOb[key]) {
      return false;
    }
  }
  return true;
};
```
