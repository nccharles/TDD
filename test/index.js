const assert = require('chai').assert;
const app = require('../app');
let greeting=app.SayHello();
let add=app.addNumbers(5,5);
describe('App', function(){
    describe('SayHello()', function(){
    
    it('SayHello should return hello', function(){
        
        assert.equal(greeting, 'hello');
    });
    it('SayHello should return Type of string', function(){
        
        assert.typeOf(greeting, 'string');
    });
}),
describe('addNumbers()', function(){
    it('addNumbers should return above 5', function(){
        assert.isAbove(add, 5);
    });
    it('addNumbers should return Type of number', function(){
        assert.typeOf(add, 'number');
    });
})
});