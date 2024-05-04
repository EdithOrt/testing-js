const Person = require("./06-person")

describe('Test person', () => {
  let person

  beforeEach(() => {
   person = new Person("Emily", 47, 1.70)
  })

  test('should return down', () => {
    person.weight = 45
    const IMC = person.calcIMC()

    expect(IMC).toBe("down")
  });

  test('should return normal', () => {
    person.weight = 59
    const IMC = person.calcIMC()

    expect(IMC).toBe("normal")
  });
});
