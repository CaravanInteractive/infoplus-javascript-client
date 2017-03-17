(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/CartonContent', '../model/ApiResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CartonContent'), require('../model/ApiResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.CartonContentApi = factory(root.infoplus.ApiClient, root.infoplus.CartonContent, root.infoplus.ApiResponse);
  }
}(this, function(ApiClient, CartonContent, ApiResponse) {
  'use strict';

  /**
   * CartonContent service.
   * @module api/CartonContentApi
   * @version beta
   */

  /**
   * Constructs a new CartonContentApi. 
   * @alias module:api/CartonContentApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addCartonContent operation.
     * @callback module:api/CartonContentApi~addCartonContentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CartonContent} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a cartonContent
     * Inserts a new cartonContent using the specified data.
     * @param {module:model/CartonContent} body CartonContent to be inserted.
     * @param {module:api/CartonContentApi~addCartonContentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/CartonContent}
     */
    this.addCartonContent = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling addCartonContent";
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
      var returnType = CartonContent;

      return this.apiClient.callApi(
        '/beta/cartonContent', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addCartonContentAudit operation.
     * @callback module:api/CartonContentApi~addCartonContentAuditCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new audit for a cartonContent
     * Adds an audit to an existing cartonContent.
     * @param {Integer} cartonContentId Id of the cartonContent to add an audit to
     * @param {String} cartonContentAudit The audit to add
     * @param {module:api/CartonContentApi~addCartonContentAuditCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addCartonContentAudit = function(cartonContentId, cartonContentAudit, callback) {
      var postBody = null;

      // verify the required parameter 'cartonContentId' is set
      if (cartonContentId == undefined || cartonContentId == null) {
        throw "Missing the required parameter 'cartonContentId' when calling addCartonContentAudit";
      }

      // verify the required parameter 'cartonContentAudit' is set
      if (cartonContentAudit == undefined || cartonContentAudit == null) {
        throw "Missing the required parameter 'cartonContentAudit' when calling addCartonContentAudit";
      }


      var pathParams = {
        'cartonContentId': cartonContentId,
        'cartonContentAudit': cartonContentAudit
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
        '/beta/cartonContent/{cartonContentId}/audit/{cartonContentAudit}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addCartonContentTag operation.
     * @callback module:api/CartonContentApi~addCartonContentTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new tags for a cartonContent.
     * Adds a tag to an existing cartonContent.
     * @param {Integer} cartonContentId Id of the cartonContent to add a tag to
     * @param {String} cartonContentTag The tag to add
     * @param {module:api/CartonContentApi~addCartonContentTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addCartonContentTag = function(cartonContentId, cartonContentTag, callback) {
      var postBody = null;

      // verify the required parameter 'cartonContentId' is set
      if (cartonContentId == undefined || cartonContentId == null) {
        throw "Missing the required parameter 'cartonContentId' when calling addCartonContentTag";
      }

      // verify the required parameter 'cartonContentTag' is set
      if (cartonContentTag == undefined || cartonContentTag == null) {
        throw "Missing the required parameter 'cartonContentTag' when calling addCartonContentTag";
      }


      var pathParams = {
        'cartonContentId': cartonContentId,
        'cartonContentTag': cartonContentTag
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
        '/beta/cartonContent/{cartonContentId}/tag/{cartonContentTag}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteCartonContent operation.
     * @callback module:api/CartonContentApi~deleteCartonContentCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a cartonContent
     * Deletes the cartonContent identified by the specified id.
     * @param {Integer} cartonContentId Id of the cartonContent to be deleted.
     * @param {module:api/CartonContentApi~deleteCartonContentCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteCartonContent = function(cartonContentId, callback) {
      var postBody = null;

      // verify the required parameter 'cartonContentId' is set
      if (cartonContentId == undefined || cartonContentId == null) {
        throw "Missing the required parameter 'cartonContentId' when calling deleteCartonContent";
      }


      var pathParams = {
        'cartonContentId': cartonContentId
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
        '/beta/cartonContent/{cartonContentId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteCartonContentTag operation.
     * @callback module:api/CartonContentApi~deleteCartonContentTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a tag for a cartonContent.
     * Deletes an existing cartonContent tag using the specified data.
     * @param {Integer} cartonContentId Id of the cartonContent to remove tag from
     * @param {String} cartonContentTag The tag to delete
     * @param {module:api/CartonContentApi~deleteCartonContentTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteCartonContentTag = function(cartonContentId, cartonContentTag, callback) {
      var postBody = null;

      // verify the required parameter 'cartonContentId' is set
      if (cartonContentId == undefined || cartonContentId == null) {
        throw "Missing the required parameter 'cartonContentId' when calling deleteCartonContentTag";
      }

      // verify the required parameter 'cartonContentTag' is set
      if (cartonContentTag == undefined || cartonContentTag == null) {
        throw "Missing the required parameter 'cartonContentTag' when calling deleteCartonContentTag";
      }


      var pathParams = {
        'cartonContentId': cartonContentId,
        'cartonContentTag': cartonContentTag
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
        '/beta/cartonContent/{cartonContentId}/tag/{cartonContentTag}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCartonContentByFilter operation.
     * @callback module:api/CartonContentApi~getCartonContentByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/CartonContent>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search cartonContents by filter
     * Returns the list of cartonContents that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/CartonContentApi~getCartonContentByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/CartonContent>}
     */
    this.getCartonContentByFilter = function(opts, callback) {
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
      var returnType = [CartonContent];

      return this.apiClient.callApi(
        '/beta/cartonContent/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCartonContentById operation.
     * @callback module:api/CartonContentApi~getCartonContentByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CartonContent} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a cartonContent by id
     * Returns the cartonContent identified by the specified id.
     * @param {Integer} cartonContentId Id of the cartonContent to be returned.
     * @param {module:api/CartonContentApi~getCartonContentByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/CartonContent}
     */
    this.getCartonContentById = function(cartonContentId, callback) {
      var postBody = null;

      // verify the required parameter 'cartonContentId' is set
      if (cartonContentId == undefined || cartonContentId == null) {
        throw "Missing the required parameter 'cartonContentId' when calling getCartonContentById";
      }


      var pathParams = {
        'cartonContentId': cartonContentId
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
      var returnType = CartonContent;

      return this.apiClient.callApi(
        '/beta/cartonContent/{cartonContentId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCartonContentTags operation.
     * @callback module:api/CartonContentApi~getCartonContentTagsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the tags for a cartonContent.
     * Get all existing cartonContent tags.
     * @param {Integer} cartonContentId Id of the cartonContent to get tags for
     * @param {module:api/CartonContentApi~getCartonContentTagsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getCartonContentTags = function(cartonContentId, callback) {
      var postBody = null;

      // verify the required parameter 'cartonContentId' is set
      if (cartonContentId == undefined || cartonContentId == null) {
        throw "Missing the required parameter 'cartonContentId' when calling getCartonContentTags";
      }


      var pathParams = {
        'cartonContentId': cartonContentId
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
        '/beta/cartonContent/{cartonContentId}/tag', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDuplicateCartonContentById operation.
     * @callback module:api/CartonContentApi~getDuplicateCartonContentByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CartonContent} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated a cartonContent by id
     * Returns a duplicated cartonContent identified by the specified id.
     * @param {Integer} cartonContentId Id of the cartonContent to be duplicated.
     * @param {module:api/CartonContentApi~getDuplicateCartonContentByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/CartonContent}
     */
    this.getDuplicateCartonContentById = function(cartonContentId, callback) {
      var postBody = null;

      // verify the required parameter 'cartonContentId' is set
      if (cartonContentId == undefined || cartonContentId == null) {
        throw "Missing the required parameter 'cartonContentId' when calling getDuplicateCartonContentById";
      }


      var pathParams = {
        'cartonContentId': cartonContentId
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
      var returnType = CartonContent;

      return this.apiClient.callApi(
        '/beta/cartonContent/duplicate/{cartonContentId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateCartonContent operation.
     * @callback module:api/CartonContentApi~updateCartonContentCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a cartonContent
     * Updates an existing cartonContent using the specified data.
     * @param {module:model/CartonContent} body CartonContent to be updated.
     * @param {module:api/CartonContentApi~updateCartonContentCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateCartonContent = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateCartonContent";
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
        '/beta/cartonContent', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateCartonContentCustomFields operation.
     * @callback module:api/CartonContentApi~updateCartonContentCustomFieldsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a cartonContent custom fields
     * Updates an existing cartonContent custom fields using the specified data.
     * @param {module:model/CartonContent} body CartonContent to be updated.
     * @param {module:api/CartonContentApi~updateCartonContentCustomFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateCartonContentCustomFields = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateCartonContentCustomFields";
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
        '/beta/cartonContent/customFields', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
