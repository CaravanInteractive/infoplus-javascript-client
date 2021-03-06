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
    instance = new infoplus.ItemSectorApi();
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

  describe('ItemSectorApi', function() {
    describe('addItemSector', function() {
      it('should call addItemSector successfully', function(done) {
        //uncomment below and update the code to test addItemSector
        //instance.addItemSector(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addItemSectorAudit', function() {
      it('should call addItemSectorAudit successfully', function(done) {
        //uncomment below and update the code to test addItemSectorAudit
        //instance.addItemSectorAudit(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addItemSectorTag', function() {
      it('should call addItemSectorTag successfully', function(done) {
        //uncomment below and update the code to test addItemSectorTag
        //instance.addItemSectorTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteItemSector', function() {
      it('should call deleteItemSector successfully', function(done) {
        //uncomment below and update the code to test deleteItemSector
        //instance.deleteItemSector(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteItemSectorTag', function() {
      it('should call deleteItemSectorTag successfully', function(done) {
        //uncomment below and update the code to test deleteItemSectorTag
        //instance.deleteItemSectorTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDuplicateItemSectorById', function() {
      it('should call getDuplicateItemSectorById successfully', function(done) {
        //uncomment below and update the code to test getDuplicateItemSectorById
        //instance.getDuplicateItemSectorById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getItemSectorByFilter', function() {
      it('should call getItemSectorByFilter successfully', function(done) {
        //uncomment below and update the code to test getItemSectorByFilter
        //instance.getItemSectorByFilter(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getItemSectorById', function() {
      it('should call getItemSectorById successfully', function(done) {
        //uncomment below and update the code to test getItemSectorById
        //instance.getItemSectorById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getItemSectorTags', function() {
      it('should call getItemSectorTags successfully', function(done) {
        //uncomment below and update the code to test getItemSectorTags
        //instance.getItemSectorTags(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateItemSector', function() {
      it('should call updateItemSector successfully', function(done) {
        //uncomment below and update the code to test updateItemSector
        //instance.updateItemSector(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
