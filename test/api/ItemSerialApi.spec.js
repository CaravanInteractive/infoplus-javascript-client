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
    instance = new infoplus.ItemSerialApi();
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

  describe('ItemSerialApi', function() {
    describe('addItemSerialAudit', function() {
      it('should call addItemSerialAudit successfully', function(done) {
        //uncomment below and update the code to test addItemSerialAudit
        //instance.addItemSerialAudit(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addItemSerialTag', function() {
      it('should call addItemSerialTag successfully', function(done) {
        //uncomment below and update the code to test addItemSerialTag
        //instance.addItemSerialTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteItemSerial', function() {
      it('should call deleteItemSerial successfully', function(done) {
        //uncomment below and update the code to test deleteItemSerial
        //instance.deleteItemSerial(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteItemSerialTag', function() {
      it('should call deleteItemSerialTag successfully', function(done) {
        //uncomment below and update the code to test deleteItemSerialTag
        //instance.deleteItemSerialTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDuplicateItemSerialById', function() {
      it('should call getDuplicateItemSerialById successfully', function(done) {
        //uncomment below and update the code to test getDuplicateItemSerialById
        //instance.getDuplicateItemSerialById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getItemSerialByFilter', function() {
      it('should call getItemSerialByFilter successfully', function(done) {
        //uncomment below and update the code to test getItemSerialByFilter
        //instance.getItemSerialByFilter(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getItemSerialById', function() {
      it('should call getItemSerialById successfully', function(done) {
        //uncomment below and update the code to test getItemSerialById
        //instance.getItemSerialById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getItemSerialTags', function() {
      it('should call getItemSerialTags successfully', function(done) {
        //uncomment below and update the code to test getItemSerialTags
        //instance.getItemSerialTags(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
