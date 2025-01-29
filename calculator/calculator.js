function appendToDisplay(value){
  document.getElementById('display').value += value;
}
function clearDisplay(c){
  document.getElementById('display').value ='';
}
function calculateResult(){
  try{
    let expression = document.getElementById('display').value;
    if(isValidExpreesion(expression)){
      let result = eval(expression);
      document.getElementById('display').value = result;
     }else{
      document.getElementById('display').value = 'Invalid Expreesion';
     }
    } catch (e){
    document.getElementById('display').value = 'Error';
  }
}
function isValidExpreesion(expression){
  let stack = [];
  for(let char of expression){
    if(char === '('){
      stack.push(char);
    }else if(char ===')'){
      if(stack.length === 0){
        return false;
      }
      stack.pop();
    }
  }
  return stack.length === 0;
}