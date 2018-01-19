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
    instance = new infoplus.WorkActivityApi();
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

  describe('WorkActivityApi', function() {
    describe('addWorkActivity', function() {
      it('should call addWorkActivity successfully', function(done) {
        //uncomment below and update the code to test addWorkActivity
        //instance.addWorkActivity(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addWorkActivityAudit', function() {
      it('should call addWorkActivityAudit successfully', function(done) {
        //uncomment below and update the code to test addWorkActivityAudit
        //instance.addWorkActivityAudit(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addWorkActivityTag', function() {
      it('should call addWorkActivityTag successfully', function(done) {
        //uncomment below and update the code to test addWorkActivityTag
        //instance.addWorkActivityTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteWorkActivity', function() {
      it('should call deleteWorkActivity successfully', function(done) {
        //uncomment below and update the code to test deleteWorkActivity
        //instance.deleteWorkActivity(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteWorkActivityTag', function() {
      it('should call deleteWorkActivityTag successfully', function(done) {
        //uncomment below and update the code to test deleteWorkActivityTag
        //instance.deleteWorkActivityTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDuplicateWorkActivityById', function() {
      it('should call getDuplicateWorkActivityById successfully', function(done) {
        //uncomment below and update the code to test getDuplicateWorkActivityById
        //instance.getDuplicateWorkActivityById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getWorkActivityByFilter', function() {
      it('should call getWorkActivityByFilter successfully', function(done) {
        //uncomment below and update the code to test getWorkActivityByFilter
        //instance.getWorkActivityByFilter(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getWorkActivityById', function() {
      it('should call getWorkActivityById successfully', function(done) {
        //uncomment below and update the code to test getWorkActivityById
        //instance.getWorkActivityById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getWorkActivityTags', function() {
      it('should call getWorkActivityTags successfully', function(done) {
        //uncomment below and update the code to test getWorkActivityTags
        //instance.getWorkActivityTags(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateWorkActivity', function() {
      it('should call updateWorkActivity successfully', function(done) {
        //uncomment below and update the code to test updateWorkActivity
        //instance.updateWorkActivity(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
