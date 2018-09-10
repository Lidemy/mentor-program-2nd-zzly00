var add = require('./hw5')

describe("hw5", function() {
  it("should return correct answer when a=111111111111111111111111111111111111 and b=111111111111111111111111111111111111", function() {
    expect(add('111111111111111111111111111111111111', '111111111111111111111111111111111111')).toBe('222222222222222222222222222222222222')
  })
})
describe("hw5", function() {
  it("should return correct answer when a=123 and b=456", function() {
    expect(add('123', '456')).toBe('579')
  })
})
describe("hw5", function() {
  it("should return correct answer when a=12312383813881381381 and b=129018313819319831", function() {
    expect(add('12312383813881381381', '129018313819319831')).toBe('12441402127700701212')
  })
})
describe("hw5", function() {
  it("should return correct answer when a=12312383813881381381 and b=129018313819319831", function() {
    expect(add('129018313819319831', '12312383813881381381')).toBe('12441402127700701212')
  })
})
describe("hw5", function() {
  it("should return correct answer when a=500 and b=500", function() {
    expect(add('500', '500')).toBe('1000')
  })
})
describe("hw5", function() {
  it("should return correct answer when a=889 and b=111", function() {
    expect(add('889', '111')).toBe('1000')
  })
})
describe("hw5", function() {
  it("should return correct answer when a=999 and b=111", function() {
    expect(add('999', '111')).toBe('1110')
  })
})
describe("hw5", function() {
  it("should return correct answer when a=1234 and b=777", function() {
    expect(add('1234', '777')).toBe('2011')
  })
})
describe("hw5", function() {
  it("should return correct answer when a=1234 and b=8888", function() {
    expect(add('1234', '8888')).toBe('10122')
  })
})
