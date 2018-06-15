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
    instance = new infoplus.Vendor();
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

  describe('Vendor', function() {
    it('should create an instance of Vendor', function() {
      // uncomment below and update the code to test Vendor
      //var instane = new infoplus.Vendor();
      //expect(instance).to.be.a(infoplus.Vendor);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new infoplus.Vendor();
      //expect(instance).to.be();
    });

    it('should have the property vendorNo (base name: "vendorNo")', function() {
      // uncomment below and update the code to test the property vendorNo
      //var instane = new infoplus.Vendor();
      //expect(instance).to.be();
    });

    it('should have the property lobId (base name: "lobId")', function() {
      // uncomment below and update the code to test the property lobId
      //var instane = new infoplus.Vendor();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new infoplus.Vendor();
      //expect(instance).to.be();
    });

    it('should have the property street (base name: "street")', function() {
      // uncomment below and update the code to test the property street
      //var instane = new infoplus.Vendor();
      //expect(instance).to.be();
    });

    it('should have the property street2 (base name: "street2")', function() {
      // uncomment below and update the code to test the property street2
      //var instane = new infoplus.Vendor();
      //expect(instance).to.be();
    });

    it('should have the property city (base name: "city")', function() {
      // uncomment below and update the code to test the property city
      //var instane = new infoplus.Vendor();
      //expect(instance).to.be();
    });

    it('should have the property state (base name: "state")', function() {
      // uncomment below and update the code to test the property state
      //var instane = new infoplus.Vendor();
      //expect(instance).to.be();
    });

    it('should have the property country (base name: "country")', function() {
      // uncomment below and update the code to test the property country
      //var instane = new infoplus.Vendor();
      //expect(instance).to.be();
    });

    it('should have the property zipCode (base name: "zipCode")', function() {
      // uncomment below and update the code to test the property zipCode
      //var instane = new infoplus.Vendor();
      //expect(instance).to.be();
    });

    it('should have the property contact (base name: "contact")', function() {
      // uncomment below and update the code to test the property contact
      //var instane = new infoplus.Vendor();
      //expect(instance).to.be();
    });

    it('should have the property phone (base name: "phone")', function() {
      // uncomment below and update the code to test the property phone
      //var instane = new infoplus.Vendor();
      //expect(instance).to.be();
    });

    it('should have the property fax (base name: "fax")', function() {
      // uncomment below and update the code to test the property fax
      //var instane = new infoplus.Vendor();
      //expect(instance).to.be();
    });

    it('should have the property externalId (base name: "externalId")', function() {
      // uncomment below and update the code to test the property externalId
      //var instane = new infoplus.Vendor();
      //expect(instance).to.be();
    });

    it('should have the property terms (base name: "terms")', function() {
      // uncomment below and update the code to test the property terms
      //var instane = new infoplus.Vendor();
      //expect(instance).to.be();
    });

    it('should have the property fob (base name: "fob")', function() {
      // uncomment below and update the code to test the property fob
      //var instane = new infoplus.Vendor();
      //expect(instance).to.be();
    });

    it('should have the property shipVia (base name: "shipVia")', function() {
      // uncomment below and update the code to test the property shipVia
      //var instane = new infoplus.Vendor();
      //expect(instance).to.be();
    });

    it('should have the property requestDays (base name: "requestDays")', function() {
      // uncomment below and update the code to test the property requestDays
      //var instane = new infoplus.Vendor();
      //expect(instance).to.be();
    });

    it('should have the property actualDays (base name: "actualDays")', function() {
      // uncomment below and update the code to test the property actualDays
      //var instane = new infoplus.Vendor();
      //expect(instance).to.be();
    });

    it('should have the property salesTaxCode (base name: "salesTaxCode")', function() {
      // uncomment below and update the code to test the property salesTaxCode
      //var instane = new infoplus.Vendor();
      //expect(instance).to.be();
    });

    it('should have the property product1 (base name: "product1")', function() {
      // uncomment below and update the code to test the property product1
      //var instane = new infoplus.Vendor();
      //expect(instance).to.be();
    });

    it('should have the property product2 (base name: "product2")', function() {
      // uncomment below and update the code to test the property product2
      //var instane = new infoplus.Vendor();
      //expect(instance).to.be();
    });

    it('should have the property product3 (base name: "product3")', function() {
      // uncomment below and update the code to test the property product3
      //var instane = new infoplus.Vendor();
      //expect(instance).to.be();
    });

    it('should have the property product4 (base name: "product4")', function() {
      // uncomment below and update the code to test the property product4
      //var instane = new infoplus.Vendor();
      //expect(instance).to.be();
    });

    it('should have the property product5 (base name: "product5")', function() {
      // uncomment below and update the code to test the property product5
      //var instane = new infoplus.Vendor();
      //expect(instance).to.be();
    });

    it('should have the property product6 (base name: "product6")', function() {
      // uncomment below and update the code to test the property product6
      //var instane = new infoplus.Vendor();
      //expect(instance).to.be();
    });

    it('should have the property product7 (base name: "product7")', function() {
      // uncomment below and update the code to test the property product7
      //var instane = new infoplus.Vendor();
      //expect(instance).to.be();
    });

    it('should have the property product8 (base name: "product8")', function() {
      // uncomment below and update the code to test the property product8
      //var instane = new infoplus.Vendor();
      //expect(instance).to.be();
    });

    it('should have the property product9 (base name: "product9")', function() {
      // uncomment below and update the code to test the property product9
      //var instane = new infoplus.Vendor();
      //expect(instance).to.be();
    });

    it('should have the property podDays (base name: "podDays")', function() {
      // uncomment below and update the code to test the property podDays
      //var instane = new infoplus.Vendor();
      //expect(instance).to.be();
    });

    it('should have the property chargeOut (base name: "chargeOut")', function() {
      // uncomment below and update the code to test the property chargeOut
      //var instane = new infoplus.Vendor();
      //expect(instance).to.be();
    });

    it('should have the property arEmail (base name: "arEmail")', function() {
      // uncomment below and update the code to test the property arEmail
      //var instane = new infoplus.Vendor();
      //expect(instance).to.be();
    });

    it('should have the property orderEmail (base name: "orderEmail")', function() {
      // uncomment below and update the code to test the property orderEmail
      //var instane = new infoplus.Vendor();
      //expect(instance).to.be();
    });

    it('should have the property orderAttach (base name: "orderAttach")', function() {
      // uncomment below and update the code to test the property orderAttach
      //var instane = new infoplus.Vendor();
      //expect(instance).to.be();
    });

    it('should have the property sendQuantityType (base name: "sendQuantityType")', function() {
      // uncomment below and update the code to test the property sendQuantityType
      //var instane = new infoplus.Vendor();
      //expect(instance).to.be();
    });

    it('should have the property minority (base name: "minority")', function() {
      // uncomment below and update the code to test the property minority
      //var instane = new infoplus.Vendor();
      //expect(instance).to.be();
    });

    it('should have the property sendOutside (base name: "sendOutside")', function() {
      // uncomment below and update the code to test the property sendOutside
      //var instane = new infoplus.Vendor();
      //expect(instance).to.be();
    });

    it('should have the property podOrderSuffix (base name: "podOrderSuffix")', function() {
      // uncomment below and update the code to test the property podOrderSuffix
      //var instane = new infoplus.Vendor();
      //expect(instance).to.be();
    });

    it('should have the property podEmail (base name: "podEmail")', function() {
      // uncomment below and update the code to test the property podEmail
      //var instane = new infoplus.Vendor();
      //expect(instance).to.be();
    });

    it('should have the property createDate (base name: "createDate")', function() {
      // uncomment below and update the code to test the property createDate
      //var instane = new infoplus.Vendor();
      //expect(instance).to.be();
    });

    it('should have the property modifyDate (base name: "modifyDate")', function() {
      // uncomment below and update the code to test the property modifyDate
      //var instane = new infoplus.Vendor();
      //expect(instance).to.be();
    });

    it('should have the property inactive (base name: "inactive")', function() {
      // uncomment below and update the code to test the property inactive
      //var instane = new infoplus.Vendor();
      //expect(instance).to.be();
    });

    it('should have the property customFields (base name: "customFields")', function() {
      // uncomment below and update the code to test the property customFields
      //var instane = new infoplus.Vendor();
      //expect(instance).to.be();
    });

  });

}));