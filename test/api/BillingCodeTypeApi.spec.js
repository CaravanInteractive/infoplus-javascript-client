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
    instance = new infoplus.BillingCodeTypeApi();
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

  describe('BillingCodeTypeApi', function() {
    describe('addBillingCodeType', function() {
      it('should call addBillingCodeType successfully', function(done) {
        //uncomment below and update the code to test addBillingCodeType
        //instance.addBillingCodeType(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addBillingCodeTypeAudit', function() {
      it('should call addBillingCodeTypeAudit successfully', function(done) {
        //uncomment below and update the code to test addBillingCodeTypeAudit
        //instance.addBillingCodeTypeAudit(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addBillingCodeTypeTag', function() {
      it('should call addBillingCodeTypeTag successfully', function(done) {
        //uncomment below and update the code to test addBillingCodeTypeTag
        //instance.addBillingCodeTypeTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteBillingCodeType', function() {
      it('should call deleteBillingCodeType successfully', function(done) {
        //uncomment below and update the code to test deleteBillingCodeType
        //instance.deleteBillingCodeType(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteBillingCodeTypeTag', function() {
      it('should call deleteBillingCodeTypeTag successfully', function(done) {
        //uncomment below and update the code to test deleteBillingCodeTypeTag
        //instance.deleteBillingCodeTypeTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getBillingCodeTypeByFilter', function() {
      it('should call getBillingCodeTypeByFilter successfully', function(done) {
        //uncomment below and update the code to test getBillingCodeTypeByFilter
        //instance.getBillingCodeTypeByFilter(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getBillingCodeTypeById', function() {
      it('should call getBillingCodeTypeById successfully', function(done) {
        //uncomment below and update the code to test getBillingCodeTypeById
        //instance.getBillingCodeTypeById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getBillingCodeTypeTags', function() {
      it('should call getBillingCodeTypeTags successfully', function(done) {
        //uncomment below and update the code to test getBillingCodeTypeTags
        //instance.getBillingCodeTypeTags(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDuplicateBillingCodeTypeById', function() {
      it('should call getDuplicateBillingCodeTypeById successfully', function(done) {
        //uncomment below and update the code to test getDuplicateBillingCodeTypeById
        //instance.getDuplicateBillingCodeTypeById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateBillingCodeType', function() {
      it('should call updateBillingCodeType successfully', function(done) {
        //uncomment below and update the code to test updateBillingCodeType
        //instance.updateBillingCodeType(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateBillingCodeTypeCustomFields', function() {
      it('should call updateBillingCodeTypeCustomFields successfully', function(done) {
        //uncomment below and update the code to test updateBillingCodeTypeCustomFields
        //instance.updateBillingCodeTypeCustomFields(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));