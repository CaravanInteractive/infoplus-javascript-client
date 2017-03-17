(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/ItemReceipt'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ItemReceipt'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.ItemReceiptApi = factory(root.infoplus.ApiClient, root.infoplus.ItemReceipt);
  }
}(this, function(ApiClient, ItemReceipt) {
  'use strict';

  /**
   * ItemReceipt service.
   * @module api/ItemReceiptApi
   * @version beta
   */

  /**
   * Constructs a new ItemReceiptApi. 
   * @alias module:api/ItemReceiptApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addItemReceiptAudit operation.
     * @callback module:api/ItemReceiptApi~addItemReceiptAuditCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new audit for an itemReceipt
     * Adds an audit to an existing itemReceipt.
     * @param {Integer} itemReceiptId Id of the itemReceipt to add an audit to
     * @param {String} itemReceiptAudit The audit to add
     * @param {module:api/ItemReceiptApi~addItemReceiptAuditCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addItemReceiptAudit = function(itemReceiptId, itemReceiptAudit, callback) {
      var postBody = null;

      // verify the required parameter 'itemReceiptId' is set
      if (itemReceiptId == undefined || itemReceiptId == null) {
        throw "Missing the required parameter 'itemReceiptId' when calling addItemReceiptAudit";
      }

      // verify the required parameter 'itemReceiptAudit' is set
      if (itemReceiptAudit == undefined || itemReceiptAudit == null) {
        throw "Missing the required parameter 'itemReceiptAudit' when calling addItemReceiptAudit";
      }


      var pathParams = {
        'itemReceiptId': itemReceiptId,
        'itemReceiptAudit': itemReceiptAudit
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
        '/beta/itemReceipt/{itemReceiptId}/audit/{itemReceiptAudit}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addItemReceiptTag operation.
     * @callback module:api/ItemReceiptApi~addItemReceiptTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new tags for an itemReceipt.
     * Adds a tag to an existing itemReceipt.
     * @param {Integer} itemReceiptId Id of the itemReceipt to add a tag to
     * @param {String} itemReceiptTag The tag to add
     * @param {module:api/ItemReceiptApi~addItemReceiptTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addItemReceiptTag = function(itemReceiptId, itemReceiptTag, callback) {
      var postBody = null;

      // verify the required parameter 'itemReceiptId' is set
      if (itemReceiptId == undefined || itemReceiptId == null) {
        throw "Missing the required parameter 'itemReceiptId' when calling addItemReceiptTag";
      }

      // verify the required parameter 'itemReceiptTag' is set
      if (itemReceiptTag == undefined || itemReceiptTag == null) {
        throw "Missing the required parameter 'itemReceiptTag' when calling addItemReceiptTag";
      }


      var pathParams = {
        'itemReceiptId': itemReceiptId,
        'itemReceiptTag': itemReceiptTag
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
        '/beta/itemReceipt/{itemReceiptId}/tag/{itemReceiptTag}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteItemReceiptTag operation.
     * @callback module:api/ItemReceiptApi~deleteItemReceiptTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a tag for an itemReceipt.
     * Deletes an existing itemReceipt tag using the specified data.
     * @param {Integer} itemReceiptId Id of the itemReceipt to remove tag from
     * @param {String} itemReceiptTag The tag to delete
     * @param {module:api/ItemReceiptApi~deleteItemReceiptTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteItemReceiptTag = function(itemReceiptId, itemReceiptTag, callback) {
      var postBody = null;

      // verify the required parameter 'itemReceiptId' is set
      if (itemReceiptId == undefined || itemReceiptId == null) {
        throw "Missing the required parameter 'itemReceiptId' when calling deleteItemReceiptTag";
      }

      // verify the required parameter 'itemReceiptTag' is set
      if (itemReceiptTag == undefined || itemReceiptTag == null) {
        throw "Missing the required parameter 'itemReceiptTag' when calling deleteItemReceiptTag";
      }


      var pathParams = {
        'itemReceiptId': itemReceiptId,
        'itemReceiptTag': itemReceiptTag
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
        '/beta/itemReceipt/{itemReceiptId}/tag/{itemReceiptTag}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDuplicateItemReceiptById operation.
     * @callback module:api/ItemReceiptApi~getDuplicateItemReceiptByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ItemReceipt} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated an itemReceipt by id
     * Returns a duplicated itemReceipt identified by the specified id.
     * @param {Integer} itemReceiptId Id of the itemReceipt to be duplicated.
     * @param {module:api/ItemReceiptApi~getDuplicateItemReceiptByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ItemReceipt}
     */
    this.getDuplicateItemReceiptById = function(itemReceiptId, callback) {
      var postBody = null;

      // verify the required parameter 'itemReceiptId' is set
      if (itemReceiptId == undefined || itemReceiptId == null) {
        throw "Missing the required parameter 'itemReceiptId' when calling getDuplicateItemReceiptById";
      }


      var pathParams = {
        'itemReceiptId': itemReceiptId
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
      var returnType = ItemReceipt;

      return this.apiClient.callApi(
        '/beta/itemReceipt/duplicate/{itemReceiptId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getItemReceiptByFilter operation.
     * @callback module:api/ItemReceiptApi~getItemReceiptByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ItemReceipt>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search itemReceipts by filter
     * Returns the list of itemReceipts that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/ItemReceiptApi~getItemReceiptByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/ItemReceipt>}
     */
    this.getItemReceiptByFilter = function(opts, callback) {
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
      var returnType = [ItemReceipt];

      return this.apiClient.callApi(
        '/beta/itemReceipt/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getItemReceiptById operation.
     * @callback module:api/ItemReceiptApi~getItemReceiptByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ItemReceipt} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an itemReceipt by id
     * Returns the itemReceipt identified by the specified id.
     * @param {Integer} itemReceiptId Id of the itemReceipt to be returned.
     * @param {module:api/ItemReceiptApi~getItemReceiptByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ItemReceipt}
     */
    this.getItemReceiptById = function(itemReceiptId, callback) {
      var postBody = null;

      // verify the required parameter 'itemReceiptId' is set
      if (itemReceiptId == undefined || itemReceiptId == null) {
        throw "Missing the required parameter 'itemReceiptId' when calling getItemReceiptById";
      }


      var pathParams = {
        'itemReceiptId': itemReceiptId
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
      var returnType = ItemReceipt;

      return this.apiClient.callApi(
        '/beta/itemReceipt/{itemReceiptId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getItemReceiptTags operation.
     * @callback module:api/ItemReceiptApi~getItemReceiptTagsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the tags for an itemReceipt.
     * Get all existing itemReceipt tags.
     * @param {Integer} itemReceiptId Id of the itemReceipt to get tags for
     * @param {module:api/ItemReceiptApi~getItemReceiptTagsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getItemReceiptTags = function(itemReceiptId, callback) {
      var postBody = null;

      // verify the required parameter 'itemReceiptId' is set
      if (itemReceiptId == undefined || itemReceiptId == null) {
        throw "Missing the required parameter 'itemReceiptId' when calling getItemReceiptTags";
      }


      var pathParams = {
        'itemReceiptId': itemReceiptId
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
        '/beta/itemReceipt/{itemReceiptId}/tag', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateItemReceiptCustomFields operation.
     * @callback module:api/ItemReceiptApi~updateItemReceiptCustomFieldsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an itemReceipt custom fields
     * Updates an existing itemReceipt custom fields using the specified data.
     * @param {module:model/ItemReceipt} body ItemReceipt to be updated.
     * @param {module:api/ItemReceiptApi~updateItemReceiptCustomFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateItemReceiptCustomFields = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateItemReceiptCustomFields";
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
        '/beta/itemReceipt/customFields', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
