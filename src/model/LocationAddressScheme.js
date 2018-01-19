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
    root.infoplus.LocationAddressScheme = factory(root.infoplus.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The LocationAddressScheme model module.
   * @module model/LocationAddressScheme
   * @version beta
   */

  /**
   * Constructs a new <code>LocationAddressScheme</code>.
   * @alias module:model/LocationAddressScheme
   * @class
   * @param clientId {Number} 
   * @param name {String} 
   * @param formatString {String} 
   * @param locationNamingScheme {String} 
   * @param locationNumberZeroPadded {Boolean} 
   * @param levelNamingScheme {String} 
   * @param levelNumberZeroPadded {Boolean} 
   * @param aisleNamingScheme {String} 
   * @param aisleNumberZeroPadded {Boolean} 
   */
  var exports = function(clientId, name, formatString, locationNamingScheme, locationNumberZeroPadded, levelNamingScheme, levelNumberZeroPadded, aisleNamingScheme, aisleNumberZeroPadded) {
    var _this = this;


    _this['clientId'] = clientId;
    _this['name'] = name;
    _this['formatString'] = formatString;
    _this['locationNamingScheme'] = locationNamingScheme;
    _this['locationNumberZeroPadded'] = locationNumberZeroPadded;

    _this['levelNamingScheme'] = levelNamingScheme;
    _this['levelNumberZeroPadded'] = levelNumberZeroPadded;

    _this['aisleNamingScheme'] = aisleNamingScheme;
    _this['aisleNumberZeroPadded'] = aisleNumberZeroPadded;







  };

  /**
   * Constructs a <code>LocationAddressScheme</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LocationAddressScheme} obj Optional instance to populate.
   * @return {module:model/LocationAddressScheme} The populated <code>LocationAddressScheme</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('clientId')) {
        obj['clientId'] = ApiClient.convertToType(data['clientId'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('formatString')) {
        obj['formatString'] = ApiClient.convertToType(data['formatString'], 'String');
      }
      if (data.hasOwnProperty('locationNamingScheme')) {
        obj['locationNamingScheme'] = ApiClient.convertToType(data['locationNamingScheme'], 'String');
      }
      if (data.hasOwnProperty('locationNumberZeroPadded')) {
        obj['locationNumberZeroPadded'] = ApiClient.convertToType(data['locationNumberZeroPadded'], 'Boolean');
      }
      if (data.hasOwnProperty('locationNumberMinimumNumberOfDigits')) {
        obj['locationNumberMinimumNumberOfDigits'] = ApiClient.convertToType(data['locationNumberMinimumNumberOfDigits'], 'Number');
      }
      if (data.hasOwnProperty('levelNamingScheme')) {
        obj['levelNamingScheme'] = ApiClient.convertToType(data['levelNamingScheme'], 'String');
      }
      if (data.hasOwnProperty('levelNumberZeroPadded')) {
        obj['levelNumberZeroPadded'] = ApiClient.convertToType(data['levelNumberZeroPadded'], 'Boolean');
      }
      if (data.hasOwnProperty('levelNumberMinimumNumberOfDigits')) {
        obj['levelNumberMinimumNumberOfDigits'] = ApiClient.convertToType(data['levelNumberMinimumNumberOfDigits'], 'Number');
      }
      if (data.hasOwnProperty('aisleNamingScheme')) {
        obj['aisleNamingScheme'] = ApiClient.convertToType(data['aisleNamingScheme'], 'String');
      }
      if (data.hasOwnProperty('aisleNumberZeroPadded')) {
        obj['aisleNumberZeroPadded'] = ApiClient.convertToType(data['aisleNumberZeroPadded'], 'Boolean');
      }
      if (data.hasOwnProperty('aisleNumberMinimumNumberOfDigits')) {
        obj['aisleNumberMinimumNumberOfDigits'] = ApiClient.convertToType(data['aisleNumberMinimumNumberOfDigits'], 'Number');
      }
      if (data.hasOwnProperty('bayNamingScheme')) {
        obj['bayNamingScheme'] = ApiClient.convertToType(data['bayNamingScheme'], 'String');
      }
      if (data.hasOwnProperty('bayNumberZeroPadded')) {
        obj['bayNumberZeroPadded'] = ApiClient.convertToType(data['bayNumberZeroPadded'], 'Boolean');
      }
      if (data.hasOwnProperty('bayNumberMinimumNumberOfDigits')) {
        obj['bayNumberMinimumNumberOfDigits'] = ApiClient.convertToType(data['bayNumberMinimumNumberOfDigits'], 'Number');
      }
      if (data.hasOwnProperty('createDate')) {
        obj['createDate'] = ApiClient.convertToType(data['createDate'], 'Date');
      }
      if (data.hasOwnProperty('modifyDate')) {
        obj['modifyDate'] = ApiClient.convertToType(data['modifyDate'], 'Date');
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
   * @member {Number} clientId
   */
  exports.prototype['clientId'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} formatString
   */
  exports.prototype['formatString'] = undefined;
  /**
   * @member {String} locationNamingScheme
   */
  exports.prototype['locationNamingScheme'] = undefined;
  /**
   * @member {Boolean} locationNumberZeroPadded
   * @default false
   */
  exports.prototype['locationNumberZeroPadded'] = false;
  /**
   * @member {Number} locationNumberMinimumNumberOfDigits
   */
  exports.prototype['locationNumberMinimumNumberOfDigits'] = undefined;
  /**
   * @member {String} levelNamingScheme
   */
  exports.prototype['levelNamingScheme'] = undefined;
  /**
   * @member {Boolean} levelNumberZeroPadded
   * @default false
   */
  exports.prototype['levelNumberZeroPadded'] = false;
  /**
   * @member {Number} levelNumberMinimumNumberOfDigits
   */
  exports.prototype['levelNumberMinimumNumberOfDigits'] = undefined;
  /**
   * @member {String} aisleNamingScheme
   */
  exports.prototype['aisleNamingScheme'] = undefined;
  /**
   * @member {Boolean} aisleNumberZeroPadded
   * @default false
   */
  exports.prototype['aisleNumberZeroPadded'] = false;
  /**
   * @member {Number} aisleNumberMinimumNumberOfDigits
   */
  exports.prototype['aisleNumberMinimumNumberOfDigits'] = undefined;
  /**
   * @member {String} bayNamingScheme
   */
  exports.prototype['bayNamingScheme'] = undefined;
  /**
   * @member {Boolean} bayNumberZeroPadded
   * @default false
   */
  exports.prototype['bayNumberZeroPadded'] = false;
  /**
   * @member {Number} bayNumberMinimumNumberOfDigits
   */
  exports.prototype['bayNumberMinimumNumberOfDigits'] = undefined;
  /**
   * @member {Date} createDate
   */
  exports.prototype['createDate'] = undefined;
  /**
   * @member {Date} modifyDate
   */
  exports.prototype['modifyDate'] = undefined;
  /**
   * @member {Object.<String, Object>} customFields
   */
  exports.prototype['customFields'] = undefined;



  return exports;
}));


