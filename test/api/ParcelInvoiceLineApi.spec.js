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
    instance = new infoplus.ParcelInvoiceLineApi();
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

  describe('ParcelInvoiceLineApi', function() {
    describe('addParcelInvoiceLineAudit', function() {
      it('should call addParcelInvoiceLineAudit successfully', function(done) {
        //uncomment below and update the code to test addParcelInvoiceLineAudit
        //instance.addParcelInvoiceLineAudit(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addParcelInvoiceLineTag', function() {
      it('should call addParcelInvoiceLineTag successfully', function(done) {
        //uncomment below and update the code to test addParcelInvoiceLineTag
        //instance.addParcelInvoiceLineTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteParcelInvoiceLineTag', function() {
      it('should call deleteParcelInvoiceLineTag successfully', function(done) {
        //uncomment below and update the code to test deleteParcelInvoiceLineTag
        //instance.deleteParcelInvoiceLineTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDuplicateParcelInvoiceLineById', function() {
      it('should call getDuplicateParcelInvoiceLineById successfully', function(done) {
        //uncomment below and update the code to test getDuplicateParcelInvoiceLineById
        //instance.getDuplicateParcelInvoiceLineById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getParcelInvoiceLineByFilter', function() {
      it('should call getParcelInvoiceLineByFilter successfully', function(done) {
        //uncomment below and update the code to test getParcelInvoiceLineByFilter
        //instance.getParcelInvoiceLineByFilter(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getParcelInvoiceLineById', function() {
      it('should call getParcelInvoiceLineById successfully', function(done) {
        //uncomment below and update the code to test getParcelInvoiceLineById
        //instance.getParcelInvoiceLineById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getParcelInvoiceLineTags', function() {
      it('should call getParcelInvoiceLineTags successfully', function(done) {
        //uncomment below and update the code to test getParcelInvoiceLineTags
        //instance.getParcelInvoiceLineTags(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateParcelInvoiceLine', function() {
      it('should call updateParcelInvoiceLine successfully', function(done) {
        //uncomment below and update the code to test updateParcelInvoiceLine
        //instance.updateParcelInvoiceLine(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
