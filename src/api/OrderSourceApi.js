(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/OrderSource', '../model/ApiResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/OrderSource'), require('../model/ApiResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.OrderSourceApi = factory(root.infoplus.ApiClient, root.infoplus.OrderSource, root.infoplus.ApiResponse);
  }
}(this, function(ApiClient, OrderSource, ApiResponse) {
  'use strict';

  /**
   * OrderSource service.
   * @module api/OrderSourceApi
   * @version beta
   */

  /**
   * Constructs a new OrderSourceApi. 
   * @alias module:api/OrderSourceApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addOrderSource operation.
     * @callback module:api/OrderSourceApi~addOrderSourceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrderSource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an orderSource
     * Inserts a new orderSource using the specified data.
     * @param {module:model/OrderSource} body OrderSource to be inserted.
     * @param {module:api/OrderSourceApi~addOrderSourceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/OrderSource}
     */
    this.addOrderSource = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling addOrderSource";
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
      var returnType = OrderSource;

      return this.apiClient.callApi(
        '/beta/orderSource', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addOrderSourceAudit operation.
     * @callback module:api/OrderSourceApi~addOrderSourceAuditCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new audit for an orderSource
     * Adds an audit to an existing orderSource.
     * @param {Integer} orderSourceId Id of the orderSource to add an audit to
     * @param {String} orderSourceAudit The audit to add
     * @param {module:api/OrderSourceApi~addOrderSourceAuditCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addOrderSourceAudit = function(orderSourceId, orderSourceAudit, callback) {
      var postBody = null;

      // verify the required parameter 'orderSourceId' is set
      if (orderSourceId == undefined || orderSourceId == null) {
        throw "Missing the required parameter 'orderSourceId' when calling addOrderSourceAudit";
      }

      // verify the required parameter 'orderSourceAudit' is set
      if (orderSourceAudit == undefined || orderSourceAudit == null) {
        throw "Missing the required parameter 'orderSourceAudit' when calling addOrderSourceAudit";
      }


      var pathParams = {
        'orderSourceId': orderSourceId,
        'orderSourceAudit': orderSourceAudit
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
        '/beta/orderSource/{orderSourceId}/audit/{orderSourceAudit}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addOrderSourceTag operation.
     * @callback module:api/OrderSourceApi~addOrderSourceTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new tags for an orderSource.
     * Adds a tag to an existing orderSource.
     * @param {Integer} orderSourceId Id of the orderSource to add a tag to
     * @param {String} orderSourceTag The tag to add
     * @param {module:api/OrderSourceApi~addOrderSourceTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addOrderSourceTag = function(orderSourceId, orderSourceTag, callback) {
      var postBody = null;

      // verify the required parameter 'orderSourceId' is set
      if (orderSourceId == undefined || orderSourceId == null) {
        throw "Missing the required parameter 'orderSourceId' when calling addOrderSourceTag";
      }

      // verify the required parameter 'orderSourceTag' is set
      if (orderSourceTag == undefined || orderSourceTag == null) {
        throw "Missing the required parameter 'orderSourceTag' when calling addOrderSourceTag";
      }


      var pathParams = {
        'orderSourceId': orderSourceId,
        'orderSourceTag': orderSourceTag
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
        '/beta/orderSource/{orderSourceId}/tag/{orderSourceTag}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteOrderSource operation.
     * @callback module:api/OrderSourceApi~deleteOrderSourceCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an orderSource
     * Deletes the orderSource identified by the specified id.
     * @param {Integer} orderSourceId Id of the orderSource to be deleted.
     * @param {module:api/OrderSourceApi~deleteOrderSourceCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteOrderSource = function(orderSourceId, callback) {
      var postBody = null;

      // verify the required parameter 'orderSourceId' is set
      if (orderSourceId == undefined || orderSourceId == null) {
        throw "Missing the required parameter 'orderSourceId' when calling deleteOrderSource";
      }


      var pathParams = {
        'orderSourceId': orderSourceId
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
        '/beta/orderSource/{orderSourceId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteOrderSourceTag operation.
     * @callback module:api/OrderSourceApi~deleteOrderSourceTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a tag for an orderSource.
     * Deletes an existing orderSource tag using the specified data.
     * @param {Integer} orderSourceId Id of the orderSource to remove tag from
     * @param {String} orderSourceTag The tag to delete
     * @param {module:api/OrderSourceApi~deleteOrderSourceTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteOrderSourceTag = function(orderSourceId, orderSourceTag, callback) {
      var postBody = null;

      // verify the required parameter 'orderSourceId' is set
      if (orderSourceId == undefined || orderSourceId == null) {
        throw "Missing the required parameter 'orderSourceId' when calling deleteOrderSourceTag";
      }

      // verify the required parameter 'orderSourceTag' is set
      if (orderSourceTag == undefined || orderSourceTag == null) {
        throw "Missing the required parameter 'orderSourceTag' when calling deleteOrderSourceTag";
      }


      var pathParams = {
        'orderSourceId': orderSourceId,
        'orderSourceTag': orderSourceTag
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
        '/beta/orderSource/{orderSourceId}/tag/{orderSourceTag}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDuplicateOrderSourceById operation.
     * @callback module:api/OrderSourceApi~getDuplicateOrderSourceByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrderSource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated an orderSource by id
     * Returns a duplicated orderSource identified by the specified id.
     * @param {Integer} orderSourceId Id of the orderSource to be duplicated.
     * @param {module:api/OrderSourceApi~getDuplicateOrderSourceByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/OrderSource}
     */
    this.getDuplicateOrderSourceById = function(orderSourceId, callback) {
      var postBody = null;

      // verify the required parameter 'orderSourceId' is set
      if (orderSourceId == undefined || orderSourceId == null) {
        throw "Missing the required parameter 'orderSourceId' when calling getDuplicateOrderSourceById";
      }


      var pathParams = {
        'orderSourceId': orderSourceId
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
      var returnType = OrderSource;

      return this.apiClient.callApi(
        '/beta/orderSource/duplicate/{orderSourceId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getOrderSourceByFilter operation.
     * @callback module:api/OrderSourceApi~getOrderSourceByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/OrderSource>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search orderSources by filter
     * Returns the list of orderSources that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/OrderSourceApi~getOrderSourceByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/OrderSource>}
     */
    this.getOrderSourceByFilter = function(opts, callback) {
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
      var returnType = [OrderSource];

      return this.apiClient.callApi(
        '/beta/orderSource/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getOrderSourceById operation.
     * @callback module:api/OrderSourceApi~getOrderSourceByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrderSource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an orderSource by id
     * Returns the orderSource identified by the specified id.
     * @param {Integer} orderSourceId Id of the orderSource to be returned.
     * @param {module:api/OrderSourceApi~getOrderSourceByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/OrderSource}
     */
    this.getOrderSourceById = function(orderSourceId, callback) {
      var postBody = null;

      // verify the required parameter 'orderSourceId' is set
      if (orderSourceId == undefined || orderSourceId == null) {
        throw "Missing the required parameter 'orderSourceId' when calling getOrderSourceById";
      }


      var pathParams = {
        'orderSourceId': orderSourceId
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
      var returnType = OrderSource;

      return this.apiClient.callApi(
        '/beta/orderSource/{orderSourceId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getOrderSourceTags operation.
     * @callback module:api/OrderSourceApi~getOrderSourceTagsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the tags for an orderSource.
     * Get all existing orderSource tags.
     * @param {Integer} orderSourceId Id of the orderSource to get tags for
     * @param {module:api/OrderSourceApi~getOrderSourceTagsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getOrderSourceTags = function(orderSourceId, callback) {
      var postBody = null;

      // verify the required parameter 'orderSourceId' is set
      if (orderSourceId == undefined || orderSourceId == null) {
        throw "Missing the required parameter 'orderSourceId' when calling getOrderSourceTags";
      }


      var pathParams = {
        'orderSourceId': orderSourceId
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
        '/beta/orderSource/{orderSourceId}/tag', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateOrderSource operation.
     * @callback module:api/OrderSourceApi~updateOrderSourceCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an orderSource
     * Updates an existing orderSource using the specified data.
     * @param {module:model/OrderSource} body OrderSource to be updated.
     * @param {module:api/OrderSourceApi~updateOrderSourceCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateOrderSource = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateOrderSource";
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
        '/beta/orderSource', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateOrderSourceCustomFields operation.
     * @callback module:api/OrderSourceApi~updateOrderSourceCustomFieldsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an orderSource custom fields
     * Updates an existing orderSource custom fields using the specified data.
     * @param {module:model/OrderSource} body OrderSource to be updated.
     * @param {module:api/OrderSourceApi~updateOrderSourceCustomFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateOrderSourceCustomFields = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateOrderSourceCustomFields";
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
        '/beta/orderSource/customFields', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
