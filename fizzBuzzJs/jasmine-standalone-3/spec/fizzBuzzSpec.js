describe('FizzBuzz', ()=>{
  beforeEach(()=>{
    fizzBuzz = new FizzBuzz
  });

  describe('when passed 1', ()=>{
    it('returns 1', ()=>{
      expect(fizzBuzz.play(1)).toBe(1);
    });
  });

  describe('When passed a number', ()=>{
    it('returns true if the number is divisible by 5', ()=>{
      expect(fizzBuzz.is_divisible(5, 15)).toBe(true);
    });

    it('returns false if number is not divisible by 5', ()=>{
      expect(fizzBuzz.is_divisible(5, 13)).toBe(false);
    });

    it('returns true if number is divisible by 3', ()=>{
      expect(fizzBuzz.is_divisible(3, 9)).toBe(true);
    });

    it('returns false if number is not divisible by 3', ()=>{
      expect(fizzBuzz.is_divisible(3,8)).toBe(false);
    });
  });

  describe('when a is divible by 3 and 5', ()=>{
    it('returns FizzBuzz', ()=>{
      expect(fizzBuzz.play(15)).toBe('FizzBuzz')
    });
  });

  describe('when a is divible by 5', ()=>{
    it('returns FizzBuzz', ()=>{
      expect(fizzBuzz.play(10)).toBe('Buzz')
    });
  });

  describe('when a is divible by 3', ()=>{
    it('returns FizzBuzz', ()=>{
      expect(fizzBuzz.play(9)).toBe('Fizz')
    });
  });

});