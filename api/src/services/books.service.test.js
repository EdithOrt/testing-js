const BooksService = require("./books.service")

const fakeBooks = [
  {
    _id: 1,
    name: "Harry Potter"
  }
]

const MongoLibStub = {
  getAll: () => [...fakeBooks] ,
  create: () => {}
}

jest.mock("../lib/mongo.lib", () => {
  return jest.fn().mockImplementation(() => MongoLibStub)
})

describe('Tests for book service', () => {
  let service;

  beforeEach(() => {
    service = new BooksService;
  })

  describe('Tests for getBooks', () => {

    test('should return a books list', async () => {
          // Arrange

    // Act
    const books = await service.getBooks({})
    console.log(books)
    // Assert
    expect(books.length).toEqual(1)
    });
  });
});
