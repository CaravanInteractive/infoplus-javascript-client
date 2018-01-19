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
    instance = new infoplus.CartonType();
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

  describe('CartonType', function() {
    it('should create an instance of CartonType', function() {
      // uncomment below and update the code to test CartonType
      //var instane = new infoplus.CartonType();
      //expect(instance).to.be.a(infoplus.CartonType);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new infoplus.CartonType();
      //expect(instance).to.be();
    });

    it('should have the property abbreviation (base name: "abbreviation")', function() {
      // uncomment below and update the code to test the property abbreviation
      //var instane = new infoplus.CartonType();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new infoplus.CartonType();
      //expect(instance).to.be();
    });

    it('should have the property lengthIn (base name: "lengthIn")', function() {
      // uncomment below and update the code to test the property lengthIn
      //var instane = new infoplus.CartonType();
      //expect(instance).to.be();
    });

    it('should have the property widthIn (base name: "widthIn")', function() {
      // uncomment below and update the code to test the property widthIn
      //var instane = new infoplus.CartonType();
      //expect(instance).to.be();
    });

    it('should have the property heightIn (base name: "heightIn")', function() {
      // uncomment below and update the code to test the property heightIn
      //var instane = new infoplus.CartonType();
      //expect(instance).to.be();
    });

    it('should have the property innerLengthIn (base name: "innerLengthIn")', function() {
      // uncomment below and update the code to test the property innerLengthIn
      //var instane = new infoplus.CartonType();
      //expect(instance).to.be();
    });

    it('should have the property innerWidthIn (base name: "innerWidthIn")', function() {
      // uncomment below and update the code to test the property innerWidthIn
      //var instane = new infoplus.CartonType();
      //expect(instance).to.be();
    });

    it('should have the property innerHeightIn (base name: "innerHeightIn")', function() {
      // uncomment below and update the code to test the property innerHeightIn
      //var instane = new infoplus.CartonType();
      //expect(instance).to.be();
    });

    it('should have the property weightLbs (base name: "weightLbs")', function() {
      // uncomment below and update the code to test the property weightLbs
      //var instane = new infoplus.CartonType();
      //expect(instance).to.be();
    });

    it('should have the property lobId (base name: "lobId")', function() {
      // uncomment below and update the code to test the property lobId
      //var instane = new infoplus.CartonType();
      //expect(instance).to.be();
    });

    it('should have the property isActive (base name: "isActive")', function() {
      // uncomment below and update the code to test the property isActive
      //var instane = new infoplus.CartonType();
      //expect(instance).to.be();
    });

    it('should have the property predefinedPackageTypeId (base name: "predefinedPackageTypeId")', function() {
      // uncomment below and update the code to test the property predefinedPackageTypeId
      //var instane = new infoplus.CartonType();
      //expect(instance).to.be();
    });

    it('should have the property customFields (base name: "customFields")', function() {
      // uncomment below and update the code to test the property customFields
      //var instane = new infoplus.CartonType();
      //expect(instance).to.be();
    });

  });

}));
