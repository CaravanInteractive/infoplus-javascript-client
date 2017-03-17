(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/InventoryStorageActivity', '../model/ApiResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/InventoryStorageActivity'), require('../model/ApiResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.InventoryStorageActivityApi = factory(root.infoplus.ApiClient, root.infoplus.InventoryStorageActivity, root.infoplus.ApiResponse);
  }
}(this, function(ApiClient, InventoryStorageActivity, ApiResponse) {
  'use strict';

  /**
   * InventoryStorageActivity service.
   * @module api/InventoryStorageActivityApi
   * @version beta
   */

  /**
   * Constructs a new InventoryStorageActivityApi. 
   * @alias module:api/InventoryStorageActivityApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addInventoryStorageActivity operation.
     * @callback module:api/InventoryStorageActivityApi~addInventoryStorageActivityCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InventoryStorageActivity} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an inventoryStorageActivity
     * Inserts a new inventoryStorageActivity using the specified data.
     * @param {module:model/InventoryStorageActivity} body InventoryStorageActivity to be inserted.
     * @param {module:api/InventoryStorageActivityApi~addInventoryStorageActivityCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/InventoryStorageActivity}
     */
    this.addInventoryStorageActivity = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling addInventoryStorageActivity";
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
      var returnType = InventoryStorageActivity;

      return this.apiClient.callApi(
        '/beta/inventoryStorageActivity', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addInventoryStorageActivityAudit operation.
     * @callback module:api/InventoryStorageActivityApi~addInventoryStorageActivityAuditCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new audit for an inventoryStorageActivity
     * Adds an audit to an existing inventoryStorageActivity.
     * @param {Integer} inventoryStorageActivityId Id of the inventoryStorageActivity to add an audit to
     * @param {String} inventoryStorageActivityAudit The audit to add
     * @param {module:api/InventoryStorageActivityApi~addInventoryStorageActivityAuditCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addInventoryStorageActivityAudit = function(inventoryStorageActivityId, inventoryStorageActivityAudit, callback) {
      var postBody = null;

      // verify the required parameter 'inventoryStorageActivityId' is set
      if (inventoryStorageActivityId == undefined || inventoryStorageActivityId == null) {
        throw "Missing the required parameter 'inventoryStorageActivityId' when calling addInventoryStorageActivityAudit";
      }

      // verify the required parameter 'inventoryStorageActivityAudit' is set
      if (inventoryStorageActivityAudit == undefined || inventoryStorageActivityAudit == null) {
        throw "Missing the required parameter 'inventoryStorageActivityAudit' when calling addInventoryStorageActivityAudit";
      }


      var pathParams = {
        'inventoryStorageActivityId': inventoryStorageActivityId,
        'inventoryStorageActivityAudit': inventoryStorageActivityAudit
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
        '/beta/inventoryStorageActivity/{inventoryStorageActivityId}/audit/{inventoryStorageActivityAudit}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addInventoryStorageActivityTag operation.
     * @callback module:api/InventoryStorageActivityApi~addInventoryStorageActivityTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new tags for an inventoryStorageActivity.
     * Adds a tag to an existing inventoryStorageActivity.
     * @param {Integer} inventoryStorageActivityId Id of the inventoryStorageActivity to add a tag to
     * @param {String} inventoryStorageActivityTag The tag to add
     * @param {module:api/InventoryStorageActivityApi~addInventoryStorageActivityTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addInventoryStorageActivityTag = function(inventoryStorageActivityId, inventoryStorageActivityTag, callback) {
      var postBody = null;

      // verify the required parameter 'inventoryStorageActivityId' is set
      if (inventoryStorageActivityId == undefined || inventoryStorageActivityId == null) {
        throw "Missing the required parameter 'inventoryStorageActivityId' when calling addInventoryStorageActivityTag";
      }

      // verify the required parameter 'inventoryStorageActivityTag' is set
      if (inventoryStorageActivityTag == undefined || inventoryStorageActivityTag == null) {
        throw "Missing the required parameter 'inventoryStorageActivityTag' when calling addInventoryStorageActivityTag";
      }


      var pathParams = {
        'inventoryStorageActivityId': inventoryStorageActivityId,
        'inventoryStorageActivityTag': inventoryStorageActivityTag
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
        '/beta/inventoryStorageActivity/{inventoryStorageActivityId}/tag/{inventoryStorageActivityTag}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteInventoryStorageActivity operation.
     * @callback module:api/InventoryStorageActivityApi~deleteInventoryStorageActivityCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an inventoryStorageActivity
     * Deletes the inventoryStorageActivity identified by the specified id.
     * @param {Integer} inventoryStorageActivityId Id of the inventoryStorageActivity to be deleted.
     * @param {module:api/InventoryStorageActivityApi~deleteInventoryStorageActivityCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteInventoryStorageActivity = function(inventoryStorageActivityId, callback) {
      var postBody = null;

      // verify the required parameter 'inventoryStorageActivityId' is set
      if (inventoryStorageActivityId == undefined || inventoryStorageActivityId == null) {
        throw "Missing the required parameter 'inventoryStorageActivityId' when calling deleteInventoryStorageActivity";
      }


      var pathParams = {
        'inventoryStorageActivityId': inventoryStorageActivityId
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
        '/beta/inventoryStorageActivity/{inventoryStorageActivityId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteInventoryStorageActivityTag operation.
     * @callback module:api/InventoryStorageActivityApi~deleteInventoryStorageActivityTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a tag for an inventoryStorageActivity.
     * Deletes an existing inventoryStorageActivity tag using the specified data.
     * @param {Integer} inventoryStorageActivityId Id of the inventoryStorageActivity to remove tag from
     * @param {String} inventoryStorageActivityTag The tag to delete
     * @param {module:api/InventoryStorageActivityApi~deleteInventoryStorageActivityTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteInventoryStorageActivityTag = function(inventoryStorageActivityId, inventoryStorageActivityTag, callback) {
      var postBody = null;

      // verify the required parameter 'inventoryStorageActivityId' is set
      if (inventoryStorageActivityId == undefined || inventoryStorageActivityId == null) {
        throw "Missing the required parameter 'inventoryStorageActivityId' when calling deleteInventoryStorageActivityTag";
      }

      // verify the required parameter 'inventoryStorageActivityTag' is set
      if (inventoryStorageActivityTag == undefined || inventoryStorageActivityTag == null) {
        throw "Missing the required parameter 'inventoryStorageActivityTag' when calling deleteInventoryStorageActivityTag";
      }


      var pathParams = {
        'inventoryStorageActivityId': inventoryStorageActivityId,
        'inventoryStorageActivityTag': inventoryStorageActivityTag
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
        '/beta/inventoryStorageActivity/{inventoryStorageActivityId}/tag/{inventoryStorageActivityTag}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDuplicateInventoryStorageActivityById operation.
     * @callback module:api/InventoryStorageActivityApi~getDuplicateInventoryStorageActivityByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InventoryStorageActivity} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated an inventoryStorageActivity by id
     * Returns a duplicated inventoryStorageActivity identified by the specified id.
     * @param {Integer} inventoryStorageActivityId Id of the inventoryStorageActivity to be duplicated.
     * @param {module:api/InventoryStorageActivityApi~getDuplicateInventoryStorageActivityByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/InventoryStorageActivity}
     */
    this.getDuplicateInventoryStorageActivityById = function(inventoryStorageActivityId, callback) {
      var postBody = null;

      // verify the required parameter 'inventoryStorageActivityId' is set
      if (inventoryStorageActivityId == undefined || inventoryStorageActivityId == null) {
        throw "Missing the required parameter 'inventoryStorageActivityId' when calling getDuplicateInventoryStorageActivityById";
      }


      var pathParams = {
        'inventoryStorageActivityId': inventoryStorageActivityId
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
      var returnType = InventoryStorageActivity;

      return this.apiClient.callApi(
        '/beta/inventoryStorageActivity/duplicate/{inventoryStorageActivityId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getInventoryStorageActivityByFilter operation.
     * @callback module:api/InventoryStorageActivityApi~getInventoryStorageActivityByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InventoryStorageActivity>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search inventoryStorageActivitys by filter
     * Returns the list of inventoryStorageActivitys that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/InventoryStorageActivityApi~getInventoryStorageActivityByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/InventoryStorageActivity>}
     */
    this.getInventoryStorageActivityByFilter = function(opts, callback) {
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
      var returnType = [InventoryStorageActivity];

      return this.apiClient.callApi(
        '/beta/inventoryStorageActivity/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getInventoryStorageActivityById operation.
     * @callback module:api/InventoryStorageActivityApi~getInventoryStorageActivityByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InventoryStorageActivity} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an inventoryStorageActivity by id
     * Returns the inventoryStorageActivity identified by the specified id.
     * @param {Integer} inventoryStorageActivityId Id of the inventoryStorageActivity to be returned.
     * @param {module:api/InventoryStorageActivityApi~getInventoryStorageActivityByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/InventoryStorageActivity}
     */
    this.getInventoryStorageActivityById = function(inventoryStorageActivityId, callback) {
      var postBody = null;

      // verify the required parameter 'inventoryStorageActivityId' is set
      if (inventoryStorageActivityId == undefined || inventoryStorageActivityId == null) {
        throw "Missing the required parameter 'inventoryStorageActivityId' when calling getInventoryStorageActivityById";
      }


      var pathParams = {
        'inventoryStorageActivityId': inventoryStorageActivityId
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
      var returnType = InventoryStorageActivity;

      return this.apiClient.callApi(
        '/beta/inventoryStorageActivity/{inventoryStorageActivityId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getInventoryStorageActivityTags operation.
     * @callback module:api/InventoryStorageActivityApi~getInventoryStorageActivityTagsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the tags for an inventoryStorageActivity.
     * Get all existing inventoryStorageActivity tags.
     * @param {Integer} inventoryStorageActivityId Id of the inventoryStorageActivity to get tags for
     * @param {module:api/InventoryStorageActivityApi~getInventoryStorageActivityTagsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getInventoryStorageActivityTags = function(inventoryStorageActivityId, callback) {
      var postBody = null;

      // verify the required parameter 'inventoryStorageActivityId' is set
      if (inventoryStorageActivityId == undefined || inventoryStorageActivityId == null) {
        throw "Missing the required parameter 'inventoryStorageActivityId' when calling getInventoryStorageActivityTags";
      }


      var pathParams = {
        'inventoryStorageActivityId': inventoryStorageActivityId
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
        '/beta/inventoryStorageActivity/{inventoryStorageActivityId}/tag', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateInventoryStorageActivity operation.
     * @callback module:api/InventoryStorageActivityApi~updateInventoryStorageActivityCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an inventoryStorageActivity
     * Updates an existing inventoryStorageActivity using the specified data.
     * @param {module:model/InventoryStorageActivity} body InventoryStorageActivity to be updated.
     * @param {module:api/InventoryStorageActivityApi~updateInventoryStorageActivityCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateInventoryStorageActivity = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateInventoryStorageActivity";
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
        '/beta/inventoryStorageActivity', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
