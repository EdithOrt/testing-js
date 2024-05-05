const Person = require("./06-person")

describe('Test person', () => {
  let person
// Arrange
  beforeEach(() => {
   person = new Person("Emily", 47, 1.70)
  })

  test('should return down', () => {
    // Arrange
    person.weight = 45
    // Act
    const IMC = person.calcIMC()
    // Assert
    expect(IMC).toBe("down")
  });

  test('should return normal', () => {
    // Arrange
    person.weight = 59
    // Act
    const IMC = person.calcIMC()
// Assert
    expect(IMC).toBe("normal")
  });
});
