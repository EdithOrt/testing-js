const request = require('supertest')
const {MongoClient} = require("mongodb")

const createApp = require('../src/app')
const { config } = require('../src/config')


const DB_NAME = config.dbName;
const MONGO_URI = config.dbUrl;

describe('Test for books', () => {
  let app = null
  let server = null
  let database = null
  beforeAll(async() => {
    app = createApp()
    server = app.listen(3001)
    const client = new MongoClient(
      MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    await client.connect()
    database = client.db(DB_NAME)
  })




  afterAll(async () => {
    await server.close()
  })


  describe('Tests for [GET] /api/v1/books', () => {
    afterEach(async () => {
      await database.dropDatabase()
    })

    test('should return list books', async() => {
      // Arrange
      const seedData = await database.collection('books').insertMany([{
        name: 'book1',
        year: 1995,
        author: 'Emily Helmut'
      },
      {
        name: 'book2',
        year: 1945,
        author: 'Anna Purna'
      }])

      // Act
      return request(app)
      .get('/api/v1/books')
      .expect(200)
      .then(({body}) => {

        // Assert
        expect(body.length).toEqual(seedData.insertedCount)
      })
    });
  });
});
