(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/BillingCodeType', '../model/ApiResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BillingCodeType'), require('../model/ApiResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.BillingCodeTypeApi = factory(root.infoplus.ApiClient, root.infoplus.BillingCodeType, root.infoplus.ApiResponse);
  }
}(this, function(ApiClient, BillingCodeType, ApiResponse) {
  'use strict';

  /**
   * BillingCodeType service.
   * @module api/BillingCodeTypeApi
   * @version beta
   */

  /**
   * Constructs a new BillingCodeTypeApi. 
   * @alias module:api/BillingCodeTypeApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addBillingCodeType operation.
     * @callback module:api/BillingCodeTypeApi~addBillingCodeTypeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BillingCodeType} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a billingCodeType
     * Inserts a new billingCodeType using the specified data.
     * @param {module:model/BillingCodeType} body BillingCodeType to be inserted.
     * @param {module:api/BillingCodeTypeApi~addBillingCodeTypeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/BillingCodeType}
     */
    this.addBillingCodeType = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling addBillingCodeType";
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
      var returnType = BillingCodeType;

      return this.apiClient.callApi(
        '/beta/billingCodeType', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addBillingCodeTypeAudit operation.
     * @callback module:api/BillingCodeTypeApi~addBillingCodeTypeAuditCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new audit for a billingCodeType
     * Adds an audit to an existing billingCodeType.
     * @param {Integer} billingCodeTypeId Id of the billingCodeType to add an audit to
     * @param {String} billingCodeTypeAudit The audit to add
     * @param {module:api/BillingCodeTypeApi~addBillingCodeTypeAuditCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addBillingCodeTypeAudit = function(billingCodeTypeId, billingCodeTypeAudit, callback) {
      var postBody = null;

      // verify the required parameter 'billingCodeTypeId' is set
      if (billingCodeTypeId == undefined || billingCodeTypeId == null) {
        throw "Missing the required parameter 'billingCodeTypeId' when calling addBillingCodeTypeAudit";
      }

      // verify the required parameter 'billingCodeTypeAudit' is set
      if (billingCodeTypeAudit == undefined || billingCodeTypeAudit == null) {
        throw "Missing the required parameter 'billingCodeTypeAudit' when calling addBillingCodeTypeAudit";
      }


      var pathParams = {
        'billingCodeTypeId': billingCodeTypeId,
        'billingCodeTypeAudit': billingCodeTypeAudit
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
        '/beta/billingCodeType/{billingCodeTypeId}/audit/{billingCodeTypeAudit}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addBillingCodeTypeTag operation.
     * @callback module:api/BillingCodeTypeApi~addBillingCodeTypeTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new tags for a billingCodeType.
     * Adds a tag to an existing billingCodeType.
     * @param {Integer} billingCodeTypeId Id of the billingCodeType to add a tag to
     * @param {String} billingCodeTypeTag The tag to add
     * @param {module:api/BillingCodeTypeApi~addBillingCodeTypeTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addBillingCodeTypeTag = function(billingCodeTypeId, billingCodeTypeTag, callback) {
      var postBody = null;

      // verify the required parameter 'billingCodeTypeId' is set
      if (billingCodeTypeId == undefined || billingCodeTypeId == null) {
        throw "Missing the required parameter 'billingCodeTypeId' when calling addBillingCodeTypeTag";
      }

      // verify the required parameter 'billingCodeTypeTag' is set
      if (billingCodeTypeTag == undefined || billingCodeTypeTag == null) {
        throw "Missing the required parameter 'billingCodeTypeTag' when calling addBillingCodeTypeTag";
      }


      var pathParams = {
        'billingCodeTypeId': billingCodeTypeId,
        'billingCodeTypeTag': billingCodeTypeTag
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
        '/beta/billingCodeType/{billingCodeTypeId}/tag/{billingCodeTypeTag}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteBillingCodeType operation.
     * @callback module:api/BillingCodeTypeApi~deleteBillingCodeTypeCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a billingCodeType
     * Deletes the billingCodeType identified by the specified id.
     * @param {Integer} billingCodeTypeId Id of the billingCodeType to be deleted.
     * @param {module:api/BillingCodeTypeApi~deleteBillingCodeTypeCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteBillingCodeType = function(billingCodeTypeId, callback) {
      var postBody = null;

      // verify the required parameter 'billingCodeTypeId' is set
      if (billingCodeTypeId == undefined || billingCodeTypeId == null) {
        throw "Missing the required parameter 'billingCodeTypeId' when calling deleteBillingCodeType";
      }


      var pathParams = {
        'billingCodeTypeId': billingCodeTypeId
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
        '/beta/billingCodeType/{billingCodeTypeId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteBillingCodeTypeTag operation.
     * @callback module:api/BillingCodeTypeApi~deleteBillingCodeTypeTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a tag for a billingCodeType.
     * Deletes an existing billingCodeType tag using the specified data.
     * @param {Integer} billingCodeTypeId Id of the billingCodeType to remove tag from
     * @param {String} billingCodeTypeTag The tag to delete
     * @param {module:api/BillingCodeTypeApi~deleteBillingCodeTypeTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteBillingCodeTypeTag = function(billingCodeTypeId, billingCodeTypeTag, callback) {
      var postBody = null;

      // verify the required parameter 'billingCodeTypeId' is set
      if (billingCodeTypeId == undefined || billingCodeTypeId == null) {
        throw "Missing the required parameter 'billingCodeTypeId' when calling deleteBillingCodeTypeTag";
      }

      // verify the required parameter 'billingCodeTypeTag' is set
      if (billingCodeTypeTag == undefined || billingCodeTypeTag == null) {
        throw "Missing the required parameter 'billingCodeTypeTag' when calling deleteBillingCodeTypeTag";
      }


      var pathParams = {
        'billingCodeTypeId': billingCodeTypeId,
        'billingCodeTypeTag': billingCodeTypeTag
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
        '/beta/billingCodeType/{billingCodeTypeId}/tag/{billingCodeTypeTag}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getBillingCodeTypeByFilter operation.
     * @callback module:api/BillingCodeTypeApi~getBillingCodeTypeByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/BillingCodeType>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search billingCodeTypes by filter
     * Returns the list of billingCodeTypes that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/BillingCodeTypeApi~getBillingCodeTypeByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/BillingCodeType>}
     */
    this.getBillingCodeTypeByFilter = function(opts, callback) {
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
      var returnType = [BillingCodeType];

      return this.apiClient.callApi(
        '/beta/billingCodeType/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getBillingCodeTypeById operation.
     * @callback module:api/BillingCodeTypeApi~getBillingCodeTypeByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BillingCodeType} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a billingCodeType by id
     * Returns the billingCodeType identified by the specified id.
     * @param {Integer} billingCodeTypeId Id of the billingCodeType to be returned.
     * @param {module:api/BillingCodeTypeApi~getBillingCodeTypeByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/BillingCodeType}
     */
    this.getBillingCodeTypeById = function(billingCodeTypeId, callback) {
      var postBody = null;

      // verify the required parameter 'billingCodeTypeId' is set
      if (billingCodeTypeId == undefined || billingCodeTypeId == null) {
        throw "Missing the required parameter 'billingCodeTypeId' when calling getBillingCodeTypeById";
      }


      var pathParams = {
        'billingCodeTypeId': billingCodeTypeId
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
      var returnType = BillingCodeType;

      return this.apiClient.callApi(
        '/beta/billingCodeType/{billingCodeTypeId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getBillingCodeTypeTags operation.
     * @callback module:api/BillingCodeTypeApi~getBillingCodeTypeTagsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the tags for a billingCodeType.
     * Get all existing billingCodeType tags.
     * @param {Integer} billingCodeTypeId Id of the billingCodeType to get tags for
     * @param {module:api/BillingCodeTypeApi~getBillingCodeTypeTagsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getBillingCodeTypeTags = function(billingCodeTypeId, callback) {
      var postBody = null;

      // verify the required parameter 'billingCodeTypeId' is set
      if (billingCodeTypeId == undefined || billingCodeTypeId == null) {
        throw "Missing the required parameter 'billingCodeTypeId' when calling getBillingCodeTypeTags";
      }


      var pathParams = {
        'billingCodeTypeId': billingCodeTypeId
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
        '/beta/billingCodeType/{billingCodeTypeId}/tag', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDuplicateBillingCodeTypeById operation.
     * @callback module:api/BillingCodeTypeApi~getDuplicateBillingCodeTypeByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BillingCodeType} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated a billingCodeType by id
     * Returns a duplicated billingCodeType identified by the specified id.
     * @param {Integer} billingCodeTypeId Id of the billingCodeType to be duplicated.
     * @param {module:api/BillingCodeTypeApi~getDuplicateBillingCodeTypeByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/BillingCodeType}
     */
    this.getDuplicateBillingCodeTypeById = function(billingCodeTypeId, callback) {
      var postBody = null;

      // verify the required parameter 'billingCodeTypeId' is set
      if (billingCodeTypeId == undefined || billingCodeTypeId == null) {
        throw "Missing the required parameter 'billingCodeTypeId' when calling getDuplicateBillingCodeTypeById";
      }


      var pathParams = {
        'billingCodeTypeId': billingCodeTypeId
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
      var returnType = BillingCodeType;

      return this.apiClient.callApi(
        '/beta/billingCodeType/duplicate/{billingCodeTypeId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateBillingCodeType operation.
     * @callback module:api/BillingCodeTypeApi~updateBillingCodeTypeCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a billingCodeType
     * Updates an existing billingCodeType using the specified data.
     * @param {module:model/BillingCodeType} body BillingCodeType to be updated.
     * @param {module:api/BillingCodeTypeApi~updateBillingCodeTypeCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateBillingCodeType = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateBillingCodeType";
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
        '/beta/billingCodeType', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateBillingCodeTypeCustomFields operation.
     * @callback module:api/BillingCodeTypeApi~updateBillingCodeTypeCustomFieldsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a billingCodeType custom fields
     * Updates an existing billingCodeType custom fields using the specified data.
     * @param {module:model/BillingCodeType} body BillingCodeType to be updated.
     * @param {module:api/BillingCodeTypeApi~updateBillingCodeTypeCustomFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateBillingCodeTypeCustomFields = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateBillingCodeTypeCustomFields";
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
        '/beta/billingCodeType/customFields', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
