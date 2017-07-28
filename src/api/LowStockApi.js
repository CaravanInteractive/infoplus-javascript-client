(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/LowStock'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/LowStock'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.LowStockApi = factory(root.infoplus.ApiClient, root.infoplus.LowStock);
  }
}(this, function(ApiClient, LowStock) {
  'use strict';

  /**
   * LowStock service.
   * @module api/LowStockApi
   * @version beta
   */

  /**
   * Constructs a new LowStockApi. 
   * @alias module:api/LowStockApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addLowStockAudit operation.
     * @callback module:api/LowStockApi~addLowStockAuditCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new audit for a lowStock
     * Adds an audit to an existing lowStock.
     * @param {Integer} lowStockId Id of the lowStock to add an audit to
     * @param {String} lowStockAudit The audit to add
     * @param {module:api/LowStockApi~addLowStockAuditCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addLowStockAudit = function(lowStockId, lowStockAudit, callback) {
      var postBody = null;

      // verify the required parameter 'lowStockId' is set
      if (lowStockId == undefined || lowStockId == null) {
        throw "Missing the required parameter 'lowStockId' when calling addLowStockAudit";
      }

      // verify the required parameter 'lowStockAudit' is set
      if (lowStockAudit == undefined || lowStockAudit == null) {
        throw "Missing the required parameter 'lowStockAudit' when calling addLowStockAudit";
      }


      var pathParams = {
        'lowStockId': lowStockId,
        'lowStockAudit': lowStockAudit
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
        '/beta/lowStock/{lowStockId}/audit/{lowStockAudit}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addLowStockTag operation.
     * @callback module:api/LowStockApi~addLowStockTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new tags for a lowStock.
     * Adds a tag to an existing lowStock.
     * @param {Integer} lowStockId Id of the lowStock to add a tag to
     * @param {String} lowStockTag The tag to add
     * @param {module:api/LowStockApi~addLowStockTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addLowStockTag = function(lowStockId, lowStockTag, callback) {
      var postBody = null;

      // verify the required parameter 'lowStockId' is set
      if (lowStockId == undefined || lowStockId == null) {
        throw "Missing the required parameter 'lowStockId' when calling addLowStockTag";
      }

      // verify the required parameter 'lowStockTag' is set
      if (lowStockTag == undefined || lowStockTag == null) {
        throw "Missing the required parameter 'lowStockTag' when calling addLowStockTag";
      }


      var pathParams = {
        'lowStockId': lowStockId,
        'lowStockTag': lowStockTag
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
        '/beta/lowStock/{lowStockId}/tag/{lowStockTag}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteLowStockTag operation.
     * @callback module:api/LowStockApi~deleteLowStockTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a tag for a lowStock.
     * Deletes an existing lowStock tag using the specified data.
     * @param {Integer} lowStockId Id of the lowStock to remove tag from
     * @param {String} lowStockTag The tag to delete
     * @param {module:api/LowStockApi~deleteLowStockTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteLowStockTag = function(lowStockId, lowStockTag, callback) {
      var postBody = null;

      // verify the required parameter 'lowStockId' is set
      if (lowStockId == undefined || lowStockId == null) {
        throw "Missing the required parameter 'lowStockId' when calling deleteLowStockTag";
      }

      // verify the required parameter 'lowStockTag' is set
      if (lowStockTag == undefined || lowStockTag == null) {
        throw "Missing the required parameter 'lowStockTag' when calling deleteLowStockTag";
      }


      var pathParams = {
        'lowStockId': lowStockId,
        'lowStockTag': lowStockTag
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
        '/beta/lowStock/{lowStockId}/tag/{lowStockTag}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDuplicateLowStockById operation.
     * @callback module:api/LowStockApi~getDuplicateLowStockByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LowStock} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated a lowStock by id
     * Returns a duplicated lowStock identified by the specified id.
     * @param {Integer} lowStockId Id of the lowStock to be duplicated.
     * @param {module:api/LowStockApi~getDuplicateLowStockByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/LowStock}
     */
    this.getDuplicateLowStockById = function(lowStockId, callback) {
      var postBody = null;

      // verify the required parameter 'lowStockId' is set
      if (lowStockId == undefined || lowStockId == null) {
        throw "Missing the required parameter 'lowStockId' when calling getDuplicateLowStockById";
      }


      var pathParams = {
        'lowStockId': lowStockId
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
      var returnType = LowStock;

      return this.apiClient.callApi(
        '/beta/lowStock/duplicate/{lowStockId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getLowStockByFilter operation.
     * @callback module:api/LowStockApi~getLowStockByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/LowStock>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search lowStocks by filter
     * Returns the list of lowStocks that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/LowStockApi~getLowStockByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/LowStock>}
     */
    this.getLowStockByFilter = function(opts, callback) {
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
      var returnType = [LowStock];

      return this.apiClient.callApi(
        '/beta/lowStock/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getLowStockById operation.
     * @callback module:api/LowStockApi~getLowStockByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LowStock} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a lowStock by id
     * Returns the lowStock identified by the specified id.
     * @param {Integer} lowStockId Id of the lowStock to be returned.
     * @param {module:api/LowStockApi~getLowStockByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/LowStock}
     */
    this.getLowStockById = function(lowStockId, callback) {
      var postBody = null;

      // verify the required parameter 'lowStockId' is set
      if (lowStockId == undefined || lowStockId == null) {
        throw "Missing the required parameter 'lowStockId' when calling getLowStockById";
      }


      var pathParams = {
        'lowStockId': lowStockId
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
      var returnType = LowStock;

      return this.apiClient.callApi(
        '/beta/lowStock/{lowStockId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getLowStockTags operation.
     * @callback module:api/LowStockApi~getLowStockTagsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the tags for a lowStock.
     * Get all existing lowStock tags.
     * @param {Integer} lowStockId Id of the lowStock to get tags for
     * @param {module:api/LowStockApi~getLowStockTagsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getLowStockTags = function(lowStockId, callback) {
      var postBody = null;

      // verify the required parameter 'lowStockId' is set
      if (lowStockId == undefined || lowStockId == null) {
        throw "Missing the required parameter 'lowStockId' when calling getLowStockTags";
      }


      var pathParams = {
        'lowStockId': lowStockId
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
        '/beta/lowStock/{lowStockId}/tag', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
