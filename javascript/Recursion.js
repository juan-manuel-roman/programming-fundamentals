class Recursion {

  /*
    Factorial [!] is, by definition, the multiplication of all the numbers from 1 to n, given that n > 0
    Example:
     5! = 5 x 4 x 3 x 2 x 1 = 120
  */
  iterative_factorial(number){
    // for(<start conditions>; <break condition>; <changes per iteration>)
    // for(let i = 1; i < number; i++)
    // for(let i = 2; i < number; i++)
    let accumulator = 1;
    for(let i = number; i > 0; i--){
      accumulator *= i;
    }
    return accumulator;
  }

  factorial(number){
    if(number === 1){
      return number;
    }
    return number * this.factorial(number -1);
  }
  /*
    Explanation:
    factorial(5)  number = 5  5 === 1 FALSE  => 5 * factorial(4) = 24 :: SOLVE 5 * 24 = 120
    factorial(4)  number = 4  4 === 1 FALSE  => 4 * factorial(3) = 6  :: SOLVE 4 * 6 = 24
    factorial(3)  number = 3  3 === 1 FALSE  => 3 * factorial(2) = 2  :: SOLVE 3 * 2 = 6
    factorial(2)  number = 2  2 === 1 FALSE  => 2 * factorial(1) = 1  :: SOLVE 2 * 1 = 2
    factorial(1)  number = 1  1 === 1 TRUE   => RETURN 1
  */

  /*
  1, 1, 2, 3, 5, 8, 13, 21
  1  2  3  4  5  6   7   8
   */
  fibonacci(n){
    if(n < 1){
      return 0;
    }
    if(n === 1) {
      return 1;
    }
    return this.fibonacci(n-1) + this.fibonacci(n-2);

    /*
     Explanation:
     fibonacci(8) n < 1 FALSE n === 1 FALSE fibonacci(7) + fibonacci(6) :: 13 + 8 = 21
     fibonacci(7) n < 1 FALSE n === 1 FALSE fibonacci(6) + fibonacci(5) :: 8 + 5 = 13
     fibonacci(6) n < 1 FALSE n === 1 FALSE fibonacci(5) + fibonacci(4) :: 5 + 3 = 8
     fibonacci(5) n < 1 FALSE n === 1 FALSE fibonacci(4) + fibonacci(3) :: 3 + 2 = 5
     fibonacci(4) n < 1 FALSE n === 1 FALSE fibonacci(3) + fibonacci(2) :: 2 + 1 = 3
     fibonacci(3) n < 1 FALSE n === 1 FALSE fibonacci(2) + fibonacci(1) :: 1 + 1 = 2
     fibonacci(2) n < 1 FALSE n === 1 FALSE fibonacci(1) + fibonacci(0) :: 1 + 0 = 1
     fibonacci(1) n < 1 FALSE n === 1 TRUE RETURN 1
     fibonacci(0) n < 1 TRUE  RETURN 0
     */
  }

  sumDigits(number){
    if(number === 0){
      return number;
    }
    return (number % 10) + this.sumDigits(Math.floor(number/10));
    /*
      sumDigits(123) ::: acumulator = 123 % 10 = 3 :: acumulator + sumDigits(12);  =>  acumulator + 3 => 3 + 3 = 6 
      sumDigits(12)  ::: acumulator = 12 % 10 = 2 :: acumulator + sumDigits(1);    =>  acumulator + 1 => 2 + 1 = 3
      sumDigits(1)   ::: acumulator = 1 % 10 = 1 :: acumulator + sumDigits(0);     =>  acumulator + 0 => 1 + 0 = 1
      sumDigits(0)   ::: RETURN 0
    */
  }

  /**
   * Performs the addition of the elements contained in the array
   * Example:
   *   sumArray( [1, 2, 3, 4] ) => 10 :: since 1 + 2 + 3 + 4 = 10;
   * See more examples in the recursion tests.
   */
  sumArray(arrayElements){

  }

  /**
   * Reverses a string content
   * @param {String} string The string to be reversed
   * Example:
   *  reverseString("Hello") => "olleH"
   * More examples available at recursion tests.
   */
  reverseString(string){

  }

  /**
   * Sets the elements of an array in reverse order
   * @param {Array} array The array to reverse
   * Example:
   *   reverseArray([1, 2, 3]) => [3, 2, 1]
   * More examples available at recursion tests.
   */
  reverseArray(array){

  }
}

module.exports = Recursion;
