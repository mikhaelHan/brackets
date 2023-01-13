const check = (str, bracketsConfig) => {
  let flag = true;
  const stack = [];
  str.split('').forEach(strElement => {
    bracketsConfig.forEach(configElement => {
      if (strElement === configElement[0] && strElement === configElement[1]) {
        if (stack.length === 0) { stack.push(strElement) }
        else if (stack[stack.length - 1] !== configElement[0] && !stack.includes(strElement)) { stack.push(strElement) }
        else if (stack[stack.length - 1] === configElement[0]) {
          stack.pop();
        }
        else flag = false
      }
      else if (strElement === configElement[0] && strElement !== configElement[1]) {
        stack.push(strElement);
      }
      else if (strElement === configElement[1] && strElement !== configElement[0]) {
        stack.length !== 0 && stack[stack.length - 1] === configElement[0] ? stack.pop() : flag = false;
      }
    })
  });
  return flag === true && stack.length === 0
}

module.exports = check;