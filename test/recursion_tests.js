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
    console.log(recursion.fibonacci(3))
    console.log(recursion.fibonacci(8))
  });

  it('Should sum digits', function(){
    console.log(recursion.sumDigits(123));
    console.log(recursion.sumDigits(11111111));
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
