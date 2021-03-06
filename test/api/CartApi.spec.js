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
    instance = new infoplus.CartApi();
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

  describe('CartApi', function() {
    describe('addCart', function() {
      it('should call addCart successfully', function(done) {
        //uncomment below and update the code to test addCart
        //instance.addCart(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addCartAudit', function() {
      it('should call addCartAudit successfully', function(done) {
        //uncomment below and update the code to test addCartAudit
        //instance.addCartAudit(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addCartTag', function() {
      it('should call addCartTag successfully', function(done) {
        //uncomment below and update the code to test addCartTag
        //instance.addCartTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteCart', function() {
      it('should call deleteCart successfully', function(done) {
        //uncomment below and update the code to test deleteCart
        //instance.deleteCart(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteCartTag', function() {
      it('should call deleteCartTag successfully', function(done) {
        //uncomment below and update the code to test deleteCartTag
        //instance.deleteCartTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCartByFilter', function() {
      it('should call getCartByFilter successfully', function(done) {
        //uncomment below and update the code to test getCartByFilter
        //instance.getCartByFilter(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCartById', function() {
      it('should call getCartById successfully', function(done) {
        //uncomment below and update the code to test getCartById
        //instance.getCartById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCartTags', function() {
      it('should call getCartTags successfully', function(done) {
        //uncomment below and update the code to test getCartTags
        //instance.getCartTags(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDuplicateCartById', function() {
      it('should call getDuplicateCartById successfully', function(done) {
        //uncomment below and update the code to test getDuplicateCartById
        //instance.getDuplicateCartById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateCart', function() {
      it('should call updateCart successfully', function(done) {
        //uncomment below and update the code to test updateCart
        //instance.updateCart(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
