const buttons = document.querySelectorAll('button');
const displayElement = document.querySelector('input');

class Calculator {
  constructor(displayElement){
    //input 태그 초기화
    this.displayElement = displayElement;
    this.displayContent = '';
    this.clear()
  }

  appendNumber(number){
    this.displayContent += number
  }

  appendOperator(operator){
    this.displayContent += operator
  }

  updateDisplay(){
    this.displayElement.value = this.displayContent
  }

  clear(){
    this.displayContent = ''
    this.displayElement.value = 0
  }

  compute(){
    this.displayContent = eval(this.displayContent.replace('\u00D7', '*') .replace('\u00F7', '/'))
  }
}

const calculator = new Calculator(displayElement)

buttons.forEach(buttons => {
  buttons.addEventListener('click', () => {
    //버튼 눌렀을 때 값이 operator인지, ac인지, = 인지 구별
    switch(buttons.dataset.type){
      case 'operator':
        calculator.appendOperator(buttons.innerText)
        calculator.updateDisplay()
        break
      case 'ac':
        calculator.clear()
        break
      case 'equals':
        calculator.compute()
        calculator.updateDisplay()
        break
      default:
        calculator.appendNumber(buttons.innerText)
        calculator.updateDisplay()
        break
    }
  })
})
