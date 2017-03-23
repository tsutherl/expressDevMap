const {expect} = require('chai');
const parseRoutes = require('../../parse-routes');


describe('parseRoutes', function () {

    it('is a function', function () {
       expect(parseRoutes).to.be.a('function');
    });

    it('returns an object', function() {
        var appRouterStack = 
        [{
            handle: function (){},
            name: 'query',
            params: {},
            path: '',
            keys: [],
            route: undefined },
        {
            handle: function(){},
            name: 'expressInit',
            params: {},
            path: '',
            keys: [],
            route: undefined }
        ]

        expect(typeof parseRoutes(appRouterStack)).to.be.equal('object');
        expect(Array.isArray(parseRoutes(appRouterStack))).to.be.equal(false);
    })

    it('is defined with two parameters', function(){
        expect(parseRoutes.length).to.be.equal(2);
    })


});

