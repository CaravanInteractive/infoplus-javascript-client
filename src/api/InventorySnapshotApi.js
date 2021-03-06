/**
 * Infoplus API
 * Infoplus API.
 *
 * OpenAPI spec version: beta
 * Contact: api@infopluscommerce.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/InventorySnapshot'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/InventorySnapshot'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.InventorySnapshotApi = factory(root.infoplus.ApiClient, root.infoplus.InventorySnapshot);
  }
}(this, function(ApiClient, InventorySnapshot) {
  'use strict';

  /**
   * InventorySnapshot service.
   * @module api/InventorySnapshotApi
   * @version beta
   */

  /**
   * Constructs a new InventorySnapshotApi. 
   * @alias module:api/InventorySnapshotApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addInventorySnapshotAudit operation.
     * @callback module:api/InventorySnapshotApi~addInventorySnapshotAuditCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new audit for an inventorySnapshot
     * Adds an audit to an existing inventorySnapshot.
     * @param {Number} inventorySnapshotId Id of the inventorySnapshot to add an audit to
     * @param {String} inventorySnapshotAudit The audit to add
     * @param {module:api/InventorySnapshotApi~addInventorySnapshotAuditCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addInventorySnapshotAudit = function(inventorySnapshotId, inventorySnapshotAudit, callback) {
      var postBody = null;

      // verify the required parameter 'inventorySnapshotId' is set
      if (inventorySnapshotId === undefined || inventorySnapshotId === null) {
        throw new Error("Missing the required parameter 'inventorySnapshotId' when calling addInventorySnapshotAudit");
      }

      // verify the required parameter 'inventorySnapshotAudit' is set
      if (inventorySnapshotAudit === undefined || inventorySnapshotAudit === null) {
        throw new Error("Missing the required parameter 'inventorySnapshotAudit' when calling addInventorySnapshotAudit");
      }


      var pathParams = {
        'inventorySnapshotId': inventorySnapshotId,
        'inventorySnapshotAudit': inventorySnapshotAudit
      };
      var queryParams = {
      };
      var collectionQueryParams = {
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
        '/beta/inventorySnapshot/{inventorySnapshotId}/audit/{inventorySnapshotAudit}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addInventorySnapshotTag operation.
     * @callback module:api/InventorySnapshotApi~addInventorySnapshotTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new tags for an inventorySnapshot.
     * Adds a tag to an existing inventorySnapshot.
     * @param {Number} inventorySnapshotId Id of the inventorySnapshot to add a tag to
     * @param {String} inventorySnapshotTag The tag to add
     * @param {module:api/InventorySnapshotApi~addInventorySnapshotTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addInventorySnapshotTag = function(inventorySnapshotId, inventorySnapshotTag, callback) {
      var postBody = null;

      // verify the required parameter 'inventorySnapshotId' is set
      if (inventorySnapshotId === undefined || inventorySnapshotId === null) {
        throw new Error("Missing the required parameter 'inventorySnapshotId' when calling addInventorySnapshotTag");
      }

      // verify the required parameter 'inventorySnapshotTag' is set
      if (inventorySnapshotTag === undefined || inventorySnapshotTag === null) {
        throw new Error("Missing the required parameter 'inventorySnapshotTag' when calling addInventorySnapshotTag");
      }


      var pathParams = {
        'inventorySnapshotId': inventorySnapshotId,
        'inventorySnapshotTag': inventorySnapshotTag
      };
      var queryParams = {
      };
      var collectionQueryParams = {
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
        '/beta/inventorySnapshot/{inventorySnapshotId}/tag/{inventorySnapshotTag}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteInventorySnapshotTag operation.
     * @callback module:api/InventorySnapshotApi~deleteInventorySnapshotTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a tag for an inventorySnapshot.
     * Deletes an existing inventorySnapshot tag using the specified data.
     * @param {Number} inventorySnapshotId Id of the inventorySnapshot to remove tag from
     * @param {String} inventorySnapshotTag The tag to delete
     * @param {module:api/InventorySnapshotApi~deleteInventorySnapshotTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteInventorySnapshotTag = function(inventorySnapshotId, inventorySnapshotTag, callback) {
      var postBody = null;

      // verify the required parameter 'inventorySnapshotId' is set
      if (inventorySnapshotId === undefined || inventorySnapshotId === null) {
        throw new Error("Missing the required parameter 'inventorySnapshotId' when calling deleteInventorySnapshotTag");
      }

      // verify the required parameter 'inventorySnapshotTag' is set
      if (inventorySnapshotTag === undefined || inventorySnapshotTag === null) {
        throw new Error("Missing the required parameter 'inventorySnapshotTag' when calling deleteInventorySnapshotTag");
      }


      var pathParams = {
        'inventorySnapshotId': inventorySnapshotId,
        'inventorySnapshotTag': inventorySnapshotTag
      };
      var queryParams = {
      };
      var collectionQueryParams = {
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
        '/beta/inventorySnapshot/{inventorySnapshotId}/tag/{inventorySnapshotTag}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDuplicateInventorySnapshotById operation.
     * @callback module:api/InventorySnapshotApi~getDuplicateInventorySnapshotByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InventorySnapshot} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated an inventorySnapshot by id
     * Returns a duplicated inventorySnapshot identified by the specified id.
     * @param {Number} inventorySnapshotId Id of the inventorySnapshot to be duplicated.
     * @param {module:api/InventorySnapshotApi~getDuplicateInventorySnapshotByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InventorySnapshot}
     */
    this.getDuplicateInventorySnapshotById = function(inventorySnapshotId, callback) {
      var postBody = null;

      // verify the required parameter 'inventorySnapshotId' is set
      if (inventorySnapshotId === undefined || inventorySnapshotId === null) {
        throw new Error("Missing the required parameter 'inventorySnapshotId' when calling getDuplicateInventorySnapshotById");
      }


      var pathParams = {
        'inventorySnapshotId': inventorySnapshotId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = InventorySnapshot;

      return this.apiClient.callApi(
        '/beta/inventorySnapshot/duplicate/{inventorySnapshotId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getInventorySnapshotByFilter operation.
     * @callback module:api/InventorySnapshotApi~getInventorySnapshotByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InventorySnapshot>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search inventorySnapshots by filter
     * Returns the list of inventorySnapshots that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Number} opts.page Result page number.  Defaults to 1.
     * @param {Number} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/InventorySnapshotApi~getInventorySnapshotByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/InventorySnapshot>}
     */
    this.getInventorySnapshotByFilter = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'filter': opts['filter'],
        'page': opts['page'],
        'limit': opts['limit'],
        'sort': opts['sort'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [InventorySnapshot];

      return this.apiClient.callApi(
        '/beta/inventorySnapshot/search', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getInventorySnapshotById operation.
     * @callback module:api/InventorySnapshotApi~getInventorySnapshotByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InventorySnapshot} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an inventorySnapshot by id
     * Returns the inventorySnapshot identified by the specified id.
     * @param {Number} inventorySnapshotId Id of the inventorySnapshot to be returned.
     * @param {module:api/InventorySnapshotApi~getInventorySnapshotByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InventorySnapshot}
     */
    this.getInventorySnapshotById = function(inventorySnapshotId, callback) {
      var postBody = null;

      // verify the required parameter 'inventorySnapshotId' is set
      if (inventorySnapshotId === undefined || inventorySnapshotId === null) {
        throw new Error("Missing the required parameter 'inventorySnapshotId' when calling getInventorySnapshotById");
      }


      var pathParams = {
        'inventorySnapshotId': inventorySnapshotId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = InventorySnapshot;

      return this.apiClient.callApi(
        '/beta/inventorySnapshot/{inventorySnapshotId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getInventorySnapshotTags operation.
     * @callback module:api/InventorySnapshotApi~getInventorySnapshotTagsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the tags for an inventorySnapshot.
     * Get all existing inventorySnapshot tags.
     * @param {Number} inventorySnapshotId Id of the inventorySnapshot to get tags for
     * @param {module:api/InventorySnapshotApi~getInventorySnapshotTagsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getInventorySnapshotTags = function(inventorySnapshotId, callback) {
      var postBody = null;

      // verify the required parameter 'inventorySnapshotId' is set
      if (inventorySnapshotId === undefined || inventorySnapshotId === null) {
        throw new Error("Missing the required parameter 'inventorySnapshotId' when calling getInventorySnapshotTags");
      }


      var pathParams = {
        'inventorySnapshotId': inventorySnapshotId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
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
        '/beta/inventorySnapshot/{inventorySnapshotId}/tag', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
