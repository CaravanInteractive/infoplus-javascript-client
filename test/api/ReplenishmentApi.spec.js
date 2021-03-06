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
    instance = new infoplus.ReplenishmentApi();
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

  describe('ReplenishmentApi', function() {
    describe('addReplenishmentAudit', function() {
      it('should call addReplenishmentAudit successfully', function(done) {
        //uncomment below and update the code to test addReplenishmentAudit
        //instance.addReplenishmentAudit(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addReplenishmentTag', function() {
      it('should call addReplenishmentTag successfully', function(done) {
        //uncomment below and update the code to test addReplenishmentTag
        //instance.addReplenishmentTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteReplenishmentTag', function() {
      it('should call deleteReplenishmentTag successfully', function(done) {
        //uncomment below and update the code to test deleteReplenishmentTag
        //instance.deleteReplenishmentTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDuplicateReplenishmentById', function() {
      it('should call getDuplicateReplenishmentById successfully', function(done) {
        //uncomment below and update the code to test getDuplicateReplenishmentById
        //instance.getDuplicateReplenishmentById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getReplenishmentByFilter', function() {
      it('should call getReplenishmentByFilter successfully', function(done) {
        //uncomment below and update the code to test getReplenishmentByFilter
        //instance.getReplenishmentByFilter(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getReplenishmentById', function() {
      it('should call getReplenishmentById successfully', function(done) {
        //uncomment below and update the code to test getReplenishmentById
        //instance.getReplenishmentById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getReplenishmentTags', function() {
      it('should call getReplenishmentTags successfully', function(done) {
        //uncomment below and update the code to test getReplenishmentTags
        //instance.getReplenishmentTags(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateReplenishmentCustomFields', function() {
      it('should call updateReplenishmentCustomFields successfully', function(done) {
        //uncomment below and update the code to test updateReplenishmentCustomFields
        //instance.updateReplenishmentCustomFields(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
