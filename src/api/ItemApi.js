(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/Item', '../model/ApiResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Item'), require('../model/ApiResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.ItemApi = factory(root.infoplus.ApiClient, root.infoplus.Item, root.infoplus.ApiResponse);
  }
}(this, function(ApiClient, Item, ApiResponse) {
  'use strict';

  /**
   * Item service.
   * @module api/ItemApi
   * @version beta
   */

  /**
   * Constructs a new ItemApi. 
   * @alias module:api/ItemApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addItem operation.
     * @callback module:api/ItemApi~addItemCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Item} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an item
     * Inserts a new item using the specified data.
     * @param {module:model/Item} body Item to be inserted.
     * @param {module:api/ItemApi~addItemCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Item}
     */
    this.addItem = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling addItem";
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
      var returnType = Item;

      return this.apiClient.callApi(
        '/beta/item', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addItemAudit operation.
     * @callback module:api/ItemApi~addItemAuditCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new audit for an item
     * Adds an audit to an existing item.
     * @param {Integer} itemId Id of the item to add an audit to
     * @param {String} itemAudit The audit to add
     * @param {module:api/ItemApi~addItemAuditCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addItemAudit = function(itemId, itemAudit, callback) {
      var postBody = null;

      // verify the required parameter 'itemId' is set
      if (itemId == undefined || itemId == null) {
        throw "Missing the required parameter 'itemId' when calling addItemAudit";
      }

      // verify the required parameter 'itemAudit' is set
      if (itemAudit == undefined || itemAudit == null) {
        throw "Missing the required parameter 'itemAudit' when calling addItemAudit";
      }


      var pathParams = {
        'itemId': itemId,
        'itemAudit': itemAudit
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
        '/beta/item/{itemId}/audit/{itemAudit}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addItemTag operation.
     * @callback module:api/ItemApi~addItemTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new tags for an item.
     * Adds a tag to an existing item.
     * @param {Integer} itemId Id of the item to add a tag to
     * @param {String} itemTag The tag to add
     * @param {module:api/ItemApi~addItemTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addItemTag = function(itemId, itemTag, callback) {
      var postBody = null;

      // verify the required parameter 'itemId' is set
      if (itemId == undefined || itemId == null) {
        throw "Missing the required parameter 'itemId' when calling addItemTag";
      }

      // verify the required parameter 'itemTag' is set
      if (itemTag == undefined || itemTag == null) {
        throw "Missing the required parameter 'itemTag' when calling addItemTag";
      }


      var pathParams = {
        'itemId': itemId,
        'itemTag': itemTag
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
        '/beta/item/{itemId}/tag/{itemTag}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteItem operation.
     * @callback module:api/ItemApi~deleteItemCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an item
     * Deletes the item identified by the specified id.
     * @param {Integer} itemId Id of the item to be deleted.
     * @param {module:api/ItemApi~deleteItemCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteItem = function(itemId, callback) {
      var postBody = null;

      // verify the required parameter 'itemId' is set
      if (itemId == undefined || itemId == null) {
        throw "Missing the required parameter 'itemId' when calling deleteItem";
      }


      var pathParams = {
        'itemId': itemId
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
        '/beta/item/{itemId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteItemTag operation.
     * @callback module:api/ItemApi~deleteItemTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a tag for an item.
     * Deletes an existing item tag using the specified data.
     * @param {Integer} itemId Id of the item to remove tag from
     * @param {String} itemTag The tag to delete
     * @param {module:api/ItemApi~deleteItemTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteItemTag = function(itemId, itemTag, callback) {
      var postBody = null;

      // verify the required parameter 'itemId' is set
      if (itemId == undefined || itemId == null) {
        throw "Missing the required parameter 'itemId' when calling deleteItemTag";
      }

      // verify the required parameter 'itemTag' is set
      if (itemTag == undefined || itemTag == null) {
        throw "Missing the required parameter 'itemTag' when calling deleteItemTag";
      }


      var pathParams = {
        'itemId': itemId,
        'itemTag': itemTag
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
        '/beta/item/{itemId}/tag/{itemTag}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getBySKU operation.
     * @callback module:api/ItemApi~getBySKUCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Item} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an item by SKU
     * Returns the item identified by the specified parameters.
     * @param {Integer} lobId lobId of the item to be returned.
     * @param {String} sku sku of the item to be returned.
     * @param {module:api/ItemApi~getBySKUCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Item}
     */
    this.getBySKU = function(lobId, sku, callback) {
      var postBody = null;

      // verify the required parameter 'lobId' is set
      if (lobId == undefined || lobId == null) {
        throw "Missing the required parameter 'lobId' when calling getBySKU";
      }

      // verify the required parameter 'sku' is set
      if (sku == undefined || sku == null) {
        throw "Missing the required parameter 'sku' when calling getBySKU";
      }


      var pathParams = {
      };
      var queryParams = {
        'lobId': lobId,
        'sku': sku
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Item;

      return this.apiClient.callApi(
        '/beta/item/getBySKU', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDuplicateItemById operation.
     * @callback module:api/ItemApi~getDuplicateItemByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Item} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated an item by id
     * Returns a duplicated item identified by the specified id.
     * @param {Integer} itemId Id of the item to be duplicated.
     * @param {module:api/ItemApi~getDuplicateItemByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Item}
     */
    this.getDuplicateItemById = function(itemId, callback) {
      var postBody = null;

      // verify the required parameter 'itemId' is set
      if (itemId == undefined || itemId == null) {
        throw "Missing the required parameter 'itemId' when calling getDuplicateItemById";
      }


      var pathParams = {
        'itemId': itemId
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
      var returnType = Item;

      return this.apiClient.callApi(
        '/beta/item/duplicate/{itemId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getItemByFilter operation.
     * @callback module:api/ItemApi~getItemByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Item>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search items by filter
     * Returns the list of items that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/ItemApi~getItemByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/Item>}
     */
    this.getItemByFilter = function(opts, callback) {
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
      var returnType = [Item];

      return this.apiClient.callApi(
        '/beta/item/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getItemById operation.
     * @callback module:api/ItemApi~getItemByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Item} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an item by id
     * Returns the item identified by the specified id.
     * @param {Integer} itemId Id of the item to be returned.
     * @param {module:api/ItemApi~getItemByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Item}
     */
    this.getItemById = function(itemId, callback) {
      var postBody = null;

      // verify the required parameter 'itemId' is set
      if (itemId == undefined || itemId == null) {
        throw "Missing the required parameter 'itemId' when calling getItemById";
      }


      var pathParams = {
        'itemId': itemId
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
      var returnType = Item;

      return this.apiClient.callApi(
        '/beta/item/{itemId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getItemTags operation.
     * @callback module:api/ItemApi~getItemTagsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the tags for an item.
     * Get all existing item tags.
     * @param {Integer} itemId Id of the item to get tags for
     * @param {module:api/ItemApi~getItemTagsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getItemTags = function(itemId, callback) {
      var postBody = null;

      // verify the required parameter 'itemId' is set
      if (itemId == undefined || itemId == null) {
        throw "Missing the required parameter 'itemId' when calling getItemTags";
      }


      var pathParams = {
        'itemId': itemId
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
        '/beta/item/{itemId}/tag', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateItem operation.
     * @callback module:api/ItemApi~updateItemCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an item
     * Updates an existing item using the specified data.
     * @param {module:model/Item} body Item to be updated.
     * @param {module:api/ItemApi~updateItemCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateItem = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateItem";
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
        '/beta/item', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateItemCustomFields operation.
     * @callback module:api/ItemApi~updateItemCustomFieldsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an item custom fields
     * Updates an existing item custom fields using the specified data.
     * @param {module:model/Item} body Item to be updated.
     * @param {module:api/ItemApi~updateItemCustomFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateItemCustomFields = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateItemCustomFields";
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
        '/beta/item/customFields', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
