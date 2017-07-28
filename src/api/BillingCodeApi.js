(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/BillingCode', '../model/ApiResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BillingCode'), require('../model/ApiResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.BillingCodeApi = factory(root.infoplus.ApiClient, root.infoplus.BillingCode, root.infoplus.ApiResponse);
  }
}(this, function(ApiClient, BillingCode, ApiResponse) {
  'use strict';

  /**
   * BillingCode service.
   * @module api/BillingCodeApi
   * @version beta
   */

  /**
   * Constructs a new BillingCodeApi. 
   * @alias module:api/BillingCodeApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addBillingCode operation.
     * @callback module:api/BillingCodeApi~addBillingCodeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BillingCode} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a billingCode
     * Inserts a new billingCode using the specified data.
     * @param {module:model/BillingCode} body BillingCode to be inserted.
     * @param {module:api/BillingCodeApi~addBillingCodeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/BillingCode}
     */
    this.addBillingCode = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling addBillingCode";
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
      var returnType = BillingCode;

      return this.apiClient.callApi(
        '/beta/billingCode', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addBillingCodeAudit operation.
     * @callback module:api/BillingCodeApi~addBillingCodeAuditCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new audit for a billingCode
     * Adds an audit to an existing billingCode.
     * @param {Integer} billingCodeId Id of the billingCode to add an audit to
     * @param {String} billingCodeAudit The audit to add
     * @param {module:api/BillingCodeApi~addBillingCodeAuditCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addBillingCodeAudit = function(billingCodeId, billingCodeAudit, callback) {
      var postBody = null;

      // verify the required parameter 'billingCodeId' is set
      if (billingCodeId == undefined || billingCodeId == null) {
        throw "Missing the required parameter 'billingCodeId' when calling addBillingCodeAudit";
      }

      // verify the required parameter 'billingCodeAudit' is set
      if (billingCodeAudit == undefined || billingCodeAudit == null) {
        throw "Missing the required parameter 'billingCodeAudit' when calling addBillingCodeAudit";
      }


      var pathParams = {
        'billingCodeId': billingCodeId,
        'billingCodeAudit': billingCodeAudit
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
        '/beta/billingCode/{billingCodeId}/audit/{billingCodeAudit}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addBillingCodeTag operation.
     * @callback module:api/BillingCodeApi~addBillingCodeTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new tags for a billingCode.
     * Adds a tag to an existing billingCode.
     * @param {Integer} billingCodeId Id of the billingCode to add a tag to
     * @param {String} billingCodeTag The tag to add
     * @param {module:api/BillingCodeApi~addBillingCodeTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addBillingCodeTag = function(billingCodeId, billingCodeTag, callback) {
      var postBody = null;

      // verify the required parameter 'billingCodeId' is set
      if (billingCodeId == undefined || billingCodeId == null) {
        throw "Missing the required parameter 'billingCodeId' when calling addBillingCodeTag";
      }

      // verify the required parameter 'billingCodeTag' is set
      if (billingCodeTag == undefined || billingCodeTag == null) {
        throw "Missing the required parameter 'billingCodeTag' when calling addBillingCodeTag";
      }


      var pathParams = {
        'billingCodeId': billingCodeId,
        'billingCodeTag': billingCodeTag
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
        '/beta/billingCode/{billingCodeId}/tag/{billingCodeTag}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteBillingCode operation.
     * @callback module:api/BillingCodeApi~deleteBillingCodeCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a billingCode
     * Deletes the billingCode identified by the specified id.
     * @param {Integer} billingCodeId Id of the billingCode to be deleted.
     * @param {module:api/BillingCodeApi~deleteBillingCodeCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteBillingCode = function(billingCodeId, callback) {
      var postBody = null;

      // verify the required parameter 'billingCodeId' is set
      if (billingCodeId == undefined || billingCodeId == null) {
        throw "Missing the required parameter 'billingCodeId' when calling deleteBillingCode";
      }


      var pathParams = {
        'billingCodeId': billingCodeId
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
        '/beta/billingCode/{billingCodeId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteBillingCodeTag operation.
     * @callback module:api/BillingCodeApi~deleteBillingCodeTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a tag for a billingCode.
     * Deletes an existing billingCode tag using the specified data.
     * @param {Integer} billingCodeId Id of the billingCode to remove tag from
     * @param {String} billingCodeTag The tag to delete
     * @param {module:api/BillingCodeApi~deleteBillingCodeTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteBillingCodeTag = function(billingCodeId, billingCodeTag, callback) {
      var postBody = null;

      // verify the required parameter 'billingCodeId' is set
      if (billingCodeId == undefined || billingCodeId == null) {
        throw "Missing the required parameter 'billingCodeId' when calling deleteBillingCodeTag";
      }

      // verify the required parameter 'billingCodeTag' is set
      if (billingCodeTag == undefined || billingCodeTag == null) {
        throw "Missing the required parameter 'billingCodeTag' when calling deleteBillingCodeTag";
      }


      var pathParams = {
        'billingCodeId': billingCodeId,
        'billingCodeTag': billingCodeTag
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
        '/beta/billingCode/{billingCodeId}/tag/{billingCodeTag}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getBillingCodeByFilter operation.
     * @callback module:api/BillingCodeApi~getBillingCodeByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/BillingCode>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search billingCodes by filter
     * Returns the list of billingCodes that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/BillingCodeApi~getBillingCodeByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/BillingCode>}
     */
    this.getBillingCodeByFilter = function(opts, callback) {
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
      var returnType = [BillingCode];

      return this.apiClient.callApi(
        '/beta/billingCode/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getBillingCodeById operation.
     * @callback module:api/BillingCodeApi~getBillingCodeByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BillingCode} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a billingCode by id
     * Returns the billingCode identified by the specified id.
     * @param {Integer} billingCodeId Id of the billingCode to be returned.
     * @param {module:api/BillingCodeApi~getBillingCodeByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/BillingCode}
     */
    this.getBillingCodeById = function(billingCodeId, callback) {
      var postBody = null;

      // verify the required parameter 'billingCodeId' is set
      if (billingCodeId == undefined || billingCodeId == null) {
        throw "Missing the required parameter 'billingCodeId' when calling getBillingCodeById";
      }


      var pathParams = {
        'billingCodeId': billingCodeId
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
      var returnType = BillingCode;

      return this.apiClient.callApi(
        '/beta/billingCode/{billingCodeId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getBillingCodeTags operation.
     * @callback module:api/BillingCodeApi~getBillingCodeTagsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the tags for a billingCode.
     * Get all existing billingCode tags.
     * @param {Integer} billingCodeId Id of the billingCode to get tags for
     * @param {module:api/BillingCodeApi~getBillingCodeTagsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getBillingCodeTags = function(billingCodeId, callback) {
      var postBody = null;

      // verify the required parameter 'billingCodeId' is set
      if (billingCodeId == undefined || billingCodeId == null) {
        throw "Missing the required parameter 'billingCodeId' when calling getBillingCodeTags";
      }


      var pathParams = {
        'billingCodeId': billingCodeId
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
        '/beta/billingCode/{billingCodeId}/tag', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDuplicateBillingCodeById operation.
     * @callback module:api/BillingCodeApi~getDuplicateBillingCodeByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BillingCode} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated a billingCode by id
     * Returns a duplicated billingCode identified by the specified id.
     * @param {Integer} billingCodeId Id of the billingCode to be duplicated.
     * @param {module:api/BillingCodeApi~getDuplicateBillingCodeByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/BillingCode}
     */
    this.getDuplicateBillingCodeById = function(billingCodeId, callback) {
      var postBody = null;

      // verify the required parameter 'billingCodeId' is set
      if (billingCodeId == undefined || billingCodeId == null) {
        throw "Missing the required parameter 'billingCodeId' when calling getDuplicateBillingCodeById";
      }


      var pathParams = {
        'billingCodeId': billingCodeId
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
      var returnType = BillingCode;

      return this.apiClient.callApi(
        '/beta/billingCode/duplicate/{billingCodeId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateBillingCode operation.
     * @callback module:api/BillingCodeApi~updateBillingCodeCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a billingCode
     * Updates an existing billingCode using the specified data.
     * @param {module:model/BillingCode} body BillingCode to be updated.
     * @param {module:api/BillingCodeApi~updateBillingCodeCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateBillingCode = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateBillingCode";
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
        '/beta/billingCode', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateBillingCodeCustomFields operation.
     * @callback module:api/BillingCodeApi~updateBillingCodeCustomFieldsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a billingCode custom fields
     * Updates an existing billingCode custom fields using the specified data.
     * @param {module:model/BillingCode} body BillingCode to be updated.
     * @param {module:api/BillingCodeApi~updateBillingCodeCustomFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateBillingCodeCustomFields = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateBillingCodeCustomFields";
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
        '/beta/billingCode/customFields', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
