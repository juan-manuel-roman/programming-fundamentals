const { expect } = require('chai');
const Recursion = require('../javascript/Recursion');

describe('Tests for recursion class', function(){
  const recursion = new Recursion();
  
  it('Should perform a factorial', function(){
    expect(recursion.factorial(5)).to.equal(120);
    expect(recursion.factorial(7)).to.equal(5040);
    expect(recursion.factorial(8)).to.equal(40320);
    expect(recursion.factorial(10)).to.equal(3628800);
  });

  it('Should perform a fibonacci', function(){
    expect(recursion.fibonacci(3)).to.equal(2)
    expect(recursion.fibonacci(4)).to.equal(3)
    expect(recursion.fibonacci(5)).to.equal(5)
    expect(recursion.fibonacci(6)).to.equal(8)
    expect(recursion.fibonacci(7)).to.equal(13)
    expect(recursion.fibonacci(8)).to.equal(21)
  });

  it('Should sum the digits in a number', function(){
    expect(recursion.sumDigits(123)).to.equal(6);
    expect(recursion.sumDigits(1)).to.equal(1);
    expect(recursion.sumDigits(1024)).to.equal(7);
    expect(recursion.sumDigits(9999)).to.equal(36);
    expect(recursion.sumDigits(256)).to.equal(13);
    expect(recursion.sumDigits(546)).to.equal(15);
  });

  it('Should sum the elements in an array', function(){
    expect(recursion.sumArray([1, 2, 3, 4, 5])).to.equal(15);
    expect(recursion.sumArray([0, 0, 0, 0, 0])).to.equal(0);
    expect(recursion.sumArray([-1, 3, -4, 2, 5, -3, -2])).to.equal(0);
    expect(recursion.sumArray([])).to.equal(0);
    expect(recursion.sumArray([1, 1, 1, 1, 1])).to.equal(5);
    expect(recursion.sumArray([1, 10, 100, 1000, 10000])).to.equal(11111);
  });

  it('Should reverse a string', function(){
    expect(recursion.reverseString('hello')).to.equal('olleh');
    expect(recursion.reverseString('This is a test.')).to.equal('.tset a si sihT');
    expect(recursion.reverseString('reverse this text')).to.equal('txet siht esrever');
    expect(recursion.reverseString('racercar')).to.equal('racecar');
    expect(recursion.reverseString('anna')).to.equal('anna');
    expect(recursion.reverseString('perhaps this is not a goot text')).to.equal('txet doog a ton si siht spahrep');
    expect(recursion.reverseString('')).to.equal('');
  });

  it('Should reverse an array', function(){
    expect(recursion.reverseArray([1, 2, 3])).to.equal([3, 2, 1]);
    expect(recursion.reverseArray(['Hello', 'one', 'two'])).to.equal(['two', 'one', 'Hello']);
    expect(recursion.reverseArray([{}, [], '', null])).to.equal([null, '', [], {}]);
    expect(recursion.reverseArray([])).to.equal([]);
    expect(recursion.reverseArray([undefined, null, 0])).to.equal([0, null, undefined]);
    expect(recursion.reverseArray(['One', 2, 4])).to.equal([4, 2, 'One']);
    expect(recursion.reverseArray([[1, 2, 3], [4, 5, 6], [7, 8, 9]])).to.equal([[7, 8, 9], [4, 5, 6], [1, 2, 3]]);
  });
});

/*
  EXAMPLES OF OBJECT DESTRUCTION
  const car = {
    doors: 4,
    wheels: 4.
    motor: 1,
    claxon: true,
    automatic: true
  }

  Regular Syntax
  const doors = car.doors;

  Destructive syntax
  When my variable name is the same as the object's property name
  I can "destruct" the object using braces in the variable declaration.
  It will assign the "doors" property of "car" variable automaticaly.
  const { doors } = car;
 */
