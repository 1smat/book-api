const express = require('express')
const { restart } = require('nodemon')
const app = express()
const port = 3000
let books = require('./books')

// api middlewares
app.use(express.json())
app.use(express.urlencoded())

app.get('/', (req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.send(books)
  res.end()
})

app.post('/add', function (req, res) {
  res.status(200).json('Sended')
  // console.log(JSON.stringify(req.body))
  console.log(req.query)
  console.log(req.body)
})

// let book = books.array.map((book) => {
//   res.write(`
//     <h2> ${book.class} </h2>
//     <h1> ${book.name} </h1>
//   `)
//   console.log(book)
// })

// console.log(typeof books)

// const returnName = (book) => {
//   return book.name
// }

app
  .route('/article')
  .get(function (req, res) {
    res.send('Get the book')
  })
  .post(function (req, res) {
    res.send('Add a book ')
  })
  .put(function (req, res) {
    res.send('Update books ')
  })

app.listen(port, () => {
  console.log(`Book API working at http://localhost:${port}`)
  // console.log(JSON.stringify(books))
})
