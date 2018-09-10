var isPalindromes = require('./hw4')

describe("hw4", function() {
  it("should return correct answer when str = abcdcba", function() {
    expect(isPalindromes('abcdcba')).toBe(true)
  })
})
describe("hw4", function() {
  it("should return correct answer when str = apple", function() {
    expect(isPalindromes('apple')).toBe(false)
  })
})
describe("hw4", function() {
  it("should return correct answer when str = aaaaa", function() {
    expect(isPalindromes('aaaaa')).toBe(true)
  })
})
describe("hw4", function() {
  it("should return correct answer when str = applppa", function() {
    expect(isPalindromes('applppa')).toBe(true)
  })
})
describe("hw4", function() {
  it("should return correct answer when str = ''", function() {
    expect(isPalindromes('')).toBe(true)
  })
})
describe("hw4", function() {
  it("should return correct answer when str = applpa", function() {
    expect(isPalindromes('applpa')).toBe(false)
  })
})