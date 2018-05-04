import { operands } from '../../common/enums';

export default class {
  static generateRandomNumber(min:number, max:number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
  }

  static getOperand(operand: operands): operands {
    if (operand == operands.random) {
      let min: number = Math.ceil(operands.multiply);
      let max: number = Math.ceil(operands.subtract);
      return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive‘
    } else {
      return operand;
    }
  }
}