import { operands } from '../../common/enums';

export default class {
  static generateOperand(operand: operands): operands {
    console.log('injected operand: ' + operand)
    if (operand == operands.random) {
      let min: number = 0;
      let max: number = 3;
      return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive‘
    } else {
      return operand;
    }
  }

  static generateNum1(min: number, max: number): number{
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
  }

  static generateNum2(num1: number, operand:operands, min:number, max:number){
    switch (operand) {
      case operands.add:
      case operands.multiply:      
        return this.generateNum1(min, max);
      case operands.subtract:
        return this.generateNum1(min, num1);
      case operands.divide:
        let num2 = this.generateDividend(min, num1);
        return num2;
      default:
        return 0;
    }
  }

  static generateDividend(min:number, num1:number): number{
    let dividend: number = this.generateNum1(min, num1);
    return (num1 % dividend == 0 ? dividend : this.generateDividend(min, num1))
  }

  static incrementTimer(currentTime: number, timerInterval: any): number {
    if (currentTime < 60) {
      currentTime = currentTime + 1;
    } else {
      clearTimeout(timerInterval)
    }
    return currentTime;
  }

  static incrementQuestionNumber(currentQuestion: number): number{
    currentQuestion = currentQuestion + 1;
    return currentQuestion;
  }

static getCorrectAnswer(num1: number, num2: number, operand: operands): number{
  debugger;
  let correctAnswer: number;
  switch (operand) {
    case operands.add:
      correctAnswer = num1 + num2;
      break;
    case operands.subtract:
      correctAnswer = num1 - num2;
      break;
    case operands.divide:
      correctAnswer = num1 / num2;
      break;
    case operands.multiply:
      correctAnswer = num1 * num2;
      break;
    default:
      correctAnswer = 0;
      break;
  }
  return correctAnswer;
}

  static checkAnswer(correctAnswer: number, userAnswer: number): boolean{
    return ( correctAnswer == userAnswer ? true : false );
  }
}