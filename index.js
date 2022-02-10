const express = require('express')
const multer  = require('multer')
const cors = require('cors')
const upload =  multer({ dest: 'uploads/'})
const path = require('path')

const app = express()

// 映射静态资源
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'))
})
// url发送请求使用get
// post
// put
app.post('/upload', upload.single('avatar'), function(req, res) {
  // 通过multer来拿到avatar, 并且会存到那个地址.
  res.json({imgUrl: req.file.filename})
})
// 预览
app.get('/uploads/:id', function(req, res) {
  res.sendFile(`/uploads/${req.params.id}`, {
    root: __dirname, // 这个参数一定要有
    headers:{
      'Content-Type': 'image/jpeg',
    },
  }, (error) => {
    if(error) {
      res.status(404).send('Not found')
    }
  })
})

let port = process.env.PORT || 3000

app.listen(port, function () {
  console.log('Server is running...')
})
