const { expect } = require('chai');

const Mathematics  = require('../javascript/Mathematics');

describe('Mathematics: Testing the basics of arrays', function(){
  const math = new Mathematics();

  it('Should add two numbers', function(){
    expect(math.add(5, 10)).to.equal(15);
    expect(math.add(0, 0)).to.equal(0);
    expect(math.add(-5, -10)).to.equal(-15);
    expect(math.add(5, undefined)).to.equal(undefined);
    expect(math.add(undefined, 10)).to.equal(undefined);
    expect(math.add(undefined, undefined)).to.equal(undefined);
    expect(math.add(null, 10)).to.equal(undefined);
    expect(math.add(5, null)).to.equal(undefined);
    expect(math.add(null, null)).to.equal(undefined);
  });

  it('Should subtract two numbers', function(){
    expect(math.subtract(10, 5)).to.equal(0);
    expect(math.subtract(10, 10)).to.equal(0);
    expect(math.subtract(10, 0)).to.equal(10);
    expect(math.subtract(-10, -5)).to.equal(-5);
    expect(math.subtract(5, undefined)).to.equal(undefined);
    expect(math.subtract(undefined, 10)).to.equal(undefined);
    expect(math.subtract(undefined, undefined)).to.equal(undefined);
    expect(math.subtract(null, 10)).to.equal(undefined);
    expect(math.subtract(5, null)).to.equal(undefined);
    expect(math.subtract(null, null)).to.equal(undefined);
  });

  it('Should multiply two numbers', function(){
    expect(math.multiply(10, 5)).to.equal(50);
    expect(math.multiply(10, 0)).to.equal(0);
    expect(math.multiply(0, 0)).to.equal(0);
    expect(math.multiply(-10, 5)).to.equal(-50);
    expect(math.multiply(10, -5)).to.equal(-50);
    expect(math.multiply(-10, -5)).to.equal(50);
    expect(math.multiply(5, undefined)).to.equal(undefined);
    expect(math.multiply(undefined, 10)).to.equal(undefined);
    expect(math.multiply(undefined, undefined)).to.equal(undefined);
    expect(math.multiply(null, 10)).to.equal(undefined);
    expect(math.multiply(5, null)).to.equal(undefined);
    expect(math.multiply(null, null)).to.equal(undefined);
  });

  it('Should divide two numbers', function(){
    expect(math.divide(10, 2)).to.equal(5);
    expect(math.divide(-10, 2)).to.equal(-5);
    expect(math.divide(-10, -2)).to.equal(5);
    expect(math.divide(0, 2)).to.equal(0);
    expect(math.divide(0, -2)).to.equal(0);
    expect(math.divide(-10, 0)).to.equal(undefined);
    expect(math.divide(10, 0)).to.equal(undefined);
    expect(math.divide(0, 0)).to.equal(undefined);
    expect(math.divide(5, undefined)).to.equal(undefined);
    expect(math.divide(undefined, 10)).to.equal(undefined);
    expect(math.divide(undefined, undefined)).to.equal(undefined);
    expect(math.divide(null, 10)).to.equal(undefined);
    expect(math.divide(5, null)).to.equal(undefined);
    expect(math.divide(null, null)).to.equal(undefined);
  });
});
