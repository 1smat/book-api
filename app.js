const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

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
})
