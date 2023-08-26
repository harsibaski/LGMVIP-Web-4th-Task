let currentResult = '';

function appendToResult(value) {
  currentResult += value;
  updateResult();
}

function updateResult() {
  document.getElementById('result').value = currentResult;
}

function calculateResult() {
  try {
    currentResult = eval(currentResult);
    updateResult();
  } catch (error) {
    currentResult = 'Error';
    updateResult();
  }
}

function clearResult() {
  currentResult = '';
  updateResult();
}
