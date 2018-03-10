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
    instance = new infoplus.ItemApi();
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

  describe('ItemApi', function() {
    describe('addItem', function() {
      it('should call addItem successfully', function(done) {
        //uncomment below and update the code to test addItem
        //instance.addItem(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addItemAudit', function() {
      it('should call addItemAudit successfully', function(done) {
        //uncomment below and update the code to test addItemAudit
        //instance.addItemAudit(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addItemTag', function() {
      it('should call addItemTag successfully', function(done) {
        //uncomment below and update the code to test addItemTag
        //instance.addItemTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteItem', function() {
      it('should call deleteItem successfully', function(done) {
        //uncomment below and update the code to test deleteItem
        //instance.deleteItem(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteItemTag', function() {
      it('should call deleteItemTag successfully', function(done) {
        //uncomment below and update the code to test deleteItemTag
        //instance.deleteItemTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getBySKU', function() {
      it('should call getBySKU successfully', function(done) {
        //uncomment below and update the code to test getBySKU
        //instance.getBySKU(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDuplicateItemById', function() {
      it('should call getDuplicateItemById successfully', function(done) {
        //uncomment below and update the code to test getDuplicateItemById
        //instance.getDuplicateItemById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getItemByFilter', function() {
      it('should call getItemByFilter successfully', function(done) {
        //uncomment below and update the code to test getItemByFilter
        //instance.getItemByFilter(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getItemById', function() {
      it('should call getItemById successfully', function(done) {
        //uncomment below and update the code to test getItemById
        //instance.getItemById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getItemTags', function() {
      it('should call getItemTags successfully', function(done) {
        //uncomment below and update the code to test getItemTags
        //instance.getItemTags(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateItem', function() {
      it('should call updateItem successfully', function(done) {
        //uncomment below and update the code to test updateItem
        //instance.updateItem(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateItemCustomFields', function() {
      it('should call updateItemCustomFields successfully', function(done) {
        //uncomment below and update the code to test updateItemCustomFields
        //instance.updateItemCustomFields(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));