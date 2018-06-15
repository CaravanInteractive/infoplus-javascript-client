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
    instance = new infoplus.ShipmentApi();
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

  describe('ShipmentApi', function() {
    describe('addShipmentAudit', function() {
      it('should call addShipmentAudit successfully', function(done) {
        //uncomment below and update the code to test addShipmentAudit
        //instance.addShipmentAudit(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addShipmentTag', function() {
      it('should call addShipmentTag successfully', function(done) {
        //uncomment below and update the code to test addShipmentTag
        //instance.addShipmentTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteShipmentTag', function() {
      it('should call deleteShipmentTag successfully', function(done) {
        //uncomment below and update the code to test deleteShipmentTag
        //instance.deleteShipmentTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDuplicateShipmentById', function() {
      it('should call getDuplicateShipmentById successfully', function(done) {
        //uncomment below and update the code to test getDuplicateShipmentById
        //instance.getDuplicateShipmentById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getShipmentByFilter', function() {
      it('should call getShipmentByFilter successfully', function(done) {
        //uncomment below and update the code to test getShipmentByFilter
        //instance.getShipmentByFilter(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getShipmentById', function() {
      it('should call getShipmentById successfully', function(done) {
        //uncomment below and update the code to test getShipmentById
        //instance.getShipmentById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getShipmentTags', function() {
      it('should call getShipmentTags successfully', function(done) {
        //uncomment below and update the code to test getShipmentTags
        //instance.getShipmentTags(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateShipmentCustomFields', function() {
      it('should call updateShipmentCustomFields successfully', function(done) {
        //uncomment below and update the code to test updateShipmentCustomFields
        //instance.updateShipmentCustomFields(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
