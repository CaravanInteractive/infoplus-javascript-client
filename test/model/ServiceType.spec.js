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
    instance = new infoplus.ServiceType();
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

  describe('ServiceType', function() {
    it('should create an instance of ServiceType', function() {
      // uncomment below and update the code to test ServiceType
      //var instane = new infoplus.ServiceType();
      //expect(instance).to.be.a(infoplus.ServiceType);
    });

    it('should have the property serviceType (base name: "serviceType")', function() {
      // uncomment below and update the code to test the property serviceType
      //var instane = new infoplus.ServiceType();
      //expect(instance).to.be();
    });

    it('should have the property label (base name: "label")', function() {
      // uncomment below and update the code to test the property label
      //var instane = new infoplus.ServiceType();
      //expect(instance).to.be();
    });

    it('should have the property fullEntityClassName (base name: "fullEntityClassName")', function() {
      // uncomment below and update the code to test the property fullEntityClassName
      //var instane = new infoplus.ServiceType();
      //expect(instance).to.be();
    });

  });

}));
