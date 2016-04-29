'use strict';
var _ = require("../index.js"),
    expect = require("expect.js");

describe("<Unit Test>", function(){
    describe('Basic Calculation:', function() {
        beforeEach(function(done) {
            done();
        });
        describe('Method add', function() {
            it('3.0 + 4.0 = 7.0', function(){
                expect(3.0.add(4.0)).to.eql(7.0);
            });
        });

        describe('Method mul', function() {
            it('3.0 * 4.0 = 12.0', function(){
                expect(3.0.mul(4.0)).to.eql(12.0);
            });
        });

        describe('Method sub', function() {
            it('4.0-3.0 = 1.0', function(){

                expect(4.0.sub(3.0)).to.eql(1.0);
            });
        });

        describe('Method div', function() {
            it('12.0 / 4.0 = 3.0', function(){
                expect(12.0.div(4.0)).to.eql(3.0);
            });
        });

        afterEach(function(done) {
            done();
        });
    });
});

