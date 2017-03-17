(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/ItemProductCode', '../model/ApiResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ItemProductCode'), require('../model/ApiResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.ItemProductCodeApi = factory(root.infoplus.ApiClient, root.infoplus.ItemProductCode, root.infoplus.ApiResponse);
  }
}(this, function(ApiClient, ItemProductCode, ApiResponse) {
  'use strict';

  /**
   * ItemProductCode service.
   * @module api/ItemProductCodeApi
   * @version beta
   */

  /**
   * Constructs a new ItemProductCodeApi. 
   * @alias module:api/ItemProductCodeApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addItemProductCode operation.
     * @callback module:api/ItemProductCodeApi~addItemProductCodeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ItemProductCode} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an itemProductCode
     * Inserts a new itemProductCode using the specified data.
     * @param {module:model/ItemProductCode} body ItemProductCode to be inserted.
     * @param {module:api/ItemProductCodeApi~addItemProductCodeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ItemProductCode}
     */
    this.addItemProductCode = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling addItemProductCode";
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
      var returnType = ItemProductCode;

      return this.apiClient.callApi(
        '/beta/itemProductCode', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addItemProductCodeAudit operation.
     * @callback module:api/ItemProductCodeApi~addItemProductCodeAuditCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new audit for an itemProductCode
     * Adds an audit to an existing itemProductCode.
     * @param {Integer} itemProductCodeId Id of the itemProductCode to add an audit to
     * @param {String} itemProductCodeAudit The audit to add
     * @param {module:api/ItemProductCodeApi~addItemProductCodeAuditCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addItemProductCodeAudit = function(itemProductCodeId, itemProductCodeAudit, callback) {
      var postBody = null;

      // verify the required parameter 'itemProductCodeId' is set
      if (itemProductCodeId == undefined || itemProductCodeId == null) {
        throw "Missing the required parameter 'itemProductCodeId' when calling addItemProductCodeAudit";
      }

      // verify the required parameter 'itemProductCodeAudit' is set
      if (itemProductCodeAudit == undefined || itemProductCodeAudit == null) {
        throw "Missing the required parameter 'itemProductCodeAudit' when calling addItemProductCodeAudit";
      }


      var pathParams = {
        'itemProductCodeId': itemProductCodeId,
        'itemProductCodeAudit': itemProductCodeAudit
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
        '/beta/itemProductCode/{itemProductCodeId}/audit/{itemProductCodeAudit}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addItemProductCodeTag operation.
     * @callback module:api/ItemProductCodeApi~addItemProductCodeTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new tags for an itemProductCode.
     * Adds a tag to an existing itemProductCode.
     * @param {Integer} itemProductCodeId Id of the itemProductCode to add a tag to
     * @param {String} itemProductCodeTag The tag to add
     * @param {module:api/ItemProductCodeApi~addItemProductCodeTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addItemProductCodeTag = function(itemProductCodeId, itemProductCodeTag, callback) {
      var postBody = null;

      // verify the required parameter 'itemProductCodeId' is set
      if (itemProductCodeId == undefined || itemProductCodeId == null) {
        throw "Missing the required parameter 'itemProductCodeId' when calling addItemProductCodeTag";
      }

      // verify the required parameter 'itemProductCodeTag' is set
      if (itemProductCodeTag == undefined || itemProductCodeTag == null) {
        throw "Missing the required parameter 'itemProductCodeTag' when calling addItemProductCodeTag";
      }


      var pathParams = {
        'itemProductCodeId': itemProductCodeId,
        'itemProductCodeTag': itemProductCodeTag
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
        '/beta/itemProductCode/{itemProductCodeId}/tag/{itemProductCodeTag}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteItemProductCode operation.
     * @callback module:api/ItemProductCodeApi~deleteItemProductCodeCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an itemProductCode
     * Deletes the itemProductCode identified by the specified id.
     * @param {Integer} itemProductCodeId Id of the itemProductCode to be deleted.
     * @param {module:api/ItemProductCodeApi~deleteItemProductCodeCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteItemProductCode = function(itemProductCodeId, callback) {
      var postBody = null;

      // verify the required parameter 'itemProductCodeId' is set
      if (itemProductCodeId == undefined || itemProductCodeId == null) {
        throw "Missing the required parameter 'itemProductCodeId' when calling deleteItemProductCode";
      }


      var pathParams = {
        'itemProductCodeId': itemProductCodeId
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
        '/beta/itemProductCode/{itemProductCodeId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteItemProductCodeTag operation.
     * @callback module:api/ItemProductCodeApi~deleteItemProductCodeTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a tag for an itemProductCode.
     * Deletes an existing itemProductCode tag using the specified data.
     * @param {Integer} itemProductCodeId Id of the itemProductCode to remove tag from
     * @param {String} itemProductCodeTag The tag to delete
     * @param {module:api/ItemProductCodeApi~deleteItemProductCodeTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteItemProductCodeTag = function(itemProductCodeId, itemProductCodeTag, callback) {
      var postBody = null;

      // verify the required parameter 'itemProductCodeId' is set
      if (itemProductCodeId == undefined || itemProductCodeId == null) {
        throw "Missing the required parameter 'itemProductCodeId' when calling deleteItemProductCodeTag";
      }

      // verify the required parameter 'itemProductCodeTag' is set
      if (itemProductCodeTag == undefined || itemProductCodeTag == null) {
        throw "Missing the required parameter 'itemProductCodeTag' when calling deleteItemProductCodeTag";
      }


      var pathParams = {
        'itemProductCodeId': itemProductCodeId,
        'itemProductCodeTag': itemProductCodeTag
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
        '/beta/itemProductCode/{itemProductCodeId}/tag/{itemProductCodeTag}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDuplicateItemProductCodeById operation.
     * @callback module:api/ItemProductCodeApi~getDuplicateItemProductCodeByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ItemProductCode} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated an itemProductCode by id
     * Returns a duplicated itemProductCode identified by the specified id.
     * @param {Integer} itemProductCodeId Id of the itemProductCode to be duplicated.
     * @param {module:api/ItemProductCodeApi~getDuplicateItemProductCodeByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ItemProductCode}
     */
    this.getDuplicateItemProductCodeById = function(itemProductCodeId, callback) {
      var postBody = null;

      // verify the required parameter 'itemProductCodeId' is set
      if (itemProductCodeId == undefined || itemProductCodeId == null) {
        throw "Missing the required parameter 'itemProductCodeId' when calling getDuplicateItemProductCodeById";
      }


      var pathParams = {
        'itemProductCodeId': itemProductCodeId
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
      var returnType = ItemProductCode;

      return this.apiClient.callApi(
        '/beta/itemProductCode/duplicate/{itemProductCodeId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getItemProductCodeByFilter operation.
     * @callback module:api/ItemProductCodeApi~getItemProductCodeByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ItemProductCode>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search itemProductCodes by filter
     * Returns the list of itemProductCodes that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/ItemProductCodeApi~getItemProductCodeByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/ItemProductCode>}
     */
    this.getItemProductCodeByFilter = function(opts, callback) {
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
      var returnType = [ItemProductCode];

      return this.apiClient.callApi(
        '/beta/itemProductCode/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getItemProductCodeById operation.
     * @callback module:api/ItemProductCodeApi~getItemProductCodeByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ItemProductCode} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an itemProductCode by id
     * Returns the itemProductCode identified by the specified id.
     * @param {Integer} itemProductCodeId Id of the itemProductCode to be returned.
     * @param {module:api/ItemProductCodeApi~getItemProductCodeByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ItemProductCode}
     */
    this.getItemProductCodeById = function(itemProductCodeId, callback) {
      var postBody = null;

      // verify the required parameter 'itemProductCodeId' is set
      if (itemProductCodeId == undefined || itemProductCodeId == null) {
        throw "Missing the required parameter 'itemProductCodeId' when calling getItemProductCodeById";
      }


      var pathParams = {
        'itemProductCodeId': itemProductCodeId
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
      var returnType = ItemProductCode;

      return this.apiClient.callApi(
        '/beta/itemProductCode/{itemProductCodeId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getItemProductCodeTags operation.
     * @callback module:api/ItemProductCodeApi~getItemProductCodeTagsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the tags for an itemProductCode.
     * Get all existing itemProductCode tags.
     * @param {Integer} itemProductCodeId Id of the itemProductCode to get tags for
     * @param {module:api/ItemProductCodeApi~getItemProductCodeTagsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getItemProductCodeTags = function(itemProductCodeId, callback) {
      var postBody = null;

      // verify the required parameter 'itemProductCodeId' is set
      if (itemProductCodeId == undefined || itemProductCodeId == null) {
        throw "Missing the required parameter 'itemProductCodeId' when calling getItemProductCodeTags";
      }


      var pathParams = {
        'itemProductCodeId': itemProductCodeId
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
        '/beta/itemProductCode/{itemProductCodeId}/tag', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateItemProductCode operation.
     * @callback module:api/ItemProductCodeApi~updateItemProductCodeCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an itemProductCode
     * Updates an existing itemProductCode using the specified data.
     * @param {module:model/ItemProductCode} body ItemProductCode to be updated.
     * @param {module:api/ItemProductCodeApi~updateItemProductCodeCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateItemProductCode = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateItemProductCode";
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
        '/beta/itemProductCode', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
