const calculator = require('./calculator');

describe('addition', () => {

  test ('sum 2+2', () => {
    expect(calculator.add(2,2)).toBe(4);
  });

  test ('sum 3+2', () => {
    expect(calculator.add(3,2)).toBe(5);
  });

  test ('sum 50+50', () => {
    expect(calculator.add(50,50)).toBe(100);
  });

});

describe('subtraction', () => {

  test ('subtract 2-2', () => {
    expect(calculator.subtract(2,2)).toBe(0);
  });

  test ('subtract 3-2', () => {
    expect(calculator.subtract(3,2)).toBe(1);
  });

  test ('subtract 150-50', () => {
    expect(calculator.subtract(150,50)).toBe(100);
  });

});

describe('divition', () => {

  test ('divide 2/2', () => {
    expect(calculator.divide(2,2)).toBe(1);
  });

  test ('divide 50/2', () => {
    expect(calculator.divide(50,2)).toBe(25);
  });

  test ('divide 50/5', () => {
    expect(calculator.divide(50,5)).toBe(10);
  });

});

describe('multiplication', () => {

  test ('multiply 2*2', () => {
    expect(calculator.multiply(2,2)).toBe(4);
  });

  test ('multiply 3*2', () => {
    expect(calculator.multiply(3,2)).toBe(6);
  });

  test ('multiply 50*50', () => {
    expect(calculator.multiply(50,50)).toBe(2500);
  });

});