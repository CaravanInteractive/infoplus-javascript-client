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
    root.infoplus.ParcelInvoiceLine = factory(root.infoplus.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ParcelInvoiceLine model module.
   * @module model/ParcelInvoiceLine
   * @version beta
   */

  /**
   * Constructs a new <code>ParcelInvoiceLine</code>.
   * @alias module:model/ParcelInvoiceLine
   * @class
   */
  var exports = function() {
































































































































  };

  /**
   * Constructs a <code>ParcelInvoiceLine</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ParcelInvoiceLine} obj Optional instance to populate.
   * @return {module:model/ParcelInvoiceLine} The populated <code>ParcelInvoiceLine</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('invoiceNoId')) {
        obj['invoiceNoId'] = ApiClient.convertToType(data['invoiceNoId'], 'Integer');
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
      if (data.hasOwnProperty('orderId')) {
        obj['orderId'] = ApiClient.convertToType(data['orderId'], 'Number');
      }
      if (data.hasOwnProperty('shipmentId')) {
        obj['shipmentId'] = ApiClient.convertToType(data['shipmentId'], 'Integer');
      }
      if (data.hasOwnProperty('trackingNo')) {
        obj['trackingNo'] = ApiClient.convertToType(data['trackingNo'], 'String');
      }
      if (data.hasOwnProperty('shipDate')) {
        obj['shipDate'] = ApiClient.convertToType(data['shipDate'], 'Date');
      }
      if (data.hasOwnProperty('zone')) {
        obj['zone'] = ApiClient.convertToType(data['zone'], 'String');
      }
      if (data.hasOwnProperty('dim1')) {
        obj['dim1'] = ApiClient.convertToType(data['dim1'], 'Number');
      }
      if (data.hasOwnProperty('dim2')) {
        obj['dim2'] = ApiClient.convertToType(data['dim2'], 'Number');
      }
      if (data.hasOwnProperty('dim3')) {
        obj['dim3'] = ApiClient.convertToType(data['dim3'], 'Number');
      }
      if (data.hasOwnProperty('enteredWeight')) {
        obj['enteredWeight'] = ApiClient.convertToType(data['enteredWeight'], 'Number');
      }
      if (data.hasOwnProperty('actualWeight')) {
        obj['actualWeight'] = ApiClient.convertToType(data['actualWeight'], 'Number');
      }
      if (data.hasOwnProperty('billedWeight')) {
        obj['billedWeight'] = ApiClient.convertToType(data['billedWeight'], 'Number');
      }
      if (data.hasOwnProperty('enteredWeightUnit')) {
        obj['enteredWeightUnit'] = ApiClient.convertToType(data['enteredWeightUnit'], 'String');
      }
      if (data.hasOwnProperty('actualWeightUnit')) {
        obj['actualWeightUnit'] = ApiClient.convertToType(data['actualWeightUnit'], 'String');
      }
      if (data.hasOwnProperty('billedWeightUnit')) {
        obj['billedWeightUnit'] = ApiClient.convertToType(data['billedWeightUnit'], 'String');
      }
      if (data.hasOwnProperty('customerReference')) {
        obj['customerReference'] = ApiClient.convertToType(data['customerReference'], 'String');
      }
      if (data.hasOwnProperty('shipmentReference')) {
        obj['shipmentReference'] = ApiClient.convertToType(data['shipmentReference'], 'String');
      }
      if (data.hasOwnProperty('reference3')) {
        obj['reference3'] = ApiClient.convertToType(data['reference3'], 'String');
      }
      if (data.hasOwnProperty('reference4')) {
        obj['reference4'] = ApiClient.convertToType(data['reference4'], 'String');
      }
      if (data.hasOwnProperty('reference5')) {
        obj['reference5'] = ApiClient.convertToType(data['reference5'], 'String');
      }
      if (data.hasOwnProperty('reference6')) {
        obj['reference6'] = ApiClient.convertToType(data['reference6'], 'String');
      }
      if (data.hasOwnProperty('reference7')) {
        obj['reference7'] = ApiClient.convertToType(data['reference7'], 'String');
      }
      if (data.hasOwnProperty('shipFromName')) {
        obj['shipFromName'] = ApiClient.convertToType(data['shipFromName'], 'String');
      }
      if (data.hasOwnProperty('shipFromCompany')) {
        obj['shipFromCompany'] = ApiClient.convertToType(data['shipFromCompany'], 'String');
      }
      if (data.hasOwnProperty('shipFromStreet1')) {
        obj['shipFromStreet1'] = ApiClient.convertToType(data['shipFromStreet1'], 'String');
      }
      if (data.hasOwnProperty('shipFromStreet2')) {
        obj['shipFromStreet2'] = ApiClient.convertToType(data['shipFromStreet2'], 'String');
      }
      if (data.hasOwnProperty('shipFromCity')) {
        obj['shipFromCity'] = ApiClient.convertToType(data['shipFromCity'], 'String');
      }
      if (data.hasOwnProperty('shipFromState')) {
        obj['shipFromState'] = ApiClient.convertToType(data['shipFromState'], 'String');
      }
      if (data.hasOwnProperty('shipFromZip')) {
        obj['shipFromZip'] = ApiClient.convertToType(data['shipFromZip'], 'String');
      }
      if (data.hasOwnProperty('shipFromCountry')) {
        obj['shipFromCountry'] = ApiClient.convertToType(data['shipFromCountry'], 'String');
      }
      if (data.hasOwnProperty('shipToName')) {
        obj['shipToName'] = ApiClient.convertToType(data['shipToName'], 'String');
      }
      if (data.hasOwnProperty('shipToCompany')) {
        obj['shipToCompany'] = ApiClient.convertToType(data['shipToCompany'], 'String');
      }
      if (data.hasOwnProperty('shipToStreet1')) {
        obj['shipToStreet1'] = ApiClient.convertToType(data['shipToStreet1'], 'String');
      }
      if (data.hasOwnProperty('shipToStreet2')) {
        obj['shipToStreet2'] = ApiClient.convertToType(data['shipToStreet2'], 'String');
      }
      if (data.hasOwnProperty('shipToCity')) {
        obj['shipToCity'] = ApiClient.convertToType(data['shipToCity'], 'String');
      }
      if (data.hasOwnProperty('shipToState')) {
        obj['shipToState'] = ApiClient.convertToType(data['shipToState'], 'String');
      }
      if (data.hasOwnProperty('shipToZip')) {
        obj['shipToZip'] = ApiClient.convertToType(data['shipToZip'], 'String');
      }
      if (data.hasOwnProperty('shipToCountry')) {
        obj['shipToCountry'] = ApiClient.convertToType(data['shipToCountry'], 'String');
      }
      if (data.hasOwnProperty('originalShipToName')) {
        obj['originalShipToName'] = ApiClient.convertToType(data['originalShipToName'], 'String');
      }
      if (data.hasOwnProperty('originalShipToCompany')) {
        obj['originalShipToCompany'] = ApiClient.convertToType(data['originalShipToCompany'], 'String');
      }
      if (data.hasOwnProperty('originalShipToStreet1')) {
        obj['originalShipToStreet1'] = ApiClient.convertToType(data['originalShipToStreet1'], 'String');
      }
      if (data.hasOwnProperty('originalShipToStreet2')) {
        obj['originalShipToStreet2'] = ApiClient.convertToType(data['originalShipToStreet2'], 'String');
      }
      if (data.hasOwnProperty('originalShipToCity')) {
        obj['originalShipToCity'] = ApiClient.convertToType(data['originalShipToCity'], 'String');
      }
      if (data.hasOwnProperty('originalShipToState')) {
        obj['originalShipToState'] = ApiClient.convertToType(data['originalShipToState'], 'String');
      }
      if (data.hasOwnProperty('originalShipToZip')) {
        obj['originalShipToZip'] = ApiClient.convertToType(data['originalShipToZip'], 'String');
      }
      if (data.hasOwnProperty('originalShipToCountry')) {
        obj['originalShipToCountry'] = ApiClient.convertToType(data['originalShipToCountry'], 'String');
      }
      if (data.hasOwnProperty('thirdPartyName')) {
        obj['thirdPartyName'] = ApiClient.convertToType(data['thirdPartyName'], 'String');
      }
      if (data.hasOwnProperty('thirdPartyCompany')) {
        obj['thirdPartyCompany'] = ApiClient.convertToType(data['thirdPartyCompany'], 'String');
      }
      if (data.hasOwnProperty('thirdPartyStreet1')) {
        obj['thirdPartyStreet1'] = ApiClient.convertToType(data['thirdPartyStreet1'], 'String');
      }
      if (data.hasOwnProperty('thirdPartyStreet2')) {
        obj['thirdPartyStreet2'] = ApiClient.convertToType(data['thirdPartyStreet2'], 'String');
      }
      if (data.hasOwnProperty('thirdPartyCity')) {
        obj['thirdPartyCity'] = ApiClient.convertToType(data['thirdPartyCity'], 'String');
      }
      if (data.hasOwnProperty('thirdPartyState')) {
        obj['thirdPartyState'] = ApiClient.convertToType(data['thirdPartyState'], 'String');
      }
      if (data.hasOwnProperty('thirdPartyZip')) {
        obj['thirdPartyZip'] = ApiClient.convertToType(data['thirdPartyZip'], 'String');
      }
      if (data.hasOwnProperty('thirdPartyCountry')) {
        obj['thirdPartyCountry'] = ApiClient.convertToType(data['thirdPartyCountry'], 'String');
      }
      if (data.hasOwnProperty('soldToName')) {
        obj['soldToName'] = ApiClient.convertToType(data['soldToName'], 'String');
      }
      if (data.hasOwnProperty('soldToCompany')) {
        obj['soldToCompany'] = ApiClient.convertToType(data['soldToCompany'], 'String');
      }
      if (data.hasOwnProperty('soldToStreet1')) {
        obj['soldToStreet1'] = ApiClient.convertToType(data['soldToStreet1'], 'String');
      }
      if (data.hasOwnProperty('soldToStreet2')) {
        obj['soldToStreet2'] = ApiClient.convertToType(data['soldToStreet2'], 'String');
      }
      if (data.hasOwnProperty('soldToCity')) {
        obj['soldToCity'] = ApiClient.convertToType(data['soldToCity'], 'String');
      }
      if (data.hasOwnProperty('soldToState')) {
        obj['soldToState'] = ApiClient.convertToType(data['soldToState'], 'String');
      }
      if (data.hasOwnProperty('soldToZip')) {
        obj['soldToZip'] = ApiClient.convertToType(data['soldToZip'], 'String');
      }
      if (data.hasOwnProperty('soldToCountry')) {
        obj['soldToCountry'] = ApiClient.convertToType(data['soldToCountry'], 'String');
      }
      if (data.hasOwnProperty('freightServiceType')) {
        obj['freightServiceType'] = ApiClient.convertToType(data['freightServiceType'], 'String');
      }
      if (data.hasOwnProperty('netCharges')) {
        obj['netCharges'] = ApiClient.convertToType(data['netCharges'], 'Number');
      }
      if (data.hasOwnProperty('baseFreight')) {
        obj['baseFreight'] = ApiClient.convertToType(data['baseFreight'], 'Number');
      }
      if (data.hasOwnProperty('grossCharges')) {
        obj['grossCharges'] = ApiClient.convertToType(data['grossCharges'], 'Number');
      }
      if (data.hasOwnProperty('fuelCharge')) {
        obj['fuelCharge'] = ApiClient.convertToType(data['fuelCharge'], 'Number');
      }
      if (data.hasOwnProperty('residentialCharge')) {
        obj['residentialCharge'] = ApiClient.convertToType(data['residentialCharge'], 'Number');
      }
      if (data.hasOwnProperty('adultSignatureCharge')) {
        obj['adultSignatureCharge'] = ApiClient.convertToType(data['adultSignatureCharge'], 'Number');
      }
      if (data.hasOwnProperty('deliveryAreaCharge')) {
        obj['deliveryAreaCharge'] = ApiClient.convertToType(data['deliveryAreaCharge'], 'Number');
      }
      if (data.hasOwnProperty('deliveryAreaChargeExtended')) {
        obj['deliveryAreaChargeExtended'] = ApiClient.convertToType(data['deliveryAreaChargeExtended'], 'Number');
      }
      if (data.hasOwnProperty('addressCorrectionCharge')) {
        obj['addressCorrectionCharge'] = ApiClient.convertToType(data['addressCorrectionCharge'], 'Number');
      }
      if (data.hasOwnProperty('extraCharge1Name')) {
        obj['extraCharge1Name'] = ApiClient.convertToType(data['extraCharge1Name'], 'String');
      }
      if (data.hasOwnProperty('extraCharge1Amount')) {
        obj['extraCharge1Amount'] = ApiClient.convertToType(data['extraCharge1Amount'], 'Number');
      }
      if (data.hasOwnProperty('extraCharge2Name')) {
        obj['extraCharge2Name'] = ApiClient.convertToType(data['extraCharge2Name'], 'String');
      }
      if (data.hasOwnProperty('extraCharge2Amount')) {
        obj['extraCharge2Amount'] = ApiClient.convertToType(data['extraCharge2Amount'], 'Number');
      }
      if (data.hasOwnProperty('extraCharge3Name')) {
        obj['extraCharge3Name'] = ApiClient.convertToType(data['extraCharge3Name'], 'String');
      }
      if (data.hasOwnProperty('extraCharge3Amount')) {
        obj['extraCharge3Amount'] = ApiClient.convertToType(data['extraCharge3Amount'], 'Number');
      }
      if (data.hasOwnProperty('extraCharge4Name')) {
        obj['extraCharge4Name'] = ApiClient.convertToType(data['extraCharge4Name'], 'String');
      }
      if (data.hasOwnProperty('extraCharge4Amount')) {
        obj['extraCharge4Amount'] = ApiClient.convertToType(data['extraCharge4Amount'], 'Number');
      }
      if (data.hasOwnProperty('extraCharge5Name')) {
        obj['extraCharge5Name'] = ApiClient.convertToType(data['extraCharge5Name'], 'String');
      }
      if (data.hasOwnProperty('extraCharge5Amount')) {
        obj['extraCharge5Amount'] = ApiClient.convertToType(data['extraCharge5Amount'], 'Number');
      }
      if (data.hasOwnProperty('extraCharge6Name')) {
        obj['extraCharge6Name'] = ApiClient.convertToType(data['extraCharge6Name'], 'String');
      }
      if (data.hasOwnProperty('extraCharge6Amount')) {
        obj['extraCharge6Amount'] = ApiClient.convertToType(data['extraCharge6Amount'], 'Number');
      }
      if (data.hasOwnProperty('extraCharge7Name')) {
        obj['extraCharge7Name'] = ApiClient.convertToType(data['extraCharge7Name'], 'String');
      }
      if (data.hasOwnProperty('extraCharge7Amount')) {
        obj['extraCharge7Amount'] = ApiClient.convertToType(data['extraCharge7Amount'], 'Number');
      }
      if (data.hasOwnProperty('extraCharge8Name')) {
        obj['extraCharge8Name'] = ApiClient.convertToType(data['extraCharge8Name'], 'String');
      }
      if (data.hasOwnProperty('extraCharge8Amount')) {
        obj['extraCharge8Amount'] = ApiClient.convertToType(data['extraCharge8Amount'], 'Number');
      }
      if (data.hasOwnProperty('extraCharge9Name')) {
        obj['extraCharge9Name'] = ApiClient.convertToType(data['extraCharge9Name'], 'String');
      }
      if (data.hasOwnProperty('extraCharge9Amount')) {
        obj['extraCharge9Amount'] = ApiClient.convertToType(data['extraCharge9Amount'], 'Number');
      }
      if (data.hasOwnProperty('extraCharge10Name')) {
        obj['extraCharge10Name'] = ApiClient.convertToType(data['extraCharge10Name'], 'String');
      }
      if (data.hasOwnProperty('extraCharge10Amount')) {
        obj['extraCharge10Amount'] = ApiClient.convertToType(data['extraCharge10Amount'], 'Number');
      }
      if (data.hasOwnProperty('extraCharge11Name')) {
        obj['extraCharge11Name'] = ApiClient.convertToType(data['extraCharge11Name'], 'String');
      }
      if (data.hasOwnProperty('extraCharge11Amount')) {
        obj['extraCharge11Amount'] = ApiClient.convertToType(data['extraCharge11Amount'], 'Number');
      }
      if (data.hasOwnProperty('extraCharge12Name')) {
        obj['extraCharge12Name'] = ApiClient.convertToType(data['extraCharge12Name'], 'String');
      }
      if (data.hasOwnProperty('extraCharge12Amount')) {
        obj['extraCharge12Amount'] = ApiClient.convertToType(data['extraCharge12Amount'], 'Number');
      }
      if (data.hasOwnProperty('extraCharge13Name')) {
        obj['extraCharge13Name'] = ApiClient.convertToType(data['extraCharge13Name'], 'String');
      }
      if (data.hasOwnProperty('extraCharge13Amount')) {
        obj['extraCharge13Amount'] = ApiClient.convertToType(data['extraCharge13Amount'], 'Number');
      }
      if (data.hasOwnProperty('extraCharge14Name')) {
        obj['extraCharge14Name'] = ApiClient.convertToType(data['extraCharge14Name'], 'String');
      }
      if (data.hasOwnProperty('extraCharge14Amount')) {
        obj['extraCharge14Amount'] = ApiClient.convertToType(data['extraCharge14Amount'], 'Number');
      }
      if (data.hasOwnProperty('extraCharge15Name')) {
        obj['extraCharge15Name'] = ApiClient.convertToType(data['extraCharge15Name'], 'String');
      }
      if (data.hasOwnProperty('extraCharge15Amount')) {
        obj['extraCharge15Amount'] = ApiClient.convertToType(data['extraCharge15Amount'], 'Number');
      }
      if (data.hasOwnProperty('extraCharge16Name')) {
        obj['extraCharge16Name'] = ApiClient.convertToType(data['extraCharge16Name'], 'String');
      }
      if (data.hasOwnProperty('extraCharge16Amount')) {
        obj['extraCharge16Amount'] = ApiClient.convertToType(data['extraCharge16Amount'], 'Number');
      }
      if (data.hasOwnProperty('extraCharge17Name')) {
        obj['extraCharge17Name'] = ApiClient.convertToType(data['extraCharge17Name'], 'String');
      }
      if (data.hasOwnProperty('extraCharge17Amount')) {
        obj['extraCharge17Amount'] = ApiClient.convertToType(data['extraCharge17Amount'], 'Number');
      }
      if (data.hasOwnProperty('extraCharge18Name')) {
        obj['extraCharge18Name'] = ApiClient.convertToType(data['extraCharge18Name'], 'String');
      }
      if (data.hasOwnProperty('extraCharge18Amount')) {
        obj['extraCharge18Amount'] = ApiClient.convertToType(data['extraCharge18Amount'], 'Number');
      }
      if (data.hasOwnProperty('extraCharge19Name')) {
        obj['extraCharge19Name'] = ApiClient.convertToType(data['extraCharge19Name'], 'String');
      }
      if (data.hasOwnProperty('extraCharge19Amount')) {
        obj['extraCharge19Amount'] = ApiClient.convertToType(data['extraCharge19Amount'], 'Number');
      }
      if (data.hasOwnProperty('extraCharge20Name')) {
        obj['extraCharge20Name'] = ApiClient.convertToType(data['extraCharge20Name'], 'String');
      }
      if (data.hasOwnProperty('extraCharge20Amount')) {
        obj['extraCharge20Amount'] = ApiClient.convertToType(data['extraCharge20Amount'], 'Number');
      }
      if (data.hasOwnProperty('extraCharge21Name')) {
        obj['extraCharge21Name'] = ApiClient.convertToType(data['extraCharge21Name'], 'String');
      }
      if (data.hasOwnProperty('extraCharge21Amount')) {
        obj['extraCharge21Amount'] = ApiClient.convertToType(data['extraCharge21Amount'], 'Number');
      }
      if (data.hasOwnProperty('extraCharge22Name')) {
        obj['extraCharge22Name'] = ApiClient.convertToType(data['extraCharge22Name'], 'String');
      }
      if (data.hasOwnProperty('extraCharge22Amount')) {
        obj['extraCharge22Amount'] = ApiClient.convertToType(data['extraCharge22Amount'], 'Number');
      }
      if (data.hasOwnProperty('extraCharge23Name')) {
        obj['extraCharge23Name'] = ApiClient.convertToType(data['extraCharge23Name'], 'String');
      }
      if (data.hasOwnProperty('extraCharge23Amount')) {
        obj['extraCharge23Amount'] = ApiClient.convertToType(data['extraCharge23Amount'], 'Number');
      }
      if (data.hasOwnProperty('extraCharge24Name')) {
        obj['extraCharge24Name'] = ApiClient.convertToType(data['extraCharge24Name'], 'String');
      }
      if (data.hasOwnProperty('extraCharge24Amount')) {
        obj['extraCharge24Amount'] = ApiClient.convertToType(data['extraCharge24Amount'], 'Number');
      }
      if (data.hasOwnProperty('extraCharge25Name')) {
        obj['extraCharge25Name'] = ApiClient.convertToType(data['extraCharge25Name'], 'String');
      }
      if (data.hasOwnProperty('extraCharge25Amount')) {
        obj['extraCharge25Amount'] = ApiClient.convertToType(data['extraCharge25Amount'], 'Number');
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
   * @member {Integer} invoiceNoId
   */
  exports.prototype['invoiceNoId'] = undefined;

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
   * @member {Number} orderId
   */
  exports.prototype['orderId'] = undefined;

  /**
   * @member {Integer} shipmentId
   */
  exports.prototype['shipmentId'] = undefined;

  /**
   * @member {String} trackingNo
   */
  exports.prototype['trackingNo'] = undefined;

  /**
   * @member {Date} shipDate
   */
  exports.prototype['shipDate'] = undefined;

  /**
   * @member {String} zone
   */
  exports.prototype['zone'] = undefined;

  /**
   * @member {Number} dim1
   */
  exports.prototype['dim1'] = undefined;

  /**
   * @member {Number} dim2
   */
  exports.prototype['dim2'] = undefined;

  /**
   * @member {Number} dim3
   */
  exports.prototype['dim3'] = undefined;

  /**
   * @member {Number} enteredWeight
   */
  exports.prototype['enteredWeight'] = undefined;

  /**
   * @member {Number} actualWeight
   */
  exports.prototype['actualWeight'] = undefined;

  /**
   * @member {Number} billedWeight
   */
  exports.prototype['billedWeight'] = undefined;

  /**
   * @member {String} enteredWeightUnit
   */
  exports.prototype['enteredWeightUnit'] = undefined;

  /**
   * @member {String} actualWeightUnit
   */
  exports.prototype['actualWeightUnit'] = undefined;

  /**
   * @member {String} billedWeightUnit
   */
  exports.prototype['billedWeightUnit'] = undefined;

  /**
   * @member {String} customerReference
   */
  exports.prototype['customerReference'] = undefined;

  /**
   * @member {String} shipmentReference
   */
  exports.prototype['shipmentReference'] = undefined;

  /**
   * @member {String} reference3
   */
  exports.prototype['reference3'] = undefined;

  /**
   * @member {String} reference4
   */
  exports.prototype['reference4'] = undefined;

  /**
   * @member {String} reference5
   */
  exports.prototype['reference5'] = undefined;

  /**
   * @member {String} reference6
   */
  exports.prototype['reference6'] = undefined;

  /**
   * @member {String} reference7
   */
  exports.prototype['reference7'] = undefined;

  /**
   * @member {String} shipFromName
   */
  exports.prototype['shipFromName'] = undefined;

  /**
   * @member {String} shipFromCompany
   */
  exports.prototype['shipFromCompany'] = undefined;

  /**
   * @member {String} shipFromStreet1
   */
  exports.prototype['shipFromStreet1'] = undefined;

  /**
   * @member {String} shipFromStreet2
   */
  exports.prototype['shipFromStreet2'] = undefined;

  /**
   * @member {String} shipFromCity
   */
  exports.prototype['shipFromCity'] = undefined;

  /**
   * @member {String} shipFromState
   */
  exports.prototype['shipFromState'] = undefined;

  /**
   * @member {String} shipFromZip
   */
  exports.prototype['shipFromZip'] = undefined;

  /**
   * @member {String} shipFromCountry
   */
  exports.prototype['shipFromCountry'] = undefined;

  /**
   * @member {String} shipToName
   */
  exports.prototype['shipToName'] = undefined;

  /**
   * @member {String} shipToCompany
   */
  exports.prototype['shipToCompany'] = undefined;

  /**
   * @member {String} shipToStreet1
   */
  exports.prototype['shipToStreet1'] = undefined;

  /**
   * @member {String} shipToStreet2
   */
  exports.prototype['shipToStreet2'] = undefined;

  /**
   * @member {String} shipToCity
   */
  exports.prototype['shipToCity'] = undefined;

  /**
   * @member {String} shipToState
   */
  exports.prototype['shipToState'] = undefined;

  /**
   * @member {String} shipToZip
   */
  exports.prototype['shipToZip'] = undefined;

  /**
   * @member {String} shipToCountry
   */
  exports.prototype['shipToCountry'] = undefined;

  /**
   * @member {String} originalShipToName
   */
  exports.prototype['originalShipToName'] = undefined;

  /**
   * @member {String} originalShipToCompany
   */
  exports.prototype['originalShipToCompany'] = undefined;

  /**
   * @member {String} originalShipToStreet1
   */
  exports.prototype['originalShipToStreet1'] = undefined;

  /**
   * @member {String} originalShipToStreet2
   */
  exports.prototype['originalShipToStreet2'] = undefined;

  /**
   * @member {String} originalShipToCity
   */
  exports.prototype['originalShipToCity'] = undefined;

  /**
   * @member {String} originalShipToState
   */
  exports.prototype['originalShipToState'] = undefined;

  /**
   * @member {String} originalShipToZip
   */
  exports.prototype['originalShipToZip'] = undefined;

  /**
   * @member {String} originalShipToCountry
   */
  exports.prototype['originalShipToCountry'] = undefined;

  /**
   * @member {String} thirdPartyName
   */
  exports.prototype['thirdPartyName'] = undefined;

  /**
   * @member {String} thirdPartyCompany
   */
  exports.prototype['thirdPartyCompany'] = undefined;

  /**
   * @member {String} thirdPartyStreet1
   */
  exports.prototype['thirdPartyStreet1'] = undefined;

  /**
   * @member {String} thirdPartyStreet2
   */
  exports.prototype['thirdPartyStreet2'] = undefined;

  /**
   * @member {String} thirdPartyCity
   */
  exports.prototype['thirdPartyCity'] = undefined;

  /**
   * @member {String} thirdPartyState
   */
  exports.prototype['thirdPartyState'] = undefined;

  /**
   * @member {String} thirdPartyZip
   */
  exports.prototype['thirdPartyZip'] = undefined;

  /**
   * @member {String} thirdPartyCountry
   */
  exports.prototype['thirdPartyCountry'] = undefined;

  /**
   * @member {String} soldToName
   */
  exports.prototype['soldToName'] = undefined;

  /**
   * @member {String} soldToCompany
   */
  exports.prototype['soldToCompany'] = undefined;

  /**
   * @member {String} soldToStreet1
   */
  exports.prototype['soldToStreet1'] = undefined;

  /**
   * @member {String} soldToStreet2
   */
  exports.prototype['soldToStreet2'] = undefined;

  /**
   * @member {String} soldToCity
   */
  exports.prototype['soldToCity'] = undefined;

  /**
   * @member {String} soldToState
   */
  exports.prototype['soldToState'] = undefined;

  /**
   * @member {String} soldToZip
   */
  exports.prototype['soldToZip'] = undefined;

  /**
   * @member {String} soldToCountry
   */
  exports.prototype['soldToCountry'] = undefined;

  /**
   * @member {String} freightServiceType
   */
  exports.prototype['freightServiceType'] = undefined;

  /**
   * @member {Number} netCharges
   */
  exports.prototype['netCharges'] = undefined;

  /**
   * @member {Number} baseFreight
   */
  exports.prototype['baseFreight'] = undefined;

  /**
   * @member {Number} grossCharges
   */
  exports.prototype['grossCharges'] = undefined;

  /**
   * @member {Number} fuelCharge
   */
  exports.prototype['fuelCharge'] = undefined;

  /**
   * @member {Number} residentialCharge
   */
  exports.prototype['residentialCharge'] = undefined;

  /**
   * @member {Number} adultSignatureCharge
   */
  exports.prototype['adultSignatureCharge'] = undefined;

  /**
   * @member {Number} deliveryAreaCharge
   */
  exports.prototype['deliveryAreaCharge'] = undefined;

  /**
   * @member {Number} deliveryAreaChargeExtended
   */
  exports.prototype['deliveryAreaChargeExtended'] = undefined;

  /**
   * @member {Number} addressCorrectionCharge
   */
  exports.prototype['addressCorrectionCharge'] = undefined;

  /**
   * @member {String} extraCharge1Name
   */
  exports.prototype['extraCharge1Name'] = undefined;

  /**
   * @member {Number} extraCharge1Amount
   */
  exports.prototype['extraCharge1Amount'] = undefined;

  /**
   * @member {String} extraCharge2Name
   */
  exports.prototype['extraCharge2Name'] = undefined;

  /**
   * @member {Number} extraCharge2Amount
   */
  exports.prototype['extraCharge2Amount'] = undefined;

  /**
   * @member {String} extraCharge3Name
   */
  exports.prototype['extraCharge3Name'] = undefined;

  /**
   * @member {Number} extraCharge3Amount
   */
  exports.prototype['extraCharge3Amount'] = undefined;

  /**
   * @member {String} extraCharge4Name
   */
  exports.prototype['extraCharge4Name'] = undefined;

  /**
   * @member {Number} extraCharge4Amount
   */
  exports.prototype['extraCharge4Amount'] = undefined;

  /**
   * @member {String} extraCharge5Name
   */
  exports.prototype['extraCharge5Name'] = undefined;

  /**
   * @member {Number} extraCharge5Amount
   */
  exports.prototype['extraCharge5Amount'] = undefined;

  /**
   * @member {String} extraCharge6Name
   */
  exports.prototype['extraCharge6Name'] = undefined;

  /**
   * @member {Number} extraCharge6Amount
   */
  exports.prototype['extraCharge6Amount'] = undefined;

  /**
   * @member {String} extraCharge7Name
   */
  exports.prototype['extraCharge7Name'] = undefined;

  /**
   * @member {Number} extraCharge7Amount
   */
  exports.prototype['extraCharge7Amount'] = undefined;

  /**
   * @member {String} extraCharge8Name
   */
  exports.prototype['extraCharge8Name'] = undefined;

  /**
   * @member {Number} extraCharge8Amount
   */
  exports.prototype['extraCharge8Amount'] = undefined;

  /**
   * @member {String} extraCharge9Name
   */
  exports.prototype['extraCharge9Name'] = undefined;

  /**
   * @member {Number} extraCharge9Amount
   */
  exports.prototype['extraCharge9Amount'] = undefined;

  /**
   * @member {String} extraCharge10Name
   */
  exports.prototype['extraCharge10Name'] = undefined;

  /**
   * @member {Number} extraCharge10Amount
   */
  exports.prototype['extraCharge10Amount'] = undefined;

  /**
   * @member {String} extraCharge11Name
   */
  exports.prototype['extraCharge11Name'] = undefined;

  /**
   * @member {Number} extraCharge11Amount
   */
  exports.prototype['extraCharge11Amount'] = undefined;

  /**
   * @member {String} extraCharge12Name
   */
  exports.prototype['extraCharge12Name'] = undefined;

  /**
   * @member {Number} extraCharge12Amount
   */
  exports.prototype['extraCharge12Amount'] = undefined;

  /**
   * @member {String} extraCharge13Name
   */
  exports.prototype['extraCharge13Name'] = undefined;

  /**
   * @member {Number} extraCharge13Amount
   */
  exports.prototype['extraCharge13Amount'] = undefined;

  /**
   * @member {String} extraCharge14Name
   */
  exports.prototype['extraCharge14Name'] = undefined;

  /**
   * @member {Number} extraCharge14Amount
   */
  exports.prototype['extraCharge14Amount'] = undefined;

  /**
   * @member {String} extraCharge15Name
   */
  exports.prototype['extraCharge15Name'] = undefined;

  /**
   * @member {Number} extraCharge15Amount
   */
  exports.prototype['extraCharge15Amount'] = undefined;

  /**
   * @member {String} extraCharge16Name
   */
  exports.prototype['extraCharge16Name'] = undefined;

  /**
   * @member {Number} extraCharge16Amount
   */
  exports.prototype['extraCharge16Amount'] = undefined;

  /**
   * @member {String} extraCharge17Name
   */
  exports.prototype['extraCharge17Name'] = undefined;

  /**
   * @member {Number} extraCharge17Amount
   */
  exports.prototype['extraCharge17Amount'] = undefined;

  /**
   * @member {String} extraCharge18Name
   */
  exports.prototype['extraCharge18Name'] = undefined;

  /**
   * @member {Number} extraCharge18Amount
   */
  exports.prototype['extraCharge18Amount'] = undefined;

  /**
   * @member {String} extraCharge19Name
   */
  exports.prototype['extraCharge19Name'] = undefined;

  /**
   * @member {Number} extraCharge19Amount
   */
  exports.prototype['extraCharge19Amount'] = undefined;

  /**
   * @member {String} extraCharge20Name
   */
  exports.prototype['extraCharge20Name'] = undefined;

  /**
   * @member {Number} extraCharge20Amount
   */
  exports.prototype['extraCharge20Amount'] = undefined;

  /**
   * @member {String} extraCharge21Name
   */
  exports.prototype['extraCharge21Name'] = undefined;

  /**
   * @member {Number} extraCharge21Amount
   */
  exports.prototype['extraCharge21Amount'] = undefined;

  /**
   * @member {String} extraCharge22Name
   */
  exports.prototype['extraCharge22Name'] = undefined;

  /**
   * @member {Number} extraCharge22Amount
   */
  exports.prototype['extraCharge22Amount'] = undefined;

  /**
   * @member {String} extraCharge23Name
   */
  exports.prototype['extraCharge23Name'] = undefined;

  /**
   * @member {Number} extraCharge23Amount
   */
  exports.prototype['extraCharge23Amount'] = undefined;

  /**
   * @member {String} extraCharge24Name
   */
  exports.prototype['extraCharge24Name'] = undefined;

  /**
   * @member {Number} extraCharge24Amount
   */
  exports.prototype['extraCharge24Amount'] = undefined;

  /**
   * @member {String} extraCharge25Name
   */
  exports.prototype['extraCharge25Name'] = undefined;

  /**
   * @member {Number} extraCharge25Amount
   */
  exports.prototype['extraCharge25Amount'] = undefined;

  /**
   * @member {Object.<String, Object>} customFields
   */
  exports.prototype['customFields'] = undefined;




  return exports;
}));
