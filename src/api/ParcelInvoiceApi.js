(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/ParcelInvoice'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ParcelInvoice'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.ParcelInvoiceApi = factory(root.infoplus.ApiClient, root.infoplus.ParcelInvoice);
  }
}(this, function(ApiClient, ParcelInvoice) {
  'use strict';

  /**
   * ParcelInvoice service.
   * @module api/ParcelInvoiceApi
   * @version beta
   */

  /**
   * Constructs a new ParcelInvoiceApi. 
   * @alias module:api/ParcelInvoiceApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addParcelInvoiceAudit operation.
     * @callback module:api/ParcelInvoiceApi~addParcelInvoiceAuditCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new audit for a parcelInvoice
     * Adds an audit to an existing parcelInvoice.
     * @param {Integer} parcelInvoiceId Id of the parcelInvoice to add an audit to
     * @param {String} parcelInvoiceAudit The audit to add
     * @param {module:api/ParcelInvoiceApi~addParcelInvoiceAuditCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addParcelInvoiceAudit = function(parcelInvoiceId, parcelInvoiceAudit, callback) {
      var postBody = null;

      // verify the required parameter 'parcelInvoiceId' is set
      if (parcelInvoiceId == undefined || parcelInvoiceId == null) {
        throw "Missing the required parameter 'parcelInvoiceId' when calling addParcelInvoiceAudit";
      }

      // verify the required parameter 'parcelInvoiceAudit' is set
      if (parcelInvoiceAudit == undefined || parcelInvoiceAudit == null) {
        throw "Missing the required parameter 'parcelInvoiceAudit' when calling addParcelInvoiceAudit";
      }


      var pathParams = {
        'parcelInvoiceId': parcelInvoiceId,
        'parcelInvoiceAudit': parcelInvoiceAudit
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
        '/beta/parcelInvoice/{parcelInvoiceId}/audit/{parcelInvoiceAudit}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addParcelInvoiceTag operation.
     * @callback module:api/ParcelInvoiceApi~addParcelInvoiceTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new tags for a parcelInvoice.
     * Adds a tag to an existing parcelInvoice.
     * @param {Integer} parcelInvoiceId Id of the parcelInvoice to add a tag to
     * @param {String} parcelInvoiceTag The tag to add
     * @param {module:api/ParcelInvoiceApi~addParcelInvoiceTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addParcelInvoiceTag = function(parcelInvoiceId, parcelInvoiceTag, callback) {
      var postBody = null;

      // verify the required parameter 'parcelInvoiceId' is set
      if (parcelInvoiceId == undefined || parcelInvoiceId == null) {
        throw "Missing the required parameter 'parcelInvoiceId' when calling addParcelInvoiceTag";
      }

      // verify the required parameter 'parcelInvoiceTag' is set
      if (parcelInvoiceTag == undefined || parcelInvoiceTag == null) {
        throw "Missing the required parameter 'parcelInvoiceTag' when calling addParcelInvoiceTag";
      }


      var pathParams = {
        'parcelInvoiceId': parcelInvoiceId,
        'parcelInvoiceTag': parcelInvoiceTag
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
        '/beta/parcelInvoice/{parcelInvoiceId}/tag/{parcelInvoiceTag}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteParcelInvoice operation.
     * @callback module:api/ParcelInvoiceApi~deleteParcelInvoiceCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a parcelInvoice
     * Deletes the parcelInvoice identified by the specified id.
     * @param {Integer} parcelInvoiceId Id of the parcelInvoice to be deleted.
     * @param {module:api/ParcelInvoiceApi~deleteParcelInvoiceCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteParcelInvoice = function(parcelInvoiceId, callback) {
      var postBody = null;

      // verify the required parameter 'parcelInvoiceId' is set
      if (parcelInvoiceId == undefined || parcelInvoiceId == null) {
        throw "Missing the required parameter 'parcelInvoiceId' when calling deleteParcelInvoice";
      }


      var pathParams = {
        'parcelInvoiceId': parcelInvoiceId
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
        '/beta/parcelInvoice/{parcelInvoiceId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteParcelInvoiceTag operation.
     * @callback module:api/ParcelInvoiceApi~deleteParcelInvoiceTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a tag for a parcelInvoice.
     * Deletes an existing parcelInvoice tag using the specified data.
     * @param {Integer} parcelInvoiceId Id of the parcelInvoice to remove tag from
     * @param {String} parcelInvoiceTag The tag to delete
     * @param {module:api/ParcelInvoiceApi~deleteParcelInvoiceTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteParcelInvoiceTag = function(parcelInvoiceId, parcelInvoiceTag, callback) {
      var postBody = null;

      // verify the required parameter 'parcelInvoiceId' is set
      if (parcelInvoiceId == undefined || parcelInvoiceId == null) {
        throw "Missing the required parameter 'parcelInvoiceId' when calling deleteParcelInvoiceTag";
      }

      // verify the required parameter 'parcelInvoiceTag' is set
      if (parcelInvoiceTag == undefined || parcelInvoiceTag == null) {
        throw "Missing the required parameter 'parcelInvoiceTag' when calling deleteParcelInvoiceTag";
      }


      var pathParams = {
        'parcelInvoiceId': parcelInvoiceId,
        'parcelInvoiceTag': parcelInvoiceTag
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
        '/beta/parcelInvoice/{parcelInvoiceId}/tag/{parcelInvoiceTag}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDuplicateParcelInvoiceById operation.
     * @callback module:api/ParcelInvoiceApi~getDuplicateParcelInvoiceByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ParcelInvoice} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated a parcelInvoice by id
     * Returns a duplicated parcelInvoice identified by the specified id.
     * @param {Integer} parcelInvoiceId Id of the parcelInvoice to be duplicated.
     * @param {module:api/ParcelInvoiceApi~getDuplicateParcelInvoiceByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ParcelInvoice}
     */
    this.getDuplicateParcelInvoiceById = function(parcelInvoiceId, callback) {
      var postBody = null;

      // verify the required parameter 'parcelInvoiceId' is set
      if (parcelInvoiceId == undefined || parcelInvoiceId == null) {
        throw "Missing the required parameter 'parcelInvoiceId' when calling getDuplicateParcelInvoiceById";
      }


      var pathParams = {
        'parcelInvoiceId': parcelInvoiceId
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
      var returnType = ParcelInvoice;

      return this.apiClient.callApi(
        '/beta/parcelInvoice/duplicate/{parcelInvoiceId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getParcelInvoiceByFilter operation.
     * @callback module:api/ParcelInvoiceApi~getParcelInvoiceByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ParcelInvoice>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search parcelInvoices by filter
     * Returns the list of parcelInvoices that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/ParcelInvoiceApi~getParcelInvoiceByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/ParcelInvoice>}
     */
    this.getParcelInvoiceByFilter = function(opts, callback) {
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
      var returnType = [ParcelInvoice];

      return this.apiClient.callApi(
        '/beta/parcelInvoice/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getParcelInvoiceById operation.
     * @callback module:api/ParcelInvoiceApi~getParcelInvoiceByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ParcelInvoice} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a parcelInvoice by id
     * Returns the parcelInvoice identified by the specified id.
     * @param {Integer} parcelInvoiceId Id of the parcelInvoice to be returned.
     * @param {module:api/ParcelInvoiceApi~getParcelInvoiceByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ParcelInvoice}
     */
    this.getParcelInvoiceById = function(parcelInvoiceId, callback) {
      var postBody = null;

      // verify the required parameter 'parcelInvoiceId' is set
      if (parcelInvoiceId == undefined || parcelInvoiceId == null) {
        throw "Missing the required parameter 'parcelInvoiceId' when calling getParcelInvoiceById";
      }


      var pathParams = {
        'parcelInvoiceId': parcelInvoiceId
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
      var returnType = ParcelInvoice;

      return this.apiClient.callApi(
        '/beta/parcelInvoice/{parcelInvoiceId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getParcelInvoiceTags operation.
     * @callback module:api/ParcelInvoiceApi~getParcelInvoiceTagsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the tags for a parcelInvoice.
     * Get all existing parcelInvoice tags.
     * @param {Integer} parcelInvoiceId Id of the parcelInvoice to get tags for
     * @param {module:api/ParcelInvoiceApi~getParcelInvoiceTagsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getParcelInvoiceTags = function(parcelInvoiceId, callback) {
      var postBody = null;

      // verify the required parameter 'parcelInvoiceId' is set
      if (parcelInvoiceId == undefined || parcelInvoiceId == null) {
        throw "Missing the required parameter 'parcelInvoiceId' when calling getParcelInvoiceTags";
      }


      var pathParams = {
        'parcelInvoiceId': parcelInvoiceId
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
        '/beta/parcelInvoice/{parcelInvoiceId}/tag', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
