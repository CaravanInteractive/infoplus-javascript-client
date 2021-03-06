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
    define(['ApiClient', 'model/ParcelInvoiceLine'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ParcelInvoiceLine'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.ParcelInvoiceLineApi = factory(root.infoplus.ApiClient, root.infoplus.ParcelInvoiceLine);
  }
}(this, function(ApiClient, ParcelInvoiceLine) {
  'use strict';

  /**
   * ParcelInvoiceLine service.
   * @module api/ParcelInvoiceLineApi
   * @version beta
   */

  /**
   * Constructs a new ParcelInvoiceLineApi. 
   * @alias module:api/ParcelInvoiceLineApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addParcelInvoiceLineAudit operation.
     * @callback module:api/ParcelInvoiceLineApi~addParcelInvoiceLineAuditCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new audit for a parcelInvoiceLine
     * Adds an audit to an existing parcelInvoiceLine.
     * @param {Number} parcelInvoiceLineId Id of the parcelInvoiceLine to add an audit to
     * @param {String} parcelInvoiceLineAudit The audit to add
     * @param {module:api/ParcelInvoiceLineApi~addParcelInvoiceLineAuditCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addParcelInvoiceLineAudit = function(parcelInvoiceLineId, parcelInvoiceLineAudit, callback) {
      var postBody = null;

      // verify the required parameter 'parcelInvoiceLineId' is set
      if (parcelInvoiceLineId === undefined || parcelInvoiceLineId === null) {
        throw new Error("Missing the required parameter 'parcelInvoiceLineId' when calling addParcelInvoiceLineAudit");
      }

      // verify the required parameter 'parcelInvoiceLineAudit' is set
      if (parcelInvoiceLineAudit === undefined || parcelInvoiceLineAudit === null) {
        throw new Error("Missing the required parameter 'parcelInvoiceLineAudit' when calling addParcelInvoiceLineAudit");
      }


      var pathParams = {
        'parcelInvoiceLineId': parcelInvoiceLineId,
        'parcelInvoiceLineAudit': parcelInvoiceLineAudit
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
        '/beta/parcelInvoiceLine/{parcelInvoiceLineId}/audit/{parcelInvoiceLineAudit}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addParcelInvoiceLineTag operation.
     * @callback module:api/ParcelInvoiceLineApi~addParcelInvoiceLineTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new tags for a parcelInvoiceLine.
     * Adds a tag to an existing parcelInvoiceLine.
     * @param {Number} parcelInvoiceLineId Id of the parcelInvoiceLine to add a tag to
     * @param {String} parcelInvoiceLineTag The tag to add
     * @param {module:api/ParcelInvoiceLineApi~addParcelInvoiceLineTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addParcelInvoiceLineTag = function(parcelInvoiceLineId, parcelInvoiceLineTag, callback) {
      var postBody = null;

      // verify the required parameter 'parcelInvoiceLineId' is set
      if (parcelInvoiceLineId === undefined || parcelInvoiceLineId === null) {
        throw new Error("Missing the required parameter 'parcelInvoiceLineId' when calling addParcelInvoiceLineTag");
      }

      // verify the required parameter 'parcelInvoiceLineTag' is set
      if (parcelInvoiceLineTag === undefined || parcelInvoiceLineTag === null) {
        throw new Error("Missing the required parameter 'parcelInvoiceLineTag' when calling addParcelInvoiceLineTag");
      }


      var pathParams = {
        'parcelInvoiceLineId': parcelInvoiceLineId,
        'parcelInvoiceLineTag': parcelInvoiceLineTag
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
        '/beta/parcelInvoiceLine/{parcelInvoiceLineId}/tag/{parcelInvoiceLineTag}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteParcelInvoiceLineTag operation.
     * @callback module:api/ParcelInvoiceLineApi~deleteParcelInvoiceLineTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a tag for a parcelInvoiceLine.
     * Deletes an existing parcelInvoiceLine tag using the specified data.
     * @param {Number} parcelInvoiceLineId Id of the parcelInvoiceLine to remove tag from
     * @param {String} parcelInvoiceLineTag The tag to delete
     * @param {module:api/ParcelInvoiceLineApi~deleteParcelInvoiceLineTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteParcelInvoiceLineTag = function(parcelInvoiceLineId, parcelInvoiceLineTag, callback) {
      var postBody = null;

      // verify the required parameter 'parcelInvoiceLineId' is set
      if (parcelInvoiceLineId === undefined || parcelInvoiceLineId === null) {
        throw new Error("Missing the required parameter 'parcelInvoiceLineId' when calling deleteParcelInvoiceLineTag");
      }

      // verify the required parameter 'parcelInvoiceLineTag' is set
      if (parcelInvoiceLineTag === undefined || parcelInvoiceLineTag === null) {
        throw new Error("Missing the required parameter 'parcelInvoiceLineTag' when calling deleteParcelInvoiceLineTag");
      }


      var pathParams = {
        'parcelInvoiceLineId': parcelInvoiceLineId,
        'parcelInvoiceLineTag': parcelInvoiceLineTag
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
        '/beta/parcelInvoiceLine/{parcelInvoiceLineId}/tag/{parcelInvoiceLineTag}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDuplicateParcelInvoiceLineById operation.
     * @callback module:api/ParcelInvoiceLineApi~getDuplicateParcelInvoiceLineByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ParcelInvoiceLine} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated a parcelInvoiceLine by id
     * Returns a duplicated parcelInvoiceLine identified by the specified id.
     * @param {Number} parcelInvoiceLineId Id of the parcelInvoiceLine to be duplicated.
     * @param {module:api/ParcelInvoiceLineApi~getDuplicateParcelInvoiceLineByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ParcelInvoiceLine}
     */
    this.getDuplicateParcelInvoiceLineById = function(parcelInvoiceLineId, callback) {
      var postBody = null;

      // verify the required parameter 'parcelInvoiceLineId' is set
      if (parcelInvoiceLineId === undefined || parcelInvoiceLineId === null) {
        throw new Error("Missing the required parameter 'parcelInvoiceLineId' when calling getDuplicateParcelInvoiceLineById");
      }


      var pathParams = {
        'parcelInvoiceLineId': parcelInvoiceLineId
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
      var returnType = ParcelInvoiceLine;

      return this.apiClient.callApi(
        '/beta/parcelInvoiceLine/duplicate/{parcelInvoiceLineId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getParcelInvoiceLineByFilter operation.
     * @callback module:api/ParcelInvoiceLineApi~getParcelInvoiceLineByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ParcelInvoiceLine>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search parcelInvoiceLines by filter
     * Returns the list of parcelInvoiceLines that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Number} opts.page Result page number.  Defaults to 1.
     * @param {Number} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/ParcelInvoiceLineApi~getParcelInvoiceLineByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ParcelInvoiceLine>}
     */
    this.getParcelInvoiceLineByFilter = function(opts, callback) {
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
      var returnType = [ParcelInvoiceLine];

      return this.apiClient.callApi(
        '/beta/parcelInvoiceLine/search', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getParcelInvoiceLineById operation.
     * @callback module:api/ParcelInvoiceLineApi~getParcelInvoiceLineByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ParcelInvoiceLine} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a parcelInvoiceLine by id
     * Returns the parcelInvoiceLine identified by the specified id.
     * @param {Number} parcelInvoiceLineId Id of the parcelInvoiceLine to be returned.
     * @param {module:api/ParcelInvoiceLineApi~getParcelInvoiceLineByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ParcelInvoiceLine}
     */
    this.getParcelInvoiceLineById = function(parcelInvoiceLineId, callback) {
      var postBody = null;

      // verify the required parameter 'parcelInvoiceLineId' is set
      if (parcelInvoiceLineId === undefined || parcelInvoiceLineId === null) {
        throw new Error("Missing the required parameter 'parcelInvoiceLineId' when calling getParcelInvoiceLineById");
      }


      var pathParams = {
        'parcelInvoiceLineId': parcelInvoiceLineId
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
      var returnType = ParcelInvoiceLine;

      return this.apiClient.callApi(
        '/beta/parcelInvoiceLine/{parcelInvoiceLineId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getParcelInvoiceLineTags operation.
     * @callback module:api/ParcelInvoiceLineApi~getParcelInvoiceLineTagsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the tags for a parcelInvoiceLine.
     * Get all existing parcelInvoiceLine tags.
     * @param {Number} parcelInvoiceLineId Id of the parcelInvoiceLine to get tags for
     * @param {module:api/ParcelInvoiceLineApi~getParcelInvoiceLineTagsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getParcelInvoiceLineTags = function(parcelInvoiceLineId, callback) {
      var postBody = null;

      // verify the required parameter 'parcelInvoiceLineId' is set
      if (parcelInvoiceLineId === undefined || parcelInvoiceLineId === null) {
        throw new Error("Missing the required parameter 'parcelInvoiceLineId' when calling getParcelInvoiceLineTags");
      }


      var pathParams = {
        'parcelInvoiceLineId': parcelInvoiceLineId
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
        '/beta/parcelInvoiceLine/{parcelInvoiceLineId}/tag', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateParcelInvoiceLine operation.
     * @callback module:api/ParcelInvoiceLineApi~updateParcelInvoiceLineCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a parcelInvoiceLine
     * Updates an existing parcelInvoiceLine using the specified data.
     * @param {module:model/ParcelInvoiceLine} body ParcelInvoiceLine to be updated.
     * @param {module:api/ParcelInvoiceLineApi~updateParcelInvoiceLineCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateParcelInvoiceLine = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateParcelInvoiceLine");
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
        '/beta/parcelInvoiceLine', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
