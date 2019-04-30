function FizzBuzz(){};

FizzBuzz.prototype = {
  constructor : FizzBuzz,
  play : function(input){
    if(this.is_divisible(15, input)){
      return('FizzBuzz')
    }else if(this.is_divisible(5, input)){
      return('Buzz')
    }else if(this.is_divisible(3, input)){
      return('Fizz')
    }else{
      return(input)
    }
  },
  is_divisible : (divisor, number)=>{
    return number % divisor == 0
  }
};