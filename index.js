const express = require('express')
const multer  = require('multer')
const cors = require('cors')
const upload =  multer({ dest: 'uploads/'})

const app = express()

// url发送请求使用get
// post
// put
app.post('/', upload.single('avatar'), function(req, res) {
  // 通过multer来拿到avatar, 并且会存到那个地址.
  console.log(req.file)
  res.send('Hello World')
})

app.listen(3000, function () {
  console.log('Server is running...')
})
