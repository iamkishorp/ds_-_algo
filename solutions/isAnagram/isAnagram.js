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
