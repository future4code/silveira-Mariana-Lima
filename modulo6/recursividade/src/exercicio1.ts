//A

const printNumbers = (n: number) =>  {
    if (n >= 0) {
      printNumbers(n - 1);
      console.log(n);
    }
  };

//B

const printNumbers = (n: number) => {
    if (n >= 0) {
      console.log(n);
      printNumbers(n - 1);
    }
  };