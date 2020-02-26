var assert = require('chai').assert;
var strings = require('../src/strings.js');

describe("String Manipulation Functions", function () {
  describe('#getUpperCaseString(string)', function () {
    it('should return an uppercase representation of the given string', function () {
      assert.equal('AN UPPERCASE STRING 123!', strings.getUpperCaseString('an uppercase string 123!'));
    });
  });

  describe('#getLowerCaseString(string)', function () {
    it('should return a lowercase representation of the given string', function () {
      assert.equal('a lowercase string 123!', strings.getLowerCaseString('A LOWERCASE STRING 123!'));
    });
  });

  describe('#getStringLength(string)', function () {
    it('should return the length of the string as 0', function () {
      assert.equal(0, strings.getStringLength(''));
    });

    it('should return the length of the string as 5', function () {
      assert.equal(5, strings.getStringLength('12345'));
    });
  });

  describe('#getIndexOf(string, substring)', function () {
    it('should return the index of \'Hello\' as 0', function () {
      assert.equal(0, strings.getIndexOf('Hello World!', "Hello"));
    });

    it('should return the index of \'World\' as 6', function () {
      assert.equal(6, strings.getIndexOf('Hello World!', 'World'));
    });

    it('should return the index of \'!\' as 11', function () {
      assert.equal(11, strings.getIndexOf('Hello World!', '!'));
    });

    it('should return the index of \'@\' as -1', function () {
      assert.equal(-1, strings.getIndexOf('Hello World!', '@'));
    });
  });

  describe('#getLastIndexOf(string, substring)', function () {
    it('should return the last index of \'Hello\' as 6', function () {
      assert.equal(6, strings.getLastIndexOf('Hello Hello!', "Hello"));
    });

    it('should return the last index of \'@\' as -1', function () {
      assert.equal(-1, strings.getLastIndexOf('Hello Hello!', '@'));
    });
  });
});
