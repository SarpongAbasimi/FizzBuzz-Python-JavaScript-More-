from fizzbuzz import FizzBuzz
import pytest 

@pytest.fixture
def fizz_buzz():
    fizz_buzz = FizzBuzz()
    return fizz_buzz

class TestCase:
    def test_multiple_of_5_and_3(self,fizz_buzz):
        assert fizz_buzz.play(15) == 'FizzBuzz'

    def test_multiple_of_5(self,fizz_buzz):
        assert fizz_buzz.play(10) == 'Buzz'

    def test_multiple_of_3(self,fizz_buzz):
        assert fizz_buzz.play(9) == 'Fizz'
    
    def test_any_other_number(self,fizz_buzz):
        assert fizz_buzz.play(1) == 1
        assert fizz_buzz.play(2) == 2
    
