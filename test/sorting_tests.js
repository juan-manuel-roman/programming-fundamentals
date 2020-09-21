const { expect } = require('chai');
const Sorting = require('../javascript/Sorting');

describe('Sorting algorythims tests', function(){
  const sort = new Sorting();

  it('Should sort the array', function(){
    expect(sort.bubbleSort([4, 2, 5, 4, 1, 7, 6])).to.equal([1, 2, 4, 4, 5, 6, 7]);
    expect(sort.countingSort([4, 2, 5, 4, 1, 7, 6])).to.equal([1, 2, 4, 4, 5, 6, 7]);
    expect(sort.insertionSort([4, 2, 5, 4, 1, 7, 6])).to.equal([1, 2, 4, 4, 5, 6, 7]);
    expect(sort.stupidSort([4, 2, 5, 4, 1, 7, 6])).to.equal([1, 2, 4, 4, 5, 6, 7]);
  });
});