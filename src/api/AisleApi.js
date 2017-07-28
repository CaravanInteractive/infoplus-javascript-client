(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/Aisle', '../model/ApiResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Aisle'), require('../model/ApiResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.AisleApi = factory(root.infoplus.ApiClient, root.infoplus.Aisle, root.infoplus.ApiResponse);
  }
}(this, function(ApiClient, Aisle, ApiResponse) {
  'use strict';

  /**
   * Aisle service.
   * @module api/AisleApi
   * @version beta
   */

  /**
   * Constructs a new AisleApi. 
   * @alias module:api/AisleApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addAisle operation.
     * @callback module:api/AisleApi~addAisleCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Aisle} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an aisle
     * Inserts a new aisle using the specified data.
     * @param {module:model/Aisle} body Aisle to be inserted.
     * @param {module:api/AisleApi~addAisleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Aisle}
     */
    this.addAisle = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling addAisle";
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
      var returnType = Aisle;

      return this.apiClient.callApi(
        '/beta/aisle', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addAisleAudit operation.
     * @callback module:api/AisleApi~addAisleAuditCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new audit for an aisle
     * Adds an audit to an existing aisle.
     * @param {Integer} aisleId Id of the aisle to add an audit to
     * @param {String} aisleAudit The audit to add
     * @param {module:api/AisleApi~addAisleAuditCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addAisleAudit = function(aisleId, aisleAudit, callback) {
      var postBody = null;

      // verify the required parameter 'aisleId' is set
      if (aisleId == undefined || aisleId == null) {
        throw "Missing the required parameter 'aisleId' when calling addAisleAudit";
      }

      // verify the required parameter 'aisleAudit' is set
      if (aisleAudit == undefined || aisleAudit == null) {
        throw "Missing the required parameter 'aisleAudit' when calling addAisleAudit";
      }


      var pathParams = {
        'aisleId': aisleId,
        'aisleAudit': aisleAudit
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
        '/beta/aisle/{aisleId}/audit/{aisleAudit}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addAisleTag operation.
     * @callback module:api/AisleApi~addAisleTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new tags for an aisle.
     * Adds a tag to an existing aisle.
     * @param {Integer} aisleId Id of the aisle to add a tag to
     * @param {String} aisleTag The tag to add
     * @param {module:api/AisleApi~addAisleTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addAisleTag = function(aisleId, aisleTag, callback) {
      var postBody = null;

      // verify the required parameter 'aisleId' is set
      if (aisleId == undefined || aisleId == null) {
        throw "Missing the required parameter 'aisleId' when calling addAisleTag";
      }

      // verify the required parameter 'aisleTag' is set
      if (aisleTag == undefined || aisleTag == null) {
        throw "Missing the required parameter 'aisleTag' when calling addAisleTag";
      }


      var pathParams = {
        'aisleId': aisleId,
        'aisleTag': aisleTag
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
        '/beta/aisle/{aisleId}/tag/{aisleTag}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteAisle operation.
     * @callback module:api/AisleApi~deleteAisleCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an aisle
     * Deletes the aisle identified by the specified id.
     * @param {Integer} aisleId Id of the aisle to be deleted.
     * @param {module:api/AisleApi~deleteAisleCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteAisle = function(aisleId, callback) {
      var postBody = null;

      // verify the required parameter 'aisleId' is set
      if (aisleId == undefined || aisleId == null) {
        throw "Missing the required parameter 'aisleId' when calling deleteAisle";
      }


      var pathParams = {
        'aisleId': aisleId
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
        '/beta/aisle/{aisleId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteAisleTag operation.
     * @callback module:api/AisleApi~deleteAisleTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a tag for an aisle.
     * Deletes an existing aisle tag using the specified data.
     * @param {Integer} aisleId Id of the aisle to remove tag from
     * @param {String} aisleTag The tag to delete
     * @param {module:api/AisleApi~deleteAisleTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteAisleTag = function(aisleId, aisleTag, callback) {
      var postBody = null;

      // verify the required parameter 'aisleId' is set
      if (aisleId == undefined || aisleId == null) {
        throw "Missing the required parameter 'aisleId' when calling deleteAisleTag";
      }

      // verify the required parameter 'aisleTag' is set
      if (aisleTag == undefined || aisleTag == null) {
        throw "Missing the required parameter 'aisleTag' when calling deleteAisleTag";
      }


      var pathParams = {
        'aisleId': aisleId,
        'aisleTag': aisleTag
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
        '/beta/aisle/{aisleId}/tag/{aisleTag}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAisleByFilter operation.
     * @callback module:api/AisleApi~getAisleByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Aisle>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search aisles by filter
     * Returns the list of aisles that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/AisleApi~getAisleByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/Aisle>}
     */
    this.getAisleByFilter = function(opts, callback) {
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
      var returnType = [Aisle];

      return this.apiClient.callApi(
        '/beta/aisle/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAisleById operation.
     * @callback module:api/AisleApi~getAisleByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Aisle} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an aisle by id
     * Returns the aisle identified by the specified id.
     * @param {Integer} aisleId Id of the aisle to be returned.
     * @param {module:api/AisleApi~getAisleByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Aisle}
     */
    this.getAisleById = function(aisleId, callback) {
      var postBody = null;

      // verify the required parameter 'aisleId' is set
      if (aisleId == undefined || aisleId == null) {
        throw "Missing the required parameter 'aisleId' when calling getAisleById";
      }


      var pathParams = {
        'aisleId': aisleId
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
      var returnType = Aisle;

      return this.apiClient.callApi(
        '/beta/aisle/{aisleId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAisleTags operation.
     * @callback module:api/AisleApi~getAisleTagsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the tags for an aisle.
     * Get all existing aisle tags.
     * @param {Integer} aisleId Id of the aisle to get tags for
     * @param {module:api/AisleApi~getAisleTagsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getAisleTags = function(aisleId, callback) {
      var postBody = null;

      // verify the required parameter 'aisleId' is set
      if (aisleId == undefined || aisleId == null) {
        throw "Missing the required parameter 'aisleId' when calling getAisleTags";
      }


      var pathParams = {
        'aisleId': aisleId
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
        '/beta/aisle/{aisleId}/tag', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDuplicateAisleById operation.
     * @callback module:api/AisleApi~getDuplicateAisleByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Aisle} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated an aisle by id
     * Returns a duplicated aisle identified by the specified id.
     * @param {Integer} aisleId Id of the aisle to be duplicated.
     * @param {module:api/AisleApi~getDuplicateAisleByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Aisle}
     */
    this.getDuplicateAisleById = function(aisleId, callback) {
      var postBody = null;

      // verify the required parameter 'aisleId' is set
      if (aisleId == undefined || aisleId == null) {
        throw "Missing the required parameter 'aisleId' when calling getDuplicateAisleById";
      }


      var pathParams = {
        'aisleId': aisleId
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
      var returnType = Aisle;

      return this.apiClient.callApi(
        '/beta/aisle/duplicate/{aisleId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateAisle operation.
     * @callback module:api/AisleApi~updateAisleCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an aisle
     * Updates an existing aisle using the specified data.
     * @param {module:model/Aisle} body Aisle to be updated.
     * @param {module:api/AisleApi~updateAisleCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateAisle = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateAisle";
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
        '/beta/aisle', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateAisleCustomFields operation.
     * @callback module:api/AisleApi~updateAisleCustomFieldsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an aisle custom fields
     * Updates an existing aisle custom fields using the specified data.
     * @param {module:model/Aisle} body Aisle to be updated.
     * @param {module:api/AisleApi~updateAisleCustomFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateAisleCustomFields = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateAisleCustomFields";
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
        '/beta/aisle/customFields', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
