function rank(operator) {
  switch (operator) {
    case '+':
      return 1;
    case '-':
      return 1;
    case '*':
      return 2;
    case '/':
      return 2;
    case 'r':
      return 3;
    default:
      return 0;
  }
}

function isOperator(char) {
  return /^[+\-*\/]$/.test(char);
}

function isNum(char) {
  return/^[\d.]$/.test(char);
}

function isWhiteSpace(char) {
  return /[\s]/.test(char);
}

function operate(num1, operator, num2) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
  }
}

function postfix(expression) {
  let i = 0;
  let postOrderExpression = '';
  let stack = [];
  let tmpStr = '';

  while (i < expression.length) {

    const char = expression[i];
    const nextChar = expression[i + 1];
    const prevChar = expression[i - 1];
    const prevChar2 = expression[i - 2];

    if (isNum(char)) {
      tmpStr += char;
    }
    else if (tmpStr.length > 0) {
      postOrderExpression += tmpStr + ' ';
      tmpStr = '';
    }

    if (isOperator(prevChar) && (char === '-') && (nextChar === '(')) {
      stack.push('r');
    }
    else if (isOperator(prevChar2) && (char === '-') && (nextChar === '(')) {
      stack.push('r');
    }
    else if ((i === 0) && (char === '-') && (nextChar === '(')) {
      stack.push('r');
    }
    else if ((i === 0) && (char === '-') && isNum(nextChar)) {
      postOrderExpression += 'n';
    }
    else if ((prevChar === '(' || prevChar2 === '(') && (char === '-') && isNum(nextChar)) {
      postOrderExpression += 'n';
    }
    else if ((isOperator(prevChar) || isOperator(prevChar2)) && (char === '-') && isNum(nextChar)) {
      postOrderExpression += 'n';
    }
    else if (char === '(') {
      stack.push(char);
    }
    else if (isOperator(char)) {
      while (rank(stack[stack.length - 1]) >= rank(char)) {
        postOrderExpression += stack.pop();
      }
      stack.push(char);
    }
    else if (char === ')') {
      while (stack[stack.length - 1] !== '(') {
        postOrderExpression += stack.pop();
      }
      stack.pop();
    }
    i++;
  }

  if (tmpStr) {
    postOrderExpression += tmpStr;
  }

  while (stack.length > 0) {
    postOrderExpression += stack.pop();
  }
  return postOrderExpression.trim();
}

function calc(expression) {

  const postOrderExpression = postfix(expression);
  const stack = [];

  let i = 0;
  let numStr = '';

  while (i < postOrderExpression.length) {

    const char = postOrderExpression[i];

    if (char === 'r') {
      stack.push(stack.pop() * -1);
    }
    else if (char === 'n') {
      numStr += '-';
    }
    else if (isNum(char)) {
      numStr += char;
    }
    else if (isOperator(char)) {

      if (numStr.length > 0) {
        stack.push(parseFloat(numStr));
        numStr = '';
      }
      const second = stack.pop();
      const first = stack.pop();
      stack.push(operate(first, char, second));
    }
    else if (numStr.length > 0) {
      stack.push(parseFloat(numStr));
      numStr = '';
    }
    i++;
  }
  if (stack.length > 0) {
    return stack[0];
  }
  return parseFloat(numStr);
}
