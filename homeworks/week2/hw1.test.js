var stars = require('./hw1')

describe("hw1", function() {
  it("should return correct answer when n = 1", function() {
    expect(stars(1)).toEqual(['*'])
  })
})
describe("hw1", function() {
  it("should return correct answer when n = 3", function() {
    expect(stars(3)).toEqual(["*", "**", "***"])
  })
})
describe("hw1", function() {
  it("should return correct answer when n = 6", function() {
    expect(stars(6)).toEqual(["*", "**", "***", "****", "*****", "******"])
  })
})
describe("hw1", () => {
  it("should return correct answer when n = 0", () => {
    expect(stars(0)).toEqual([])
  })
})