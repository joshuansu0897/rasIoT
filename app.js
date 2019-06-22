const socket = require('socket.io-client')('http://localhost:8080')
const { handleFatalError } = require('./util')

socket.on('connect', () => {
  console.log('Se conecto')
})

socket.on('send-data-brodcast', (data) => {
  console.log(data)
})

socket.on('disconnect', () => {
  console.log('Se desconecto')
})

// simulando el loop del video
setInterval(() => {
  view = 'aqui va la info de la img'
  socket.emit('send-view', view)
}, 1500)

process.on('uncaughtException', handleFatalError)
process.on('unhandledRejection', handleFatalError)
