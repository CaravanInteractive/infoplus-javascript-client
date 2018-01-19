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
    instance = new infoplus.Kit();
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

  describe('Kit', function() {
    it('should create an instance of Kit', function() {
      // uncomment below and update the code to test Kit
      //var instane = new infoplus.Kit();
      //expect(instance).to.be.a(infoplus.Kit);
    });

    it('should have the property lobId (base name: "lobId")', function() {
      // uncomment below and update the code to test the property lobId
      //var instane = new infoplus.Kit();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new infoplus.Kit();
      //expect(instance).to.be();
    });

    it('should have the property kitSKU (base name: "kitSKU")', function() {
      // uncomment below and update the code to test the property kitSKU
      //var instane = new infoplus.Kit();
      //expect(instance).to.be();
    });

    it('should have the property packagingType (base name: "packagingType")', function() {
      // uncomment below and update the code to test the property packagingType
      //var instane = new infoplus.Kit();
      //expect(instance).to.be();
    });

    it('should have the property other (base name: "other")', function() {
      // uncomment below and update the code to test the property other
      //var instane = new infoplus.Kit();
      //expect(instance).to.be();
    });

    it('should have the property numberOfComponents (base name: "numberOfComponents")', function() {
      // uncomment below and update the code to test the property numberOfComponents
      //var instane = new infoplus.Kit();
      //expect(instance).to.be();
    });

    it('should have the property createDate (base name: "createDate")', function() {
      // uncomment below and update the code to test the property createDate
      //var instane = new infoplus.Kit();
      //expect(instance).to.be();
    });

    it('should have the property modifyDate (base name: "modifyDate")', function() {
      // uncomment below and update the code to test the property modifyDate
      //var instane = new infoplus.Kit();
      //expect(instance).to.be();
    });

    it('should have the property line1 (base name: "line1")', function() {
      // uncomment below and update the code to test the property line1
      //var instane = new infoplus.Kit();
      //expect(instance).to.be();
    });

    it('should have the property line2 (base name: "line2")', function() {
      // uncomment below and update the code to test the property line2
      //var instane = new infoplus.Kit();
      //expect(instance).to.be();
    });

    it('should have the property line3 (base name: "line3")', function() {
      // uncomment below and update the code to test the property line3
      //var instane = new infoplus.Kit();
      //expect(instance).to.be();
    });

    it('should have the property line4 (base name: "line4")', function() {
      // uncomment below and update the code to test the property line4
      //var instane = new infoplus.Kit();
      //expect(instance).to.be();
    });

    it('should have the property line5 (base name: "line5")', function() {
      // uncomment below and update the code to test the property line5
      //var instane = new infoplus.Kit();
      //expect(instance).to.be();
    });

    it('should have the property line6 (base name: "line6")', function() {
      // uncomment below and update the code to test the property line6
      //var instane = new infoplus.Kit();
      //expect(instance).to.be();
    });

    it('should have the property line7 (base name: "line7")', function() {
      // uncomment below and update the code to test the property line7
      //var instane = new infoplus.Kit();
      //expect(instance).to.be();
    });

    it('should have the property line8 (base name: "line8")', function() {
      // uncomment below and update the code to test the property line8
      //var instane = new infoplus.Kit();
      //expect(instance).to.be();
    });

    it('should have the property touches (base name: "touches")', function() {
      // uncomment below and update the code to test the property touches
      //var instane = new infoplus.Kit();
      //expect(instance).to.be();
    });

    it('should have the property minInvQty (base name: "minInvQty")', function() {
      // uncomment below and update the code to test the property minInvQty
      //var instane = new infoplus.Kit();
      //expect(instance).to.be();
    });

    it('should have the property midInvQty (base name: "midInvQty")', function() {
      // uncomment below and update the code to test the property midInvQty
      //var instane = new infoplus.Kit();
      //expect(instance).to.be();
    });

    it('should have the property maxInvQty (base name: "maxInvQty")', function() {
      // uncomment below and update the code to test the property maxInvQty
      //var instane = new infoplus.Kit();
      //expect(instance).to.be();
    });

    it('should have the property isKOD (base name: "isKOD")', function() {
      // uncomment below and update the code to test the property isKOD
      //var instane = new infoplus.Kit();
      //expect(instance).to.be();
    });

    it('should have the property kodType (base name: "kodType")', function() {
      // uncomment below and update the code to test the property kodType
      //var instane = new infoplus.Kit();
      //expect(instance).to.be();
    });

    it('should have the property kitComponentList (base name: "kitComponentList")', function() {
      // uncomment below and update the code to test the property kitComponentList
      //var instane = new infoplus.Kit();
      //expect(instance).to.be();
    });

    it('should have the property customFields (base name: "customFields")', function() {
      // uncomment below and update the code to test the property customFields
      //var instane = new infoplus.Kit();
      //expect(instance).to.be();
    });

  });

}));
