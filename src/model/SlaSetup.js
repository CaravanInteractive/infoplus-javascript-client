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
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.SlaSetup = factory(root.infoplus.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SlaSetup model module.
   * @module model/SlaSetup
   * @version beta
   */

  /**
   * Constructs a new <code>SlaSetup</code>.
   * @alias module:model/SlaSetup
   * @class
   * @param lobId {Number} 
   * @param warehouseId {Number} 
   * @param effectiveDate {Date} 
   * @param standardServiceDays {Number} 
   * @param standardServiceCutoffHour {Number} 
   * @param massDistributionServiceDays {Number} 
   * @param massDistributionServiceCutoffHour {Number} 
   * @param backorderServiceDays {Number} 
   * @param backorderServiceCutoffHour {Number} 
   * @param rushServiceCutoffHour {Number} 
   */
  var exports = function(lobId, warehouseId, effectiveDate, standardServiceDays, standardServiceCutoffHour, massDistributionServiceDays, massDistributionServiceCutoffHour, backorderServiceDays, backorderServiceCutoffHour, rushServiceCutoffHour) {
    var _this = this;


    _this['lobId'] = lobId;
    _this['warehouseId'] = warehouseId;
    _this['effectiveDate'] = effectiveDate;
    _this['standardServiceDays'] = standardServiceDays;
    _this['standardServiceCutoffHour'] = standardServiceCutoffHour;
    _this['massDistributionServiceDays'] = massDistributionServiceDays;
    _this['massDistributionServiceCutoffHour'] = massDistributionServiceCutoffHour;
    _this['backorderServiceDays'] = backorderServiceDays;
    _this['backorderServiceCutoffHour'] = backorderServiceCutoffHour;
    _this['rushServiceCutoffHour'] = rushServiceCutoffHour;

  };

  /**
   * Constructs a <code>SlaSetup</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SlaSetup} obj Optional instance to populate.
   * @return {module:model/SlaSetup} The populated <code>SlaSetup</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('lobId')) {
        obj['lobId'] = ApiClient.convertToType(data['lobId'], 'Number');
      }
      if (data.hasOwnProperty('warehouseId')) {
        obj['warehouseId'] = ApiClient.convertToType(data['warehouseId'], 'Number');
      }
      if (data.hasOwnProperty('effectiveDate')) {
        obj['effectiveDate'] = ApiClient.convertToType(data['effectiveDate'], 'Date');
      }
      if (data.hasOwnProperty('standardServiceDays')) {
        obj['standardServiceDays'] = ApiClient.convertToType(data['standardServiceDays'], 'Number');
      }
      if (data.hasOwnProperty('standardServiceCutoffHour')) {
        obj['standardServiceCutoffHour'] = ApiClient.convertToType(data['standardServiceCutoffHour'], 'Number');
      }
      if (data.hasOwnProperty('massDistributionServiceDays')) {
        obj['massDistributionServiceDays'] = ApiClient.convertToType(data['massDistributionServiceDays'], 'Number');
      }
      if (data.hasOwnProperty('massDistributionServiceCutoffHour')) {
        obj['massDistributionServiceCutoffHour'] = ApiClient.convertToType(data['massDistributionServiceCutoffHour'], 'Number');
      }
      if (data.hasOwnProperty('backorderServiceDays')) {
        obj['backorderServiceDays'] = ApiClient.convertToType(data['backorderServiceDays'], 'Number');
      }
      if (data.hasOwnProperty('backorderServiceCutoffHour')) {
        obj['backorderServiceCutoffHour'] = ApiClient.convertToType(data['backorderServiceCutoffHour'], 'Number');
      }
      if (data.hasOwnProperty('rushServiceCutoffHour')) {
        obj['rushServiceCutoffHour'] = ApiClient.convertToType(data['rushServiceCutoffHour'], 'Number');
      }
      if (data.hasOwnProperty('customFields')) {
        obj['customFields'] = ApiClient.convertToType(data['customFields'], {'String': Object});
      }
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Number} lobId
   */
  exports.prototype['lobId'] = undefined;
  /**
   * @member {Number} warehouseId
   */
  exports.prototype['warehouseId'] = undefined;
  /**
   * @member {Date} effectiveDate
   */
  exports.prototype['effectiveDate'] = undefined;
  /**
   * @member {Number} standardServiceDays
   */
  exports.prototype['standardServiceDays'] = undefined;
  /**
   * @member {Number} standardServiceCutoffHour
   */
  exports.prototype['standardServiceCutoffHour'] = undefined;
  /**
   * @member {Number} massDistributionServiceDays
   */
  exports.prototype['massDistributionServiceDays'] = undefined;
  /**
   * @member {Number} massDistributionServiceCutoffHour
   */
  exports.prototype['massDistributionServiceCutoffHour'] = undefined;
  /**
   * @member {Number} backorderServiceDays
   */
  exports.prototype['backorderServiceDays'] = undefined;
  /**
   * @member {Number} backorderServiceCutoffHour
   */
  exports.prototype['backorderServiceCutoffHour'] = undefined;
  /**
   * @member {Number} rushServiceCutoffHour
   */
  exports.prototype['rushServiceCutoffHour'] = undefined;
  /**
   * @member {Object.<String, Object>} customFields
   */
  exports.prototype['customFields'] = undefined;



  return exports;
}));

