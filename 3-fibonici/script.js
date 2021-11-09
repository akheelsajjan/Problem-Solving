// Recursive solution
function fibonacci (n) {
    if (n < 2) {
      return n
    }
    return fibonacci(n - 1) + fibonacci(n - 2)
              //  1 + 
  }
  
  function printFibonacci (n) {
      
    // Print the fibonacci number from from 0 to n
    for (let i = 0; i < n; i++) {
      console.log(fibonacci(i))
    }
  }

  printFibonacci(4) // 0 1 1 2 