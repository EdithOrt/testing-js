const mockSpyGetAll = jest.fn();

const request = require('supertest')
const createApp = require('../src/app')

const { generateManyBooks } = require("../src/fakes/book.fake");


jest.mock("../src/lib/mongo.lib", () => {
  return jest.fn().mockImplementation(() => {
    return {
      getAll: mockSpyGetAll,
      create: () => {}
    }
  })
})

describe('Test for books', () => {
  let app = null
  let server = null
  beforeAll(() => {
    app = createApp()
    server = app.listen(3002)
  })

  afterAll(async () => {
    await server.close()
  })

  describe('Tests for [GET] /api/v1/books', () => {

    test('should return list books', () => {
      // Arrange
      const fakeBooks = generateManyBooks(3)
      mockSpyGetAll.mockResolvedValue(fakeBooks)
      // Act
      return request(app)
      .get('/api/v1/books')
      .expect(200)
      .then(({body}) => {
        console.log(body)

        // Assert
        expect(body.length).toEqual(fakeBooks.length)
      })
    });
  });
});
