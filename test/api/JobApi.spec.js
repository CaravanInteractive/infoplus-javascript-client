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
    instance = new infoplus.JobApi();
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

  describe('JobApi', function() {
    describe('addJob', function() {
      it('should call addJob successfully', function(done) {
        //uncomment below and update the code to test addJob
        //instance.addJob(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addJobAudit', function() {
      it('should call addJobAudit successfully', function(done) {
        //uncomment below and update the code to test addJobAudit
        //instance.addJobAudit(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addJobTag', function() {
      it('should call addJobTag successfully', function(done) {
        //uncomment below and update the code to test addJobTag
        //instance.addJobTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteJob', function() {
      it('should call deleteJob successfully', function(done) {
        //uncomment below and update the code to test deleteJob
        //instance.deleteJob(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteJobTag', function() {
      it('should call deleteJobTag successfully', function(done) {
        //uncomment below and update the code to test deleteJobTag
        //instance.deleteJobTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('executeJob', function() {
      it('should call executeJob successfully', function(done) {
        //uncomment below and update the code to test executeJob
        //instance.executeJob(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDuplicateJobById', function() {
      it('should call getDuplicateJobById successfully', function(done) {
        //uncomment below and update the code to test getDuplicateJobById
        //instance.getDuplicateJobById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getJobByFilter', function() {
      it('should call getJobByFilter successfully', function(done) {
        //uncomment below and update the code to test getJobByFilter
        //instance.getJobByFilter(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getJobById', function() {
      it('should call getJobById successfully', function(done) {
        //uncomment below and update the code to test getJobById
        //instance.getJobById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getJobTags', function() {
      it('should call getJobTags successfully', function(done) {
        //uncomment below and update the code to test getJobTags
        //instance.getJobTags(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateJob', function() {
      it('should call updateJob successfully', function(done) {
        //uncomment below and update the code to test updateJob
        //instance.updateJob(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateJobCustomFields', function() {
      it('should call updateJobCustomFields successfully', function(done) {
        //uncomment below and update the code to test updateJobCustomFields
        //instance.updateJobCustomFields(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
