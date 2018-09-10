var alphaSwap = require('./hw2')

describe("hw2", function() {
  it("should return correct answer when str = nick", function() {
    expect(alphaSwap('nick')).toBe('NICK')
  })
})
describe("hw2", function() {
  it("should return correct answer when str = Nick", function() {
    expect(alphaSwap('Nick')).toBe('nICK')
  })
})
describe("hw2", function() {
  it("should return correct answer when str = ,hEllO122", function() {
    expect(alphaSwap(',hEllO122')).toBe(',HeLLo122')
  })
})
describe("hw2", function() {
  it("should return correct answer when str = aaa", function() {
    expect(alphaSwap('aaa')).toBe('AAA')
  })
})
describe("hw2", function() {
  it("should return correct answer when str = AAA", function() {
    expect(alphaSwap('AAA')).toBe('aaa')
  })
})
describe("hw2", function() {
  it("should return correct answer when str = ''", function() {
    expect(alphaSwap('')).toBe('')
  })
})
describe("hw2", function() {
  it("should return correct answer when str = 0aa", function() {
    expect(alphaSwap('0aa')).toBe('0AA')
  })
})
describe("hw2", function() {
  it("should return correct answer when str = ,aaa", function() {
    expect(alphaSwap(',aaa')).toBe(',AAA')
  })
})