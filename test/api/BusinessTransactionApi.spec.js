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
 * Swagger Codegen version: 2.3.1
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
    instance = new infoplus.BusinessTransactionApi();
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

  describe('BusinessTransactionApi', function() {
    describe('addBusinessTransactionAudit', function() {
      it('should call addBusinessTransactionAudit successfully', function(done) {
        //uncomment below and update the code to test addBusinessTransactionAudit
        //instance.addBusinessTransactionAudit(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addBusinessTransactionTag', function() {
      it('should call addBusinessTransactionTag successfully', function(done) {
        //uncomment below and update the code to test addBusinessTransactionTag
        //instance.addBusinessTransactionTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteBusinessTransactionTag', function() {
      it('should call deleteBusinessTransactionTag successfully', function(done) {
        //uncomment below and update the code to test deleteBusinessTransactionTag
        //instance.deleteBusinessTransactionTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getBusinessTransactionByFilter', function() {
      it('should call getBusinessTransactionByFilter successfully', function(done) {
        //uncomment below and update the code to test getBusinessTransactionByFilter
        //instance.getBusinessTransactionByFilter(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getBusinessTransactionById', function() {
      it('should call getBusinessTransactionById successfully', function(done) {
        //uncomment below and update the code to test getBusinessTransactionById
        //instance.getBusinessTransactionById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getBusinessTransactionTags', function() {
      it('should call getBusinessTransactionTags successfully', function(done) {
        //uncomment below and update the code to test getBusinessTransactionTags
        //instance.getBusinessTransactionTags(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDuplicateBusinessTransactionById', function() {
      it('should call getDuplicateBusinessTransactionById successfully', function(done) {
        //uncomment below and update the code to test getDuplicateBusinessTransactionById
        //instance.getDuplicateBusinessTransactionById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateBusinessTransactionCustomFields', function() {
      it('should call updateBusinessTransactionCustomFields successfully', function(done) {
        //uncomment below and update the code to test updateBusinessTransactionCustomFields
        //instance.updateBusinessTransactionCustomFields(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
