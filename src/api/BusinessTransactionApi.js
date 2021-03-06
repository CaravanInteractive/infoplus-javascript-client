/**
 * Infoplus API
 * Infoplus API.
 *
 * OpenAPI spec version: beta
 * Contact: api@infopluscommerce.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/BusinessTransaction'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BusinessTransaction'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.BusinessTransactionApi = factory(root.infoplus.ApiClient, root.infoplus.BusinessTransaction);
  }
}(this, function(ApiClient, BusinessTransaction) {
  'use strict';

  /**
   * BusinessTransaction service.
   * @module api/BusinessTransactionApi
   * @version beta
   */

  /**
   * Constructs a new BusinessTransactionApi. 
   * @alias module:api/BusinessTransactionApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addBusinessTransactionAudit operation.
     * @callback module:api/BusinessTransactionApi~addBusinessTransactionAuditCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new audit for a businessTransaction
     * Adds an audit to an existing businessTransaction.
     * @param {Number} businessTransactionId Id of the businessTransaction to add an audit to
     * @param {String} businessTransactionAudit The audit to add
     * @param {module:api/BusinessTransactionApi~addBusinessTransactionAuditCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addBusinessTransactionAudit = function(businessTransactionId, businessTransactionAudit, callback) {
      var postBody = null;

      // verify the required parameter 'businessTransactionId' is set
      if (businessTransactionId === undefined || businessTransactionId === null) {
        throw new Error("Missing the required parameter 'businessTransactionId' when calling addBusinessTransactionAudit");
      }

      // verify the required parameter 'businessTransactionAudit' is set
      if (businessTransactionAudit === undefined || businessTransactionAudit === null) {
        throw new Error("Missing the required parameter 'businessTransactionAudit' when calling addBusinessTransactionAudit");
      }


      var pathParams = {
        'businessTransactionId': businessTransactionId,
        'businessTransactionAudit': businessTransactionAudit
      };
      var queryParams = {
      };
      var collectionQueryParams = {
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
        '/beta/businessTransaction/{businessTransactionId}/audit/{businessTransactionAudit}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addBusinessTransactionTag operation.
     * @callback module:api/BusinessTransactionApi~addBusinessTransactionTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new tags for a businessTransaction.
     * Adds a tag to an existing businessTransaction.
     * @param {Number} businessTransactionId Id of the businessTransaction to add a tag to
     * @param {String} businessTransactionTag The tag to add
     * @param {module:api/BusinessTransactionApi~addBusinessTransactionTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addBusinessTransactionTag = function(businessTransactionId, businessTransactionTag, callback) {
      var postBody = null;

      // verify the required parameter 'businessTransactionId' is set
      if (businessTransactionId === undefined || businessTransactionId === null) {
        throw new Error("Missing the required parameter 'businessTransactionId' when calling addBusinessTransactionTag");
      }

      // verify the required parameter 'businessTransactionTag' is set
      if (businessTransactionTag === undefined || businessTransactionTag === null) {
        throw new Error("Missing the required parameter 'businessTransactionTag' when calling addBusinessTransactionTag");
      }


      var pathParams = {
        'businessTransactionId': businessTransactionId,
        'businessTransactionTag': businessTransactionTag
      };
      var queryParams = {
      };
      var collectionQueryParams = {
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
        '/beta/businessTransaction/{businessTransactionId}/tag/{businessTransactionTag}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteBusinessTransactionTag operation.
     * @callback module:api/BusinessTransactionApi~deleteBusinessTransactionTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a tag for a businessTransaction.
     * Deletes an existing businessTransaction tag using the specified data.
     * @param {Number} businessTransactionId Id of the businessTransaction to remove tag from
     * @param {String} businessTransactionTag The tag to delete
     * @param {module:api/BusinessTransactionApi~deleteBusinessTransactionTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteBusinessTransactionTag = function(businessTransactionId, businessTransactionTag, callback) {
      var postBody = null;

      // verify the required parameter 'businessTransactionId' is set
      if (businessTransactionId === undefined || businessTransactionId === null) {
        throw new Error("Missing the required parameter 'businessTransactionId' when calling deleteBusinessTransactionTag");
      }

      // verify the required parameter 'businessTransactionTag' is set
      if (businessTransactionTag === undefined || businessTransactionTag === null) {
        throw new Error("Missing the required parameter 'businessTransactionTag' when calling deleteBusinessTransactionTag");
      }


      var pathParams = {
        'businessTransactionId': businessTransactionId,
        'businessTransactionTag': businessTransactionTag
      };
      var queryParams = {
      };
      var collectionQueryParams = {
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
        '/beta/businessTransaction/{businessTransactionId}/tag/{businessTransactionTag}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getBusinessTransactionByFilter operation.
     * @callback module:api/BusinessTransactionApi~getBusinessTransactionByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/BusinessTransaction>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search businessTransactions by filter
     * Returns the list of businessTransactions that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Number} opts.page Result page number.  Defaults to 1.
     * @param {Number} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/BusinessTransactionApi~getBusinessTransactionByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/BusinessTransaction>}
     */
    this.getBusinessTransactionByFilter = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'filter': opts['filter'],
        'page': opts['page'],
        'limit': opts['limit'],
        'sort': opts['sort'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [BusinessTransaction];

      return this.apiClient.callApi(
        '/beta/businessTransaction/search', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getBusinessTransactionById operation.
     * @callback module:api/BusinessTransactionApi~getBusinessTransactionByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BusinessTransaction} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a businessTransaction by id
     * Returns the businessTransaction identified by the specified id.
     * @param {Number} businessTransactionId Id of the businessTransaction to be returned.
     * @param {module:api/BusinessTransactionApi~getBusinessTransactionByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BusinessTransaction}
     */
    this.getBusinessTransactionById = function(businessTransactionId, callback) {
      var postBody = null;

      // verify the required parameter 'businessTransactionId' is set
      if (businessTransactionId === undefined || businessTransactionId === null) {
        throw new Error("Missing the required parameter 'businessTransactionId' when calling getBusinessTransactionById");
      }


      var pathParams = {
        'businessTransactionId': businessTransactionId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = BusinessTransaction;

      return this.apiClient.callApi(
        '/beta/businessTransaction/{businessTransactionId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getBusinessTransactionTags operation.
     * @callback module:api/BusinessTransactionApi~getBusinessTransactionTagsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the tags for a businessTransaction.
     * Get all existing businessTransaction tags.
     * @param {Number} businessTransactionId Id of the businessTransaction to get tags for
     * @param {module:api/BusinessTransactionApi~getBusinessTransactionTagsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getBusinessTransactionTags = function(businessTransactionId, callback) {
      var postBody = null;

      // verify the required parameter 'businessTransactionId' is set
      if (businessTransactionId === undefined || businessTransactionId === null) {
        throw new Error("Missing the required parameter 'businessTransactionId' when calling getBusinessTransactionTags");
      }


      var pathParams = {
        'businessTransactionId': businessTransactionId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
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
        '/beta/businessTransaction/{businessTransactionId}/tag', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDuplicateBusinessTransactionById operation.
     * @callback module:api/BusinessTransactionApi~getDuplicateBusinessTransactionByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BusinessTransaction} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated a businessTransaction by id
     * Returns a duplicated businessTransaction identified by the specified id.
     * @param {Number} businessTransactionId Id of the businessTransaction to be duplicated.
     * @param {module:api/BusinessTransactionApi~getDuplicateBusinessTransactionByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BusinessTransaction}
     */
    this.getDuplicateBusinessTransactionById = function(businessTransactionId, callback) {
      var postBody = null;

      // verify the required parameter 'businessTransactionId' is set
      if (businessTransactionId === undefined || businessTransactionId === null) {
        throw new Error("Missing the required parameter 'businessTransactionId' when calling getDuplicateBusinessTransactionById");
      }


      var pathParams = {
        'businessTransactionId': businessTransactionId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = BusinessTransaction;

      return this.apiClient.callApi(
        '/beta/businessTransaction/duplicate/{businessTransactionId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateBusinessTransactionCustomFields operation.
     * @callback module:api/BusinessTransactionApi~updateBusinessTransactionCustomFieldsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a businessTransaction custom fields
     * Updates an existing businessTransaction custom fields using the specified data.
     * @param {module:model/BusinessTransaction} body BusinessTransaction to be updated.
     * @param {module:api/BusinessTransactionApi~updateBusinessTransactionCustomFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateBusinessTransactionCustomFields = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateBusinessTransactionCustomFields");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
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
        '/beta/businessTransaction/customFields', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
