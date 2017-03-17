(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/WorkActivity', '../model/ApiResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/WorkActivity'), require('../model/ApiResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.WorkActivityApi = factory(root.infoplus.ApiClient, root.infoplus.WorkActivity, root.infoplus.ApiResponse);
  }
}(this, function(ApiClient, WorkActivity, ApiResponse) {
  'use strict';

  /**
   * WorkActivity service.
   * @module api/WorkActivityApi
   * @version beta
   */

  /**
   * Constructs a new WorkActivityApi. 
   * @alias module:api/WorkActivityApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addWorkActivity operation.
     * @callback module:api/WorkActivityApi~addWorkActivityCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WorkActivity} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a workActivity
     * Inserts a new workActivity using the specified data.
     * @param {module:model/WorkActivity} body WorkActivity to be inserted.
     * @param {module:api/WorkActivityApi~addWorkActivityCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/WorkActivity}
     */
    this.addWorkActivity = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling addWorkActivity";
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
      var returnType = WorkActivity;

      return this.apiClient.callApi(
        '/beta/workActivity', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addWorkActivityAudit operation.
     * @callback module:api/WorkActivityApi~addWorkActivityAuditCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new audit for a workActivity
     * Adds an audit to an existing workActivity.
     * @param {Integer} workActivityId Id of the workActivity to add an audit to
     * @param {String} workActivityAudit The audit to add
     * @param {module:api/WorkActivityApi~addWorkActivityAuditCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addWorkActivityAudit = function(workActivityId, workActivityAudit, callback) {
      var postBody = null;

      // verify the required parameter 'workActivityId' is set
      if (workActivityId == undefined || workActivityId == null) {
        throw "Missing the required parameter 'workActivityId' when calling addWorkActivityAudit";
      }

      // verify the required parameter 'workActivityAudit' is set
      if (workActivityAudit == undefined || workActivityAudit == null) {
        throw "Missing the required parameter 'workActivityAudit' when calling addWorkActivityAudit";
      }


      var pathParams = {
        'workActivityId': workActivityId,
        'workActivityAudit': workActivityAudit
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
        '/beta/workActivity/{workActivityId}/audit/{workActivityAudit}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addWorkActivityTag operation.
     * @callback module:api/WorkActivityApi~addWorkActivityTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new tags for a workActivity.
     * Adds a tag to an existing workActivity.
     * @param {Integer} workActivityId Id of the workActivity to add a tag to
     * @param {String} workActivityTag The tag to add
     * @param {module:api/WorkActivityApi~addWorkActivityTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addWorkActivityTag = function(workActivityId, workActivityTag, callback) {
      var postBody = null;

      // verify the required parameter 'workActivityId' is set
      if (workActivityId == undefined || workActivityId == null) {
        throw "Missing the required parameter 'workActivityId' when calling addWorkActivityTag";
      }

      // verify the required parameter 'workActivityTag' is set
      if (workActivityTag == undefined || workActivityTag == null) {
        throw "Missing the required parameter 'workActivityTag' when calling addWorkActivityTag";
      }


      var pathParams = {
        'workActivityId': workActivityId,
        'workActivityTag': workActivityTag
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
        '/beta/workActivity/{workActivityId}/tag/{workActivityTag}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteWorkActivity operation.
     * @callback module:api/WorkActivityApi~deleteWorkActivityCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a workActivity
     * Deletes the workActivity identified by the specified id.
     * @param {Integer} workActivityId Id of the workActivity to be deleted.
     * @param {module:api/WorkActivityApi~deleteWorkActivityCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteWorkActivity = function(workActivityId, callback) {
      var postBody = null;

      // verify the required parameter 'workActivityId' is set
      if (workActivityId == undefined || workActivityId == null) {
        throw "Missing the required parameter 'workActivityId' when calling deleteWorkActivity";
      }


      var pathParams = {
        'workActivityId': workActivityId
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
        '/beta/workActivity/{workActivityId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteWorkActivityTag operation.
     * @callback module:api/WorkActivityApi~deleteWorkActivityTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a tag for a workActivity.
     * Deletes an existing workActivity tag using the specified data.
     * @param {Integer} workActivityId Id of the workActivity to remove tag from
     * @param {String} workActivityTag The tag to delete
     * @param {module:api/WorkActivityApi~deleteWorkActivityTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteWorkActivityTag = function(workActivityId, workActivityTag, callback) {
      var postBody = null;

      // verify the required parameter 'workActivityId' is set
      if (workActivityId == undefined || workActivityId == null) {
        throw "Missing the required parameter 'workActivityId' when calling deleteWorkActivityTag";
      }

      // verify the required parameter 'workActivityTag' is set
      if (workActivityTag == undefined || workActivityTag == null) {
        throw "Missing the required parameter 'workActivityTag' when calling deleteWorkActivityTag";
      }


      var pathParams = {
        'workActivityId': workActivityId,
        'workActivityTag': workActivityTag
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
        '/beta/workActivity/{workActivityId}/tag/{workActivityTag}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDuplicateWorkActivityById operation.
     * @callback module:api/WorkActivityApi~getDuplicateWorkActivityByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WorkActivity} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated a workActivity by id
     * Returns a duplicated workActivity identified by the specified id.
     * @param {Integer} workActivityId Id of the workActivity to be duplicated.
     * @param {module:api/WorkActivityApi~getDuplicateWorkActivityByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/WorkActivity}
     */
    this.getDuplicateWorkActivityById = function(workActivityId, callback) {
      var postBody = null;

      // verify the required parameter 'workActivityId' is set
      if (workActivityId == undefined || workActivityId == null) {
        throw "Missing the required parameter 'workActivityId' when calling getDuplicateWorkActivityById";
      }


      var pathParams = {
        'workActivityId': workActivityId
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
      var returnType = WorkActivity;

      return this.apiClient.callApi(
        '/beta/workActivity/duplicate/{workActivityId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getWorkActivityByFilter operation.
     * @callback module:api/WorkActivityApi~getWorkActivityByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/WorkActivity>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search workActivitys by filter
     * Returns the list of workActivitys that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/WorkActivityApi~getWorkActivityByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/WorkActivity>}
     */
    this.getWorkActivityByFilter = function(opts, callback) {
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
      var returnType = [WorkActivity];

      return this.apiClient.callApi(
        '/beta/workActivity/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getWorkActivityById operation.
     * @callback module:api/WorkActivityApi~getWorkActivityByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WorkActivity} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a workActivity by id
     * Returns the workActivity identified by the specified id.
     * @param {Integer} workActivityId Id of the workActivity to be returned.
     * @param {module:api/WorkActivityApi~getWorkActivityByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/WorkActivity}
     */
    this.getWorkActivityById = function(workActivityId, callback) {
      var postBody = null;

      // verify the required parameter 'workActivityId' is set
      if (workActivityId == undefined || workActivityId == null) {
        throw "Missing the required parameter 'workActivityId' when calling getWorkActivityById";
      }


      var pathParams = {
        'workActivityId': workActivityId
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
      var returnType = WorkActivity;

      return this.apiClient.callApi(
        '/beta/workActivity/{workActivityId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getWorkActivityTags operation.
     * @callback module:api/WorkActivityApi~getWorkActivityTagsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the tags for a workActivity.
     * Get all existing workActivity tags.
     * @param {Integer} workActivityId Id of the workActivity to get tags for
     * @param {module:api/WorkActivityApi~getWorkActivityTagsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getWorkActivityTags = function(workActivityId, callback) {
      var postBody = null;

      // verify the required parameter 'workActivityId' is set
      if (workActivityId == undefined || workActivityId == null) {
        throw "Missing the required parameter 'workActivityId' when calling getWorkActivityTags";
      }


      var pathParams = {
        'workActivityId': workActivityId
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
        '/beta/workActivity/{workActivityId}/tag', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateWorkActivity operation.
     * @callback module:api/WorkActivityApi~updateWorkActivityCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a workActivity
     * Updates an existing workActivity using the specified data.
     * @param {module:model/WorkActivity} body WorkActivity to be updated.
     * @param {module:api/WorkActivityApi~updateWorkActivityCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateWorkActivity = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateWorkActivity";
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
        '/beta/workActivity', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
