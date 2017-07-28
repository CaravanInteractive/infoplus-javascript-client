(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/ItemReceiptActivity', '../model/ApiResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ItemReceiptActivity'), require('../model/ApiResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.ItemReceiptActivityApi = factory(root.infoplus.ApiClient, root.infoplus.ItemReceiptActivity, root.infoplus.ApiResponse);
  }
}(this, function(ApiClient, ItemReceiptActivity, ApiResponse) {
  'use strict';

  /**
   * ItemReceiptActivity service.
   * @module api/ItemReceiptActivityApi
   * @version beta
   */

  /**
   * Constructs a new ItemReceiptActivityApi. 
   * @alias module:api/ItemReceiptActivityApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addItemReceiptActivity operation.
     * @callback module:api/ItemReceiptActivityApi~addItemReceiptActivityCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ItemReceiptActivity} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an itemReceiptActivity
     * Inserts a new itemReceiptActivity using the specified data.
     * @param {module:model/ItemReceiptActivity} body ItemReceiptActivity to be inserted.
     * @param {module:api/ItemReceiptActivityApi~addItemReceiptActivityCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ItemReceiptActivity}
     */
    this.addItemReceiptActivity = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling addItemReceiptActivity";
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
      var returnType = ItemReceiptActivity;

      return this.apiClient.callApi(
        '/beta/itemReceiptActivity', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addItemReceiptActivityAudit operation.
     * @callback module:api/ItemReceiptActivityApi~addItemReceiptActivityAuditCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new audit for an itemReceiptActivity
     * Adds an audit to an existing itemReceiptActivity.
     * @param {Integer} itemReceiptActivityId Id of the itemReceiptActivity to add an audit to
     * @param {String} itemReceiptActivityAudit The audit to add
     * @param {module:api/ItemReceiptActivityApi~addItemReceiptActivityAuditCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addItemReceiptActivityAudit = function(itemReceiptActivityId, itemReceiptActivityAudit, callback) {
      var postBody = null;

      // verify the required parameter 'itemReceiptActivityId' is set
      if (itemReceiptActivityId == undefined || itemReceiptActivityId == null) {
        throw "Missing the required parameter 'itemReceiptActivityId' when calling addItemReceiptActivityAudit";
      }

      // verify the required parameter 'itemReceiptActivityAudit' is set
      if (itemReceiptActivityAudit == undefined || itemReceiptActivityAudit == null) {
        throw "Missing the required parameter 'itemReceiptActivityAudit' when calling addItemReceiptActivityAudit";
      }


      var pathParams = {
        'itemReceiptActivityId': itemReceiptActivityId,
        'itemReceiptActivityAudit': itemReceiptActivityAudit
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
        '/beta/itemReceiptActivity/{itemReceiptActivityId}/audit/{itemReceiptActivityAudit}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addItemReceiptActivityTag operation.
     * @callback module:api/ItemReceiptActivityApi~addItemReceiptActivityTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new tags for an itemReceiptActivity.
     * Adds a tag to an existing itemReceiptActivity.
     * @param {Integer} itemReceiptActivityId Id of the itemReceiptActivity to add a tag to
     * @param {String} itemReceiptActivityTag The tag to add
     * @param {module:api/ItemReceiptActivityApi~addItemReceiptActivityTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addItemReceiptActivityTag = function(itemReceiptActivityId, itemReceiptActivityTag, callback) {
      var postBody = null;

      // verify the required parameter 'itemReceiptActivityId' is set
      if (itemReceiptActivityId == undefined || itemReceiptActivityId == null) {
        throw "Missing the required parameter 'itemReceiptActivityId' when calling addItemReceiptActivityTag";
      }

      // verify the required parameter 'itemReceiptActivityTag' is set
      if (itemReceiptActivityTag == undefined || itemReceiptActivityTag == null) {
        throw "Missing the required parameter 'itemReceiptActivityTag' when calling addItemReceiptActivityTag";
      }


      var pathParams = {
        'itemReceiptActivityId': itemReceiptActivityId,
        'itemReceiptActivityTag': itemReceiptActivityTag
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
        '/beta/itemReceiptActivity/{itemReceiptActivityId}/tag/{itemReceiptActivityTag}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteItemReceiptActivity operation.
     * @callback module:api/ItemReceiptActivityApi~deleteItemReceiptActivityCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an itemReceiptActivity
     * Deletes the itemReceiptActivity identified by the specified id.
     * @param {Integer} itemReceiptActivityId Id of the itemReceiptActivity to be deleted.
     * @param {module:api/ItemReceiptActivityApi~deleteItemReceiptActivityCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteItemReceiptActivity = function(itemReceiptActivityId, callback) {
      var postBody = null;

      // verify the required parameter 'itemReceiptActivityId' is set
      if (itemReceiptActivityId == undefined || itemReceiptActivityId == null) {
        throw "Missing the required parameter 'itemReceiptActivityId' when calling deleteItemReceiptActivity";
      }


      var pathParams = {
        'itemReceiptActivityId': itemReceiptActivityId
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
        '/beta/itemReceiptActivity/{itemReceiptActivityId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteItemReceiptActivityTag operation.
     * @callback module:api/ItemReceiptActivityApi~deleteItemReceiptActivityTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a tag for an itemReceiptActivity.
     * Deletes an existing itemReceiptActivity tag using the specified data.
     * @param {Integer} itemReceiptActivityId Id of the itemReceiptActivity to remove tag from
     * @param {String} itemReceiptActivityTag The tag to delete
     * @param {module:api/ItemReceiptActivityApi~deleteItemReceiptActivityTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteItemReceiptActivityTag = function(itemReceiptActivityId, itemReceiptActivityTag, callback) {
      var postBody = null;

      // verify the required parameter 'itemReceiptActivityId' is set
      if (itemReceiptActivityId == undefined || itemReceiptActivityId == null) {
        throw "Missing the required parameter 'itemReceiptActivityId' when calling deleteItemReceiptActivityTag";
      }

      // verify the required parameter 'itemReceiptActivityTag' is set
      if (itemReceiptActivityTag == undefined || itemReceiptActivityTag == null) {
        throw "Missing the required parameter 'itemReceiptActivityTag' when calling deleteItemReceiptActivityTag";
      }


      var pathParams = {
        'itemReceiptActivityId': itemReceiptActivityId,
        'itemReceiptActivityTag': itemReceiptActivityTag
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
        '/beta/itemReceiptActivity/{itemReceiptActivityId}/tag/{itemReceiptActivityTag}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDuplicateItemReceiptActivityById operation.
     * @callback module:api/ItemReceiptActivityApi~getDuplicateItemReceiptActivityByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ItemReceiptActivity} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated an itemReceiptActivity by id
     * Returns a duplicated itemReceiptActivity identified by the specified id.
     * @param {Integer} itemReceiptActivityId Id of the itemReceiptActivity to be duplicated.
     * @param {module:api/ItemReceiptActivityApi~getDuplicateItemReceiptActivityByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ItemReceiptActivity}
     */
    this.getDuplicateItemReceiptActivityById = function(itemReceiptActivityId, callback) {
      var postBody = null;

      // verify the required parameter 'itemReceiptActivityId' is set
      if (itemReceiptActivityId == undefined || itemReceiptActivityId == null) {
        throw "Missing the required parameter 'itemReceiptActivityId' when calling getDuplicateItemReceiptActivityById";
      }


      var pathParams = {
        'itemReceiptActivityId': itemReceiptActivityId
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
      var returnType = ItemReceiptActivity;

      return this.apiClient.callApi(
        '/beta/itemReceiptActivity/duplicate/{itemReceiptActivityId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getItemReceiptActivityByFilter operation.
     * @callback module:api/ItemReceiptActivityApi~getItemReceiptActivityByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ItemReceiptActivity>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search itemReceiptActivitys by filter
     * Returns the list of itemReceiptActivitys that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/ItemReceiptActivityApi~getItemReceiptActivityByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/ItemReceiptActivity>}
     */
    this.getItemReceiptActivityByFilter = function(opts, callback) {
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
      var returnType = [ItemReceiptActivity];

      return this.apiClient.callApi(
        '/beta/itemReceiptActivity/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getItemReceiptActivityById operation.
     * @callback module:api/ItemReceiptActivityApi~getItemReceiptActivityByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ItemReceiptActivity} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an itemReceiptActivity by id
     * Returns the itemReceiptActivity identified by the specified id.
     * @param {Integer} itemReceiptActivityId Id of the itemReceiptActivity to be returned.
     * @param {module:api/ItemReceiptActivityApi~getItemReceiptActivityByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ItemReceiptActivity}
     */
    this.getItemReceiptActivityById = function(itemReceiptActivityId, callback) {
      var postBody = null;

      // verify the required parameter 'itemReceiptActivityId' is set
      if (itemReceiptActivityId == undefined || itemReceiptActivityId == null) {
        throw "Missing the required parameter 'itemReceiptActivityId' when calling getItemReceiptActivityById";
      }


      var pathParams = {
        'itemReceiptActivityId': itemReceiptActivityId
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
      var returnType = ItemReceiptActivity;

      return this.apiClient.callApi(
        '/beta/itemReceiptActivity/{itemReceiptActivityId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getItemReceiptActivityTags operation.
     * @callback module:api/ItemReceiptActivityApi~getItemReceiptActivityTagsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the tags for an itemReceiptActivity.
     * Get all existing itemReceiptActivity tags.
     * @param {Integer} itemReceiptActivityId Id of the itemReceiptActivity to get tags for
     * @param {module:api/ItemReceiptActivityApi~getItemReceiptActivityTagsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getItemReceiptActivityTags = function(itemReceiptActivityId, callback) {
      var postBody = null;

      // verify the required parameter 'itemReceiptActivityId' is set
      if (itemReceiptActivityId == undefined || itemReceiptActivityId == null) {
        throw "Missing the required parameter 'itemReceiptActivityId' when calling getItemReceiptActivityTags";
      }


      var pathParams = {
        'itemReceiptActivityId': itemReceiptActivityId
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
        '/beta/itemReceiptActivity/{itemReceiptActivityId}/tag', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateItemReceiptActivity operation.
     * @callback module:api/ItemReceiptActivityApi~updateItemReceiptActivityCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an itemReceiptActivity
     * Updates an existing itemReceiptActivity using the specified data.
     * @param {module:model/ItemReceiptActivity} body ItemReceiptActivity to be updated.
     * @param {module:api/ItemReceiptActivityApi~updateItemReceiptActivityCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateItemReceiptActivity = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateItemReceiptActivity";
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
        '/beta/itemReceiptActivity', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
