(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/ReplenishmentProcess'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ReplenishmentProcess'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.ReplenishmentProcessApi = factory(root.infoplus.ApiClient, root.infoplus.ReplenishmentProcess);
  }
}(this, function(ApiClient, ReplenishmentProcess) {
  'use strict';

  /**
   * ReplenishmentProcess service.
   * @module api/ReplenishmentProcessApi
   * @version beta
   */

  /**
   * Constructs a new ReplenishmentProcessApi. 
   * @alias module:api/ReplenishmentProcessApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addReplenishmentProcessAudit operation.
     * @callback module:api/ReplenishmentProcessApi~addReplenishmentProcessAuditCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new audit for a replenishmentProcess
     * Adds an audit to an existing replenishmentProcess.
     * @param {Integer} replenishmentProcessId Id of the replenishmentProcess to add an audit to
     * @param {String} replenishmentProcessAudit The audit to add
     * @param {module:api/ReplenishmentProcessApi~addReplenishmentProcessAuditCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addReplenishmentProcessAudit = function(replenishmentProcessId, replenishmentProcessAudit, callback) {
      var postBody = null;

      // verify the required parameter 'replenishmentProcessId' is set
      if (replenishmentProcessId == undefined || replenishmentProcessId == null) {
        throw "Missing the required parameter 'replenishmentProcessId' when calling addReplenishmentProcessAudit";
      }

      // verify the required parameter 'replenishmentProcessAudit' is set
      if (replenishmentProcessAudit == undefined || replenishmentProcessAudit == null) {
        throw "Missing the required parameter 'replenishmentProcessAudit' when calling addReplenishmentProcessAudit";
      }


      var pathParams = {
        'replenishmentProcessId': replenishmentProcessId,
        'replenishmentProcessAudit': replenishmentProcessAudit
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
        '/beta/replenishmentProcess/{replenishmentProcessId}/audit/{replenishmentProcessAudit}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addReplenishmentProcessTag operation.
     * @callback module:api/ReplenishmentProcessApi~addReplenishmentProcessTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new tags for a replenishmentProcess.
     * Adds a tag to an existing replenishmentProcess.
     * @param {Integer} replenishmentProcessId Id of the replenishmentProcess to add a tag to
     * @param {String} replenishmentProcessTag The tag to add
     * @param {module:api/ReplenishmentProcessApi~addReplenishmentProcessTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addReplenishmentProcessTag = function(replenishmentProcessId, replenishmentProcessTag, callback) {
      var postBody = null;

      // verify the required parameter 'replenishmentProcessId' is set
      if (replenishmentProcessId == undefined || replenishmentProcessId == null) {
        throw "Missing the required parameter 'replenishmentProcessId' when calling addReplenishmentProcessTag";
      }

      // verify the required parameter 'replenishmentProcessTag' is set
      if (replenishmentProcessTag == undefined || replenishmentProcessTag == null) {
        throw "Missing the required parameter 'replenishmentProcessTag' when calling addReplenishmentProcessTag";
      }


      var pathParams = {
        'replenishmentProcessId': replenishmentProcessId,
        'replenishmentProcessTag': replenishmentProcessTag
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
        '/beta/replenishmentProcess/{replenishmentProcessId}/tag/{replenishmentProcessTag}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteReplenishmentProcessTag operation.
     * @callback module:api/ReplenishmentProcessApi~deleteReplenishmentProcessTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a tag for a replenishmentProcess.
     * Deletes an existing replenishmentProcess tag using the specified data.
     * @param {Integer} replenishmentProcessId Id of the replenishmentProcess to remove tag from
     * @param {String} replenishmentProcessTag The tag to delete
     * @param {module:api/ReplenishmentProcessApi~deleteReplenishmentProcessTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteReplenishmentProcessTag = function(replenishmentProcessId, replenishmentProcessTag, callback) {
      var postBody = null;

      // verify the required parameter 'replenishmentProcessId' is set
      if (replenishmentProcessId == undefined || replenishmentProcessId == null) {
        throw "Missing the required parameter 'replenishmentProcessId' when calling deleteReplenishmentProcessTag";
      }

      // verify the required parameter 'replenishmentProcessTag' is set
      if (replenishmentProcessTag == undefined || replenishmentProcessTag == null) {
        throw "Missing the required parameter 'replenishmentProcessTag' when calling deleteReplenishmentProcessTag";
      }


      var pathParams = {
        'replenishmentProcessId': replenishmentProcessId,
        'replenishmentProcessTag': replenishmentProcessTag
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
        '/beta/replenishmentProcess/{replenishmentProcessId}/tag/{replenishmentProcessTag}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDuplicateReplenishmentProcessById operation.
     * @callback module:api/ReplenishmentProcessApi~getDuplicateReplenishmentProcessByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ReplenishmentProcess} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated a replenishmentProcess by id
     * Returns a duplicated replenishmentProcess identified by the specified id.
     * @param {Integer} replenishmentProcessId Id of the replenishmentProcess to be duplicated.
     * @param {module:api/ReplenishmentProcessApi~getDuplicateReplenishmentProcessByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ReplenishmentProcess}
     */
    this.getDuplicateReplenishmentProcessById = function(replenishmentProcessId, callback) {
      var postBody = null;

      // verify the required parameter 'replenishmentProcessId' is set
      if (replenishmentProcessId == undefined || replenishmentProcessId == null) {
        throw "Missing the required parameter 'replenishmentProcessId' when calling getDuplicateReplenishmentProcessById";
      }


      var pathParams = {
        'replenishmentProcessId': replenishmentProcessId
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
      var returnType = ReplenishmentProcess;

      return this.apiClient.callApi(
        '/beta/replenishmentProcess/duplicate/{replenishmentProcessId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getReplenishmentProcessByFilter operation.
     * @callback module:api/ReplenishmentProcessApi~getReplenishmentProcessByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ReplenishmentProcess>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search replenishmentProcesses by filter
     * Returns the list of replenishmentProcesses that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/ReplenishmentProcessApi~getReplenishmentProcessByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/ReplenishmentProcess>}
     */
    this.getReplenishmentProcessByFilter = function(opts, callback) {
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
      var returnType = [ReplenishmentProcess];

      return this.apiClient.callApi(
        '/beta/replenishmentProcess/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getReplenishmentProcessById operation.
     * @callback module:api/ReplenishmentProcessApi~getReplenishmentProcessByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ReplenishmentProcess} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a replenishmentProcess by id
     * Returns the replenishmentProcess identified by the specified id.
     * @param {Integer} replenishmentProcessId Id of the replenishmentProcess to be returned.
     * @param {module:api/ReplenishmentProcessApi~getReplenishmentProcessByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ReplenishmentProcess}
     */
    this.getReplenishmentProcessById = function(replenishmentProcessId, callback) {
      var postBody = null;

      // verify the required parameter 'replenishmentProcessId' is set
      if (replenishmentProcessId == undefined || replenishmentProcessId == null) {
        throw "Missing the required parameter 'replenishmentProcessId' when calling getReplenishmentProcessById";
      }


      var pathParams = {
        'replenishmentProcessId': replenishmentProcessId
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
      var returnType = ReplenishmentProcess;

      return this.apiClient.callApi(
        '/beta/replenishmentProcess/{replenishmentProcessId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getReplenishmentProcessTags operation.
     * @callback module:api/ReplenishmentProcessApi~getReplenishmentProcessTagsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the tags for a replenishmentProcess.
     * Get all existing replenishmentProcess tags.
     * @param {Integer} replenishmentProcessId Id of the replenishmentProcess to get tags for
     * @param {module:api/ReplenishmentProcessApi~getReplenishmentProcessTagsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getReplenishmentProcessTags = function(replenishmentProcessId, callback) {
      var postBody = null;

      // verify the required parameter 'replenishmentProcessId' is set
      if (replenishmentProcessId == undefined || replenishmentProcessId == null) {
        throw "Missing the required parameter 'replenishmentProcessId' when calling getReplenishmentProcessTags";
      }


      var pathParams = {
        'replenishmentProcessId': replenishmentProcessId
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
        '/beta/replenishmentProcess/{replenishmentProcessId}/tag', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateReplenishmentProcessCustomFields operation.
     * @callback module:api/ReplenishmentProcessApi~updateReplenishmentProcessCustomFieldsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a replenishmentProcess custom fields
     * Updates an existing replenishmentProcess custom fields using the specified data.
     * @param {module:model/ReplenishmentProcess} body ReplenishmentProcess to be updated.
     * @param {module:api/ReplenishmentProcessApi~updateReplenishmentProcessCustomFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateReplenishmentProcessCustomFields = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateReplenishmentProcessCustomFields";
      }


      var pathParams = {
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
        '/beta/replenishmentProcess/customFields', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
