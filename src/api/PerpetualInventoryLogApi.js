(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/PerpetualInventoryLog'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PerpetualInventoryLog'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.PerpetualInventoryLogApi = factory(root.infoplus.ApiClient, root.infoplus.PerpetualInventoryLog);
  }
}(this, function(ApiClient, PerpetualInventoryLog) {
  'use strict';

  /**
   * PerpetualInventoryLog service.
   * @module api/PerpetualInventoryLogApi
   * @version beta
   */

  /**
   * Constructs a new PerpetualInventoryLogApi. 
   * @alias module:api/PerpetualInventoryLogApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addPerpetualInventoryLogAudit operation.
     * @callback module:api/PerpetualInventoryLogApi~addPerpetualInventoryLogAuditCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new audit for a perpetualInventoryLog
     * Adds an audit to an existing perpetualInventoryLog.
     * @param {Integer} perpetualInventoryLogId Id of the perpetualInventoryLog to add an audit to
     * @param {String} perpetualInventoryLogAudit The audit to add
     * @param {module:api/PerpetualInventoryLogApi~addPerpetualInventoryLogAuditCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addPerpetualInventoryLogAudit = function(perpetualInventoryLogId, perpetualInventoryLogAudit, callback) {
      var postBody = null;

      // verify the required parameter 'perpetualInventoryLogId' is set
      if (perpetualInventoryLogId == undefined || perpetualInventoryLogId == null) {
        throw "Missing the required parameter 'perpetualInventoryLogId' when calling addPerpetualInventoryLogAudit";
      }

      // verify the required parameter 'perpetualInventoryLogAudit' is set
      if (perpetualInventoryLogAudit == undefined || perpetualInventoryLogAudit == null) {
        throw "Missing the required parameter 'perpetualInventoryLogAudit' when calling addPerpetualInventoryLogAudit";
      }


      var pathParams = {
        'perpetualInventoryLogId': perpetualInventoryLogId,
        'perpetualInventoryLogAudit': perpetualInventoryLogAudit
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/beta/perpetualInventoryLog/{perpetualInventoryLogId}/audit/{perpetualInventoryLogAudit}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addPerpetualInventoryLogTag operation.
     * @callback module:api/PerpetualInventoryLogApi~addPerpetualInventoryLogTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new tags for a perpetualInventoryLog.
     * Adds a tag to an existing perpetualInventoryLog.
     * @param {Integer} perpetualInventoryLogId Id of the perpetualInventoryLog to add a tag to
     * @param {String} perpetualInventoryLogTag The tag to add
     * @param {module:api/PerpetualInventoryLogApi~addPerpetualInventoryLogTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addPerpetualInventoryLogTag = function(perpetualInventoryLogId, perpetualInventoryLogTag, callback) {
      var postBody = null;

      // verify the required parameter 'perpetualInventoryLogId' is set
      if (perpetualInventoryLogId == undefined || perpetualInventoryLogId == null) {
        throw "Missing the required parameter 'perpetualInventoryLogId' when calling addPerpetualInventoryLogTag";
      }

      // verify the required parameter 'perpetualInventoryLogTag' is set
      if (perpetualInventoryLogTag == undefined || perpetualInventoryLogTag == null) {
        throw "Missing the required parameter 'perpetualInventoryLogTag' when calling addPerpetualInventoryLogTag";
      }


      var pathParams = {
        'perpetualInventoryLogId': perpetualInventoryLogId,
        'perpetualInventoryLogTag': perpetualInventoryLogTag
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/beta/perpetualInventoryLog/{perpetualInventoryLogId}/tag/{perpetualInventoryLogTag}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deletePerpetualInventoryLogTag operation.
     * @callback module:api/PerpetualInventoryLogApi~deletePerpetualInventoryLogTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a tag for a perpetualInventoryLog.
     * Deletes an existing perpetualInventoryLog tag using the specified data.
     * @param {Integer} perpetualInventoryLogId Id of the perpetualInventoryLog to remove tag from
     * @param {String} perpetualInventoryLogTag The tag to delete
     * @param {module:api/PerpetualInventoryLogApi~deletePerpetualInventoryLogTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deletePerpetualInventoryLogTag = function(perpetualInventoryLogId, perpetualInventoryLogTag, callback) {
      var postBody = null;

      // verify the required parameter 'perpetualInventoryLogId' is set
      if (perpetualInventoryLogId == undefined || perpetualInventoryLogId == null) {
        throw "Missing the required parameter 'perpetualInventoryLogId' when calling deletePerpetualInventoryLogTag";
      }

      // verify the required parameter 'perpetualInventoryLogTag' is set
      if (perpetualInventoryLogTag == undefined || perpetualInventoryLogTag == null) {
        throw "Missing the required parameter 'perpetualInventoryLogTag' when calling deletePerpetualInventoryLogTag";
      }


      var pathParams = {
        'perpetualInventoryLogId': perpetualInventoryLogId,
        'perpetualInventoryLogTag': perpetualInventoryLogTag
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
      var returnType = null;

      return this.apiClient.callApi(
        '/beta/perpetualInventoryLog/{perpetualInventoryLogId}/tag/{perpetualInventoryLogTag}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDuplicatePerpetualInventoryLogById operation.
     * @callback module:api/PerpetualInventoryLogApi~getDuplicatePerpetualInventoryLogByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PerpetualInventoryLog} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated a perpetualInventoryLog by id
     * Returns a duplicated perpetualInventoryLog identified by the specified id.
     * @param {Integer} perpetualInventoryLogId Id of the perpetualInventoryLog to be duplicated.
     * @param {module:api/PerpetualInventoryLogApi~getDuplicatePerpetualInventoryLogByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PerpetualInventoryLog}
     */
    this.getDuplicatePerpetualInventoryLogById = function(perpetualInventoryLogId, callback) {
      var postBody = null;

      // verify the required parameter 'perpetualInventoryLogId' is set
      if (perpetualInventoryLogId == undefined || perpetualInventoryLogId == null) {
        throw "Missing the required parameter 'perpetualInventoryLogId' when calling getDuplicatePerpetualInventoryLogById";
      }


      var pathParams = {
        'perpetualInventoryLogId': perpetualInventoryLogId
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
      var returnType = PerpetualInventoryLog;

      return this.apiClient.callApi(
        '/beta/perpetualInventoryLog/duplicate/{perpetualInventoryLogId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getPerpetualInventoryLogByFilter operation.
     * @callback module:api/PerpetualInventoryLogApi~getPerpetualInventoryLogByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/PerpetualInventoryLog>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search perpetualInventoryLogs by filter
     * Returns the list of perpetualInventoryLogs that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/PerpetualInventoryLogApi~getPerpetualInventoryLogByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/PerpetualInventoryLog>}
     */
    this.getPerpetualInventoryLogByFilter = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'filter': opts['filter'],
        'page': opts['page'],
        'limit': opts['limit'],
        'sort': opts['sort']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [PerpetualInventoryLog];

      return this.apiClient.callApi(
        '/beta/perpetualInventoryLog/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getPerpetualInventoryLogById operation.
     * @callback module:api/PerpetualInventoryLogApi~getPerpetualInventoryLogByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PerpetualInventoryLog} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a perpetualInventoryLog by id
     * Returns the perpetualInventoryLog identified by the specified id.
     * @param {Integer} perpetualInventoryLogId Id of the perpetualInventoryLog to be returned.
     * @param {module:api/PerpetualInventoryLogApi~getPerpetualInventoryLogByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PerpetualInventoryLog}
     */
    this.getPerpetualInventoryLogById = function(perpetualInventoryLogId, callback) {
      var postBody = null;

      // verify the required parameter 'perpetualInventoryLogId' is set
      if (perpetualInventoryLogId == undefined || perpetualInventoryLogId == null) {
        throw "Missing the required parameter 'perpetualInventoryLogId' when calling getPerpetualInventoryLogById";
      }


      var pathParams = {
        'perpetualInventoryLogId': perpetualInventoryLogId
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
      var returnType = PerpetualInventoryLog;

      return this.apiClient.callApi(
        '/beta/perpetualInventoryLog/{perpetualInventoryLogId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getPerpetualInventoryLogTags operation.
     * @callback module:api/PerpetualInventoryLogApi~getPerpetualInventoryLogTagsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the tags for a perpetualInventoryLog.
     * Get all existing perpetualInventoryLog tags.
     * @param {Integer} perpetualInventoryLogId Id of the perpetualInventoryLog to get tags for
     * @param {module:api/PerpetualInventoryLogApi~getPerpetualInventoryLogTagsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getPerpetualInventoryLogTags = function(perpetualInventoryLogId, callback) {
      var postBody = null;

      // verify the required parameter 'perpetualInventoryLogId' is set
      if (perpetualInventoryLogId == undefined || perpetualInventoryLogId == null) {
        throw "Missing the required parameter 'perpetualInventoryLogId' when calling getPerpetualInventoryLogTags";
      }


      var pathParams = {
        'perpetualInventoryLogId': perpetualInventoryLogId
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
      var returnType = null;

      return this.apiClient.callApi(
        '/beta/perpetualInventoryLog/{perpetualInventoryLogId}/tag', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
