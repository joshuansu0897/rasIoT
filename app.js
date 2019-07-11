'use strict'
const socket = require('socket.io-client')('http://localhost:8080')
const { handleFatalError, handleError } = require('./util')
const cv = require('opencv')
const fs = require('fs')
const SerialPort = require('serialport')
const port = new SerialPort('/dev/tty-usbserial1')

const camera = new cv.VideoCapture(0)
camera.setWidth(600)
camera.setHeight(400)

socket.on('connect', () => {
  console.log('Se conecto')
})

socket.on('send-data-brodcast', (data) => {
  port.write(data)
})

socket.on('disconnect', () => {
  console.log('Se desconecto')
})

setInterval(() => {
  camera.read((err, img) => {
    if (err) {
      handleError(err)
    }
    if (img.size()[0] > 0 && img.size()[1] > 0) {
      img.save('image.jpg')
      fs.readFile('image.jpg', (err, buffer) => {
        if (err) {
          handleError(err)
        }
        socket.emit('send-view', buffer)
      })
    }
  })
}, 100)

port.on('data', (data) => {
  socket.emit('send-metrics', data)
})

process.on('uncaughtException', handleFatalError)
process.on('unhandledRejection', handleFatalError)
