const BooksService = require("./books.service")

const fakeBooks = [
  {
    _id: 1,
    name: "Harry Potter"
  }
]

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
    // Arrange
      mockSpyGetAll.mockResolvedValue(fakeBooks)
    // Act
    const books = await service.getBooks({})
    console.log(books)
    // Assert
    expect(books.length).toEqual(1)
    expect(mockSpyGetAll).toHaveBeenCalled()
    expect(mockSpyGetAll).toHaveBeenCalledTimes(1)
    expect(mockSpyGetAll).toHaveBeenCalledWith("books", {})
    });

    test('should return a books list', async () => {
          // Arrange
          mockSpyGetAll.mockResolvedValue([{
            _id: 2,
            name: "Harry Potter 2"
          }])
    // Act
    const books = await service.getBooks({})
    // Assert
    expect(books[0].name).toEqual("Harry Potter 2")
    });
  });
});