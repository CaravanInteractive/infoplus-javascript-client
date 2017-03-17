(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/ItemActivityType'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ItemActivityType'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.ItemActivityTypeApi = factory(root.infoplus.ApiClient, root.infoplus.ItemActivityType);
  }
}(this, function(ApiClient, ItemActivityType) {
  'use strict';

  /**
   * ItemActivityType service.
   * @module api/ItemActivityTypeApi
   * @version beta
   */

  /**
   * Constructs a new ItemActivityTypeApi. 
   * @alias module:api/ItemActivityTypeApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getItemActivityTypeById operation.
     * @callback module:api/ItemActivityTypeApi~getItemActivityTypeByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ItemActivityType} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an itemActivityType by id
     * Returns the itemActivityType identified by the specified id.
     * @param {String} itemActivityTypeId Id of itemActivityType to be returned.
     * @param {module:api/ItemActivityTypeApi~getItemActivityTypeByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ItemActivityType}
     */
    this.getItemActivityTypeById = function(itemActivityTypeId, callback) {
      var postBody = null;

      // verify the required parameter 'itemActivityTypeId' is set
      if (itemActivityTypeId == undefined || itemActivityTypeId == null) {
        throw "Missing the required parameter 'itemActivityTypeId' when calling getItemActivityTypeById";
      }


      var pathParams = {
        'itemActivityTypeId': itemActivityTypeId
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
      var returnType = ItemActivityType;

      return this.apiClient.callApi(
        '/beta/itemActivityType/{itemActivityTypeId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getItemActivityTypeBySearchText operation.
     * @callback module:api/ItemActivityTypeApi~getItemActivityTypeBySearchTextCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ItemActivityType>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search itemActivityTypes
     * Returns the list of itemActivityTypes that match the given searchText.
     * @param {Object} opts Optional parameters
     * @param {String} opts.searchText Search text, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {module:api/ItemActivityTypeApi~getItemActivityTypeBySearchTextCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/ItemActivityType>}
     */
    this.getItemActivityTypeBySearchText = function(opts, callback) {
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
      var returnType = [ItemActivityType];

      return this.apiClient.callApi(
        '/beta/itemActivityType/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
