const { sum, multiply, divide } = require("./02-math");

describe('Tests for math', () => {
  describe('Tests for sum', () => {
    test("add 1 + 3 should be 4", () => {
      const response = sum(1, 3);
      expect(response).toBe(4);
    });
  });

  describe('Test for multiply', () => {
    test("add 1 * 4 should be 4", () => {
      const response = multiply(1, 4);
      expect(response).toBe(4);
    });

  });

  describe('Test for divide', () => {
    test("should divide", () => {
      const response = divide(6, 3);
      expect(response).toBe(2);
      const response2 = divide(5, 2);
      expect(response2).toBe(2.5);
    });

    test("should divide for zero", () => {
      const response = divide(6, 0);
      expect(response).toBeNull();
      const response2 = divide(5, 0);
      expect(response2).toBeNull();
    });
  });
});


