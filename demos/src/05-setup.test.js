describe('set describe', () => {
  beforeAll(() => {
    console.log("before all")
  })

  afterAll(() => {
    console.log("after all")
  })

  beforeEach(() => {
    console.log("before each")
  })

  test('case 1', () => {
    expect(1+1).toBe(2)
  })

  test('case 2', () => {
    expect(2+2).toBe(4)
  })

  describe('other group', () => {
    test('case 3', () => {
      expect(3+3).toBe(6)
    })

    test('case 4', () => {
      expect(4+4).toBe(8)
    })
  });
});
