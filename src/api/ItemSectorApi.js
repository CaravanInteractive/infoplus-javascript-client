(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/ItemSector', '../model/ApiResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ItemSector'), require('../model/ApiResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.ItemSectorApi = factory(root.infoplus.ApiClient, root.infoplus.ItemSector, root.infoplus.ApiResponse);
  }
}(this, function(ApiClient, ItemSector, ApiResponse) {
  'use strict';

  /**
   * ItemSector service.
   * @module api/ItemSectorApi
   * @version beta
   */

  /**
   * Constructs a new ItemSectorApi. 
   * @alias module:api/ItemSectorApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addItemSector operation.
     * @callback module:api/ItemSectorApi~addItemSectorCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ItemSector} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an itemSector
     * Inserts a new itemSector using the specified data.
     * @param {module:model/ItemSector} body ItemSector to be inserted.
     * @param {module:api/ItemSectorApi~addItemSectorCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ItemSector}
     */
    this.addItemSector = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling addItemSector";
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
      var returnType = ItemSector;

      return this.apiClient.callApi(
        '/beta/itemSector', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addItemSectorAudit operation.
     * @callback module:api/ItemSectorApi~addItemSectorAuditCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new audit for an itemSector
     * Adds an audit to an existing itemSector.
     * @param {Integer} itemSectorId Id of the itemSector to add an audit to
     * @param {String} itemSectorAudit The audit to add
     * @param {module:api/ItemSectorApi~addItemSectorAuditCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addItemSectorAudit = function(itemSectorId, itemSectorAudit, callback) {
      var postBody = null;

      // verify the required parameter 'itemSectorId' is set
      if (itemSectorId == undefined || itemSectorId == null) {
        throw "Missing the required parameter 'itemSectorId' when calling addItemSectorAudit";
      }

      // verify the required parameter 'itemSectorAudit' is set
      if (itemSectorAudit == undefined || itemSectorAudit == null) {
        throw "Missing the required parameter 'itemSectorAudit' when calling addItemSectorAudit";
      }


      var pathParams = {
        'itemSectorId': itemSectorId,
        'itemSectorAudit': itemSectorAudit
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
        '/beta/itemSector/{itemSectorId}/audit/{itemSectorAudit}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addItemSectorTag operation.
     * @callback module:api/ItemSectorApi~addItemSectorTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new tags for an itemSector.
     * Adds a tag to an existing itemSector.
     * @param {Integer} itemSectorId Id of the itemSector to add a tag to
     * @param {String} itemSectorTag The tag to add
     * @param {module:api/ItemSectorApi~addItemSectorTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addItemSectorTag = function(itemSectorId, itemSectorTag, callback) {
      var postBody = null;

      // verify the required parameter 'itemSectorId' is set
      if (itemSectorId == undefined || itemSectorId == null) {
        throw "Missing the required parameter 'itemSectorId' when calling addItemSectorTag";
      }

      // verify the required parameter 'itemSectorTag' is set
      if (itemSectorTag == undefined || itemSectorTag == null) {
        throw "Missing the required parameter 'itemSectorTag' when calling addItemSectorTag";
      }


      var pathParams = {
        'itemSectorId': itemSectorId,
        'itemSectorTag': itemSectorTag
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
        '/beta/itemSector/{itemSectorId}/tag/{itemSectorTag}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteItemSector operation.
     * @callback module:api/ItemSectorApi~deleteItemSectorCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an itemSector
     * Deletes the itemSector identified by the specified id.
     * @param {Integer} itemSectorId Id of the itemSector to be deleted.
     * @param {module:api/ItemSectorApi~deleteItemSectorCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteItemSector = function(itemSectorId, callback) {
      var postBody = null;

      // verify the required parameter 'itemSectorId' is set
      if (itemSectorId == undefined || itemSectorId == null) {
        throw "Missing the required parameter 'itemSectorId' when calling deleteItemSector";
      }


      var pathParams = {
        'itemSectorId': itemSectorId
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
        '/beta/itemSector/{itemSectorId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteItemSectorTag operation.
     * @callback module:api/ItemSectorApi~deleteItemSectorTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a tag for an itemSector.
     * Deletes an existing itemSector tag using the specified data.
     * @param {Integer} itemSectorId Id of the itemSector to remove tag from
     * @param {String} itemSectorTag The tag to delete
     * @param {module:api/ItemSectorApi~deleteItemSectorTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteItemSectorTag = function(itemSectorId, itemSectorTag, callback) {
      var postBody = null;

      // verify the required parameter 'itemSectorId' is set
      if (itemSectorId == undefined || itemSectorId == null) {
        throw "Missing the required parameter 'itemSectorId' when calling deleteItemSectorTag";
      }

      // verify the required parameter 'itemSectorTag' is set
      if (itemSectorTag == undefined || itemSectorTag == null) {
        throw "Missing the required parameter 'itemSectorTag' when calling deleteItemSectorTag";
      }


      var pathParams = {
        'itemSectorId': itemSectorId,
        'itemSectorTag': itemSectorTag
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
        '/beta/itemSector/{itemSectorId}/tag/{itemSectorTag}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDuplicateItemSectorById operation.
     * @callback module:api/ItemSectorApi~getDuplicateItemSectorByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ItemSector} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated an itemSector by id
     * Returns a duplicated itemSector identified by the specified id.
     * @param {Integer} itemSectorId Id of the itemSector to be duplicated.
     * @param {module:api/ItemSectorApi~getDuplicateItemSectorByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ItemSector}
     */
    this.getDuplicateItemSectorById = function(itemSectorId, callback) {
      var postBody = null;

      // verify the required parameter 'itemSectorId' is set
      if (itemSectorId == undefined || itemSectorId == null) {
        throw "Missing the required parameter 'itemSectorId' when calling getDuplicateItemSectorById";
      }


      var pathParams = {
        'itemSectorId': itemSectorId
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
      var returnType = ItemSector;

      return this.apiClient.callApi(
        '/beta/itemSector/duplicate/{itemSectorId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getItemSectorByFilter operation.
     * @callback module:api/ItemSectorApi~getItemSectorByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ItemSector>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search itemSectors by filter
     * Returns the list of itemSectors that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/ItemSectorApi~getItemSectorByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/ItemSector>}
     */
    this.getItemSectorByFilter = function(opts, callback) {
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
      var returnType = [ItemSector];

      return this.apiClient.callApi(
        '/beta/itemSector/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getItemSectorById operation.
     * @callback module:api/ItemSectorApi~getItemSectorByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ItemSector} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an itemSector by id
     * Returns the itemSector identified by the specified id.
     * @param {Integer} itemSectorId Id of the itemSector to be returned.
     * @param {module:api/ItemSectorApi~getItemSectorByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ItemSector}
     */
    this.getItemSectorById = function(itemSectorId, callback) {
      var postBody = null;

      // verify the required parameter 'itemSectorId' is set
      if (itemSectorId == undefined || itemSectorId == null) {
        throw "Missing the required parameter 'itemSectorId' when calling getItemSectorById";
      }


      var pathParams = {
        'itemSectorId': itemSectorId
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
      var returnType = ItemSector;

      return this.apiClient.callApi(
        '/beta/itemSector/{itemSectorId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getItemSectorTags operation.
     * @callback module:api/ItemSectorApi~getItemSectorTagsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the tags for an itemSector.
     * Get all existing itemSector tags.
     * @param {Integer} itemSectorId Id of the itemSector to get tags for
     * @param {module:api/ItemSectorApi~getItemSectorTagsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getItemSectorTags = function(itemSectorId, callback) {
      var postBody = null;

      // verify the required parameter 'itemSectorId' is set
      if (itemSectorId == undefined || itemSectorId == null) {
        throw "Missing the required parameter 'itemSectorId' when calling getItemSectorTags";
      }


      var pathParams = {
        'itemSectorId': itemSectorId
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
        '/beta/itemSector/{itemSectorId}/tag', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateItemSector operation.
     * @callback module:api/ItemSectorApi~updateItemSectorCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an itemSector
     * Updates an existing itemSector using the specified data.
     * @param {module:model/ItemSector} body ItemSector to be updated.
     * @param {module:api/ItemSectorApi~updateItemSectorCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateItemSector = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateItemSector";
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
        '/beta/itemSector', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));