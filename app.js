let express = require('express')
let app = express()

let port = process.env.PORT || 3000

app.use(express.static('public'))

let server = app.listen(port)

let io = require('socket.io').listen(server)

app.get('/send', (req, res) => {
  let message = req.query.message
  console.log(message)
  res.send(`send a message ${req.query.message}`)
  io.emit('message', message)
})

io.on('connection', (socket) => {
  heartbeat = socket

  socket.emit('connection', 'welcome')

  socket.on('random-cmd', (data) => {
    console.log(Math.random()*1000000)
  })

  setInterval(function () {
    // console.log('hello every 5s')
    socket.emit('heartbeat', Math.random())
  }, 5000)
})




