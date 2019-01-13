/* eslint-disable no-unused-expressions */
process.env.NODE_ENV = 'test'

const proxyquire = require('proxyquire')
const chai = require('chai')
const chaiHttp = require('chai-http')
const expect = chai.expect

chai.use(chaiHttp)

const morgan = () => (req, res, next) => next()
const sut = proxyquire('../src/server', { morgan })

describe('Application server', () => {
  describe('The home route', () => {
    it('should return an OK status', done => {
      chai.request(sut)
        .get('/')
        .end((err, res) => {
          expect(err).to.be.null
          expect(res.status).to.equal(200)
          done()
        })
    })
  })
})
