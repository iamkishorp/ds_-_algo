## Valid Parentheses

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.

Example 1:

```
Input: s = "()"
Output: true
```

Example 2:

```
Input: s = "()[]{}"
Output: true
```

Example 3:

```
Input: s = "(]"
Output: false
```

Example 4:

```
Input: s = "([)]"
Output: false
```

Example 5:

```
Input: s = "{[]}"
Output: true
```

```
var isValid = function(s) {
    var stack = [];
     let closedParenthesis = {
         ')' : '(',
         ']'  : '[',
         '}' : '{'
     }

     for(i = 0; i < s.length; i++) {
         if(closedParenthesis[s[i]]){
            if(stack[stack.length -1] === closedParenthesis[s[i]]){
                 stack.pop();
             }else{
                 return false;
             }
         }else{
             stack.push(s[i]);
         }
     }
    return stack.length ? false : true;
}

```
