const { sum, multiply, divide } = require("./02-math");

test("add 1 + 3 should be 4", () => {
  const response = sum(1, 3);
  expect(response).toBe(4);
});

test("add 1 * 4 should be 4", () => {
  const response = multiply(1, 4);
  expect(response).toBe(4);
});

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
