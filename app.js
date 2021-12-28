const express = require('express')
const { json, jsonp } = require('express/lib/response')
const app = express()
const port = 3000
let books = require('./books')

app.get('/', (req, res) => {
  let book = books.array.map(() => {})
  res.send(`<h1> ${book} </h1> `)

  // console.log(typeof books)
  console.log(books.array)
})

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
