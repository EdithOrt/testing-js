const { generateManyBooks } = require("../fakes/book.fake");
const BooksService = require("./books.service")

const mockSpyGetAll = jest.fn();

const MongoLibStub = {
  getAll: mockSpyGetAll,
  create: () => {}
}

jest.mock("../lib/mongo.lib", () => {
  return jest.fn().mockImplementation(() => {
    return {
      getAll: mockSpyGetAll,
      create: () => {}
    }
  })
})

describe('Tests for book service', () => {
  let service;

  beforeEach(() => {

    service = new BooksService;

    jest.clearAllMocks()
  })

  describe('Tests for getBooks', () => {

    test('should return a books list', async () => {
      const fakeBooks = generateManyBooks(20)
    // Arrange
      mockSpyGetAll.mockResolvedValue(fakeBooks)
    // Act
    const books = await service.getBooks({})
    console.log(books)
    // Assert
    expect(books.length).toEqual(fakeBooks.length)
    expect(mockSpyGetAll).toHaveBeenCalled()
    expect(mockSpyGetAll).toHaveBeenCalledTimes(1)
    expect(mockSpyGetAll).toHaveBeenCalledWith("books", {})
    });

    test('should return a books list', async () => {
          // Arrange
          const fakeBooks = generateManyBooks(4)
          mockSpyGetAll.mockResolvedValue(fakeBooks)
    // Act
    const books = await service.getBooks({})
    // Assert
    expect(books[0].name).toEqual(fakeBooks[0].name)
    });
  });
});
