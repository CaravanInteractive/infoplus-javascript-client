(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/ApiResponse', '../model/ItemAccountCode'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiResponse'), require('../model/ItemAccountCode'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.ItemAccountCodeApi = factory(root.infoplus.ApiClient, root.infoplus.ApiResponse, root.infoplus.ItemAccountCode);
  }
}(this, function(ApiClient, ApiResponse, ItemAccountCode) {
  'use strict';

  /**
   * ItemAccountCode service.
   * @module api/ItemAccountCodeApi
   * @version beta
   */

  /**
   * Constructs a new ItemAccountCodeApi. 
   * @alias module:api/ItemAccountCodeApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addItemAccountCode operation.
     * @callback module:api/ItemAccountCodeApi~addItemAccountCodeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ItemAccountCode} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an itemAccountCode
     * Inserts a new itemAccountCode using the specified data.
     * @param {module:model/ItemAccountCode} body ItemAccountCode to be inserted.
     * @param {module:api/ItemAccountCodeApi~addItemAccountCodeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ItemAccountCode}
     */
    this.addItemAccountCode = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling addItemAccountCode";
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
      var returnType = ItemAccountCode;

      return this.apiClient.callApi(
        '/beta/itemAccountCode', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addItemAccountCodeAudit operation.
     * @callback module:api/ItemAccountCodeApi~addItemAccountCodeAuditCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new audit for an itemAccountCode
     * Adds an audit to an existing itemAccountCode.
     * @param {Integer} itemAccountCodeId Id of the itemAccountCode to add an audit to
     * @param {String} itemAccountCodeAudit The audit to add
     * @param {module:api/ItemAccountCodeApi~addItemAccountCodeAuditCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addItemAccountCodeAudit = function(itemAccountCodeId, itemAccountCodeAudit, callback) {
      var postBody = null;

      // verify the required parameter 'itemAccountCodeId' is set
      if (itemAccountCodeId == undefined || itemAccountCodeId == null) {
        throw "Missing the required parameter 'itemAccountCodeId' when calling addItemAccountCodeAudit";
      }

      // verify the required parameter 'itemAccountCodeAudit' is set
      if (itemAccountCodeAudit == undefined || itemAccountCodeAudit == null) {
        throw "Missing the required parameter 'itemAccountCodeAudit' when calling addItemAccountCodeAudit";
      }


      var pathParams = {
        'itemAccountCodeId': itemAccountCodeId,
        'itemAccountCodeAudit': itemAccountCodeAudit
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
        '/beta/itemAccountCode/{itemAccountCodeId}/audit/{itemAccountCodeAudit}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addItemAccountCodeTag operation.
     * @callback module:api/ItemAccountCodeApi~addItemAccountCodeTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new tags for an itemAccountCode.
     * Adds a tag to an existing itemAccountCode.
     * @param {Integer} itemAccountCodeId Id of the itemAccountCode to add a tag to
     * @param {String} itemAccountCodeTag The tag to add
     * @param {module:api/ItemAccountCodeApi~addItemAccountCodeTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addItemAccountCodeTag = function(itemAccountCodeId, itemAccountCodeTag, callback) {
      var postBody = null;

      // verify the required parameter 'itemAccountCodeId' is set
      if (itemAccountCodeId == undefined || itemAccountCodeId == null) {
        throw "Missing the required parameter 'itemAccountCodeId' when calling addItemAccountCodeTag";
      }

      // verify the required parameter 'itemAccountCodeTag' is set
      if (itemAccountCodeTag == undefined || itemAccountCodeTag == null) {
        throw "Missing the required parameter 'itemAccountCodeTag' when calling addItemAccountCodeTag";
      }


      var pathParams = {
        'itemAccountCodeId': itemAccountCodeId,
        'itemAccountCodeTag': itemAccountCodeTag
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
        '/beta/itemAccountCode/{itemAccountCodeId}/tag/{itemAccountCodeTag}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteItemAccountCode operation.
     * @callback module:api/ItemAccountCodeApi~deleteItemAccountCodeCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an itemAccountCode
     * Deletes the itemAccountCode identified by the specified id.
     * @param {Integer} itemAccountCodeId Id of the itemAccountCode to be deleted.
     * @param {module:api/ItemAccountCodeApi~deleteItemAccountCodeCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteItemAccountCode = function(itemAccountCodeId, callback) {
      var postBody = null;

      // verify the required parameter 'itemAccountCodeId' is set
      if (itemAccountCodeId == undefined || itemAccountCodeId == null) {
        throw "Missing the required parameter 'itemAccountCodeId' when calling deleteItemAccountCode";
      }


      var pathParams = {
        'itemAccountCodeId': itemAccountCodeId
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
        '/beta/itemAccountCode/{itemAccountCodeId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteItemAccountCodeTag operation.
     * @callback module:api/ItemAccountCodeApi~deleteItemAccountCodeTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a tag for an itemAccountCode.
     * Deletes an existing itemAccountCode tag using the specified data.
     * @param {Integer} itemAccountCodeId Id of the itemAccountCode to remove tag from
     * @param {String} itemAccountCodeTag The tag to delete
     * @param {module:api/ItemAccountCodeApi~deleteItemAccountCodeTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteItemAccountCodeTag = function(itemAccountCodeId, itemAccountCodeTag, callback) {
      var postBody = null;

      // verify the required parameter 'itemAccountCodeId' is set
      if (itemAccountCodeId == undefined || itemAccountCodeId == null) {
        throw "Missing the required parameter 'itemAccountCodeId' when calling deleteItemAccountCodeTag";
      }

      // verify the required parameter 'itemAccountCodeTag' is set
      if (itemAccountCodeTag == undefined || itemAccountCodeTag == null) {
        throw "Missing the required parameter 'itemAccountCodeTag' when calling deleteItemAccountCodeTag";
      }


      var pathParams = {
        'itemAccountCodeId': itemAccountCodeId,
        'itemAccountCodeTag': itemAccountCodeTag
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
        '/beta/itemAccountCode/{itemAccountCodeId}/tag/{itemAccountCodeTag}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDuplicateItemAccountCodeById operation.
     * @callback module:api/ItemAccountCodeApi~getDuplicateItemAccountCodeByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ItemAccountCode} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated an itemAccountCode by id
     * Returns a duplicated itemAccountCode identified by the specified id.
     * @param {Integer} itemAccountCodeId Id of the itemAccountCode to be duplicated.
     * @param {module:api/ItemAccountCodeApi~getDuplicateItemAccountCodeByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ItemAccountCode}
     */
    this.getDuplicateItemAccountCodeById = function(itemAccountCodeId, callback) {
      var postBody = null;

      // verify the required parameter 'itemAccountCodeId' is set
      if (itemAccountCodeId == undefined || itemAccountCodeId == null) {
        throw "Missing the required parameter 'itemAccountCodeId' when calling getDuplicateItemAccountCodeById";
      }


      var pathParams = {
        'itemAccountCodeId': itemAccountCodeId
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
      var returnType = ItemAccountCode;

      return this.apiClient.callApi(
        '/beta/itemAccountCode/duplicate/{itemAccountCodeId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getItemAccountCodeByFilter operation.
     * @callback module:api/ItemAccountCodeApi~getItemAccountCodeByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ItemAccountCode>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search itemAccountCodes by filter
     * Returns the list of itemAccountCodes that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/ItemAccountCodeApi~getItemAccountCodeByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/ItemAccountCode>}
     */
    this.getItemAccountCodeByFilter = function(opts, callback) {
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
      var returnType = [ItemAccountCode];

      return this.apiClient.callApi(
        '/beta/itemAccountCode/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getItemAccountCodeById operation.
     * @callback module:api/ItemAccountCodeApi~getItemAccountCodeByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ItemAccountCode} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an itemAccountCode by id
     * Returns the itemAccountCode identified by the specified id.
     * @param {Integer} itemAccountCodeId Id of the itemAccountCode to be returned.
     * @param {module:api/ItemAccountCodeApi~getItemAccountCodeByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ItemAccountCode}
     */
    this.getItemAccountCodeById = function(itemAccountCodeId, callback) {
      var postBody = null;

      // verify the required parameter 'itemAccountCodeId' is set
      if (itemAccountCodeId == undefined || itemAccountCodeId == null) {
        throw "Missing the required parameter 'itemAccountCodeId' when calling getItemAccountCodeById";
      }


      var pathParams = {
        'itemAccountCodeId': itemAccountCodeId
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
      var returnType = ItemAccountCode;

      return this.apiClient.callApi(
        '/beta/itemAccountCode/{itemAccountCodeId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getItemAccountCodeTags operation.
     * @callback module:api/ItemAccountCodeApi~getItemAccountCodeTagsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the tags for an itemAccountCode.
     * Get all existing itemAccountCode tags.
     * @param {Integer} itemAccountCodeId Id of the itemAccountCode to get tags for
     * @param {module:api/ItemAccountCodeApi~getItemAccountCodeTagsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getItemAccountCodeTags = function(itemAccountCodeId, callback) {
      var postBody = null;

      // verify the required parameter 'itemAccountCodeId' is set
      if (itemAccountCodeId == undefined || itemAccountCodeId == null) {
        throw "Missing the required parameter 'itemAccountCodeId' when calling getItemAccountCodeTags";
      }


      var pathParams = {
        'itemAccountCodeId': itemAccountCodeId
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
        '/beta/itemAccountCode/{itemAccountCodeId}/tag', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateItemAccountCode operation.
     * @callback module:api/ItemAccountCodeApi~updateItemAccountCodeCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an itemAccountCode
     * Updates an existing itemAccountCode using the specified data.
     * @param {module:model/ItemAccountCode} body ItemAccountCode to be updated.
     * @param {module:api/ItemAccountCodeApi~updateItemAccountCodeCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateItemAccountCode = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateItemAccountCode";
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
        '/beta/itemAccountCode', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
