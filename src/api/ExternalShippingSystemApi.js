(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/ExternalShippingSystem', '../model/ApiResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ExternalShippingSystem'), require('../model/ApiResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.ExternalShippingSystemApi = factory(root.infoplus.ApiClient, root.infoplus.ExternalShippingSystem, root.infoplus.ApiResponse);
  }
}(this, function(ApiClient, ExternalShippingSystem, ApiResponse) {
  'use strict';

  /**
   * ExternalShippingSystem service.
   * @module api/ExternalShippingSystemApi
   * @version beta
   */

  /**
   * Constructs a new ExternalShippingSystemApi. 
   * @alias module:api/ExternalShippingSystemApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addExternalShippingSystem operation.
     * @callback module:api/ExternalShippingSystemApi~addExternalShippingSystemCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ExternalShippingSystem} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an externalShippingSystem
     * Inserts a new externalShippingSystem using the specified data.
     * @param {module:model/ExternalShippingSystem} body ExternalShippingSystem to be inserted.
     * @param {module:api/ExternalShippingSystemApi~addExternalShippingSystemCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ExternalShippingSystem}
     */
    this.addExternalShippingSystem = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling addExternalShippingSystem";
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
      var returnType = ExternalShippingSystem;

      return this.apiClient.callApi(
        '/beta/externalShippingSystem', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addExternalShippingSystemAudit operation.
     * @callback module:api/ExternalShippingSystemApi~addExternalShippingSystemAuditCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new audit for an externalShippingSystem
     * Adds an audit to an existing externalShippingSystem.
     * @param {Integer} externalShippingSystemId Id of the externalShippingSystem to add an audit to
     * @param {String} externalShippingSystemAudit The audit to add
     * @param {module:api/ExternalShippingSystemApi~addExternalShippingSystemAuditCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addExternalShippingSystemAudit = function(externalShippingSystemId, externalShippingSystemAudit, callback) {
      var postBody = null;

      // verify the required parameter 'externalShippingSystemId' is set
      if (externalShippingSystemId == undefined || externalShippingSystemId == null) {
        throw "Missing the required parameter 'externalShippingSystemId' when calling addExternalShippingSystemAudit";
      }

      // verify the required parameter 'externalShippingSystemAudit' is set
      if (externalShippingSystemAudit == undefined || externalShippingSystemAudit == null) {
        throw "Missing the required parameter 'externalShippingSystemAudit' when calling addExternalShippingSystemAudit";
      }


      var pathParams = {
        'externalShippingSystemId': externalShippingSystemId,
        'externalShippingSystemAudit': externalShippingSystemAudit
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
        '/beta/externalShippingSystem/{externalShippingSystemId}/audit/{externalShippingSystemAudit}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addExternalShippingSystemTag operation.
     * @callback module:api/ExternalShippingSystemApi~addExternalShippingSystemTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new tags for an externalShippingSystem.
     * Adds a tag to an existing externalShippingSystem.
     * @param {Integer} externalShippingSystemId Id of the externalShippingSystem to add a tag to
     * @param {String} externalShippingSystemTag The tag to add
     * @param {module:api/ExternalShippingSystemApi~addExternalShippingSystemTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addExternalShippingSystemTag = function(externalShippingSystemId, externalShippingSystemTag, callback) {
      var postBody = null;

      // verify the required parameter 'externalShippingSystemId' is set
      if (externalShippingSystemId == undefined || externalShippingSystemId == null) {
        throw "Missing the required parameter 'externalShippingSystemId' when calling addExternalShippingSystemTag";
      }

      // verify the required parameter 'externalShippingSystemTag' is set
      if (externalShippingSystemTag == undefined || externalShippingSystemTag == null) {
        throw "Missing the required parameter 'externalShippingSystemTag' when calling addExternalShippingSystemTag";
      }


      var pathParams = {
        'externalShippingSystemId': externalShippingSystemId,
        'externalShippingSystemTag': externalShippingSystemTag
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
        '/beta/externalShippingSystem/{externalShippingSystemId}/tag/{externalShippingSystemTag}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteExternalShippingSystem operation.
     * @callback module:api/ExternalShippingSystemApi~deleteExternalShippingSystemCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an externalShippingSystem
     * Deletes the externalShippingSystem identified by the specified id.
     * @param {Integer} externalShippingSystemId Id of the externalShippingSystem to be deleted.
     * @param {module:api/ExternalShippingSystemApi~deleteExternalShippingSystemCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteExternalShippingSystem = function(externalShippingSystemId, callback) {
      var postBody = null;

      // verify the required parameter 'externalShippingSystemId' is set
      if (externalShippingSystemId == undefined || externalShippingSystemId == null) {
        throw "Missing the required parameter 'externalShippingSystemId' when calling deleteExternalShippingSystem";
      }


      var pathParams = {
        'externalShippingSystemId': externalShippingSystemId
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
        '/beta/externalShippingSystem/{externalShippingSystemId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteExternalShippingSystemTag operation.
     * @callback module:api/ExternalShippingSystemApi~deleteExternalShippingSystemTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a tag for an externalShippingSystem.
     * Deletes an existing externalShippingSystem tag using the specified data.
     * @param {Integer} externalShippingSystemId Id of the externalShippingSystem to remove tag from
     * @param {String} externalShippingSystemTag The tag to delete
     * @param {module:api/ExternalShippingSystemApi~deleteExternalShippingSystemTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteExternalShippingSystemTag = function(externalShippingSystemId, externalShippingSystemTag, callback) {
      var postBody = null;

      // verify the required parameter 'externalShippingSystemId' is set
      if (externalShippingSystemId == undefined || externalShippingSystemId == null) {
        throw "Missing the required parameter 'externalShippingSystemId' when calling deleteExternalShippingSystemTag";
      }

      // verify the required parameter 'externalShippingSystemTag' is set
      if (externalShippingSystemTag == undefined || externalShippingSystemTag == null) {
        throw "Missing the required parameter 'externalShippingSystemTag' when calling deleteExternalShippingSystemTag";
      }


      var pathParams = {
        'externalShippingSystemId': externalShippingSystemId,
        'externalShippingSystemTag': externalShippingSystemTag
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
        '/beta/externalShippingSystem/{externalShippingSystemId}/tag/{externalShippingSystemTag}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDuplicateExternalShippingSystemById operation.
     * @callback module:api/ExternalShippingSystemApi~getDuplicateExternalShippingSystemByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ExternalShippingSystem} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated an externalShippingSystem by id
     * Returns a duplicated externalShippingSystem identified by the specified id.
     * @param {Integer} externalShippingSystemId Id of the externalShippingSystem to be duplicated.
     * @param {module:api/ExternalShippingSystemApi~getDuplicateExternalShippingSystemByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ExternalShippingSystem}
     */
    this.getDuplicateExternalShippingSystemById = function(externalShippingSystemId, callback) {
      var postBody = null;

      // verify the required parameter 'externalShippingSystemId' is set
      if (externalShippingSystemId == undefined || externalShippingSystemId == null) {
        throw "Missing the required parameter 'externalShippingSystemId' when calling getDuplicateExternalShippingSystemById";
      }


      var pathParams = {
        'externalShippingSystemId': externalShippingSystemId
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
      var returnType = ExternalShippingSystem;

      return this.apiClient.callApi(
        '/beta/externalShippingSystem/duplicate/{externalShippingSystemId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getExternalShippingSystemByFilter operation.
     * @callback module:api/ExternalShippingSystemApi~getExternalShippingSystemByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ExternalShippingSystem>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search externalShippingSystems by filter
     * Returns the list of externalShippingSystems that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/ExternalShippingSystemApi~getExternalShippingSystemByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/ExternalShippingSystem>}
     */
    this.getExternalShippingSystemByFilter = function(opts, callback) {
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
      var returnType = [ExternalShippingSystem];

      return this.apiClient.callApi(
        '/beta/externalShippingSystem/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getExternalShippingSystemById operation.
     * @callback module:api/ExternalShippingSystemApi~getExternalShippingSystemByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ExternalShippingSystem} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an externalShippingSystem by id
     * Returns the externalShippingSystem identified by the specified id.
     * @param {Integer} externalShippingSystemId Id of the externalShippingSystem to be returned.
     * @param {module:api/ExternalShippingSystemApi~getExternalShippingSystemByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ExternalShippingSystem}
     */
    this.getExternalShippingSystemById = function(externalShippingSystemId, callback) {
      var postBody = null;

      // verify the required parameter 'externalShippingSystemId' is set
      if (externalShippingSystemId == undefined || externalShippingSystemId == null) {
        throw "Missing the required parameter 'externalShippingSystemId' when calling getExternalShippingSystemById";
      }


      var pathParams = {
        'externalShippingSystemId': externalShippingSystemId
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
      var returnType = ExternalShippingSystem;

      return this.apiClient.callApi(
        '/beta/externalShippingSystem/{externalShippingSystemId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getExternalShippingSystemTags operation.
     * @callback module:api/ExternalShippingSystemApi~getExternalShippingSystemTagsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the tags for an externalShippingSystem.
     * Get all existing externalShippingSystem tags.
     * @param {Integer} externalShippingSystemId Id of the externalShippingSystem to get tags for
     * @param {module:api/ExternalShippingSystemApi~getExternalShippingSystemTagsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getExternalShippingSystemTags = function(externalShippingSystemId, callback) {
      var postBody = null;

      // verify the required parameter 'externalShippingSystemId' is set
      if (externalShippingSystemId == undefined || externalShippingSystemId == null) {
        throw "Missing the required parameter 'externalShippingSystemId' when calling getExternalShippingSystemTags";
      }


      var pathParams = {
        'externalShippingSystemId': externalShippingSystemId
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
        '/beta/externalShippingSystem/{externalShippingSystemId}/tag', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateExternalShippingSystem operation.
     * @callback module:api/ExternalShippingSystemApi~updateExternalShippingSystemCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an externalShippingSystem
     * Updates an existing externalShippingSystem using the specified data.
     * @param {module:model/ExternalShippingSystem} body ExternalShippingSystem to be updated.
     * @param {module:api/ExternalShippingSystemApi~updateExternalShippingSystemCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateExternalShippingSystem = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateExternalShippingSystem";
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
        '/beta/externalShippingSystem', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateExternalShippingSystemCustomFields operation.
     * @callback module:api/ExternalShippingSystemApi~updateExternalShippingSystemCustomFieldsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an externalShippingSystem custom fields
     * Updates an existing externalShippingSystem custom fields using the specified data.
     * @param {module:model/ExternalShippingSystem} body ExternalShippingSystem to be updated.
     * @param {module:api/ExternalShippingSystemApi~updateExternalShippingSystemCustomFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateExternalShippingSystemCustomFields = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateExternalShippingSystemCustomFields";
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
        '/beta/externalShippingSystem/customFields', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));