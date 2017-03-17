(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/CartonType', '../model/ApiResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CartonType'), require('../model/ApiResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.CartonTypeApi = factory(root.infoplus.ApiClient, root.infoplus.CartonType, root.infoplus.ApiResponse);
  }
}(this, function(ApiClient, CartonType, ApiResponse) {
  'use strict';

  /**
   * CartonType service.
   * @module api/CartonTypeApi
   * @version beta
   */

  /**
   * Constructs a new CartonTypeApi. 
   * @alias module:api/CartonTypeApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addCartonType operation.
     * @callback module:api/CartonTypeApi~addCartonTypeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CartonType} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a cartonType
     * Inserts a new cartonType using the specified data.
     * @param {module:model/CartonType} body CartonType to be inserted.
     * @param {module:api/CartonTypeApi~addCartonTypeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/CartonType}
     */
    this.addCartonType = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling addCartonType";
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
      var returnType = CartonType;

      return this.apiClient.callApi(
        '/beta/cartonType', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addCartonTypeAudit operation.
     * @callback module:api/CartonTypeApi~addCartonTypeAuditCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new audit for a cartonType
     * Adds an audit to an existing cartonType.
     * @param {Integer} cartonTypeId Id of the cartonType to add an audit to
     * @param {String} cartonTypeAudit The audit to add
     * @param {module:api/CartonTypeApi~addCartonTypeAuditCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addCartonTypeAudit = function(cartonTypeId, cartonTypeAudit, callback) {
      var postBody = null;

      // verify the required parameter 'cartonTypeId' is set
      if (cartonTypeId == undefined || cartonTypeId == null) {
        throw "Missing the required parameter 'cartonTypeId' when calling addCartonTypeAudit";
      }

      // verify the required parameter 'cartonTypeAudit' is set
      if (cartonTypeAudit == undefined || cartonTypeAudit == null) {
        throw "Missing the required parameter 'cartonTypeAudit' when calling addCartonTypeAudit";
      }


      var pathParams = {
        'cartonTypeId': cartonTypeId,
        'cartonTypeAudit': cartonTypeAudit
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
        '/beta/cartonType/{cartonTypeId}/audit/{cartonTypeAudit}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addCartonTypeTag operation.
     * @callback module:api/CartonTypeApi~addCartonTypeTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new tags for a cartonType.
     * Adds a tag to an existing cartonType.
     * @param {Integer} cartonTypeId Id of the cartonType to add a tag to
     * @param {String} cartonTypeTag The tag to add
     * @param {module:api/CartonTypeApi~addCartonTypeTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addCartonTypeTag = function(cartonTypeId, cartonTypeTag, callback) {
      var postBody = null;

      // verify the required parameter 'cartonTypeId' is set
      if (cartonTypeId == undefined || cartonTypeId == null) {
        throw "Missing the required parameter 'cartonTypeId' when calling addCartonTypeTag";
      }

      // verify the required parameter 'cartonTypeTag' is set
      if (cartonTypeTag == undefined || cartonTypeTag == null) {
        throw "Missing the required parameter 'cartonTypeTag' when calling addCartonTypeTag";
      }


      var pathParams = {
        'cartonTypeId': cartonTypeId,
        'cartonTypeTag': cartonTypeTag
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
        '/beta/cartonType/{cartonTypeId}/tag/{cartonTypeTag}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteCartonType operation.
     * @callback module:api/CartonTypeApi~deleteCartonTypeCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a cartonType
     * Deletes the cartonType identified by the specified id.
     * @param {Integer} cartonTypeId Id of the cartonType to be deleted.
     * @param {module:api/CartonTypeApi~deleteCartonTypeCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteCartonType = function(cartonTypeId, callback) {
      var postBody = null;

      // verify the required parameter 'cartonTypeId' is set
      if (cartonTypeId == undefined || cartonTypeId == null) {
        throw "Missing the required parameter 'cartonTypeId' when calling deleteCartonType";
      }


      var pathParams = {
        'cartonTypeId': cartonTypeId
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
        '/beta/cartonType/{cartonTypeId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteCartonTypeTag operation.
     * @callback module:api/CartonTypeApi~deleteCartonTypeTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a tag for a cartonType.
     * Deletes an existing cartonType tag using the specified data.
     * @param {Integer} cartonTypeId Id of the cartonType to remove tag from
     * @param {String} cartonTypeTag The tag to delete
     * @param {module:api/CartonTypeApi~deleteCartonTypeTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteCartonTypeTag = function(cartonTypeId, cartonTypeTag, callback) {
      var postBody = null;

      // verify the required parameter 'cartonTypeId' is set
      if (cartonTypeId == undefined || cartonTypeId == null) {
        throw "Missing the required parameter 'cartonTypeId' when calling deleteCartonTypeTag";
      }

      // verify the required parameter 'cartonTypeTag' is set
      if (cartonTypeTag == undefined || cartonTypeTag == null) {
        throw "Missing the required parameter 'cartonTypeTag' when calling deleteCartonTypeTag";
      }


      var pathParams = {
        'cartonTypeId': cartonTypeId,
        'cartonTypeTag': cartonTypeTag
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
        '/beta/cartonType/{cartonTypeId}/tag/{cartonTypeTag}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCartonTypeByFilter operation.
     * @callback module:api/CartonTypeApi~getCartonTypeByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/CartonType>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search cartonTypes by filter
     * Returns the list of cartonTypes that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/CartonTypeApi~getCartonTypeByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/CartonType>}
     */
    this.getCartonTypeByFilter = function(opts, callback) {
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
      var returnType = [CartonType];

      return this.apiClient.callApi(
        '/beta/cartonType/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCartonTypeById operation.
     * @callback module:api/CartonTypeApi~getCartonTypeByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CartonType} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a cartonType by id
     * Returns the cartonType identified by the specified id.
     * @param {Integer} cartonTypeId Id of the cartonType to be returned.
     * @param {module:api/CartonTypeApi~getCartonTypeByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/CartonType}
     */
    this.getCartonTypeById = function(cartonTypeId, callback) {
      var postBody = null;

      // verify the required parameter 'cartonTypeId' is set
      if (cartonTypeId == undefined || cartonTypeId == null) {
        throw "Missing the required parameter 'cartonTypeId' when calling getCartonTypeById";
      }


      var pathParams = {
        'cartonTypeId': cartonTypeId
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
      var returnType = CartonType;

      return this.apiClient.callApi(
        '/beta/cartonType/{cartonTypeId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCartonTypeTags operation.
     * @callback module:api/CartonTypeApi~getCartonTypeTagsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the tags for a cartonType.
     * Get all existing cartonType tags.
     * @param {Integer} cartonTypeId Id of the cartonType to get tags for
     * @param {module:api/CartonTypeApi~getCartonTypeTagsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getCartonTypeTags = function(cartonTypeId, callback) {
      var postBody = null;

      // verify the required parameter 'cartonTypeId' is set
      if (cartonTypeId == undefined || cartonTypeId == null) {
        throw "Missing the required parameter 'cartonTypeId' when calling getCartonTypeTags";
      }


      var pathParams = {
        'cartonTypeId': cartonTypeId
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
        '/beta/cartonType/{cartonTypeId}/tag', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDuplicateCartonTypeById operation.
     * @callback module:api/CartonTypeApi~getDuplicateCartonTypeByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CartonType} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated a cartonType by id
     * Returns a duplicated cartonType identified by the specified id.
     * @param {Integer} cartonTypeId Id of the cartonType to be duplicated.
     * @param {module:api/CartonTypeApi~getDuplicateCartonTypeByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/CartonType}
     */
    this.getDuplicateCartonTypeById = function(cartonTypeId, callback) {
      var postBody = null;

      // verify the required parameter 'cartonTypeId' is set
      if (cartonTypeId == undefined || cartonTypeId == null) {
        throw "Missing the required parameter 'cartonTypeId' when calling getDuplicateCartonTypeById";
      }


      var pathParams = {
        'cartonTypeId': cartonTypeId
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
      var returnType = CartonType;

      return this.apiClient.callApi(
        '/beta/cartonType/duplicate/{cartonTypeId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateCartonType operation.
     * @callback module:api/CartonTypeApi~updateCartonTypeCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a cartonType
     * Updates an existing cartonType using the specified data.
     * @param {module:model/CartonType} body CartonType to be updated.
     * @param {module:api/CartonTypeApi~updateCartonTypeCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateCartonType = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateCartonType";
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
        '/beta/cartonType', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateCartonTypeCustomFields operation.
     * @callback module:api/CartonTypeApi~updateCartonTypeCustomFieldsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a cartonType custom fields
     * Updates an existing cartonType custom fields using the specified data.
     * @param {module:model/CartonType} body CartonType to be updated.
     * @param {module:api/CartonTypeApi~updateCartonTypeCustomFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateCartonTypeCustomFields = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateCartonTypeCustomFields";
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
        '/beta/cartonType/customFields', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
