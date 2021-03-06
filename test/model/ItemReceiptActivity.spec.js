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
    instance = new infoplus.ItemReceiptActivity();
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

  describe('ItemReceiptActivity', function() {
    it('should create an instance of ItemReceiptActivity', function() {
      // uncomment below and update the code to test ItemReceiptActivity
      //var instane = new infoplus.ItemReceiptActivity();
      //expect(instance).to.be.a(infoplus.ItemReceiptActivity);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new infoplus.ItemReceiptActivity();
      //expect(instance).to.be();
    });

    it('should have the property createDate (base name: "createDate")', function() {
      // uncomment below and update the code to test the property createDate
      //var instane = new infoplus.ItemReceiptActivity();
      //expect(instance).to.be();
    });

    it('should have the property modifyDate (base name: "modifyDate")', function() {
      // uncomment below and update the code to test the property modifyDate
      //var instane = new infoplus.ItemReceiptActivity();
      //expect(instance).to.be();
    });

    it('should have the property receiptASNCreateDate (base name: "receiptASNCreateDate")', function() {
      // uncomment below and update the code to test the property receiptASNCreateDate
      //var instane = new infoplus.ItemReceiptActivity();
      //expect(instance).to.be();
    });

    it('should have the property receiptModifyDate (base name: "receiptModifyDate")', function() {
      // uncomment below and update the code to test the property receiptModifyDate
      //var instane = new infoplus.ItemReceiptActivity();
      //expect(instance).to.be();
    });

    it('should have the property itemReceiptId (base name: "itemReceiptId")', function() {
      // uncomment below and update the code to test the property itemReceiptId
      //var instane = new infoplus.ItemReceiptActivity();
      //expect(instance).to.be();
    });

    it('should have the property lobId (base name: "lobId")', function() {
      // uncomment below and update the code to test the property lobId
      //var instane = new infoplus.ItemReceiptActivity();
      //expect(instance).to.be();
    });

    it('should have the property poNo (base name: "poNo")', function() {
      // uncomment below and update the code to test the property poNo
      //var instane = new infoplus.ItemReceiptActivity();
      //expect(instance).to.be();
    });

    it('should have the property receiptDistributionDate (base name: "receiptDistributionDate")', function() {
      // uncomment below and update the code to test the property receiptDistributionDate
      //var instane = new infoplus.ItemReceiptActivity();
      //expect(instance).to.be();
    });

    it('should have the property receiptUnitsPerWrap (base name: "receiptUnitsPerWrap")', function() {
      // uncomment below and update the code to test the property receiptUnitsPerWrap
      //var instane = new infoplus.ItemReceiptActivity();
      //expect(instance).to.be();
    });

    it('should have the property receiptUnitsPerCase (base name: "receiptUnitsPerCase")', function() {
      // uncomment below and update the code to test the property receiptUnitsPerCase
      //var instane = new infoplus.ItemReceiptActivity();
      //expect(instance).to.be();
    });

    it('should have the property receiptRevisionDate (base name: "receiptRevisionDate")', function() {
      // uncomment below and update the code to test the property receiptRevisionDate
      //var instane = new infoplus.ItemReceiptActivity();
      //expect(instance).to.be();
    });

    it('should have the property receiptProductionLot (base name: "receiptProductionLot")', function() {
      // uncomment below and update the code to test the property receiptProductionLot
      //var instane = new infoplus.ItemReceiptActivity();
      //expect(instance).to.be();
    });

    it('should have the property receiptReceiveDate (base name: "receiptReceiveDate")', function() {
      // uncomment below and update the code to test the property receiptReceiveDate
      //var instane = new infoplus.ItemReceiptActivity();
      //expect(instance).to.be();
    });

    it('should have the property receiptReceiveQuantity (base name: "receiptReceiveQuantity")', function() {
      // uncomment below and update the code to test the property receiptReceiveQuantity
      //var instane = new infoplus.ItemReceiptActivity();
      //expect(instance).to.be();
    });

    it('should have the property receiptNumberOfCases (base name: "receiptNumberOfCases")', function() {
      // uncomment below and update the code to test the property receiptNumberOfCases
      //var instane = new infoplus.ItemReceiptActivity();
      //expect(instance).to.be();
    });

    it('should have the property receiptStatus (base name: "receiptStatus")', function() {
      // uncomment below and update the code to test the property receiptStatus
      //var instane = new infoplus.ItemReceiptActivity();
      //expect(instance).to.be();
    });

    it('should have the property receiptStatusName (base name: "receiptStatusName")', function() {
      // uncomment below and update the code to test the property receiptStatusName
      //var instane = new infoplus.ItemReceiptActivity();
      //expect(instance).to.be();
    });

    it('should have the property receiptUnitCode (base name: "receiptUnitCode")', function() {
      // uncomment below and update the code to test the property receiptUnitCode
      //var instane = new infoplus.ItemReceiptActivity();
      //expect(instance).to.be();
    });

    it('should have the property receiptUnitCodeText (base name: "receiptUnitCodeText")', function() {
      // uncomment below and update the code to test the property receiptUnitCodeText
      //var instane = new infoplus.ItemReceiptActivity();
      //expect(instance).to.be();
    });

    it('should have the property receiptWrapCode (base name: "receiptWrapCode")', function() {
      // uncomment below and update the code to test the property receiptWrapCode
      //var instane = new infoplus.ItemReceiptActivity();
      //expect(instance).to.be();
    });

    it('should have the property receiptWrapCodeText (base name: "receiptWrapCodeText")', function() {
      // uncomment below and update the code to test the property receiptWrapCodeText
      //var instane = new infoplus.ItemReceiptActivity();
      //expect(instance).to.be();
    });

    it('should have the property receiptWrapUnitWeight (base name: "receiptWrapUnitWeight")', function() {
      // uncomment below and update the code to test the property receiptWrapUnitWeight
      //var instane = new infoplus.ItemReceiptActivity();
      //expect(instance).to.be();
    });

    it('should have the property receiptCaseWeight (base name: "receiptCaseWeight")', function() {
      // uncomment below and update the code to test the property receiptCaseWeight
      //var instane = new infoplus.ItemReceiptActivity();
      //expect(instance).to.be();
    });

    it('should have the property receiptProductIdTag (base name: "receiptProductIdTag")', function() {
      // uncomment below and update the code to test the property receiptProductIdTag
      //var instane = new infoplus.ItemReceiptActivity();
      //expect(instance).to.be();
    });

    it('should have the property receiptEnteredBy (base name: "receiptEnteredBy")', function() {
      // uncomment below and update the code to test the property receiptEnteredBy
      //var instane = new infoplus.ItemReceiptActivity();
      //expect(instance).to.be();
    });

    it('should have the property receiptReceivedBy (base name: "receiptReceivedBy")', function() {
      // uncomment below and update the code to test the property receiptReceivedBy
      //var instane = new infoplus.ItemReceiptActivity();
      //expect(instance).to.be();
    });

    it('should have the property receiptType (base name: "receiptType")', function() {
      // uncomment below and update the code to test the property receiptType
      //var instane = new infoplus.ItemReceiptActivity();
      //expect(instance).to.be();
    });

    it('should have the property warehouseId (base name: "warehouseId")', function() {
      // uncomment below and update the code to test the property warehouseId
      //var instane = new infoplus.ItemReceiptActivity();
      //expect(instance).to.be();
    });

    it('should have the property warehouseName (base name: "warehouseName")', function() {
      // uncomment below and update the code to test the property warehouseName
      //var instane = new infoplus.ItemReceiptActivity();
      //expect(instance).to.be();
    });

    it('should have the property itemId (base name: "itemId")', function() {
      // uncomment below and update the code to test the property itemId
      //var instane = new infoplus.ItemReceiptActivity();
      //expect(instance).to.be();
    });

    it('should have the property sku (base name: "sku")', function() {
      // uncomment below and update the code to test the property sku
      //var instane = new infoplus.ItemReceiptActivity();
      //expect(instance).to.be();
    });

    it('should have the property itemVendorSku (base name: "itemVendorSku")', function() {
      // uncomment below and update the code to test the property itemVendorSku
      //var instane = new infoplus.ItemReceiptActivity();
      //expect(instance).to.be();
    });

    it('should have the property itemUPC (base name: "itemUPC")', function() {
      // uncomment below and update the code to test the property itemUPC
      //var instane = new infoplus.ItemReceiptActivity();
      //expect(instance).to.be();
    });

    it('should have the property itemMajorGroup (base name: "itemMajorGroup")', function() {
      // uncomment below and update the code to test the property itemMajorGroup
      //var instane = new infoplus.ItemReceiptActivity();
      //expect(instance).to.be();
    });

    it('should have the property itemMajorGroupName (base name: "itemMajorGroupName")', function() {
      // uncomment below and update the code to test the property itemMajorGroupName
      //var instane = new infoplus.ItemReceiptActivity();
      //expect(instance).to.be();
    });

    it('should have the property itemSubGroup (base name: "itemSubGroup")', function() {
      // uncomment below and update the code to test the property itemSubGroup
      //var instane = new infoplus.ItemReceiptActivity();
      //expect(instance).to.be();
    });

    it('should have the property itemSubGroupName (base name: "itemSubGroupName")', function() {
      // uncomment below and update the code to test the property itemSubGroupName
      //var instane = new infoplus.ItemReceiptActivity();
      //expect(instance).to.be();
    });

    it('should have the property itemProductCode (base name: "itemProductCode")', function() {
      // uncomment below and update the code to test the property itemProductCode
      //var instane = new infoplus.ItemReceiptActivity();
      //expect(instance).to.be();
    });

    it('should have the property itemProductCodeName (base name: "itemProductCodeName")', function() {
      // uncomment below and update the code to test the property itemProductCodeName
      //var instane = new infoplus.ItemReceiptActivity();
      //expect(instance).to.be();
    });

    it('should have the property itemAccountCode (base name: "itemAccountCode")', function() {
      // uncomment below and update the code to test the property itemAccountCode
      //var instane = new infoplus.ItemReceiptActivity();
      //expect(instance).to.be();
    });

    it('should have the property itemAccountCodeName (base name: "itemAccountCodeName")', function() {
      // uncomment below and update the code to test the property itemAccountCodeName
      //var instane = new infoplus.ItemReceiptActivity();
      //expect(instance).to.be();
    });

    it('should have the property itemSummaryCode (base name: "itemSummaryCode")', function() {
      // uncomment below and update the code to test the property itemSummaryCode
      //var instane = new infoplus.ItemReceiptActivity();
      //expect(instance).to.be();
    });

    it('should have the property itemSummaryCodeName (base name: "itemSummaryCodeName")', function() {
      // uncomment below and update the code to test the property itemSummaryCodeName
      //var instane = new infoplus.ItemReceiptActivity();
      //expect(instance).to.be();
    });

    it('should have the property itemSector (base name: "itemSector")', function() {
      // uncomment below and update the code to test the property itemSector
      //var instane = new infoplus.ItemReceiptActivity();
      //expect(instance).to.be();
    });

    it('should have the property vendorComplianceSurveyAnswer1 (base name: "vendorComplianceSurveyAnswer1")', function() {
      // uncomment below and update the code to test the property vendorComplianceSurveyAnswer1
      //var instane = new infoplus.ItemReceiptActivity();
      //expect(instance).to.be();
    });

    it('should have the property vendorComplianceSurveyAnswer2 (base name: "vendorComplianceSurveyAnswer2")', function() {
      // uncomment below and update the code to test the property vendorComplianceSurveyAnswer2
      //var instane = new infoplus.ItemReceiptActivity();
      //expect(instance).to.be();
    });

    it('should have the property vendorComplianceSurveyAnswer3 (base name: "vendorComplianceSurveyAnswer3")', function() {
      // uncomment below and update the code to test the property vendorComplianceSurveyAnswer3
      //var instane = new infoplus.ItemReceiptActivity();
      //expect(instance).to.be();
    });

    it('should have the property vendorComplianceSurveyAnswer4 (base name: "vendorComplianceSurveyAnswer4")', function() {
      // uncomment below and update the code to test the property vendorComplianceSurveyAnswer4
      //var instane = new infoplus.ItemReceiptActivity();
      //expect(instance).to.be();
    });

    it('should have the property vendorComplianceSurveyAnswer5 (base name: "vendorComplianceSurveyAnswer5")', function() {
      // uncomment below and update the code to test the property vendorComplianceSurveyAnswer5
      //var instane = new infoplus.ItemReceiptActivity();
      //expect(instance).to.be();
    });

    it('should have the property vendorComplianceSurveyAnswer6 (base name: "vendorComplianceSurveyAnswer6")', function() {
      // uncomment below and update the code to test the property vendorComplianceSurveyAnswer6
      //var instane = new infoplus.ItemReceiptActivity();
      //expect(instance).to.be();
    });

    it('should have the property vendorComplianceSurveyAnswer7 (base name: "vendorComplianceSurveyAnswer7")', function() {
      // uncomment below and update the code to test the property vendorComplianceSurveyAnswer7
      //var instane = new infoplus.ItemReceiptActivity();
      //expect(instance).to.be();
    });

    it('should have the property vendorComplianceSurveyAnswer8 (base name: "vendorComplianceSurveyAnswer8")', function() {
      // uncomment below and update the code to test the property vendorComplianceSurveyAnswer8
      //var instane = new infoplus.ItemReceiptActivity();
      //expect(instance).to.be();
    });

    it('should have the property vendorComplianceSurveyAnswer9 (base name: "vendorComplianceSurveyAnswer9")', function() {
      // uncomment below and update the code to test the property vendorComplianceSurveyAnswer9
      //var instane = new infoplus.ItemReceiptActivity();
      //expect(instance).to.be();
    });

    it('should have the property vendorComplianceSurveyAnswer10 (base name: "vendorComplianceSurveyAnswer10")', function() {
      // uncomment below and update the code to test the property vendorComplianceSurveyAnswer10
      //var instane = new infoplus.ItemReceiptActivity();
      //expect(instance).to.be();
    });

    it('should have the property vendorComplianceSurveyAnswer11 (base name: "vendorComplianceSurveyAnswer11")', function() {
      // uncomment below and update the code to test the property vendorComplianceSurveyAnswer11
      //var instane = new infoplus.ItemReceiptActivity();
      //expect(instance).to.be();
    });

    it('should have the property vendorComplianceSurveyAnswer12 (base name: "vendorComplianceSurveyAnswer12")', function() {
      // uncomment below and update the code to test the property vendorComplianceSurveyAnswer12
      //var instane = new infoplus.ItemReceiptActivity();
      //expect(instance).to.be();
    });

    it('should have the property vendorComplianceSurveyAnswer13 (base name: "vendorComplianceSurveyAnswer13")', function() {
      // uncomment below and update the code to test the property vendorComplianceSurveyAnswer13
      //var instane = new infoplus.ItemReceiptActivity();
      //expect(instance).to.be();
    });

    it('should have the property vendorComplianceSurveyAnswer14 (base name: "vendorComplianceSurveyAnswer14")', function() {
      // uncomment below and update the code to test the property vendorComplianceSurveyAnswer14
      //var instane = new infoplus.ItemReceiptActivity();
      //expect(instance).to.be();
    });

    it('should have the property vendorComplianceSurveyAnswer15 (base name: "vendorComplianceSurveyAnswer15")', function() {
      // uncomment below and update the code to test the property vendorComplianceSurveyAnswer15
      //var instane = new infoplus.ItemReceiptActivity();
      //expect(instance).to.be();
    });

    it('should have the property vendorComplianceSurveyAnswer16 (base name: "vendorComplianceSurveyAnswer16")', function() {
      // uncomment below and update the code to test the property vendorComplianceSurveyAnswer16
      //var instane = new infoplus.ItemReceiptActivity();
      //expect(instance).to.be();
    });

    it('should have the property vendorComplianceSurveyAnswer17 (base name: "vendorComplianceSurveyAnswer17")', function() {
      // uncomment below and update the code to test the property vendorComplianceSurveyAnswer17
      //var instane = new infoplus.ItemReceiptActivity();
      //expect(instance).to.be();
    });

    it('should have the property vendorComplianceSurveyAnswer18 (base name: "vendorComplianceSurveyAnswer18")', function() {
      // uncomment below and update the code to test the property vendorComplianceSurveyAnswer18
      //var instane = new infoplus.ItemReceiptActivity();
      //expect(instance).to.be();
    });

    it('should have the property vendorComplianceSurveyAnswer19 (base name: "vendorComplianceSurveyAnswer19")', function() {
      // uncomment below and update the code to test the property vendorComplianceSurveyAnswer19
      //var instane = new infoplus.ItemReceiptActivity();
      //expect(instance).to.be();
    });

    it('should have the property vendorComplianceSurveyAnswer20 (base name: "vendorComplianceSurveyAnswer20")', function() {
      // uncomment below and update the code to test the property vendorComplianceSurveyAnswer20
      //var instane = new infoplus.ItemReceiptActivity();
      //expect(instance).to.be();
    });

    it('should have the property alcoholTypeId (base name: "alcoholTypeId")', function() {
      // uncomment below and update the code to test the property alcoholTypeId
      //var instane = new infoplus.ItemReceiptActivity();
      //expect(instance).to.be();
    });

    it('should have the property alcoholTypeName (base name: "alcoholTypeName")', function() {
      // uncomment below and update the code to test the property alcoholTypeName
      //var instane = new infoplus.ItemReceiptActivity();
      //expect(instance).to.be();
    });

    it('should have the property alcoholContent (base name: "alcoholContent")', function() {
      // uncomment below and update the code to test the property alcoholContent
      //var instane = new infoplus.ItemReceiptActivity();
      //expect(instance).to.be();
    });

    it('should have the property alcoholContainerId (base name: "alcoholContainerId")', function() {
      // uncomment below and update the code to test the property alcoholContainerId
      //var instane = new infoplus.ItemReceiptActivity();
      //expect(instance).to.be();
    });

    it('should have the property alcoholContainerName (base name: "alcoholContainerName")', function() {
      // uncomment below and update the code to test the property alcoholContainerName
      //var instane = new infoplus.ItemReceiptActivity();
      //expect(instance).to.be();
    });

    it('should have the property alcoholContainerVolume (base name: "alcoholContainerVolume")', function() {
      // uncomment below and update the code to test the property alcoholContainerVolume
      //var instane = new infoplus.ItemReceiptActivity();
      //expect(instance).to.be();
    });

    it('should have the property alcoholVintageYear (base name: "alcoholVintageYear")', function() {
      // uncomment below and update the code to test the property alcoholVintageYear
      //var instane = new infoplus.ItemReceiptActivity();
      //expect(instance).to.be();
    });

    it('should have the property alcoholCountryId (base name: "alcoholCountryId")', function() {
      // uncomment below and update the code to test the property alcoholCountryId
      //var instane = new infoplus.ItemReceiptActivity();
      //expect(instance).to.be();
    });

    it('should have the property alcoholCountryName (base name: "alcoholCountryName")', function() {
      // uncomment below and update the code to test the property alcoholCountryName
      //var instane = new infoplus.ItemReceiptActivity();
      //expect(instance).to.be();
    });

    it('should have the property alcoholState (base name: "alcoholState")', function() {
      // uncomment below and update the code to test the property alcoholState
      //var instane = new infoplus.ItemReceiptActivity();
      //expect(instance).to.be();
    });

    it('should have the property alcoholRegion (base name: "alcoholRegion")', function() {
      // uncomment below and update the code to test the property alcoholRegion
      //var instane = new infoplus.ItemReceiptActivity();
      //expect(instance).to.be();
    });

    it('should have the property alcoholBrand (base name: "alcoholBrand")', function() {
      // uncomment below and update the code to test the property alcoholBrand
      //var instane = new infoplus.ItemReceiptActivity();
      //expect(instance).to.be();
    });

    it('should have the property alcoholUPCCode (base name: "alcoholUPCCode")', function() {
      // uncomment below and update the code to test the property alcoholUPCCode
      //var instane = new infoplus.ItemReceiptActivity();
      //expect(instance).to.be();
    });

    it('should have the property alcoholNABCACode (base name: "alcoholNABCACode")', function() {
      // uncomment below and update the code to test the property alcoholNABCACode
      //var instane = new infoplus.ItemReceiptActivity();
      //expect(instance).to.be();
    });

    it('should have the property alcoholUNIMERCCode (base name: "alcoholUNIMERCCode")', function() {
      // uncomment below and update the code to test the property alcoholUNIMERCCode
      //var instane = new infoplus.ItemReceiptActivity();
      //expect(instance).to.be();
    });

    it('should have the property alcoholSCCCode (base name: "alcoholSCCCode")', function() {
      // uncomment below and update the code to test the property alcoholSCCCode
      //var instane = new infoplus.ItemReceiptActivity();
      //expect(instance).to.be();
    });

    it('should have the property customFields (base name: "customFields")', function() {
      // uncomment below and update the code to test the property customFields
      //var instane = new infoplus.ItemReceiptActivity();
      //expect(instance).to.be();
    });

  });

}));
