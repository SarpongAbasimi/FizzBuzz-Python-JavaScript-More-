class FizzBuzz:
    def play(self, num):
        for i in range(num):
            if self.is_divisible(15, num):
                return 'FizzBuzz'
            elif self.is_divisible(5, num):
                return 'Buzz'
            elif self.is_divisible(3, num):
                return 'Fizz'
            else:
                return num

    def is_divisible(self, divisor, num):
        return num % divisor == 0


fizz_20 = FizzBuzz()

for i in range(1,21):
    print(fizz_20.play(i))
