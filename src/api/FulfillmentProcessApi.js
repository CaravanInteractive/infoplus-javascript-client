(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/FulfillmentProcess'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/FulfillmentProcess'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.FulfillmentProcessApi = factory(root.infoplus.ApiClient, root.infoplus.FulfillmentProcess);
  }
}(this, function(ApiClient, FulfillmentProcess) {
  'use strict';

  /**
   * FulfillmentProcess service.
   * @module api/FulfillmentProcessApi
   * @version beta
   */

  /**
   * Constructs a new FulfillmentProcessApi. 
   * @alias module:api/FulfillmentProcessApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addFulfillmentProcessAudit operation.
     * @callback module:api/FulfillmentProcessApi~addFulfillmentProcessAuditCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new audit for a fulfillmentProcess
     * Adds an audit to an existing fulfillmentProcess.
     * @param {Integer} fulfillmentProcessId Id of the fulfillmentProcess to add an audit to
     * @param {String} fulfillmentProcessAudit The audit to add
     * @param {module:api/FulfillmentProcessApi~addFulfillmentProcessAuditCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addFulfillmentProcessAudit = function(fulfillmentProcessId, fulfillmentProcessAudit, callback) {
      var postBody = null;

      // verify the required parameter 'fulfillmentProcessId' is set
      if (fulfillmentProcessId == undefined || fulfillmentProcessId == null) {
        throw "Missing the required parameter 'fulfillmentProcessId' when calling addFulfillmentProcessAudit";
      }

      // verify the required parameter 'fulfillmentProcessAudit' is set
      if (fulfillmentProcessAudit == undefined || fulfillmentProcessAudit == null) {
        throw "Missing the required parameter 'fulfillmentProcessAudit' when calling addFulfillmentProcessAudit";
      }


      var pathParams = {
        'fulfillmentProcessId': fulfillmentProcessId,
        'fulfillmentProcessAudit': fulfillmentProcessAudit
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
        '/beta/fulfillmentProcess/{fulfillmentProcessId}/audit/{fulfillmentProcessAudit}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addFulfillmentProcessTag operation.
     * @callback module:api/FulfillmentProcessApi~addFulfillmentProcessTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new tags for a fulfillmentProcess.
     * Adds a tag to an existing fulfillmentProcess.
     * @param {Integer} fulfillmentProcessId Id of the fulfillmentProcess to add a tag to
     * @param {String} fulfillmentProcessTag The tag to add
     * @param {module:api/FulfillmentProcessApi~addFulfillmentProcessTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addFulfillmentProcessTag = function(fulfillmentProcessId, fulfillmentProcessTag, callback) {
      var postBody = null;

      // verify the required parameter 'fulfillmentProcessId' is set
      if (fulfillmentProcessId == undefined || fulfillmentProcessId == null) {
        throw "Missing the required parameter 'fulfillmentProcessId' when calling addFulfillmentProcessTag";
      }

      // verify the required parameter 'fulfillmentProcessTag' is set
      if (fulfillmentProcessTag == undefined || fulfillmentProcessTag == null) {
        throw "Missing the required parameter 'fulfillmentProcessTag' when calling addFulfillmentProcessTag";
      }


      var pathParams = {
        'fulfillmentProcessId': fulfillmentProcessId,
        'fulfillmentProcessTag': fulfillmentProcessTag
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
        '/beta/fulfillmentProcess/{fulfillmentProcessId}/tag/{fulfillmentProcessTag}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteFulfillmentProcessTag operation.
     * @callback module:api/FulfillmentProcessApi~deleteFulfillmentProcessTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a tag for a fulfillmentProcess.
     * Deletes an existing fulfillmentProcess tag using the specified data.
     * @param {Integer} fulfillmentProcessId Id of the fulfillmentProcess to remove tag from
     * @param {String} fulfillmentProcessTag The tag to delete
     * @param {module:api/FulfillmentProcessApi~deleteFulfillmentProcessTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteFulfillmentProcessTag = function(fulfillmentProcessId, fulfillmentProcessTag, callback) {
      var postBody = null;

      // verify the required parameter 'fulfillmentProcessId' is set
      if (fulfillmentProcessId == undefined || fulfillmentProcessId == null) {
        throw "Missing the required parameter 'fulfillmentProcessId' when calling deleteFulfillmentProcessTag";
      }

      // verify the required parameter 'fulfillmentProcessTag' is set
      if (fulfillmentProcessTag == undefined || fulfillmentProcessTag == null) {
        throw "Missing the required parameter 'fulfillmentProcessTag' when calling deleteFulfillmentProcessTag";
      }


      var pathParams = {
        'fulfillmentProcessId': fulfillmentProcessId,
        'fulfillmentProcessTag': fulfillmentProcessTag
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
        '/beta/fulfillmentProcess/{fulfillmentProcessId}/tag/{fulfillmentProcessTag}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDuplicateFulfillmentProcessById operation.
     * @callback module:api/FulfillmentProcessApi~getDuplicateFulfillmentProcessByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FulfillmentProcess} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated a fulfillmentProcess by id
     * Returns a duplicated fulfillmentProcess identified by the specified id.
     * @param {Integer} fulfillmentProcessId Id of the fulfillmentProcess to be duplicated.
     * @param {module:api/FulfillmentProcessApi~getDuplicateFulfillmentProcessByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/FulfillmentProcess}
     */
    this.getDuplicateFulfillmentProcessById = function(fulfillmentProcessId, callback) {
      var postBody = null;

      // verify the required parameter 'fulfillmentProcessId' is set
      if (fulfillmentProcessId == undefined || fulfillmentProcessId == null) {
        throw "Missing the required parameter 'fulfillmentProcessId' when calling getDuplicateFulfillmentProcessById";
      }


      var pathParams = {
        'fulfillmentProcessId': fulfillmentProcessId
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
      var returnType = FulfillmentProcess;

      return this.apiClient.callApi(
        '/beta/fulfillmentProcess/duplicate/{fulfillmentProcessId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getFulfillmentProcessByFilter operation.
     * @callback module:api/FulfillmentProcessApi~getFulfillmentProcessByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/FulfillmentProcess>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search fulfillmentProcesses by filter
     * Returns the list of fulfillmentProcesses that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/FulfillmentProcessApi~getFulfillmentProcessByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/FulfillmentProcess>}
     */
    this.getFulfillmentProcessByFilter = function(opts, callback) {
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
      var returnType = [FulfillmentProcess];

      return this.apiClient.callApi(
        '/beta/fulfillmentProcess/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getFulfillmentProcessById operation.
     * @callback module:api/FulfillmentProcessApi~getFulfillmentProcessByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FulfillmentProcess} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a fulfillmentProcess by id
     * Returns the fulfillmentProcess identified by the specified id.
     * @param {Integer} fulfillmentProcessId Id of the fulfillmentProcess to be returned.
     * @param {module:api/FulfillmentProcessApi~getFulfillmentProcessByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/FulfillmentProcess}
     */
    this.getFulfillmentProcessById = function(fulfillmentProcessId, callback) {
      var postBody = null;

      // verify the required parameter 'fulfillmentProcessId' is set
      if (fulfillmentProcessId == undefined || fulfillmentProcessId == null) {
        throw "Missing the required parameter 'fulfillmentProcessId' when calling getFulfillmentProcessById";
      }


      var pathParams = {
        'fulfillmentProcessId': fulfillmentProcessId
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
      var returnType = FulfillmentProcess;

      return this.apiClient.callApi(
        '/beta/fulfillmentProcess/{fulfillmentProcessId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getFulfillmentProcessTags operation.
     * @callback module:api/FulfillmentProcessApi~getFulfillmentProcessTagsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the tags for a fulfillmentProcess.
     * Get all existing fulfillmentProcess tags.
     * @param {Integer} fulfillmentProcessId Id of the fulfillmentProcess to get tags for
     * @param {module:api/FulfillmentProcessApi~getFulfillmentProcessTagsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getFulfillmentProcessTags = function(fulfillmentProcessId, callback) {
      var postBody = null;

      // verify the required parameter 'fulfillmentProcessId' is set
      if (fulfillmentProcessId == undefined || fulfillmentProcessId == null) {
        throw "Missing the required parameter 'fulfillmentProcessId' when calling getFulfillmentProcessTags";
      }


      var pathParams = {
        'fulfillmentProcessId': fulfillmentProcessId
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
        '/beta/fulfillmentProcess/{fulfillmentProcessId}/tag', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateFulfillmentProcessCustomFields operation.
     * @callback module:api/FulfillmentProcessApi~updateFulfillmentProcessCustomFieldsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a fulfillmentProcess custom fields
     * Updates an existing fulfillmentProcess custom fields using the specified data.
     * @param {module:model/FulfillmentProcess} body FulfillmentProcess to be updated.
     * @param {module:api/FulfillmentProcessApi~updateFulfillmentProcessCustomFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateFulfillmentProcessCustomFields = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateFulfillmentProcessCustomFields";
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
        '/beta/fulfillmentProcess/customFields', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
