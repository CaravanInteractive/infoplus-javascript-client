(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/CartonActivity', '../model/ApiResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CartonActivity'), require('../model/ApiResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.CartonActivityApi = factory(root.infoplus.ApiClient, root.infoplus.CartonActivity, root.infoplus.ApiResponse);
  }
}(this, function(ApiClient, CartonActivity, ApiResponse) {
  'use strict';

  /**
   * CartonActivity service.
   * @module api/CartonActivityApi
   * @version beta
   */

  /**
   * Constructs a new CartonActivityApi. 
   * @alias module:api/CartonActivityApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addCartonActivity operation.
     * @callback module:api/CartonActivityApi~addCartonActivityCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CartonActivity} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a cartonActivity
     * Inserts a new cartonActivity using the specified data.
     * @param {module:model/CartonActivity} body CartonActivity to be inserted.
     * @param {module:api/CartonActivityApi~addCartonActivityCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/CartonActivity}
     */
    this.addCartonActivity = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling addCartonActivity";
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
      var returnType = CartonActivity;

      return this.apiClient.callApi(
        '/beta/cartonActivity', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addCartonActivityAudit operation.
     * @callback module:api/CartonActivityApi~addCartonActivityAuditCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new audit for a cartonActivity
     * Adds an audit to an existing cartonActivity.
     * @param {Integer} cartonActivityId Id of the cartonActivity to add an audit to
     * @param {String} cartonActivityAudit The audit to add
     * @param {module:api/CartonActivityApi~addCartonActivityAuditCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addCartonActivityAudit = function(cartonActivityId, cartonActivityAudit, callback) {
      var postBody = null;

      // verify the required parameter 'cartonActivityId' is set
      if (cartonActivityId == undefined || cartonActivityId == null) {
        throw "Missing the required parameter 'cartonActivityId' when calling addCartonActivityAudit";
      }

      // verify the required parameter 'cartonActivityAudit' is set
      if (cartonActivityAudit == undefined || cartonActivityAudit == null) {
        throw "Missing the required parameter 'cartonActivityAudit' when calling addCartonActivityAudit";
      }


      var pathParams = {
        'cartonActivityId': cartonActivityId,
        'cartonActivityAudit': cartonActivityAudit
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
        '/beta/cartonActivity/{cartonActivityId}/audit/{cartonActivityAudit}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addCartonActivityTag operation.
     * @callback module:api/CartonActivityApi~addCartonActivityTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new tags for a cartonActivity.
     * Adds a tag to an existing cartonActivity.
     * @param {Integer} cartonActivityId Id of the cartonActivity to add a tag to
     * @param {String} cartonActivityTag The tag to add
     * @param {module:api/CartonActivityApi~addCartonActivityTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addCartonActivityTag = function(cartonActivityId, cartonActivityTag, callback) {
      var postBody = null;

      // verify the required parameter 'cartonActivityId' is set
      if (cartonActivityId == undefined || cartonActivityId == null) {
        throw "Missing the required parameter 'cartonActivityId' when calling addCartonActivityTag";
      }

      // verify the required parameter 'cartonActivityTag' is set
      if (cartonActivityTag == undefined || cartonActivityTag == null) {
        throw "Missing the required parameter 'cartonActivityTag' when calling addCartonActivityTag";
      }


      var pathParams = {
        'cartonActivityId': cartonActivityId,
        'cartonActivityTag': cartonActivityTag
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
        '/beta/cartonActivity/{cartonActivityId}/tag/{cartonActivityTag}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteCartonActivity operation.
     * @callback module:api/CartonActivityApi~deleteCartonActivityCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a cartonActivity
     * Deletes the cartonActivity identified by the specified id.
     * @param {Integer} cartonActivityId Id of the cartonActivity to be deleted.
     * @param {module:api/CartonActivityApi~deleteCartonActivityCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteCartonActivity = function(cartonActivityId, callback) {
      var postBody = null;

      // verify the required parameter 'cartonActivityId' is set
      if (cartonActivityId == undefined || cartonActivityId == null) {
        throw "Missing the required parameter 'cartonActivityId' when calling deleteCartonActivity";
      }


      var pathParams = {
        'cartonActivityId': cartonActivityId
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
        '/beta/cartonActivity/{cartonActivityId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteCartonActivityTag operation.
     * @callback module:api/CartonActivityApi~deleteCartonActivityTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a tag for a cartonActivity.
     * Deletes an existing cartonActivity tag using the specified data.
     * @param {Integer} cartonActivityId Id of the cartonActivity to remove tag from
     * @param {String} cartonActivityTag The tag to delete
     * @param {module:api/CartonActivityApi~deleteCartonActivityTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteCartonActivityTag = function(cartonActivityId, cartonActivityTag, callback) {
      var postBody = null;

      // verify the required parameter 'cartonActivityId' is set
      if (cartonActivityId == undefined || cartonActivityId == null) {
        throw "Missing the required parameter 'cartonActivityId' when calling deleteCartonActivityTag";
      }

      // verify the required parameter 'cartonActivityTag' is set
      if (cartonActivityTag == undefined || cartonActivityTag == null) {
        throw "Missing the required parameter 'cartonActivityTag' when calling deleteCartonActivityTag";
      }


      var pathParams = {
        'cartonActivityId': cartonActivityId,
        'cartonActivityTag': cartonActivityTag
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
        '/beta/cartonActivity/{cartonActivityId}/tag/{cartonActivityTag}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCartonActivityByFilter operation.
     * @callback module:api/CartonActivityApi~getCartonActivityByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/CartonActivity>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search cartonActivitys by filter
     * Returns the list of cartonActivitys that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/CartonActivityApi~getCartonActivityByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/CartonActivity>}
     */
    this.getCartonActivityByFilter = function(opts, callback) {
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
      var returnType = [CartonActivity];

      return this.apiClient.callApi(
        '/beta/cartonActivity/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCartonActivityById operation.
     * @callback module:api/CartonActivityApi~getCartonActivityByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CartonActivity} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a cartonActivity by id
     * Returns the cartonActivity identified by the specified id.
     * @param {Integer} cartonActivityId Id of the cartonActivity to be returned.
     * @param {module:api/CartonActivityApi~getCartonActivityByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/CartonActivity}
     */
    this.getCartonActivityById = function(cartonActivityId, callback) {
      var postBody = null;

      // verify the required parameter 'cartonActivityId' is set
      if (cartonActivityId == undefined || cartonActivityId == null) {
        throw "Missing the required parameter 'cartonActivityId' when calling getCartonActivityById";
      }


      var pathParams = {
        'cartonActivityId': cartonActivityId
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
      var returnType = CartonActivity;

      return this.apiClient.callApi(
        '/beta/cartonActivity/{cartonActivityId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCartonActivityTags operation.
     * @callback module:api/CartonActivityApi~getCartonActivityTagsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the tags for a cartonActivity.
     * Get all existing cartonActivity tags.
     * @param {Integer} cartonActivityId Id of the cartonActivity to get tags for
     * @param {module:api/CartonActivityApi~getCartonActivityTagsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getCartonActivityTags = function(cartonActivityId, callback) {
      var postBody = null;

      // verify the required parameter 'cartonActivityId' is set
      if (cartonActivityId == undefined || cartonActivityId == null) {
        throw "Missing the required parameter 'cartonActivityId' when calling getCartonActivityTags";
      }


      var pathParams = {
        'cartonActivityId': cartonActivityId
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
        '/beta/cartonActivity/{cartonActivityId}/tag', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDuplicateCartonActivityById operation.
     * @callback module:api/CartonActivityApi~getDuplicateCartonActivityByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CartonActivity} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated a cartonActivity by id
     * Returns a duplicated cartonActivity identified by the specified id.
     * @param {Integer} cartonActivityId Id of the cartonActivity to be duplicated.
     * @param {module:api/CartonActivityApi~getDuplicateCartonActivityByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/CartonActivity}
     */
    this.getDuplicateCartonActivityById = function(cartonActivityId, callback) {
      var postBody = null;

      // verify the required parameter 'cartonActivityId' is set
      if (cartonActivityId == undefined || cartonActivityId == null) {
        throw "Missing the required parameter 'cartonActivityId' when calling getDuplicateCartonActivityById";
      }


      var pathParams = {
        'cartonActivityId': cartonActivityId
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
      var returnType = CartonActivity;

      return this.apiClient.callApi(
        '/beta/cartonActivity/duplicate/{cartonActivityId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateCartonActivity operation.
     * @callback module:api/CartonActivityApi~updateCartonActivityCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a cartonActivity
     * Updates an existing cartonActivity using the specified data.
     * @param {module:model/CartonActivity} body CartonActivity to be updated.
     * @param {module:api/CartonActivityApi~updateCartonActivityCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateCartonActivity = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateCartonActivity";
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
        '/beta/cartonActivity', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
