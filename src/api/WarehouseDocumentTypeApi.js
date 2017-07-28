(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/WarehouseDocumentType'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/WarehouseDocumentType'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.WarehouseDocumentTypeApi = factory(root.infoplus.ApiClient, root.infoplus.WarehouseDocumentType);
  }
}(this, function(ApiClient, WarehouseDocumentType) {
  'use strict';

  /**
   * WarehouseDocumentType service.
   * @module api/WarehouseDocumentTypeApi
   * @version beta
   */

  /**
   * Constructs a new WarehouseDocumentTypeApi. 
   * @alias module:api/WarehouseDocumentTypeApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addWarehouseDocumentTypeAudit operation.
     * @callback module:api/WarehouseDocumentTypeApi~addWarehouseDocumentTypeAuditCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new audit for a warehouseDocumentType
     * Adds an audit to an existing warehouseDocumentType.
     * @param {Integer} warehouseDocumentTypeId Id of the warehouseDocumentType to add an audit to
     * @param {String} warehouseDocumentTypeAudit The audit to add
     * @param {module:api/WarehouseDocumentTypeApi~addWarehouseDocumentTypeAuditCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addWarehouseDocumentTypeAudit = function(warehouseDocumentTypeId, warehouseDocumentTypeAudit, callback) {
      var postBody = null;

      // verify the required parameter 'warehouseDocumentTypeId' is set
      if (warehouseDocumentTypeId == undefined || warehouseDocumentTypeId == null) {
        throw "Missing the required parameter 'warehouseDocumentTypeId' when calling addWarehouseDocumentTypeAudit";
      }

      // verify the required parameter 'warehouseDocumentTypeAudit' is set
      if (warehouseDocumentTypeAudit == undefined || warehouseDocumentTypeAudit == null) {
        throw "Missing the required parameter 'warehouseDocumentTypeAudit' when calling addWarehouseDocumentTypeAudit";
      }


      var pathParams = {
        'warehouseDocumentTypeId': warehouseDocumentTypeId,
        'warehouseDocumentTypeAudit': warehouseDocumentTypeAudit
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
        '/beta/warehouseDocumentType/{warehouseDocumentTypeId}/audit/{warehouseDocumentTypeAudit}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addWarehouseDocumentTypeTag operation.
     * @callback module:api/WarehouseDocumentTypeApi~addWarehouseDocumentTypeTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new tags for a warehouseDocumentType.
     * Adds a tag to an existing warehouseDocumentType.
     * @param {Integer} warehouseDocumentTypeId Id of the warehouseDocumentType to add a tag to
     * @param {String} warehouseDocumentTypeTag The tag to add
     * @param {module:api/WarehouseDocumentTypeApi~addWarehouseDocumentTypeTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addWarehouseDocumentTypeTag = function(warehouseDocumentTypeId, warehouseDocumentTypeTag, callback) {
      var postBody = null;

      // verify the required parameter 'warehouseDocumentTypeId' is set
      if (warehouseDocumentTypeId == undefined || warehouseDocumentTypeId == null) {
        throw "Missing the required parameter 'warehouseDocumentTypeId' when calling addWarehouseDocumentTypeTag";
      }

      // verify the required parameter 'warehouseDocumentTypeTag' is set
      if (warehouseDocumentTypeTag == undefined || warehouseDocumentTypeTag == null) {
        throw "Missing the required parameter 'warehouseDocumentTypeTag' when calling addWarehouseDocumentTypeTag";
      }


      var pathParams = {
        'warehouseDocumentTypeId': warehouseDocumentTypeId,
        'warehouseDocumentTypeTag': warehouseDocumentTypeTag
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
        '/beta/warehouseDocumentType/{warehouseDocumentTypeId}/tag/{warehouseDocumentTypeTag}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteWarehouseDocumentTypeTag operation.
     * @callback module:api/WarehouseDocumentTypeApi~deleteWarehouseDocumentTypeTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a tag for a warehouseDocumentType.
     * Deletes an existing warehouseDocumentType tag using the specified data.
     * @param {Integer} warehouseDocumentTypeId Id of the warehouseDocumentType to remove tag from
     * @param {String} warehouseDocumentTypeTag The tag to delete
     * @param {module:api/WarehouseDocumentTypeApi~deleteWarehouseDocumentTypeTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteWarehouseDocumentTypeTag = function(warehouseDocumentTypeId, warehouseDocumentTypeTag, callback) {
      var postBody = null;

      // verify the required parameter 'warehouseDocumentTypeId' is set
      if (warehouseDocumentTypeId == undefined || warehouseDocumentTypeId == null) {
        throw "Missing the required parameter 'warehouseDocumentTypeId' when calling deleteWarehouseDocumentTypeTag";
      }

      // verify the required parameter 'warehouseDocumentTypeTag' is set
      if (warehouseDocumentTypeTag == undefined || warehouseDocumentTypeTag == null) {
        throw "Missing the required parameter 'warehouseDocumentTypeTag' when calling deleteWarehouseDocumentTypeTag";
      }


      var pathParams = {
        'warehouseDocumentTypeId': warehouseDocumentTypeId,
        'warehouseDocumentTypeTag': warehouseDocumentTypeTag
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
        '/beta/warehouseDocumentType/{warehouseDocumentTypeId}/tag/{warehouseDocumentTypeTag}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDuplicateWarehouseDocumentTypeById operation.
     * @callback module:api/WarehouseDocumentTypeApi~getDuplicateWarehouseDocumentTypeByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WarehouseDocumentType} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated a warehouseDocumentType by id
     * Returns a duplicated warehouseDocumentType identified by the specified id.
     * @param {Integer} warehouseDocumentTypeId Id of the warehouseDocumentType to be duplicated.
     * @param {module:api/WarehouseDocumentTypeApi~getDuplicateWarehouseDocumentTypeByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/WarehouseDocumentType}
     */
    this.getDuplicateWarehouseDocumentTypeById = function(warehouseDocumentTypeId, callback) {
      var postBody = null;

      // verify the required parameter 'warehouseDocumentTypeId' is set
      if (warehouseDocumentTypeId == undefined || warehouseDocumentTypeId == null) {
        throw "Missing the required parameter 'warehouseDocumentTypeId' when calling getDuplicateWarehouseDocumentTypeById";
      }


      var pathParams = {
        'warehouseDocumentTypeId': warehouseDocumentTypeId
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
      var returnType = WarehouseDocumentType;

      return this.apiClient.callApi(
        '/beta/warehouseDocumentType/duplicate/{warehouseDocumentTypeId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getWarehouseDocumentTypeByFilter operation.
     * @callback module:api/WarehouseDocumentTypeApi~getWarehouseDocumentTypeByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/WarehouseDocumentType>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search warehouseDocumentTypes by filter
     * Returns the list of warehouseDocumentTypes that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/WarehouseDocumentTypeApi~getWarehouseDocumentTypeByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/WarehouseDocumentType>}
     */
    this.getWarehouseDocumentTypeByFilter = function(opts, callback) {
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
      var returnType = [WarehouseDocumentType];

      return this.apiClient.callApi(
        '/beta/warehouseDocumentType/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getWarehouseDocumentTypeById operation.
     * @callback module:api/WarehouseDocumentTypeApi~getWarehouseDocumentTypeByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WarehouseDocumentType} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a warehouseDocumentType by id
     * Returns the warehouseDocumentType identified by the specified id.
     * @param {Integer} warehouseDocumentTypeId Id of the warehouseDocumentType to be returned.
     * @param {module:api/WarehouseDocumentTypeApi~getWarehouseDocumentTypeByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/WarehouseDocumentType}
     */
    this.getWarehouseDocumentTypeById = function(warehouseDocumentTypeId, callback) {
      var postBody = null;

      // verify the required parameter 'warehouseDocumentTypeId' is set
      if (warehouseDocumentTypeId == undefined || warehouseDocumentTypeId == null) {
        throw "Missing the required parameter 'warehouseDocumentTypeId' when calling getWarehouseDocumentTypeById";
      }


      var pathParams = {
        'warehouseDocumentTypeId': warehouseDocumentTypeId
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
      var returnType = WarehouseDocumentType;

      return this.apiClient.callApi(
        '/beta/warehouseDocumentType/{warehouseDocumentTypeId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getWarehouseDocumentTypeTags operation.
     * @callback module:api/WarehouseDocumentTypeApi~getWarehouseDocumentTypeTagsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the tags for a warehouseDocumentType.
     * Get all existing warehouseDocumentType tags.
     * @param {Integer} warehouseDocumentTypeId Id of the warehouseDocumentType to get tags for
     * @param {module:api/WarehouseDocumentTypeApi~getWarehouseDocumentTypeTagsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getWarehouseDocumentTypeTags = function(warehouseDocumentTypeId, callback) {
      var postBody = null;

      // verify the required parameter 'warehouseDocumentTypeId' is set
      if (warehouseDocumentTypeId == undefined || warehouseDocumentTypeId == null) {
        throw "Missing the required parameter 'warehouseDocumentTypeId' when calling getWarehouseDocumentTypeTags";
      }


      var pathParams = {
        'warehouseDocumentTypeId': warehouseDocumentTypeId
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
        '/beta/warehouseDocumentType/{warehouseDocumentTypeId}/tag', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
