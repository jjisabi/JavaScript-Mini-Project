//1. html 버튼 값 가져오기
const buttons = document.querySelectorAll('button');
const operator = document.querySelectorAll('.operator');
const displayElement = document.querySelector('.input');
const numBtn = document.querySelectorAll('numBtn');

let operatorOn = ''; // 연산자 입력
let previousNum = ''; //이전 값
let resentNum = ''; // 최근값

//2. 계산 함수
let calculate = (n1, operator, n2) => {
   console.log("n1: " + n1 + ", operator: " +  operator + ", n2: " +  n2);
    let result = 0;
    switch (operator) {
      case '+':
        result = Number(n1) + Number(n2);
        console.log("결과값: " + result)
        break;
      case '-':
        result = Number(n1) - Number(n2);
        break;
      case 'x':
        result = Number(n1) * Number(n2);
        break;
      case '/':
        result = Number(n1) / Number(n2);
        break;
      default:
        break;
    }
    return String(result);
  };

  //3. 버튼 클릭 될 때 마다 숫자 가져오기
  //모든 버튼에 이벤트 걸어야 함
  buttons.forEach((item) => {
    item.addEventListener('click', (event) => {
      var action = event.target.className;
      
      if(action === 'numBtn'){
        previousNum = event.target.innerHTML;
      }else if(action === 'operator'){
        operatorOn = event.target.innerHTML;
      }else if(action === 'result'){
        calculate(previousNum, operator, previousNum);
      }
    })
  })
  calculator();

