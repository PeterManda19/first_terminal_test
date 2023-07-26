import assert from "assert";
import greet from "../greet.js";

describe('The greet function', function(){
    it('should greet André correctly', function(){
        assert.equal('Hello, André!', greet('André'));
    });
    it('should greet Peter correctly', function(){
        assert.equal('Hello, Peter!', greet('Peter'));
    });
});
