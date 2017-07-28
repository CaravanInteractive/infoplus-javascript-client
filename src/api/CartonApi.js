(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/Carton', '../model/ApiResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Carton'), require('../model/ApiResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.CartonApi = factory(root.infoplus.ApiClient, root.infoplus.Carton, root.infoplus.ApiResponse);
  }
}(this, function(ApiClient, Carton, ApiResponse) {
  'use strict';

  /**
   * Carton service.
   * @module api/CartonApi
   * @version beta
   */

  /**
   * Constructs a new CartonApi. 
   * @alias module:api/CartonApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addCarton operation.
     * @callback module:api/CartonApi~addCartonCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Carton} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a carton
     * Inserts a new carton using the specified data.
     * @param {module:model/Carton} body Carton to be inserted.
     * @param {module:api/CartonApi~addCartonCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Carton}
     */
    this.addCarton = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling addCarton";
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
      var returnType = Carton;

      return this.apiClient.callApi(
        '/beta/carton', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addCartonAudit operation.
     * @callback module:api/CartonApi~addCartonAuditCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new audit for a carton
     * Adds an audit to an existing carton.
     * @param {Integer} cartonId Id of the carton to add an audit to
     * @param {String} cartonAudit The audit to add
     * @param {module:api/CartonApi~addCartonAuditCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addCartonAudit = function(cartonId, cartonAudit, callback) {
      var postBody = null;

      // verify the required parameter 'cartonId' is set
      if (cartonId == undefined || cartonId == null) {
        throw "Missing the required parameter 'cartonId' when calling addCartonAudit";
      }

      // verify the required parameter 'cartonAudit' is set
      if (cartonAudit == undefined || cartonAudit == null) {
        throw "Missing the required parameter 'cartonAudit' when calling addCartonAudit";
      }


      var pathParams = {
        'cartonId': cartonId,
        'cartonAudit': cartonAudit
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
        '/beta/carton/{cartonId}/audit/{cartonAudit}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addCartonTag operation.
     * @callback module:api/CartonApi~addCartonTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new tags for a carton.
     * Adds a tag to an existing carton.
     * @param {Integer} cartonId Id of the carton to add a tag to
     * @param {String} cartonTag The tag to add
     * @param {module:api/CartonApi~addCartonTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addCartonTag = function(cartonId, cartonTag, callback) {
      var postBody = null;

      // verify the required parameter 'cartonId' is set
      if (cartonId == undefined || cartonId == null) {
        throw "Missing the required parameter 'cartonId' when calling addCartonTag";
      }

      // verify the required parameter 'cartonTag' is set
      if (cartonTag == undefined || cartonTag == null) {
        throw "Missing the required parameter 'cartonTag' when calling addCartonTag";
      }


      var pathParams = {
        'cartonId': cartonId,
        'cartonTag': cartonTag
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
        '/beta/carton/{cartonId}/tag/{cartonTag}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteCarton operation.
     * @callback module:api/CartonApi~deleteCartonCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a carton
     * Deletes the carton identified by the specified id.
     * @param {Integer} cartonId Id of the carton to be deleted.
     * @param {module:api/CartonApi~deleteCartonCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteCarton = function(cartonId, callback) {
      var postBody = null;

      // verify the required parameter 'cartonId' is set
      if (cartonId == undefined || cartonId == null) {
        throw "Missing the required parameter 'cartonId' when calling deleteCarton";
      }


      var pathParams = {
        'cartonId': cartonId
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
        '/beta/carton/{cartonId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteCartonTag operation.
     * @callback module:api/CartonApi~deleteCartonTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a tag for a carton.
     * Deletes an existing carton tag using the specified data.
     * @param {Integer} cartonId Id of the carton to remove tag from
     * @param {String} cartonTag The tag to delete
     * @param {module:api/CartonApi~deleteCartonTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteCartonTag = function(cartonId, cartonTag, callback) {
      var postBody = null;

      // verify the required parameter 'cartonId' is set
      if (cartonId == undefined || cartonId == null) {
        throw "Missing the required parameter 'cartonId' when calling deleteCartonTag";
      }

      // verify the required parameter 'cartonTag' is set
      if (cartonTag == undefined || cartonTag == null) {
        throw "Missing the required parameter 'cartonTag' when calling deleteCartonTag";
      }


      var pathParams = {
        'cartonId': cartonId,
        'cartonTag': cartonTag
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
        '/beta/carton/{cartonId}/tag/{cartonTag}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCartonByFilter operation.
     * @callback module:api/CartonApi~getCartonByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Carton>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search cartons by filter
     * Returns the list of cartons that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/CartonApi~getCartonByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/Carton>}
     */
    this.getCartonByFilter = function(opts, callback) {
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
      var returnType = [Carton];

      return this.apiClient.callApi(
        '/beta/carton/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCartonById operation.
     * @callback module:api/CartonApi~getCartonByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Carton} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a carton by id
     * Returns the carton identified by the specified id.
     * @param {Integer} cartonId Id of the carton to be returned.
     * @param {module:api/CartonApi~getCartonByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Carton}
     */
    this.getCartonById = function(cartonId, callback) {
      var postBody = null;

      // verify the required parameter 'cartonId' is set
      if (cartonId == undefined || cartonId == null) {
        throw "Missing the required parameter 'cartonId' when calling getCartonById";
      }


      var pathParams = {
        'cartonId': cartonId
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
      var returnType = Carton;

      return this.apiClient.callApi(
        '/beta/carton/{cartonId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCartonTags operation.
     * @callback module:api/CartonApi~getCartonTagsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the tags for a carton.
     * Get all existing carton tags.
     * @param {Integer} cartonId Id of the carton to get tags for
     * @param {module:api/CartonApi~getCartonTagsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getCartonTags = function(cartonId, callback) {
      var postBody = null;

      // verify the required parameter 'cartonId' is set
      if (cartonId == undefined || cartonId == null) {
        throw "Missing the required parameter 'cartonId' when calling getCartonTags";
      }


      var pathParams = {
        'cartonId': cartonId
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
        '/beta/carton/{cartonId}/tag', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDuplicateCartonById operation.
     * @callback module:api/CartonApi~getDuplicateCartonByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Carton} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated a carton by id
     * Returns a duplicated carton identified by the specified id.
     * @param {Integer} cartonId Id of the carton to be duplicated.
     * @param {module:api/CartonApi~getDuplicateCartonByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Carton}
     */
    this.getDuplicateCartonById = function(cartonId, callback) {
      var postBody = null;

      // verify the required parameter 'cartonId' is set
      if (cartonId == undefined || cartonId == null) {
        throw "Missing the required parameter 'cartonId' when calling getDuplicateCartonById";
      }


      var pathParams = {
        'cartonId': cartonId
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
      var returnType = Carton;

      return this.apiClient.callApi(
        '/beta/carton/duplicate/{cartonId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateCarton operation.
     * @callback module:api/CartonApi~updateCartonCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a carton
     * Updates an existing carton using the specified data.
     * @param {module:model/Carton} body Carton to be updated.
     * @param {module:api/CartonApi~updateCartonCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateCarton = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateCarton";
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
        '/beta/carton', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateCartonCustomFields operation.
     * @callback module:api/CartonApi~updateCartonCustomFieldsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a carton custom fields
     * Updates an existing carton custom fields using the specified data.
     * @param {module:model/Carton} body Carton to be updated.
     * @param {module:api/CartonApi~updateCartonCustomFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateCartonCustomFields = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateCartonCustomFields";
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
        '/beta/carton/customFields', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
