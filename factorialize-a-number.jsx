function factorialize(num) {
  let val = 1;
  for (let i = 1; i <= num; i ++){
    val *= i;
  }
  return val;
}

// RETURNS A NUMBER TIMES ALL INTERGERS LESS THAN IT

// EXAMPLE

factorialize(5); //RETURNS 120 (1*2*3*4*5)
