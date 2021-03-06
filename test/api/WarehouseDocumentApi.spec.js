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
    instance = new infoplus.WarehouseDocumentApi();
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

  describe('WarehouseDocumentApi', function() {
    describe('addWarehouseDocumentAudit', function() {
      it('should call addWarehouseDocumentAudit successfully', function(done) {
        //uncomment below and update the code to test addWarehouseDocumentAudit
        //instance.addWarehouseDocumentAudit(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addWarehouseDocumentTag', function() {
      it('should call addWarehouseDocumentTag successfully', function(done) {
        //uncomment below and update the code to test addWarehouseDocumentTag
        //instance.addWarehouseDocumentTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteWarehouseDocumentTag', function() {
      it('should call deleteWarehouseDocumentTag successfully', function(done) {
        //uncomment below and update the code to test deleteWarehouseDocumentTag
        //instance.deleteWarehouseDocumentTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDuplicateWarehouseDocumentById', function() {
      it('should call getDuplicateWarehouseDocumentById successfully', function(done) {
        //uncomment below and update the code to test getDuplicateWarehouseDocumentById
        //instance.getDuplicateWarehouseDocumentById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getWarehouseDocumentByFilter', function() {
      it('should call getWarehouseDocumentByFilter successfully', function(done) {
        //uncomment below and update the code to test getWarehouseDocumentByFilter
        //instance.getWarehouseDocumentByFilter(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getWarehouseDocumentById', function() {
      it('should call getWarehouseDocumentById successfully', function(done) {
        //uncomment below and update the code to test getWarehouseDocumentById
        //instance.getWarehouseDocumentById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getWarehouseDocumentTags', function() {
      it('should call getWarehouseDocumentTags successfully', function(done) {
        //uncomment below and update the code to test getWarehouseDocumentTags
        //instance.getWarehouseDocumentTags(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateWarehouseDocumentCustomFields', function() {
      it('should call updateWarehouseDocumentCustomFields successfully', function(done) {
        //uncomment below and update the code to test updateWarehouseDocumentCustomFields
        //instance.updateWarehouseDocumentCustomFields(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
