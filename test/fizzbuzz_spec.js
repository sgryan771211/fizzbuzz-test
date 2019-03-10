var should = chai.should()

describe('Test fizzBuzz function', function () {
  it('should return Fizz if the integer can be divisible by 3', function () {
    let testInput = 9
    let result = fizzBuzz(testInput)
    result.should.be.deep.equal('Fizz')
  })

  it('should return Buzz if the integer can be divisible by 3', function () {
    let testInput = 20
    let result = fizzBuzz(testInput)
    result.should.be.deep.equal('Buzz')
  })

  it('should return FizzBuzz if the integer can be divisible by 3 and 5', function () {
    let testInput = 15
    let result = fizzBuzz(testInput)
    result.should.be.deep.equal('FizzBuzz')
  })

  it('should return the integer if the integer can not be divisible by 3 or 5', function () {
    let testInput = 16
    let result = fizzBuzz(testInput)
    result.should.be.deep.equal(testInput)
  })
})