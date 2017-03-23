const request = require('supertest')
const {expect} = require('chai')

const backendTree = require('../../index.js')
const exampleApp = require('../../../example-app/server/app');

backendTree(exampleApp);

//here we're testing our actual app's routes: 
    // "/backend-tree/"
    // "/backend-tree/BACKEND_TREE.js"
    // etc.

describe('/backend-tree/', () => {

        it('returns an html file', () =>
            request(exampleApp)
            .get('/backend-tree/')
            .expect(200)
            .then(res => {
                expect(res.type).to.be.equal('text/html');
            })
        )
    })

describe('/backend-tree/routes', () => {

    it('successfully returns json', () =>
        request(exampleApp)
          .get('/backend-tree/routes')
          .expect(200)
          .then(res => {
            expect(res.type).to.be.equal('application/json');
        })
  )})


    describe('/backend-tree/BACKEND_TREE.js', () => {

        it('returns a bundle js file', () =>
            request(exampleApp)
            .get('/backend-tree/BACKEND_TREE.js')
            .expect(200)
            .then(res => {
                expect(res.type).to.be.equal('application/javascript');
            })

        )
    })

    describe('/backend-tree/BACKEND_TREE.css', () => {

        it('returns a css file', () =>
            request(exampleApp)
            .get('/backend-tree/BACKEND_TREE.css')
            .expect(200)
            .then(res => {
                expect(res.type).to.be.equal('text/css');
            })

        )
    })
