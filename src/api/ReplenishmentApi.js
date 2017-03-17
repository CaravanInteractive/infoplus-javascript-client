(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/Replenishment'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Replenishment'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.ReplenishmentApi = factory(root.infoplus.ApiClient, root.infoplus.Replenishment);
  }
}(this, function(ApiClient, Replenishment) {
  'use strict';

  /**
   * Replenishment service.
   * @module api/ReplenishmentApi
   * @version beta
   */

  /**
   * Constructs a new ReplenishmentApi. 
   * @alias module:api/ReplenishmentApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addReplenishmentAudit operation.
     * @callback module:api/ReplenishmentApi~addReplenishmentAuditCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new audit for a replenishment
     * Adds an audit to an existing replenishment.
     * @param {Integer} replenishmentId Id of the replenishment to add an audit to
     * @param {String} replenishmentAudit The audit to add
     * @param {module:api/ReplenishmentApi~addReplenishmentAuditCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addReplenishmentAudit = function(replenishmentId, replenishmentAudit, callback) {
      var postBody = null;

      // verify the required parameter 'replenishmentId' is set
      if (replenishmentId == undefined || replenishmentId == null) {
        throw "Missing the required parameter 'replenishmentId' when calling addReplenishmentAudit";
      }

      // verify the required parameter 'replenishmentAudit' is set
      if (replenishmentAudit == undefined || replenishmentAudit == null) {
        throw "Missing the required parameter 'replenishmentAudit' when calling addReplenishmentAudit";
      }


      var pathParams = {
        'replenishmentId': replenishmentId,
        'replenishmentAudit': replenishmentAudit
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
        '/beta/replenishment/{replenishmentId}/audit/{replenishmentAudit}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addReplenishmentTag operation.
     * @callback module:api/ReplenishmentApi~addReplenishmentTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new tags for a replenishment.
     * Adds a tag to an existing replenishment.
     * @param {Integer} replenishmentId Id of the replenishment to add a tag to
     * @param {String} replenishmentTag The tag to add
     * @param {module:api/ReplenishmentApi~addReplenishmentTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addReplenishmentTag = function(replenishmentId, replenishmentTag, callback) {
      var postBody = null;

      // verify the required parameter 'replenishmentId' is set
      if (replenishmentId == undefined || replenishmentId == null) {
        throw "Missing the required parameter 'replenishmentId' when calling addReplenishmentTag";
      }

      // verify the required parameter 'replenishmentTag' is set
      if (replenishmentTag == undefined || replenishmentTag == null) {
        throw "Missing the required parameter 'replenishmentTag' when calling addReplenishmentTag";
      }


      var pathParams = {
        'replenishmentId': replenishmentId,
        'replenishmentTag': replenishmentTag
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
        '/beta/replenishment/{replenishmentId}/tag/{replenishmentTag}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteReplenishmentTag operation.
     * @callback module:api/ReplenishmentApi~deleteReplenishmentTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a tag for a replenishment.
     * Deletes an existing replenishment tag using the specified data.
     * @param {Integer} replenishmentId Id of the replenishment to remove tag from
     * @param {String} replenishmentTag The tag to delete
     * @param {module:api/ReplenishmentApi~deleteReplenishmentTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteReplenishmentTag = function(replenishmentId, replenishmentTag, callback) {
      var postBody = null;

      // verify the required parameter 'replenishmentId' is set
      if (replenishmentId == undefined || replenishmentId == null) {
        throw "Missing the required parameter 'replenishmentId' when calling deleteReplenishmentTag";
      }

      // verify the required parameter 'replenishmentTag' is set
      if (replenishmentTag == undefined || replenishmentTag == null) {
        throw "Missing the required parameter 'replenishmentTag' when calling deleteReplenishmentTag";
      }


      var pathParams = {
        'replenishmentId': replenishmentId,
        'replenishmentTag': replenishmentTag
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
        '/beta/replenishment/{replenishmentId}/tag/{replenishmentTag}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDuplicateReplenishmentById operation.
     * @callback module:api/ReplenishmentApi~getDuplicateReplenishmentByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Replenishment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated a replenishment by id
     * Returns a duplicated replenishment identified by the specified id.
     * @param {Integer} replenishmentId Id of the replenishment to be duplicated.
     * @param {module:api/ReplenishmentApi~getDuplicateReplenishmentByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Replenishment}
     */
    this.getDuplicateReplenishmentById = function(replenishmentId, callback) {
      var postBody = null;

      // verify the required parameter 'replenishmentId' is set
      if (replenishmentId == undefined || replenishmentId == null) {
        throw "Missing the required parameter 'replenishmentId' when calling getDuplicateReplenishmentById";
      }


      var pathParams = {
        'replenishmentId': replenishmentId
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
      var returnType = Replenishment;

      return this.apiClient.callApi(
        '/beta/replenishment/duplicate/{replenishmentId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getReplenishmentByFilter operation.
     * @callback module:api/ReplenishmentApi~getReplenishmentByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Replenishment>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search replenishments by filter
     * Returns the list of replenishments that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/ReplenishmentApi~getReplenishmentByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/Replenishment>}
     */
    this.getReplenishmentByFilter = function(opts, callback) {
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
      var returnType = [Replenishment];

      return this.apiClient.callApi(
        '/beta/replenishment/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getReplenishmentById operation.
     * @callback module:api/ReplenishmentApi~getReplenishmentByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Replenishment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a replenishment by id
     * Returns the replenishment identified by the specified id.
     * @param {Integer} replenishmentId Id of the replenishment to be returned.
     * @param {module:api/ReplenishmentApi~getReplenishmentByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Replenishment}
     */
    this.getReplenishmentById = function(replenishmentId, callback) {
      var postBody = null;

      // verify the required parameter 'replenishmentId' is set
      if (replenishmentId == undefined || replenishmentId == null) {
        throw "Missing the required parameter 'replenishmentId' when calling getReplenishmentById";
      }


      var pathParams = {
        'replenishmentId': replenishmentId
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
      var returnType = Replenishment;

      return this.apiClient.callApi(
        '/beta/replenishment/{replenishmentId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getReplenishmentTags operation.
     * @callback module:api/ReplenishmentApi~getReplenishmentTagsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the tags for a replenishment.
     * Get all existing replenishment tags.
     * @param {Integer} replenishmentId Id of the replenishment to get tags for
     * @param {module:api/ReplenishmentApi~getReplenishmentTagsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getReplenishmentTags = function(replenishmentId, callback) {
      var postBody = null;

      // verify the required parameter 'replenishmentId' is set
      if (replenishmentId == undefined || replenishmentId == null) {
        throw "Missing the required parameter 'replenishmentId' when calling getReplenishmentTags";
      }


      var pathParams = {
        'replenishmentId': replenishmentId
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
        '/beta/replenishment/{replenishmentId}/tag', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateReplenishmentCustomFields operation.
     * @callback module:api/ReplenishmentApi~updateReplenishmentCustomFieldsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a replenishment custom fields
     * Updates an existing replenishment custom fields using the specified data.
     * @param {module:model/Replenishment} body Replenishment to be updated.
     * @param {module:api/ReplenishmentApi~updateReplenishmentCustomFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateReplenishmentCustomFields = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateReplenishmentCustomFields";
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
        '/beta/replenishment/customFields', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
