const express = require('express')
const multer  = require('multer')
const cors = require('cors')
const upload =  multer({ dest: 'uploads/'})

const app = express()

// url发送请求使用get
// post
// put
app.post('/', function(req, res) {
  res.send('Hello World')
})

app.listen(3000, function () {
  console.log('Server is running...')
})
