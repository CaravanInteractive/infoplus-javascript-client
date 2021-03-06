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
    root.infoplus.Supplement = factory(root.infoplus.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Supplement model module.
   * @module model/Supplement
   * @version beta
   */

  /**
   * Constructs a new <code>Supplement</code>.
   * @alias module:model/Supplement
   * @class
   * @param lobId {Number} 
   * @param originalSKUId {Number} 
   * @param supplementSKUId {Number} 
   * @param type {String} 
   * @param supplementQuantity {Number} 
   */
  var exports = function(lobId, originalSKUId, supplementSKUId, type, supplementQuantity) {
    var _this = this;

    _this['lobId'] = lobId;



    _this['originalSKUId'] = originalSKUId;
    _this['supplementSKUId'] = supplementSKUId;
    _this['type'] = type;
    _this['supplementQuantity'] = supplementQuantity;

  };

  /**
   * Constructs a <code>Supplement</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Supplement} obj Optional instance to populate.
   * @return {module:model/Supplement} The populated <code>Supplement</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('lobId')) {
        obj['lobId'] = ApiClient.convertToType(data['lobId'], 'Number');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('createDate')) {
        obj['createDate'] = ApiClient.convertToType(data['createDate'], 'Date');
      }
      if (data.hasOwnProperty('modifyDate')) {
        obj['modifyDate'] = ApiClient.convertToType(data['modifyDate'], 'Date');
      }
      if (data.hasOwnProperty('originalSKUId')) {
        obj['originalSKUId'] = ApiClient.convertToType(data['originalSKUId'], 'Number');
      }
      if (data.hasOwnProperty('supplementSKUId')) {
        obj['supplementSKUId'] = ApiClient.convertToType(data['supplementSKUId'], 'Number');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('supplementQuantity')) {
        obj['supplementQuantity'] = ApiClient.convertToType(data['supplementQuantity'], 'Number');
      }
      if (data.hasOwnProperty('customFields')) {
        obj['customFields'] = ApiClient.convertToType(data['customFields'], {'String': Object});
      }
    }
    return obj;
  }

  /**
   * @member {Number} lobId
   */
  exports.prototype['lobId'] = undefined;
  /**
   * @member {Number} id
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
   * @member {Number} originalSKUId
   */
  exports.prototype['originalSKUId'] = undefined;
  /**
   * @member {Number} supplementSKUId
   */
  exports.prototype['supplementSKUId'] = undefined;
  /**
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {Number} supplementQuantity
   */
  exports.prototype['supplementQuantity'] = undefined;
  /**
   * @member {Object.<String, Object>} customFields
   */
  exports.prototype['customFields'] = undefined;



  return exports;
}));


