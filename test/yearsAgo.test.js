import assert from "assert";
import yearsAgo from "../src/yearsAgo.js";

describe('yearsAgo test', function () {
    it('It should get correct year difference', function () {
        assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976))
    });

});