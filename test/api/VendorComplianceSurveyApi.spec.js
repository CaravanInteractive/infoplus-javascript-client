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
    instance = new infoplus.VendorComplianceSurveyApi();
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

  describe('VendorComplianceSurveyApi', function() {
    describe('addVendorComplianceSurvey', function() {
      it('should call addVendorComplianceSurvey successfully', function(done) {
        //uncomment below and update the code to test addVendorComplianceSurvey
        //instance.addVendorComplianceSurvey(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addVendorComplianceSurveyAudit', function() {
      it('should call addVendorComplianceSurveyAudit successfully', function(done) {
        //uncomment below and update the code to test addVendorComplianceSurveyAudit
        //instance.addVendorComplianceSurveyAudit(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addVendorComplianceSurveyTag', function() {
      it('should call addVendorComplianceSurveyTag successfully', function(done) {
        //uncomment below and update the code to test addVendorComplianceSurveyTag
        //instance.addVendorComplianceSurveyTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteVendorComplianceSurvey', function() {
      it('should call deleteVendorComplianceSurvey successfully', function(done) {
        //uncomment below and update the code to test deleteVendorComplianceSurvey
        //instance.deleteVendorComplianceSurvey(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteVendorComplianceSurveyTag', function() {
      it('should call deleteVendorComplianceSurveyTag successfully', function(done) {
        //uncomment below and update the code to test deleteVendorComplianceSurveyTag
        //instance.deleteVendorComplianceSurveyTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDuplicateVendorComplianceSurveyById', function() {
      it('should call getDuplicateVendorComplianceSurveyById successfully', function(done) {
        //uncomment below and update the code to test getDuplicateVendorComplianceSurveyById
        //instance.getDuplicateVendorComplianceSurveyById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getVendorComplianceSurveyByFilter', function() {
      it('should call getVendorComplianceSurveyByFilter successfully', function(done) {
        //uncomment below and update the code to test getVendorComplianceSurveyByFilter
        //instance.getVendorComplianceSurveyByFilter(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getVendorComplianceSurveyById', function() {
      it('should call getVendorComplianceSurveyById successfully', function(done) {
        //uncomment below and update the code to test getVendorComplianceSurveyById
        //instance.getVendorComplianceSurveyById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getVendorComplianceSurveyTags', function() {
      it('should call getVendorComplianceSurveyTags successfully', function(done) {
        //uncomment below and update the code to test getVendorComplianceSurveyTags
        //instance.getVendorComplianceSurveyTags(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateVendorComplianceSurvey', function() {
      it('should call updateVendorComplianceSurvey successfully', function(done) {
        //uncomment below and update the code to test updateVendorComplianceSurvey
        //instance.updateVendorComplianceSurvey(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateVendorComplianceSurveyCustomFields', function() {
      it('should call updateVendorComplianceSurveyCustomFields successfully', function(done) {
        //uncomment below and update the code to test updateVendorComplianceSurveyCustomFields
        //instance.updateVendorComplianceSurveyCustomFields(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));