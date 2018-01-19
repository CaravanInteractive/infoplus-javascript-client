/**
 * Infoplus API
 * Infoplus API.
 *
 * OpenAPI spec version: beta
 * Contact: api@infopluscommerce.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.infoplus);
  }
}(this, function(expect, infoplus) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new infoplus.ItemAccountCodeApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ItemAccountCodeApi', function() {
    describe('addItemAccountCode', function() {
      it('should call addItemAccountCode successfully', function(done) {
        //uncomment below and update the code to test addItemAccountCode
        //instance.addItemAccountCode(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addItemAccountCodeAudit', function() {
      it('should call addItemAccountCodeAudit successfully', function(done) {
        //uncomment below and update the code to test addItemAccountCodeAudit
        //instance.addItemAccountCodeAudit(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addItemAccountCodeTag', function() {
      it('should call addItemAccountCodeTag successfully', function(done) {
        //uncomment below and update the code to test addItemAccountCodeTag
        //instance.addItemAccountCodeTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteItemAccountCode', function() {
      it('should call deleteItemAccountCode successfully', function(done) {
        //uncomment below and update the code to test deleteItemAccountCode
        //instance.deleteItemAccountCode(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteItemAccountCodeTag', function() {
      it('should call deleteItemAccountCodeTag successfully', function(done) {
        //uncomment below and update the code to test deleteItemAccountCodeTag
        //instance.deleteItemAccountCodeTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDuplicateItemAccountCodeById', function() {
      it('should call getDuplicateItemAccountCodeById successfully', function(done) {
        //uncomment below and update the code to test getDuplicateItemAccountCodeById
        //instance.getDuplicateItemAccountCodeById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getItemAccountCodeByFilter', function() {
      it('should call getItemAccountCodeByFilter successfully', function(done) {
        //uncomment below and update the code to test getItemAccountCodeByFilter
        //instance.getItemAccountCodeByFilter(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getItemAccountCodeById', function() {
      it('should call getItemAccountCodeById successfully', function(done) {
        //uncomment below and update the code to test getItemAccountCodeById
        //instance.getItemAccountCodeById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getItemAccountCodeTags', function() {
      it('should call getItemAccountCodeTags successfully', function(done) {
        //uncomment below and update the code to test getItemAccountCodeTags
        //instance.getItemAccountCodeTags(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateItemAccountCode', function() {
      it('should call updateItemAccountCode successfully', function(done) {
        //uncomment below and update the code to test updateItemAccountCode
        //instance.updateItemAccountCode(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
