let socket = io()

socket.on('connection', (data) => {
  console.log(data)
})

socket.on('message', (message) => {
  console.log(message)
})

socket.on('heartbeat', (data) => {
  console.log(data)
})

/**
 * Try to type this in console and see in server side.
 * ```
 * socket.emit('random-cmd')
 * ```
 */