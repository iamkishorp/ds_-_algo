var isValid = function (s) {
  var stack = [];
  let closedParenthesis = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (i = 0; i < s.length; i++) {
    if (closedParenthesis[s[i]]) {
      if (stack[stack.length - 1] === closedParenthesis[s[i]]) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(s[i]);
    }
  }
  return stack.length ? false : true;
};
