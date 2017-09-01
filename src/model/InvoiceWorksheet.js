(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './InvoiceWorksheetLine'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InvoiceWorksheetLine'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.InvoiceWorksheet = factory(root.infoplus.ApiClient, root.infoplus.InvoiceWorksheetLine);
  }
}(this, function(ApiClient, InvoiceWorksheetLine) {
  'use strict';

  /**
   * The InvoiceWorksheet model module.
   * @module model/InvoiceWorksheet
   * @version beta
   */

  /**
   * Constructs a new <code>InvoiceWorksheet</code>.
   * @alias module:model/InvoiceWorksheet
   * @class
   * @param name
   * @param lobId
   */
  var exports = function(name, lobId) {




    this['name'] = name;








    this['lobId'] = lobId;





























  };

  /**
   * Constructs a <code>InvoiceWorksheet</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InvoiceWorksheet} obj Optional instance to populate.
   * @return {module:model/InvoiceWorksheet} The populated <code>InvoiceWorksheet</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('createDate')) {
        obj['createDate'] = ApiClient.convertToType(data['createDate'], 'Date');
      }
      if (data.hasOwnProperty('modifyDate')) {
        obj['modifyDate'] = ApiClient.convertToType(data['modifyDate'], 'Date');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('invoiceNo')) {
        obj['invoiceNo'] = ApiClient.convertToType(data['invoiceNo'], 'String');
      }
      if (data.hasOwnProperty('poNo')) {
        obj['poNo'] = ApiClient.convertToType(data['poNo'], 'String');
      }
      if (data.hasOwnProperty('costCenter')) {
        obj['costCenter'] = ApiClient.convertToType(data['costCenter'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('notes')) {
        obj['notes'] = ApiClient.convertToType(data['notes'], 'String');
      }
      if (data.hasOwnProperty('terms')) {
        obj['terms'] = ApiClient.convertToType(data['terms'], 'String');
      }
      if (data.hasOwnProperty('specialInstructions')) {
        obj['specialInstructions'] = ApiClient.convertToType(data['specialInstructions'], 'String');
      }
      if (data.hasOwnProperty('total')) {
        obj['total'] = ApiClient.convertToType(data['total'], 'Number');
      }
      if (data.hasOwnProperty('lobId')) {
        obj['lobId'] = ApiClient.convertToType(data['lobId'], 'Integer');
      }
      if (data.hasOwnProperty('customerInvoiceTemplateId')) {
        obj['customerInvoiceTemplateId'] = ApiClient.convertToType(data['customerInvoiceTemplateId'], 'Integer');
      }
      if (data.hasOwnProperty('startDate')) {
        obj['startDate'] = ApiClient.convertToType(data['startDate'], 'Date');
      }
      if (data.hasOwnProperty('endDate')) {
        obj['endDate'] = ApiClient.convertToType(data['endDate'], 'Date');
      }
      if (data.hasOwnProperty('issueDate')) {
        obj['issueDate'] = ApiClient.convertToType(data['issueDate'], 'Date');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('remitToAttention')) {
        obj['remitToAttention'] = ApiClient.convertToType(data['remitToAttention'], 'String');
      }
      if (data.hasOwnProperty('remitToCompany')) {
        obj['remitToCompany'] = ApiClient.convertToType(data['remitToCompany'], 'String');
      }
      if (data.hasOwnProperty('remitToStreet')) {
        obj['remitToStreet'] = ApiClient.convertToType(data['remitToStreet'], 'String');
      }
      if (data.hasOwnProperty('remitToStreet2')) {
        obj['remitToStreet2'] = ApiClient.convertToType(data['remitToStreet2'], 'String');
      }
      if (data.hasOwnProperty('remitToStreet3')) {
        obj['remitToStreet3'] = ApiClient.convertToType(data['remitToStreet3'], 'String');
      }
      if (data.hasOwnProperty('remitToCity')) {
        obj['remitToCity'] = ApiClient.convertToType(data['remitToCity'], 'String');
      }
      if (data.hasOwnProperty('remitToState')) {
        obj['remitToState'] = ApiClient.convertToType(data['remitToState'], 'String');
      }
      if (data.hasOwnProperty('remitToZip')) {
        obj['remitToZip'] = ApiClient.convertToType(data['remitToZip'], 'String');
      }
      if (data.hasOwnProperty('remitToCountry')) {
        obj['remitToCountry'] = ApiClient.convertToType(data['remitToCountry'], 'String');
      }
      if (data.hasOwnProperty('remitToPhone')) {
        obj['remitToPhone'] = ApiClient.convertToType(data['remitToPhone'], 'String');
      }
      if (data.hasOwnProperty('remitToEmail')) {
        obj['remitToEmail'] = ApiClient.convertToType(data['remitToEmail'], 'String');
      }
      if (data.hasOwnProperty('billToAttention')) {
        obj['billToAttention'] = ApiClient.convertToType(data['billToAttention'], 'String');
      }
      if (data.hasOwnProperty('billToCompany')) {
        obj['billToCompany'] = ApiClient.convertToType(data['billToCompany'], 'String');
      }
      if (data.hasOwnProperty('billToStreet')) {
        obj['billToStreet'] = ApiClient.convertToType(data['billToStreet'], 'String');
      }
      if (data.hasOwnProperty('billToStreet2')) {
        obj['billToStreet2'] = ApiClient.convertToType(data['billToStreet2'], 'String');
      }
      if (data.hasOwnProperty('billToStreet3')) {
        obj['billToStreet3'] = ApiClient.convertToType(data['billToStreet3'], 'String');
      }
      if (data.hasOwnProperty('billToCity')) {
        obj['billToCity'] = ApiClient.convertToType(data['billToCity'], 'String');
      }
      if (data.hasOwnProperty('billToState')) {
        obj['billToState'] = ApiClient.convertToType(data['billToState'], 'String');
      }
      if (data.hasOwnProperty('billToZip')) {
        obj['billToZip'] = ApiClient.convertToType(data['billToZip'], 'String');
      }
      if (data.hasOwnProperty('billToCountry')) {
        obj['billToCountry'] = ApiClient.convertToType(data['billToCountry'], 'String');
      }
      if (data.hasOwnProperty('billToPhone')) {
        obj['billToPhone'] = ApiClient.convertToType(data['billToPhone'], 'String');
      }
      if (data.hasOwnProperty('billToEmail')) {
        obj['billToEmail'] = ApiClient.convertToType(data['billToEmail'], 'String');
      }
      if (data.hasOwnProperty('invoiceWorksheetLineItemList')) {
        obj['invoiceWorksheetLineItemList'] = ApiClient.convertToType(data['invoiceWorksheetLineItemList'], [InvoiceWorksheetLine]);
      }
      if (data.hasOwnProperty('customFields')) {
        obj['customFields'] = ApiClient.convertToType(data['customFields'], {'String': Object});
      }
    }
    return obj;
  }


  /**
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * @member {Date} createDate
   */
  exports.prototype['createDate'] = undefined;

  /**
   * @member {Date} modifyDate
   */
  exports.prototype['modifyDate'] = undefined;

  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;

  /**
   * @member {String} invoiceNo
   */
  exports.prototype['invoiceNo'] = undefined;

  /**
   * @member {String} poNo
   */
  exports.prototype['poNo'] = undefined;

  /**
   * @member {String} costCenter
   */
  exports.prototype['costCenter'] = undefined;

  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;

  /**
   * @member {String} notes
   */
  exports.prototype['notes'] = undefined;

  /**
   * @member {String} terms
   */
  exports.prototype['terms'] = undefined;

  /**
   * @member {String} specialInstructions
   */
  exports.prototype['specialInstructions'] = undefined;

  /**
   * @member {Number} total
   */
  exports.prototype['total'] = undefined;

  /**
   * @member {Integer} lobId
   */
  exports.prototype['lobId'] = undefined;

  /**
   * @member {Integer} customerInvoiceTemplateId
   */
  exports.prototype['customerInvoiceTemplateId'] = undefined;

  /**
   * @member {Date} startDate
   */
  exports.prototype['startDate'] = undefined;

  /**
   * @member {Date} endDate
   */
  exports.prototype['endDate'] = undefined;

  /**
   * @member {Date} issueDate
   */
  exports.prototype['issueDate'] = undefined;

  /**
   * @member {String} status
   */
  exports.prototype['status'] = undefined;

  /**
   * @member {String} remitToAttention
   */
  exports.prototype['remitToAttention'] = undefined;

  /**
   * @member {String} remitToCompany
   */
  exports.prototype['remitToCompany'] = undefined;

  /**
   * @member {String} remitToStreet
   */
  exports.prototype['remitToStreet'] = undefined;

  /**
   * @member {String} remitToStreet2
   */
  exports.prototype['remitToStreet2'] = undefined;

  /**
   * @member {String} remitToStreet3
   */
  exports.prototype['remitToStreet3'] = undefined;

  /**
   * @member {String} remitToCity
   */
  exports.prototype['remitToCity'] = undefined;

  /**
   * @member {String} remitToState
   */
  exports.prototype['remitToState'] = undefined;

  /**
   * @member {String} remitToZip
   */
  exports.prototype['remitToZip'] = undefined;

  /**
   * @member {String} remitToCountry
   */
  exports.prototype['remitToCountry'] = undefined;

  /**
   * @member {String} remitToPhone
   */
  exports.prototype['remitToPhone'] = undefined;

  /**
   * @member {String} remitToEmail
   */
  exports.prototype['remitToEmail'] = undefined;

  /**
   * @member {String} billToAttention
   */
  exports.prototype['billToAttention'] = undefined;

  /**
   * @member {String} billToCompany
   */
  exports.prototype['billToCompany'] = undefined;

  /**
   * @member {String} billToStreet
   */
  exports.prototype['billToStreet'] = undefined;

  /**
   * @member {String} billToStreet2
   */
  exports.prototype['billToStreet2'] = undefined;

  /**
   * @member {String} billToStreet3
   */
  exports.prototype['billToStreet3'] = undefined;

  /**
   * @member {String} billToCity
   */
  exports.prototype['billToCity'] = undefined;

  /**
   * @member {String} billToState
   */
  exports.prototype['billToState'] = undefined;

  /**
   * @member {String} billToZip
   */
  exports.prototype['billToZip'] = undefined;

  /**
   * @member {String} billToCountry
   */
  exports.prototype['billToCountry'] = undefined;

  /**
   * @member {String} billToPhone
   */
  exports.prototype['billToPhone'] = undefined;

  /**
   * @member {String} billToEmail
   */
  exports.prototype['billToEmail'] = undefined;

  /**
   * @member {Array.<module:model/InvoiceWorksheetLine>} invoiceWorksheetLineItemList
   */
  exports.prototype['invoiceWorksheetLineItemList'] = undefined;

  /**
   * @member {Object.<String, Object>} customFields
   */
  exports.prototype['customFields'] = undefined;




  return exports;
}));