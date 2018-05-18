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
    instance = new infoplus.QuickAdjustmentApi();
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

  describe('QuickAdjustmentApi', function() {
    describe('addQuickAdjustment', function() {
      it('should call addQuickAdjustment successfully', function(done) {
        //uncomment below and update the code to test addQuickAdjustment
        //instance.addQuickAdjustment(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addQuickAdjustmentAudit', function() {
      it('should call addQuickAdjustmentAudit successfully', function(done) {
        //uncomment below and update the code to test addQuickAdjustmentAudit
        //instance.addQuickAdjustmentAudit(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addQuickAdjustmentTag', function() {
      it('should call addQuickAdjustmentTag successfully', function(done) {
        //uncomment below and update the code to test addQuickAdjustmentTag
        //instance.addQuickAdjustmentTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteQuickAdjustment', function() {
      it('should call deleteQuickAdjustment successfully', function(done) {
        //uncomment below and update the code to test deleteQuickAdjustment
        //instance.deleteQuickAdjustment(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteQuickAdjustmentTag', function() {
      it('should call deleteQuickAdjustmentTag successfully', function(done) {
        //uncomment below and update the code to test deleteQuickAdjustmentTag
        //instance.deleteQuickAdjustmentTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('executeQuickAdjustment', function() {
      it('should call executeQuickAdjustment successfully', function(done) {
        //uncomment below and update the code to test executeQuickAdjustment
        //instance.executeQuickAdjustment(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDuplicateQuickAdjustmentById', function() {
      it('should call getDuplicateQuickAdjustmentById successfully', function(done) {
        //uncomment below and update the code to test getDuplicateQuickAdjustmentById
        //instance.getDuplicateQuickAdjustmentById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getQuickAdjustmentByFilter', function() {
      it('should call getQuickAdjustmentByFilter successfully', function(done) {
        //uncomment below and update the code to test getQuickAdjustmentByFilter
        //instance.getQuickAdjustmentByFilter(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getQuickAdjustmentById', function() {
      it('should call getQuickAdjustmentById successfully', function(done) {
        //uncomment below and update the code to test getQuickAdjustmentById
        //instance.getQuickAdjustmentById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getQuickAdjustmentTags', function() {
      it('should call getQuickAdjustmentTags successfully', function(done) {
        //uncomment below and update the code to test getQuickAdjustmentTags
        //instance.getQuickAdjustmentTags(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateQuickAdjustment', function() {
      it('should call updateQuickAdjustment successfully', function(done) {
        //uncomment below and update the code to test updateQuickAdjustment
        //instance.updateQuickAdjustment(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateQuickAdjustmentCustomFields', function() {
      it('should call updateQuickAdjustmentCustomFields successfully', function(done) {
        //uncomment below and update the code to test updateQuickAdjustmentCustomFields
        //instance.updateQuickAdjustmentCustomFields(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
