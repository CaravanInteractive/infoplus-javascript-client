(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/ShoppingCartConnection', '../model/ApiResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ShoppingCartConnection'), require('../model/ApiResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.ShoppingCartConnectionApi = factory(root.infoplus.ApiClient, root.infoplus.ShoppingCartConnection, root.infoplus.ApiResponse);
  }
}(this, function(ApiClient, ShoppingCartConnection, ApiResponse) {
  'use strict';

  /**
   * ShoppingCartConnection service.
   * @module api/ShoppingCartConnectionApi
   * @version beta
   */

  /**
   * Constructs a new ShoppingCartConnectionApi. 
   * @alias module:api/ShoppingCartConnectionApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addShoppingCartConnection operation.
     * @callback module:api/ShoppingCartConnectionApi~addShoppingCartConnectionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ShoppingCartConnection} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a shoppingCartConnection
     * Inserts a new shoppingCartConnection using the specified data.
     * @param {module:model/ShoppingCartConnection} body ShoppingCartConnection to be inserted.
     * @param {module:api/ShoppingCartConnectionApi~addShoppingCartConnectionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ShoppingCartConnection}
     */
    this.addShoppingCartConnection = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling addShoppingCartConnection";
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
      var returnType = ShoppingCartConnection;

      return this.apiClient.callApi(
        '/beta/shoppingCartConnection', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addShoppingCartConnectionAudit operation.
     * @callback module:api/ShoppingCartConnectionApi~addShoppingCartConnectionAuditCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new audit for a shoppingCartConnection
     * Adds an audit to an existing shoppingCartConnection.
     * @param {Integer} shoppingCartConnectionId Id of the shoppingCartConnection to add an audit to
     * @param {String} shoppingCartConnectionAudit The audit to add
     * @param {module:api/ShoppingCartConnectionApi~addShoppingCartConnectionAuditCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addShoppingCartConnectionAudit = function(shoppingCartConnectionId, shoppingCartConnectionAudit, callback) {
      var postBody = null;

      // verify the required parameter 'shoppingCartConnectionId' is set
      if (shoppingCartConnectionId == undefined || shoppingCartConnectionId == null) {
        throw "Missing the required parameter 'shoppingCartConnectionId' when calling addShoppingCartConnectionAudit";
      }

      // verify the required parameter 'shoppingCartConnectionAudit' is set
      if (shoppingCartConnectionAudit == undefined || shoppingCartConnectionAudit == null) {
        throw "Missing the required parameter 'shoppingCartConnectionAudit' when calling addShoppingCartConnectionAudit";
      }


      var pathParams = {
        'shoppingCartConnectionId': shoppingCartConnectionId,
        'shoppingCartConnectionAudit': shoppingCartConnectionAudit
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
        '/beta/shoppingCartConnection/{shoppingCartConnectionId}/audit/{shoppingCartConnectionAudit}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addShoppingCartConnectionTag operation.
     * @callback module:api/ShoppingCartConnectionApi~addShoppingCartConnectionTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new tags for a shoppingCartConnection.
     * Adds a tag to an existing shoppingCartConnection.
     * @param {Integer} shoppingCartConnectionId Id of the shoppingCartConnection to add a tag to
     * @param {String} shoppingCartConnectionTag The tag to add
     * @param {module:api/ShoppingCartConnectionApi~addShoppingCartConnectionTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addShoppingCartConnectionTag = function(shoppingCartConnectionId, shoppingCartConnectionTag, callback) {
      var postBody = null;

      // verify the required parameter 'shoppingCartConnectionId' is set
      if (shoppingCartConnectionId == undefined || shoppingCartConnectionId == null) {
        throw "Missing the required parameter 'shoppingCartConnectionId' when calling addShoppingCartConnectionTag";
      }

      // verify the required parameter 'shoppingCartConnectionTag' is set
      if (shoppingCartConnectionTag == undefined || shoppingCartConnectionTag == null) {
        throw "Missing the required parameter 'shoppingCartConnectionTag' when calling addShoppingCartConnectionTag";
      }


      var pathParams = {
        'shoppingCartConnectionId': shoppingCartConnectionId,
        'shoppingCartConnectionTag': shoppingCartConnectionTag
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
        '/beta/shoppingCartConnection/{shoppingCartConnectionId}/tag/{shoppingCartConnectionTag}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteShoppingCartConnection operation.
     * @callback module:api/ShoppingCartConnectionApi~deleteShoppingCartConnectionCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a shoppingCartConnection
     * Deletes the shoppingCartConnection identified by the specified id.
     * @param {Integer} shoppingCartConnectionId Id of the shoppingCartConnection to be deleted.
     * @param {module:api/ShoppingCartConnectionApi~deleteShoppingCartConnectionCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteShoppingCartConnection = function(shoppingCartConnectionId, callback) {
      var postBody = null;

      // verify the required parameter 'shoppingCartConnectionId' is set
      if (shoppingCartConnectionId == undefined || shoppingCartConnectionId == null) {
        throw "Missing the required parameter 'shoppingCartConnectionId' when calling deleteShoppingCartConnection";
      }


      var pathParams = {
        'shoppingCartConnectionId': shoppingCartConnectionId
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
        '/beta/shoppingCartConnection/{shoppingCartConnectionId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteShoppingCartConnectionTag operation.
     * @callback module:api/ShoppingCartConnectionApi~deleteShoppingCartConnectionTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a tag for a shoppingCartConnection.
     * Deletes an existing shoppingCartConnection tag using the specified data.
     * @param {Integer} shoppingCartConnectionId Id of the shoppingCartConnection to remove tag from
     * @param {String} shoppingCartConnectionTag The tag to delete
     * @param {module:api/ShoppingCartConnectionApi~deleteShoppingCartConnectionTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteShoppingCartConnectionTag = function(shoppingCartConnectionId, shoppingCartConnectionTag, callback) {
      var postBody = null;

      // verify the required parameter 'shoppingCartConnectionId' is set
      if (shoppingCartConnectionId == undefined || shoppingCartConnectionId == null) {
        throw "Missing the required parameter 'shoppingCartConnectionId' when calling deleteShoppingCartConnectionTag";
      }

      // verify the required parameter 'shoppingCartConnectionTag' is set
      if (shoppingCartConnectionTag == undefined || shoppingCartConnectionTag == null) {
        throw "Missing the required parameter 'shoppingCartConnectionTag' when calling deleteShoppingCartConnectionTag";
      }


      var pathParams = {
        'shoppingCartConnectionId': shoppingCartConnectionId,
        'shoppingCartConnectionTag': shoppingCartConnectionTag
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
        '/beta/shoppingCartConnection/{shoppingCartConnectionId}/tag/{shoppingCartConnectionTag}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDuplicateShoppingCartConnectionById operation.
     * @callback module:api/ShoppingCartConnectionApi~getDuplicateShoppingCartConnectionByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ShoppingCartConnection} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated a shoppingCartConnection by id
     * Returns a duplicated shoppingCartConnection identified by the specified id.
     * @param {Integer} shoppingCartConnectionId Id of the shoppingCartConnection to be duplicated.
     * @param {module:api/ShoppingCartConnectionApi~getDuplicateShoppingCartConnectionByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ShoppingCartConnection}
     */
    this.getDuplicateShoppingCartConnectionById = function(shoppingCartConnectionId, callback) {
      var postBody = null;

      // verify the required parameter 'shoppingCartConnectionId' is set
      if (shoppingCartConnectionId == undefined || shoppingCartConnectionId == null) {
        throw "Missing the required parameter 'shoppingCartConnectionId' when calling getDuplicateShoppingCartConnectionById";
      }


      var pathParams = {
        'shoppingCartConnectionId': shoppingCartConnectionId
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
      var returnType = ShoppingCartConnection;

      return this.apiClient.callApi(
        '/beta/shoppingCartConnection/duplicate/{shoppingCartConnectionId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getShoppingCartConnectionByFilter operation.
     * @callback module:api/ShoppingCartConnectionApi~getShoppingCartConnectionByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ShoppingCartConnection>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search shoppingCartConnections by filter
     * Returns the list of shoppingCartConnections that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/ShoppingCartConnectionApi~getShoppingCartConnectionByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/ShoppingCartConnection>}
     */
    this.getShoppingCartConnectionByFilter = function(opts, callback) {
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
      var returnType = [ShoppingCartConnection];

      return this.apiClient.callApi(
        '/beta/shoppingCartConnection/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getShoppingCartConnectionById operation.
     * @callback module:api/ShoppingCartConnectionApi~getShoppingCartConnectionByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ShoppingCartConnection} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a shoppingCartConnection by id
     * Returns the shoppingCartConnection identified by the specified id.
     * @param {Integer} shoppingCartConnectionId Id of the shoppingCartConnection to be returned.
     * @param {module:api/ShoppingCartConnectionApi~getShoppingCartConnectionByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ShoppingCartConnection}
     */
    this.getShoppingCartConnectionById = function(shoppingCartConnectionId, callback) {
      var postBody = null;

      // verify the required parameter 'shoppingCartConnectionId' is set
      if (shoppingCartConnectionId == undefined || shoppingCartConnectionId == null) {
        throw "Missing the required parameter 'shoppingCartConnectionId' when calling getShoppingCartConnectionById";
      }


      var pathParams = {
        'shoppingCartConnectionId': shoppingCartConnectionId
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
      var returnType = ShoppingCartConnection;

      return this.apiClient.callApi(
        '/beta/shoppingCartConnection/{shoppingCartConnectionId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getShoppingCartConnectionTags operation.
     * @callback module:api/ShoppingCartConnectionApi~getShoppingCartConnectionTagsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the tags for a shoppingCartConnection.
     * Get all existing shoppingCartConnection tags.
     * @param {Integer} shoppingCartConnectionId Id of the shoppingCartConnection to get tags for
     * @param {module:api/ShoppingCartConnectionApi~getShoppingCartConnectionTagsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getShoppingCartConnectionTags = function(shoppingCartConnectionId, callback) {
      var postBody = null;

      // verify the required parameter 'shoppingCartConnectionId' is set
      if (shoppingCartConnectionId == undefined || shoppingCartConnectionId == null) {
        throw "Missing the required parameter 'shoppingCartConnectionId' when calling getShoppingCartConnectionTags";
      }


      var pathParams = {
        'shoppingCartConnectionId': shoppingCartConnectionId
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
        '/beta/shoppingCartConnection/{shoppingCartConnectionId}/tag', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateShoppingCartConnection operation.
     * @callback module:api/ShoppingCartConnectionApi~updateShoppingCartConnectionCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a shoppingCartConnection
     * Updates an existing shoppingCartConnection using the specified data.
     * @param {module:model/ShoppingCartConnection} body ShoppingCartConnection to be updated.
     * @param {module:api/ShoppingCartConnectionApi~updateShoppingCartConnectionCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateShoppingCartConnection = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateShoppingCartConnection";
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
        '/beta/shoppingCartConnection', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateShoppingCartConnectionCustomFields operation.
     * @callback module:api/ShoppingCartConnectionApi~updateShoppingCartConnectionCustomFieldsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a shoppingCartConnection custom fields
     * Updates an existing shoppingCartConnection custom fields using the specified data.
     * @param {module:model/ShoppingCartConnection} body ShoppingCartConnection to be updated.
     * @param {module:api/ShoppingCartConnectionApi~updateShoppingCartConnectionCustomFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateShoppingCartConnectionCustomFields = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateShoppingCartConnectionCustomFields";
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
        '/beta/shoppingCartConnection/customFields', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
