(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/PackingSlipTemplateLineItemDescriptionEnum'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PackingSlipTemplateLineItemDescriptionEnum'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.PackingSlipTemplateLineItemDescriptionEnumApi = factory(root.infoplus.ApiClient, root.infoplus.PackingSlipTemplateLineItemDescriptionEnum);
  }
}(this, function(ApiClient, PackingSlipTemplateLineItemDescriptionEnum) {
  'use strict';

  /**
   * PackingSlipTemplateLineItemDescriptionEnum service.
   * @module api/PackingSlipTemplateLineItemDescriptionEnumApi
   * @version beta
   */

  /**
   * Constructs a new PackingSlipTemplateLineItemDescriptionEnumApi. 
   * @alias module:api/PackingSlipTemplateLineItemDescriptionEnumApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getPackingSlipTemplateLineItemDescriptionEnumById operation.
     * @callback module:api/PackingSlipTemplateLineItemDescriptionEnumApi~getPackingSlipTemplateLineItemDescriptionEnumByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PackingSlipTemplateLineItemDescriptionEnum} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a packingSlipTemplateLineItemDescriptionEnum by id
     * Returns the packingSlipTemplateLineItemDescriptionEnum identified by the specified id.
     * @param {String} packingSlipTemplateLineItemDescriptionEnumId Id of packingSlipTemplateLineItemDescriptionEnum to be returned.
     * @param {module:api/PackingSlipTemplateLineItemDescriptionEnumApi~getPackingSlipTemplateLineItemDescriptionEnumByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PackingSlipTemplateLineItemDescriptionEnum}
     */
    this.getPackingSlipTemplateLineItemDescriptionEnumById = function(packingSlipTemplateLineItemDescriptionEnumId, callback) {
      var postBody = null;

      // verify the required parameter 'packingSlipTemplateLineItemDescriptionEnumId' is set
      if (packingSlipTemplateLineItemDescriptionEnumId == undefined || packingSlipTemplateLineItemDescriptionEnumId == null) {
        throw "Missing the required parameter 'packingSlipTemplateLineItemDescriptionEnumId' when calling getPackingSlipTemplateLineItemDescriptionEnumById";
      }


      var pathParams = {
        'packingSlipTemplateLineItemDescriptionEnumId': packingSlipTemplateLineItemDescriptionEnumId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = PackingSlipTemplateLineItemDescriptionEnum;

      return this.apiClient.callApi(
        '/beta/packingSlipTemplateLineItemDescriptionEnum/{packingSlipTemplateLineItemDescriptionEnumId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getPackingSlipTemplateLineItemDescriptionEnumBySearchText operation.
     * @callback module:api/PackingSlipTemplateLineItemDescriptionEnumApi~getPackingSlipTemplateLineItemDescriptionEnumBySearchTextCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/PackingSlipTemplateLineItemDescriptionEnum>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search packingSlipTemplateLineItemDescriptionEnums
     * Returns the list of packingSlipTemplateLineItemDescriptionEnums that match the given searchText.
     * @param {Object} opts Optional parameters
     * @param {String} opts.searchText Search text, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {module:api/PackingSlipTemplateLineItemDescriptionEnumApi~getPackingSlipTemplateLineItemDescriptionEnumBySearchTextCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/PackingSlipTemplateLineItemDescriptionEnum>}
     */
    this.getPackingSlipTemplateLineItemDescriptionEnumBySearchText = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'searchText': opts['searchText'],
        'page': opts['page'],
        'limit': opts['limit']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [PackingSlipTemplateLineItemDescriptionEnum];

      return this.apiClient.callApi(
        '/beta/packingSlipTemplateLineItemDescriptionEnum/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
