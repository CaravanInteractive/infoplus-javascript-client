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
    instance = new infoplus.ItemSubCategoryApi();
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

  describe('ItemSubCategoryApi', function() {
    describe('addItemSubCategory', function() {
      it('should call addItemSubCategory successfully', function(done) {
        //uncomment below and update the code to test addItemSubCategory
        //instance.addItemSubCategory(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addItemSubCategoryAudit', function() {
      it('should call addItemSubCategoryAudit successfully', function(done) {
        //uncomment below and update the code to test addItemSubCategoryAudit
        //instance.addItemSubCategoryAudit(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addItemSubCategoryTag', function() {
      it('should call addItemSubCategoryTag successfully', function(done) {
        //uncomment below and update the code to test addItemSubCategoryTag
        //instance.addItemSubCategoryTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteItemSubCategory', function() {
      it('should call deleteItemSubCategory successfully', function(done) {
        //uncomment below and update the code to test deleteItemSubCategory
        //instance.deleteItemSubCategory(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteItemSubCategoryTag', function() {
      it('should call deleteItemSubCategoryTag successfully', function(done) {
        //uncomment below and update the code to test deleteItemSubCategoryTag
        //instance.deleteItemSubCategoryTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDuplicateItemSubCategoryById', function() {
      it('should call getDuplicateItemSubCategoryById successfully', function(done) {
        //uncomment below and update the code to test getDuplicateItemSubCategoryById
        //instance.getDuplicateItemSubCategoryById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getItemSubCategoryByFilter', function() {
      it('should call getItemSubCategoryByFilter successfully', function(done) {
        //uncomment below and update the code to test getItemSubCategoryByFilter
        //instance.getItemSubCategoryByFilter(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getItemSubCategoryById', function() {
      it('should call getItemSubCategoryById successfully', function(done) {
        //uncomment below and update the code to test getItemSubCategoryById
        //instance.getItemSubCategoryById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getItemSubCategoryTags', function() {
      it('should call getItemSubCategoryTags successfully', function(done) {
        //uncomment below and update the code to test getItemSubCategoryTags
        //instance.getItemSubCategoryTags(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateItemSubCategory', function() {
      it('should call updateItemSubCategory successfully', function(done) {
        //uncomment below and update the code to test updateItemSubCategory
        //instance.updateItemSubCategory(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
