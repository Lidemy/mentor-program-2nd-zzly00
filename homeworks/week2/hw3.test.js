var isPrime = require('./hw3')

describe("hw3", function() {
  it("should return correct answer when n = 1", function() {
    expect(isPrime(1)).toBe(false)
  })
})
describe("hw3", function() {
	it("should return correct answer when n = 2", function() {
		expect(isPrime(2)).toBe(true)
	})
})
describe("hw3", function() {
	it("should return correct answer when n = 3", function() {
		expect(isPrime(3)).toBe(true)
	})
})
describe("hw3", function() {
	it("should return correct answer when n = 10", function() {
		expect(isPrime(10)).toBe(false)
	})
})
describe("hw3", function() {
	it("should return correct answer when n = 37", function() {
		expect(isPrime(37)).toBe(true)
	})
})
describe("hw3", function() {
	it("should return correct answer when n = 38", function() {
		expect(isPrime(38)).toBe(false)
	})
})
describe("hw3", function() {
	it("should return correct answer when n = 9", function() {
		expect(isPrime(9)).toBe(false)
	})
})
describe("hw3", function() {
	it("should return correct answer when n = 25", function() {
		expect(isPrime(25)).toBe(false)
	})
})
describe("hw3", function() {
	it("should return correct answer when n = 11", function() {
		expect(isPrime(11)).toBe(true)
	})
})
describe("hw3", function() {
	it("should return correct answer when n = 121", function() {
		expect(isPrime(121)).toBe(false)
	})
})
describe("hw3", function() {
	it("should return correct answer when n = -1", function() {
		expect(isPrime(-1)).toBe(false)
	})
})
describe("hw3", function() {
	it("should return correct answer when n = 0", function() {
		expect(isPrime(0)).toBe(false)
	})
})
describe("hw3", function() {
	it("should return correct answer when n = 997", function() {
		expect(isPrime(997)).toBe(true)
	})
})