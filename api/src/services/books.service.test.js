const BooksService = require("./books.service")

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
    expect(books.length).toEqual(2)
    });
  });
});
