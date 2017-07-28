(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/OrderActivity', '../model/ApiResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/OrderActivity'), require('../model/ApiResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.OrderActivityApi = factory(root.infoplus.ApiClient, root.infoplus.OrderActivity, root.infoplus.ApiResponse);
  }
}(this, function(ApiClient, OrderActivity, ApiResponse) {
  'use strict';

  /**
   * OrderActivity service.
   * @module api/OrderActivityApi
   * @version beta
   */

  /**
   * Constructs a new OrderActivityApi. 
   * @alias module:api/OrderActivityApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addOrderActivity operation.
     * @callback module:api/OrderActivityApi~addOrderActivityCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrderActivity} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an orderActivity
     * Inserts a new orderActivity using the specified data.
     * @param {module:model/OrderActivity} body OrderActivity to be inserted.
     * @param {module:api/OrderActivityApi~addOrderActivityCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/OrderActivity}
     */
    this.addOrderActivity = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling addOrderActivity";
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
      var returnType = OrderActivity;

      return this.apiClient.callApi(
        '/beta/orderActivity', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addOrderActivityAudit operation.
     * @callback module:api/OrderActivityApi~addOrderActivityAuditCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new audit for an orderActivity
     * Adds an audit to an existing orderActivity.
     * @param {Number} orderActivityId Id of the orderActivity to add an audit to
     * @param {String} orderActivityAudit The audit to add
     * @param {module:api/OrderActivityApi~addOrderActivityAuditCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addOrderActivityAudit = function(orderActivityId, orderActivityAudit, callback) {
      var postBody = null;

      // verify the required parameter 'orderActivityId' is set
      if (orderActivityId == undefined || orderActivityId == null) {
        throw "Missing the required parameter 'orderActivityId' when calling addOrderActivityAudit";
      }

      // verify the required parameter 'orderActivityAudit' is set
      if (orderActivityAudit == undefined || orderActivityAudit == null) {
        throw "Missing the required parameter 'orderActivityAudit' when calling addOrderActivityAudit";
      }


      var pathParams = {
        'orderActivityId': orderActivityId,
        'orderActivityAudit': orderActivityAudit
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
        '/beta/orderActivity/{orderActivityId}/audit/{orderActivityAudit}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addOrderActivityTag operation.
     * @callback module:api/OrderActivityApi~addOrderActivityTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new tags for an orderActivity.
     * Adds a tag to an existing orderActivity.
     * @param {Number} orderActivityId Id of the orderActivity to add a tag to
     * @param {String} orderActivityTag The tag to add
     * @param {module:api/OrderActivityApi~addOrderActivityTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addOrderActivityTag = function(orderActivityId, orderActivityTag, callback) {
      var postBody = null;

      // verify the required parameter 'orderActivityId' is set
      if (orderActivityId == undefined || orderActivityId == null) {
        throw "Missing the required parameter 'orderActivityId' when calling addOrderActivityTag";
      }

      // verify the required parameter 'orderActivityTag' is set
      if (orderActivityTag == undefined || orderActivityTag == null) {
        throw "Missing the required parameter 'orderActivityTag' when calling addOrderActivityTag";
      }


      var pathParams = {
        'orderActivityId': orderActivityId,
        'orderActivityTag': orderActivityTag
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
        '/beta/orderActivity/{orderActivityId}/tag/{orderActivityTag}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteOrderActivity operation.
     * @callback module:api/OrderActivityApi~deleteOrderActivityCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an orderActivity
     * Deletes the orderActivity identified by the specified id.
     * @param {Number} orderActivityId Id of the orderActivity to be deleted.
     * @param {module:api/OrderActivityApi~deleteOrderActivityCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteOrderActivity = function(orderActivityId, callback) {
      var postBody = null;

      // verify the required parameter 'orderActivityId' is set
      if (orderActivityId == undefined || orderActivityId == null) {
        throw "Missing the required parameter 'orderActivityId' when calling deleteOrderActivity";
      }


      var pathParams = {
        'orderActivityId': orderActivityId
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
        '/beta/orderActivity/{orderActivityId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteOrderActivityTag operation.
     * @callback module:api/OrderActivityApi~deleteOrderActivityTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a tag for an orderActivity.
     * Deletes an existing orderActivity tag using the specified data.
     * @param {Number} orderActivityId Id of the orderActivity to remove tag from
     * @param {String} orderActivityTag The tag to delete
     * @param {module:api/OrderActivityApi~deleteOrderActivityTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteOrderActivityTag = function(orderActivityId, orderActivityTag, callback) {
      var postBody = null;

      // verify the required parameter 'orderActivityId' is set
      if (orderActivityId == undefined || orderActivityId == null) {
        throw "Missing the required parameter 'orderActivityId' when calling deleteOrderActivityTag";
      }

      // verify the required parameter 'orderActivityTag' is set
      if (orderActivityTag == undefined || orderActivityTag == null) {
        throw "Missing the required parameter 'orderActivityTag' when calling deleteOrderActivityTag";
      }


      var pathParams = {
        'orderActivityId': orderActivityId,
        'orderActivityTag': orderActivityTag
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
        '/beta/orderActivity/{orderActivityId}/tag/{orderActivityTag}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDuplicateOrderActivityById operation.
     * @callback module:api/OrderActivityApi~getDuplicateOrderActivityByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrderActivity} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated an orderActivity by id
     * Returns a duplicated orderActivity identified by the specified id.
     * @param {Number} orderActivityId Id of the orderActivity to be duplicated.
     * @param {module:api/OrderActivityApi~getDuplicateOrderActivityByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/OrderActivity}
     */
    this.getDuplicateOrderActivityById = function(orderActivityId, callback) {
      var postBody = null;

      // verify the required parameter 'orderActivityId' is set
      if (orderActivityId == undefined || orderActivityId == null) {
        throw "Missing the required parameter 'orderActivityId' when calling getDuplicateOrderActivityById";
      }


      var pathParams = {
        'orderActivityId': orderActivityId
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
      var returnType = OrderActivity;

      return this.apiClient.callApi(
        '/beta/orderActivity/duplicate/{orderActivityId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getOrderActivityByFilter operation.
     * @callback module:api/OrderActivityApi~getOrderActivityByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/OrderActivity>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search orderActivitys by filter
     * Returns the list of orderActivitys that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/OrderActivityApi~getOrderActivityByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/OrderActivity>}
     */
    this.getOrderActivityByFilter = function(opts, callback) {
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
      var returnType = [OrderActivity];

      return this.apiClient.callApi(
        '/beta/orderActivity/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getOrderActivityById operation.
     * @callback module:api/OrderActivityApi~getOrderActivityByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrderActivity} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an orderActivity by id
     * Returns the orderActivity identified by the specified id.
     * @param {Number} orderActivityId Id of the orderActivity to be returned.
     * @param {module:api/OrderActivityApi~getOrderActivityByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/OrderActivity}
     */
    this.getOrderActivityById = function(orderActivityId, callback) {
      var postBody = null;

      // verify the required parameter 'orderActivityId' is set
      if (orderActivityId == undefined || orderActivityId == null) {
        throw "Missing the required parameter 'orderActivityId' when calling getOrderActivityById";
      }


      var pathParams = {
        'orderActivityId': orderActivityId
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
      var returnType = OrderActivity;

      return this.apiClient.callApi(
        '/beta/orderActivity/{orderActivityId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getOrderActivityTags operation.
     * @callback module:api/OrderActivityApi~getOrderActivityTagsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the tags for an orderActivity.
     * Get all existing orderActivity tags.
     * @param {Number} orderActivityId Id of the orderActivity to get tags for
     * @param {module:api/OrderActivityApi~getOrderActivityTagsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getOrderActivityTags = function(orderActivityId, callback) {
      var postBody = null;

      // verify the required parameter 'orderActivityId' is set
      if (orderActivityId == undefined || orderActivityId == null) {
        throw "Missing the required parameter 'orderActivityId' when calling getOrderActivityTags";
      }


      var pathParams = {
        'orderActivityId': orderActivityId
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
        '/beta/orderActivity/{orderActivityId}/tag', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateOrderActivity operation.
     * @callback module:api/OrderActivityApi~updateOrderActivityCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an orderActivity
     * Updates an existing orderActivity using the specified data.
     * @param {module:model/OrderActivity} body OrderActivity to be updated.
     * @param {module:api/OrderActivityApi~updateOrderActivityCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateOrderActivity = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateOrderActivity";
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
        '/beta/orderActivity', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
