(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/PredefinedCarton'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PredefinedCarton'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.PredefinedCartonApi = factory(root.infoplus.ApiClient, root.infoplus.PredefinedCarton);
  }
}(this, function(ApiClient, PredefinedCarton) {
  'use strict';

  /**
   * PredefinedCarton service.
   * @module api/PredefinedCartonApi
   * @version beta
   */

  /**
   * Constructs a new PredefinedCartonApi. 
   * @alias module:api/PredefinedCartonApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getPredefinedCartonById operation.
     * @callback module:api/PredefinedCartonApi~getPredefinedCartonByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PredefinedCarton} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a predefinedCarton by id
     * Returns the predefinedCarton identified by the specified id.
     * @param {String} predefinedCartonId Id of predefinedCarton to be returned.
     * @param {module:api/PredefinedCartonApi~getPredefinedCartonByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PredefinedCarton}
     */
    this.getPredefinedCartonById = function(predefinedCartonId, callback) {
      var postBody = null;

      // verify the required parameter 'predefinedCartonId' is set
      if (predefinedCartonId == undefined || predefinedCartonId == null) {
        throw "Missing the required parameter 'predefinedCartonId' when calling getPredefinedCartonById";
      }


      var pathParams = {
        'predefinedCartonId': predefinedCartonId
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
      var returnType = PredefinedCarton;

      return this.apiClient.callApi(
        '/beta/predefinedCarton/{predefinedCartonId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getPredefinedCartonBySearchText operation.
     * @callback module:api/PredefinedCartonApi~getPredefinedCartonBySearchTextCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/PredefinedCarton>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search predefinedCartons
     * Returns the list of predefinedCartons that match the given searchText.
     * @param {Object} opts Optional parameters
     * @param {String} opts.searchText Search text, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {module:api/PredefinedCartonApi~getPredefinedCartonBySearchTextCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/PredefinedCarton>}
     */
    this.getPredefinedCartonBySearchText = function(opts, callback) {
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
      var returnType = [PredefinedCarton];

      return this.apiClient.callApi(
        '/beta/predefinedCarton/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
