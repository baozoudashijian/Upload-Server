const express = require('express')
const multer  = require('multer')
const cors = require('cors')
const upload =  multer({ dest: 'uploads/'})
const path = require('path')

const app = express()

// 映射静态资源
app.get('/index.html', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'))
})
// url发送请求使用get
// post
// put
app.post('/upload', upload.single('avatar'), function(req, res) {
  // 通过multer来拿到avatar, 并且会存到那个地址.
  console.log(req.file)
  res.json({imgUrl: req.file.filename})
})
// 预览
app.get('/uploads/:id', function(req, res) {
  console.log(`/uploads/${req.params.id}`)
  res.sendFile(`/uploads/${req.params.id}`, {
    root: __dirname // 这个参数一定要有
  }, (error) => {
    if(error) {
      res.status(404).send('Not found')
    }
  })
})

app.listen(3000, function () {
  console.log('Server is running...')
})
