(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/Asn', '../model/ApiResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Asn'), require('../model/ApiResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.AsnApi = factory(root.infoplus.ApiClient, root.infoplus.Asn, root.infoplus.ApiResponse);
  }
}(this, function(ApiClient, Asn, ApiResponse) {
  'use strict';

  /**
   * Asn service.
   * @module api/AsnApi
   * @version beta
   */

  /**
   * Constructs a new AsnApi. 
   * @alias module:api/AsnApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addAsn operation.
     * @callback module:api/AsnApi~addAsnCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Asn} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an asn
     * Inserts a new asn using the specified data.
     * @param {module:model/Asn} body Asn to be inserted.
     * @param {module:api/AsnApi~addAsnCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Asn}
     */
    this.addAsn = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling addAsn";
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
      var returnType = Asn;

      return this.apiClient.callApi(
        '/beta/asn', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addAsnAudit operation.
     * @callback module:api/AsnApi~addAsnAuditCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new audit for an asn
     * Adds an audit to an existing asn.
     * @param {Integer} asnId Id of the asn to add an audit to
     * @param {String} asnAudit The audit to add
     * @param {module:api/AsnApi~addAsnAuditCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addAsnAudit = function(asnId, asnAudit, callback) {
      var postBody = null;

      // verify the required parameter 'asnId' is set
      if (asnId == undefined || asnId == null) {
        throw "Missing the required parameter 'asnId' when calling addAsnAudit";
      }

      // verify the required parameter 'asnAudit' is set
      if (asnAudit == undefined || asnAudit == null) {
        throw "Missing the required parameter 'asnAudit' when calling addAsnAudit";
      }


      var pathParams = {
        'asnId': asnId,
        'asnAudit': asnAudit
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
        '/beta/asn/{asnId}/audit/{asnAudit}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addAsnTag operation.
     * @callback module:api/AsnApi~addAsnTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new tags for an asn.
     * Adds a tag to an existing asn.
     * @param {Integer} asnId Id of the asn to add a tag to
     * @param {String} asnTag The tag to add
     * @param {module:api/AsnApi~addAsnTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addAsnTag = function(asnId, asnTag, callback) {
      var postBody = null;

      // verify the required parameter 'asnId' is set
      if (asnId == undefined || asnId == null) {
        throw "Missing the required parameter 'asnId' when calling addAsnTag";
      }

      // verify the required parameter 'asnTag' is set
      if (asnTag == undefined || asnTag == null) {
        throw "Missing the required parameter 'asnTag' when calling addAsnTag";
      }


      var pathParams = {
        'asnId': asnId,
        'asnTag': asnTag
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
        '/beta/asn/{asnId}/tag/{asnTag}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteAsn operation.
     * @callback module:api/AsnApi~deleteAsnCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an asn
     * Deletes the asn identified by the specified id.
     * @param {Integer} asnId Id of the asn to be deleted.
     * @param {module:api/AsnApi~deleteAsnCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteAsn = function(asnId, callback) {
      var postBody = null;

      // verify the required parameter 'asnId' is set
      if (asnId == undefined || asnId == null) {
        throw "Missing the required parameter 'asnId' when calling deleteAsn";
      }


      var pathParams = {
        'asnId': asnId
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
        '/beta/asn/{asnId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteAsnTag operation.
     * @callback module:api/AsnApi~deleteAsnTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a tag for an asn.
     * Deletes an existing asn tag using the specified data.
     * @param {Integer} asnId Id of the asn to remove tag from
     * @param {String} asnTag The tag to delete
     * @param {module:api/AsnApi~deleteAsnTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteAsnTag = function(asnId, asnTag, callback) {
      var postBody = null;

      // verify the required parameter 'asnId' is set
      if (asnId == undefined || asnId == null) {
        throw "Missing the required parameter 'asnId' when calling deleteAsnTag";
      }

      // verify the required parameter 'asnTag' is set
      if (asnTag == undefined || asnTag == null) {
        throw "Missing the required parameter 'asnTag' when calling deleteAsnTag";
      }


      var pathParams = {
        'asnId': asnId,
        'asnTag': asnTag
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
        '/beta/asn/{asnId}/tag/{asnTag}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAsnByFilter operation.
     * @callback module:api/AsnApi~getAsnByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Asn>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search asns by filter
     * Returns the list of asns that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/AsnApi~getAsnByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/Asn>}
     */
    this.getAsnByFilter = function(opts, callback) {
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
      var returnType = [Asn];

      return this.apiClient.callApi(
        '/beta/asn/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAsnById operation.
     * @callback module:api/AsnApi~getAsnByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Asn} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an asn by id
     * Returns the asn identified by the specified id.
     * @param {Integer} asnId Id of the asn to be returned.
     * @param {module:api/AsnApi~getAsnByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Asn}
     */
    this.getAsnById = function(asnId, callback) {
      var postBody = null;

      // verify the required parameter 'asnId' is set
      if (asnId == undefined || asnId == null) {
        throw "Missing the required parameter 'asnId' when calling getAsnById";
      }


      var pathParams = {
        'asnId': asnId
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
      var returnType = Asn;

      return this.apiClient.callApi(
        '/beta/asn/{asnId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAsnTags operation.
     * @callback module:api/AsnApi~getAsnTagsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the tags for an asn.
     * Get all existing asn tags.
     * @param {Integer} asnId Id of the asn to get tags for
     * @param {module:api/AsnApi~getAsnTagsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getAsnTags = function(asnId, callback) {
      var postBody = null;

      // verify the required parameter 'asnId' is set
      if (asnId == undefined || asnId == null) {
        throw "Missing the required parameter 'asnId' when calling getAsnTags";
      }


      var pathParams = {
        'asnId': asnId
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
        '/beta/asn/{asnId}/tag', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDuplicateAsnById operation.
     * @callback module:api/AsnApi~getDuplicateAsnByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Asn} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated an asn by id
     * Returns a duplicated asn identified by the specified id.
     * @param {Integer} asnId Id of the asn to be duplicated.
     * @param {module:api/AsnApi~getDuplicateAsnByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Asn}
     */
    this.getDuplicateAsnById = function(asnId, callback) {
      var postBody = null;

      // verify the required parameter 'asnId' is set
      if (asnId == undefined || asnId == null) {
        throw "Missing the required parameter 'asnId' when calling getDuplicateAsnById";
      }


      var pathParams = {
        'asnId': asnId
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
      var returnType = Asn;

      return this.apiClient.callApi(
        '/beta/asn/duplicate/{asnId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateAsn operation.
     * @callback module:api/AsnApi~updateAsnCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an asn
     * Updates an existing asn using the specified data.
     * @param {module:model/Asn} body Asn to be updated.
     * @param {module:api/AsnApi~updateAsnCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateAsn = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateAsn";
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
        '/beta/asn', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateAsnCustomFields operation.
     * @callback module:api/AsnApi~updateAsnCustomFieldsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an asn custom fields
     * Updates an existing asn custom fields using the specified data.
     * @param {module:model/Asn} body Asn to be updated.
     * @param {module:api/AsnApi~updateAsnCustomFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateAsnCustomFields = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateAsnCustomFields";
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
        '/beta/asn/customFields', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
