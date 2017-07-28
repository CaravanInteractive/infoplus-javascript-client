(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/ItemBuyer', '../model/ApiResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ItemBuyer'), require('../model/ApiResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.ItemBuyerApi = factory(root.infoplus.ApiClient, root.infoplus.ItemBuyer, root.infoplus.ApiResponse);
  }
}(this, function(ApiClient, ItemBuyer, ApiResponse) {
  'use strict';

  /**
   * ItemBuyer service.
   * @module api/ItemBuyerApi
   * @version beta
   */

  /**
   * Constructs a new ItemBuyerApi. 
   * @alias module:api/ItemBuyerApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addItemBuyer operation.
     * @callback module:api/ItemBuyerApi~addItemBuyerCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ItemBuyer} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an itemBuyer
     * Inserts a new itemBuyer using the specified data.
     * @param {module:model/ItemBuyer} body ItemBuyer to be inserted.
     * @param {module:api/ItemBuyerApi~addItemBuyerCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ItemBuyer}
     */
    this.addItemBuyer = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling addItemBuyer";
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
      var returnType = ItemBuyer;

      return this.apiClient.callApi(
        '/beta/itemBuyer', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addItemBuyerAudit operation.
     * @callback module:api/ItemBuyerApi~addItemBuyerAuditCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new audit for an itemBuyer
     * Adds an audit to an existing itemBuyer.
     * @param {Integer} itemBuyerId Id of the itemBuyer to add an audit to
     * @param {String} itemBuyerAudit The audit to add
     * @param {module:api/ItemBuyerApi~addItemBuyerAuditCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addItemBuyerAudit = function(itemBuyerId, itemBuyerAudit, callback) {
      var postBody = null;

      // verify the required parameter 'itemBuyerId' is set
      if (itemBuyerId == undefined || itemBuyerId == null) {
        throw "Missing the required parameter 'itemBuyerId' when calling addItemBuyerAudit";
      }

      // verify the required parameter 'itemBuyerAudit' is set
      if (itemBuyerAudit == undefined || itemBuyerAudit == null) {
        throw "Missing the required parameter 'itemBuyerAudit' when calling addItemBuyerAudit";
      }


      var pathParams = {
        'itemBuyerId': itemBuyerId,
        'itemBuyerAudit': itemBuyerAudit
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
        '/beta/itemBuyer/{itemBuyerId}/audit/{itemBuyerAudit}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addItemBuyerTag operation.
     * @callback module:api/ItemBuyerApi~addItemBuyerTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new tags for an itemBuyer.
     * Adds a tag to an existing itemBuyer.
     * @param {Integer} itemBuyerId Id of the itemBuyer to add a tag to
     * @param {String} itemBuyerTag The tag to add
     * @param {module:api/ItemBuyerApi~addItemBuyerTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addItemBuyerTag = function(itemBuyerId, itemBuyerTag, callback) {
      var postBody = null;

      // verify the required parameter 'itemBuyerId' is set
      if (itemBuyerId == undefined || itemBuyerId == null) {
        throw "Missing the required parameter 'itemBuyerId' when calling addItemBuyerTag";
      }

      // verify the required parameter 'itemBuyerTag' is set
      if (itemBuyerTag == undefined || itemBuyerTag == null) {
        throw "Missing the required parameter 'itemBuyerTag' when calling addItemBuyerTag";
      }


      var pathParams = {
        'itemBuyerId': itemBuyerId,
        'itemBuyerTag': itemBuyerTag
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
        '/beta/itemBuyer/{itemBuyerId}/tag/{itemBuyerTag}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteItemBuyer operation.
     * @callback module:api/ItemBuyerApi~deleteItemBuyerCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an itemBuyer
     * Deletes the itemBuyer identified by the specified id.
     * @param {Integer} itemBuyerId Id of the itemBuyer to be deleted.
     * @param {module:api/ItemBuyerApi~deleteItemBuyerCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteItemBuyer = function(itemBuyerId, callback) {
      var postBody = null;

      // verify the required parameter 'itemBuyerId' is set
      if (itemBuyerId == undefined || itemBuyerId == null) {
        throw "Missing the required parameter 'itemBuyerId' when calling deleteItemBuyer";
      }


      var pathParams = {
        'itemBuyerId': itemBuyerId
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
        '/beta/itemBuyer/{itemBuyerId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteItemBuyerTag operation.
     * @callback module:api/ItemBuyerApi~deleteItemBuyerTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a tag for an itemBuyer.
     * Deletes an existing itemBuyer tag using the specified data.
     * @param {Integer} itemBuyerId Id of the itemBuyer to remove tag from
     * @param {String} itemBuyerTag The tag to delete
     * @param {module:api/ItemBuyerApi~deleteItemBuyerTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteItemBuyerTag = function(itemBuyerId, itemBuyerTag, callback) {
      var postBody = null;

      // verify the required parameter 'itemBuyerId' is set
      if (itemBuyerId == undefined || itemBuyerId == null) {
        throw "Missing the required parameter 'itemBuyerId' when calling deleteItemBuyerTag";
      }

      // verify the required parameter 'itemBuyerTag' is set
      if (itemBuyerTag == undefined || itemBuyerTag == null) {
        throw "Missing the required parameter 'itemBuyerTag' when calling deleteItemBuyerTag";
      }


      var pathParams = {
        'itemBuyerId': itemBuyerId,
        'itemBuyerTag': itemBuyerTag
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
        '/beta/itemBuyer/{itemBuyerId}/tag/{itemBuyerTag}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDuplicateItemBuyerById operation.
     * @callback module:api/ItemBuyerApi~getDuplicateItemBuyerByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ItemBuyer} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated an itemBuyer by id
     * Returns a duplicated itemBuyer identified by the specified id.
     * @param {Integer} itemBuyerId Id of the itemBuyer to be duplicated.
     * @param {module:api/ItemBuyerApi~getDuplicateItemBuyerByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ItemBuyer}
     */
    this.getDuplicateItemBuyerById = function(itemBuyerId, callback) {
      var postBody = null;

      // verify the required parameter 'itemBuyerId' is set
      if (itemBuyerId == undefined || itemBuyerId == null) {
        throw "Missing the required parameter 'itemBuyerId' when calling getDuplicateItemBuyerById";
      }


      var pathParams = {
        'itemBuyerId': itemBuyerId
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
      var returnType = ItemBuyer;

      return this.apiClient.callApi(
        '/beta/itemBuyer/duplicate/{itemBuyerId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getItemBuyerByFilter operation.
     * @callback module:api/ItemBuyerApi~getItemBuyerByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ItemBuyer>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search itemBuyers by filter
     * Returns the list of itemBuyers that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/ItemBuyerApi~getItemBuyerByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/ItemBuyer>}
     */
    this.getItemBuyerByFilter = function(opts, callback) {
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
      var returnType = [ItemBuyer];

      return this.apiClient.callApi(
        '/beta/itemBuyer/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getItemBuyerById operation.
     * @callback module:api/ItemBuyerApi~getItemBuyerByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ItemBuyer} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an itemBuyer by id
     * Returns the itemBuyer identified by the specified id.
     * @param {Integer} itemBuyerId Id of the itemBuyer to be returned.
     * @param {module:api/ItemBuyerApi~getItemBuyerByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ItemBuyer}
     */
    this.getItemBuyerById = function(itemBuyerId, callback) {
      var postBody = null;

      // verify the required parameter 'itemBuyerId' is set
      if (itemBuyerId == undefined || itemBuyerId == null) {
        throw "Missing the required parameter 'itemBuyerId' when calling getItemBuyerById";
      }


      var pathParams = {
        'itemBuyerId': itemBuyerId
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
      var returnType = ItemBuyer;

      return this.apiClient.callApi(
        '/beta/itemBuyer/{itemBuyerId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getItemBuyerTags operation.
     * @callback module:api/ItemBuyerApi~getItemBuyerTagsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the tags for an itemBuyer.
     * Get all existing itemBuyer tags.
     * @param {Integer} itemBuyerId Id of the itemBuyer to get tags for
     * @param {module:api/ItemBuyerApi~getItemBuyerTagsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getItemBuyerTags = function(itemBuyerId, callback) {
      var postBody = null;

      // verify the required parameter 'itemBuyerId' is set
      if (itemBuyerId == undefined || itemBuyerId == null) {
        throw "Missing the required parameter 'itemBuyerId' when calling getItemBuyerTags";
      }


      var pathParams = {
        'itemBuyerId': itemBuyerId
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
        '/beta/itemBuyer/{itemBuyerId}/tag', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateItemBuyer operation.
     * @callback module:api/ItemBuyerApi~updateItemBuyerCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an itemBuyer
     * Updates an existing itemBuyer using the specified data.
     * @param {module:model/ItemBuyer} body ItemBuyer to be updated.
     * @param {module:api/ItemBuyerApi~updateItemBuyerCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateItemBuyer = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateItemBuyer";
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
        '/beta/itemBuyer', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
