// matchers
test('test object', () => {
  const data = {name: "Anna"}
  data.lastname = "Montés"
  expect(data).toEqual({name: "Anna", lastname:"Montés"})
 })

test('test null', () => {
  const data = null

  expect(data).toBeNull()
  expect(data).toBeDefined()
  expect(data).not.toBeUndefined()
 })

 test('test boolean', () => {
  expect(true).toEqual(true)
  expect(false).toEqual(false)


  expect(0).toBeFalsy()
  expect("").toBeFalsy()
  expect(false).toBeFalsy()
 })

 test('test string', () => {
  expect("Mary").toMatch(/ry/)
 });


 test('array', () => {
  const numbers = [1,2,3,4]
  expect(numbers).toContain(2)
 });
