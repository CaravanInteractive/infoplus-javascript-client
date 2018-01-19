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
    instance = new infoplus.OrderSourceApi();
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

  describe('OrderSourceApi', function() {
    describe('addOrderSource', function() {
      it('should call addOrderSource successfully', function(done) {
        //uncomment below and update the code to test addOrderSource
        //instance.addOrderSource(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addOrderSourceAudit', function() {
      it('should call addOrderSourceAudit successfully', function(done) {
        //uncomment below and update the code to test addOrderSourceAudit
        //instance.addOrderSourceAudit(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addOrderSourceTag', function() {
      it('should call addOrderSourceTag successfully', function(done) {
        //uncomment below and update the code to test addOrderSourceTag
        //instance.addOrderSourceTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteOrderSource', function() {
      it('should call deleteOrderSource successfully', function(done) {
        //uncomment below and update the code to test deleteOrderSource
        //instance.deleteOrderSource(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteOrderSourceTag', function() {
      it('should call deleteOrderSourceTag successfully', function(done) {
        //uncomment below and update the code to test deleteOrderSourceTag
        //instance.deleteOrderSourceTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDuplicateOrderSourceById', function() {
      it('should call getDuplicateOrderSourceById successfully', function(done) {
        //uncomment below and update the code to test getDuplicateOrderSourceById
        //instance.getDuplicateOrderSourceById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOrderSourceByFilter', function() {
      it('should call getOrderSourceByFilter successfully', function(done) {
        //uncomment below and update the code to test getOrderSourceByFilter
        //instance.getOrderSourceByFilter(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOrderSourceById', function() {
      it('should call getOrderSourceById successfully', function(done) {
        //uncomment below and update the code to test getOrderSourceById
        //instance.getOrderSourceById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOrderSourceTags', function() {
      it('should call getOrderSourceTags successfully', function(done) {
        //uncomment below and update the code to test getOrderSourceTags
        //instance.getOrderSourceTags(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateOrderSource', function() {
      it('should call updateOrderSource successfully', function(done) {
        //uncomment below and update the code to test updateOrderSource
        //instance.updateOrderSource(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateOrderSourceCustomFields', function() {
      it('should call updateOrderSourceCustomFields successfully', function(done) {
        //uncomment below and update the code to test updateOrderSourceCustomFields
        //instance.updateOrderSourceCustomFields(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
