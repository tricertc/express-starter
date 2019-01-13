const server = require('./src/server')
const debug = require('debug')('app:index')

const PORT = process.env.PORT || 5000

server.listen(PORT, () => {
  debug(`Server is listening on port ${PORT}`)
})
