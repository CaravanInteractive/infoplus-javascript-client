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
    instance = new infoplus.EmailTemplate();
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

  describe('EmailTemplate', function() {
    it('should create an instance of EmailTemplate', function() {
      // uncomment below and update the code to test EmailTemplate
      //var instane = new infoplus.EmailTemplate();
      //expect(instance).to.be.a(infoplus.EmailTemplate);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new infoplus.EmailTemplate();
      //expect(instance).to.be();
    });

    it('should have the property lobId (base name: "lobId")', function() {
      // uncomment below and update the code to test the property lobId
      //var instane = new infoplus.EmailTemplate();
      //expect(instance).to.be();
    });

    it('should have the property subject (base name: "subject")', function() {
      // uncomment below and update the code to test the property subject
      //var instane = new infoplus.EmailTemplate();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new infoplus.EmailTemplate();
      //expect(instance).to.be();
    });

    it('should have the property fromName (base name: "fromName")', function() {
      // uncomment below and update the code to test the property fromName
      //var instane = new infoplus.EmailTemplate();
      //expect(instance).to.be();
    });

    it('should have the property fromAddress (base name: "fromAddress")', function() {
      // uncomment below and update the code to test the property fromAddress
      //var instane = new infoplus.EmailTemplate();
      //expect(instance).to.be();
    });

    it('should have the property toName (base name: "toName")', function() {
      // uncomment below and update the code to test the property toName
      //var instane = new infoplus.EmailTemplate();
      //expect(instance).to.be();
    });

    it('should have the property toAddress (base name: "toAddress")', function() {
      // uncomment below and update the code to test the property toAddress
      //var instane = new infoplus.EmailTemplate();
      //expect(instance).to.be();
    });

    it('should have the property ccAddress (base name: "ccAddress")', function() {
      // uncomment below and update the code to test the property ccAddress
      //var instane = new infoplus.EmailTemplate();
      //expect(instance).to.be();
    });

    it('should have the property bccAddress (base name: "bccAddress")', function() {
      // uncomment below and update the code to test the property bccAddress
      //var instane = new infoplus.EmailTemplate();
      //expect(instance).to.be();
    });

    it('should have the property emailTemplateType (base name: "emailTemplateType")', function() {
      // uncomment below and update the code to test the property emailTemplateType
      //var instane = new infoplus.EmailTemplate();
      //expect(instance).to.be();
    });

    it('should have the property recordType (base name: "recordType")', function() {
      // uncomment below and update the code to test the property recordType
      //var instane = new infoplus.EmailTemplate();
      //expect(instance).to.be();
    });

    it('should have the property apiVersion (base name: "apiVersion")', function() {
      // uncomment below and update the code to test the property apiVersion
      //var instane = new infoplus.EmailTemplate();
      //expect(instance).to.be();
    });

    it('should have the property scriptId (base name: "scriptId")', function() {
      // uncomment below and update the code to test the property scriptId
      //var instane = new infoplus.EmailTemplate();
      //expect(instance).to.be();
    });

    it('should have the property createDate (base name: "createDate")', function() {
      // uncomment below and update the code to test the property createDate
      //var instane = new infoplus.EmailTemplate();
      //expect(instance).to.be();
    });

    it('should have the property modifyDate (base name: "modifyDate")', function() {
      // uncomment below and update the code to test the property modifyDate
      //var instane = new infoplus.EmailTemplate();
      //expect(instance).to.be();
    });

    it('should have the property customFields (base name: "customFields")', function() {
      // uncomment below and update the code to test the property customFields
      //var instane = new infoplus.EmailTemplate();
      //expect(instance).to.be();
    });

  });

}));
