(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.InvoiceWorksheetLine = factory(root.infoplus.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The InvoiceWorksheetLine model module.
   * @module model/InvoiceWorksheetLine
   * @version beta
   */

  /**
   * Constructs a new <code>InvoiceWorksheetLine</code>.
   * @alias module:model/InvoiceWorksheetLine
   * @class
   * @param lobId
   */
  var exports = function(lobId) {




    this['lobId'] = lobId;













  };

  /**
   * Constructs a <code>InvoiceWorksheetLine</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InvoiceWorksheetLine} obj Optional instance to populate.
   * @return {module:model/InvoiceWorksheetLine} The populated <code>InvoiceWorksheetLine</code> instance.
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
      if (data.hasOwnProperty('lobId')) {
        obj['lobId'] = ApiClient.convertToType(data['lobId'], 'Integer');
      }
      if (data.hasOwnProperty('seqNo')) {
        obj['seqNo'] = ApiClient.convertToType(data['seqNo'], 'Integer');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('accountCode')) {
        obj['accountCode'] = ApiClient.convertToType(data['accountCode'], 'String');
      }
      if (data.hasOwnProperty('department')) {
        obj['department'] = ApiClient.convertToType(data['department'], 'String');
      }
      if (data.hasOwnProperty('itemCode')) {
        obj['itemCode'] = ApiClient.convertToType(data['itemCode'], 'String');
      }
      if (data.hasOwnProperty('quantity')) {
        obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
      }
      if (data.hasOwnProperty('chargeRate')) {
        obj['chargeRate'] = ApiClient.convertToType(data['chargeRate'], 'Number');
      }
      if (data.hasOwnProperty('extendedCharge')) {
        obj['extendedCharge'] = ApiClient.convertToType(data['extendedCharge'], 'Number');
      }
      if (data.hasOwnProperty('backupFile')) {
        obj['backupFile'] = ApiClient.convertToType(data['backupFile'], 'Integer');
      }
      if (data.hasOwnProperty('backupFileUrl')) {
        obj['backupFileUrl'] = ApiClient.convertToType(data['backupFileUrl'], 'String');
      }
      if (data.hasOwnProperty('invoiceWorksheetId')) {
        obj['invoiceWorksheetId'] = ApiClient.convertToType(data['invoiceWorksheetId'], 'Integer');
      }
      if (data.hasOwnProperty('invoiceTemplateLineId')) {
        obj['invoiceTemplateLineId'] = ApiClient.convertToType(data['invoiceTemplateLineId'], 'Integer');
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
   * @member {Integer} lobId
   */
  exports.prototype['lobId'] = undefined;

  /**
   * @member {Integer} seqNo
   */
  exports.prototype['seqNo'] = undefined;

  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;

  /**
   * @member {String} accountCode
   */
  exports.prototype['accountCode'] = undefined;

  /**
   * @member {String} department
   */
  exports.prototype['department'] = undefined;

  /**
   * @member {String} itemCode
   */
  exports.prototype['itemCode'] = undefined;

  /**
   * @member {Number} quantity
   */
  exports.prototype['quantity'] = undefined;

  /**
   * @member {Number} chargeRate
   */
  exports.prototype['chargeRate'] = undefined;

  /**
   * @member {Number} extendedCharge
   */
  exports.prototype['extendedCharge'] = undefined;

  /**
   * @member {Integer} backupFile
   */
  exports.prototype['backupFile'] = undefined;

  /**
   * @member {String} backupFileUrl
   */
  exports.prototype['backupFileUrl'] = undefined;

  /**
   * @member {Integer} invoiceWorksheetId
   */
  exports.prototype['invoiceWorksheetId'] = undefined;

  /**
   * @member {Integer} invoiceTemplateLineId
   */
  exports.prototype['invoiceTemplateLineId'] = undefined;

  /**
   * @member {Object.<String, Object>} customFields
   */
  exports.prototype['customFields'] = undefined;




  return exports;
}));
