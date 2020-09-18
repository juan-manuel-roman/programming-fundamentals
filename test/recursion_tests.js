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

  it('Should sum digits', function(){
    expect(recursion.sumDigits(123)).to.equal(6);
    expect(recursion.sumDigits(1)).to.equal(1);
    expect(recursion.sumDigits(1024)).to.equal(7);
    expect(recursion.sumDigits(9999)).to.equal(36);
    expect(recursion.sumDigits(256)).to.equal(13);
    expect(recursion.sumDigits(546)).to.equal(15);
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
