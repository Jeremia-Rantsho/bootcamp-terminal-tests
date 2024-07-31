import assert from "assert";
import isFromBellville from "../src/isFromBellville.js";

describe('isFromBellville test' , function(){
    it('It should start with CY' , function(){
        assert.equal(isFromBellville('CY 123'), true);
    });

    it('The input registration, not from Bellville' , function(){
        assert.equal(isFromBellville('CJ 123'), false);
    });

});