(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/InvoiceWorksheet', '../model/ApiResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/InvoiceWorksheet'), require('../model/ApiResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.InvoiceWorksheetApi = factory(root.infoplus.ApiClient, root.infoplus.InvoiceWorksheet, root.infoplus.ApiResponse);
  }
}(this, function(ApiClient, InvoiceWorksheet, ApiResponse) {
  'use strict';

  /**
   * InvoiceWorksheet service.
   * @module api/InvoiceWorksheetApi
   * @version beta
   */

  /**
   * Constructs a new InvoiceWorksheetApi. 
   * @alias module:api/InvoiceWorksheetApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addInvoiceWorksheet operation.
     * @callback module:api/InvoiceWorksheetApi~addInvoiceWorksheetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InvoiceWorksheet} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an invoiceWorksheet
     * Inserts a new invoiceWorksheet using the specified data.
     * @param {module:model/InvoiceWorksheet} body InvoiceWorksheet to be inserted.
     * @param {module:api/InvoiceWorksheetApi~addInvoiceWorksheetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/InvoiceWorksheet}
     */
    this.addInvoiceWorksheet = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling addInvoiceWorksheet";
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
      var returnType = InvoiceWorksheet;

      return this.apiClient.callApi(
        '/beta/invoiceWorksheet', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addInvoiceWorksheetAudit operation.
     * @callback module:api/InvoiceWorksheetApi~addInvoiceWorksheetAuditCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new audit for an invoiceWorksheet
     * Adds an audit to an existing invoiceWorksheet.
     * @param {Integer} invoiceWorksheetId Id of the invoiceWorksheet to add an audit to
     * @param {String} invoiceWorksheetAudit The audit to add
     * @param {module:api/InvoiceWorksheetApi~addInvoiceWorksheetAuditCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addInvoiceWorksheetAudit = function(invoiceWorksheetId, invoiceWorksheetAudit, callback) {
      var postBody = null;

      // verify the required parameter 'invoiceWorksheetId' is set
      if (invoiceWorksheetId == undefined || invoiceWorksheetId == null) {
        throw "Missing the required parameter 'invoiceWorksheetId' when calling addInvoiceWorksheetAudit";
      }

      // verify the required parameter 'invoiceWorksheetAudit' is set
      if (invoiceWorksheetAudit == undefined || invoiceWorksheetAudit == null) {
        throw "Missing the required parameter 'invoiceWorksheetAudit' when calling addInvoiceWorksheetAudit";
      }


      var pathParams = {
        'invoiceWorksheetId': invoiceWorksheetId,
        'invoiceWorksheetAudit': invoiceWorksheetAudit
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
        '/beta/invoiceWorksheet/{invoiceWorksheetId}/audit/{invoiceWorksheetAudit}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addInvoiceWorksheetTag operation.
     * @callback module:api/InvoiceWorksheetApi~addInvoiceWorksheetTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new tags for an invoiceWorksheet.
     * Adds a tag to an existing invoiceWorksheet.
     * @param {Integer} invoiceWorksheetId Id of the invoiceWorksheet to add a tag to
     * @param {String} invoiceWorksheetTag The tag to add
     * @param {module:api/InvoiceWorksheetApi~addInvoiceWorksheetTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addInvoiceWorksheetTag = function(invoiceWorksheetId, invoiceWorksheetTag, callback) {
      var postBody = null;

      // verify the required parameter 'invoiceWorksheetId' is set
      if (invoiceWorksheetId == undefined || invoiceWorksheetId == null) {
        throw "Missing the required parameter 'invoiceWorksheetId' when calling addInvoiceWorksheetTag";
      }

      // verify the required parameter 'invoiceWorksheetTag' is set
      if (invoiceWorksheetTag == undefined || invoiceWorksheetTag == null) {
        throw "Missing the required parameter 'invoiceWorksheetTag' when calling addInvoiceWorksheetTag";
      }


      var pathParams = {
        'invoiceWorksheetId': invoiceWorksheetId,
        'invoiceWorksheetTag': invoiceWorksheetTag
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
        '/beta/invoiceWorksheet/{invoiceWorksheetId}/tag/{invoiceWorksheetTag}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteInvoiceWorksheet operation.
     * @callback module:api/InvoiceWorksheetApi~deleteInvoiceWorksheetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an invoiceWorksheet
     * Deletes the invoiceWorksheet identified by the specified id.
     * @param {Integer} invoiceWorksheetId Id of the invoiceWorksheet to be deleted.
     * @param {module:api/InvoiceWorksheetApi~deleteInvoiceWorksheetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteInvoiceWorksheet = function(invoiceWorksheetId, callback) {
      var postBody = null;

      // verify the required parameter 'invoiceWorksheetId' is set
      if (invoiceWorksheetId == undefined || invoiceWorksheetId == null) {
        throw "Missing the required parameter 'invoiceWorksheetId' when calling deleteInvoiceWorksheet";
      }


      var pathParams = {
        'invoiceWorksheetId': invoiceWorksheetId
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
        '/beta/invoiceWorksheet/{invoiceWorksheetId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteInvoiceWorksheetTag operation.
     * @callback module:api/InvoiceWorksheetApi~deleteInvoiceWorksheetTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a tag for an invoiceWorksheet.
     * Deletes an existing invoiceWorksheet tag using the specified data.
     * @param {Integer} invoiceWorksheetId Id of the invoiceWorksheet to remove tag from
     * @param {String} invoiceWorksheetTag The tag to delete
     * @param {module:api/InvoiceWorksheetApi~deleteInvoiceWorksheetTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteInvoiceWorksheetTag = function(invoiceWorksheetId, invoiceWorksheetTag, callback) {
      var postBody = null;

      // verify the required parameter 'invoiceWorksheetId' is set
      if (invoiceWorksheetId == undefined || invoiceWorksheetId == null) {
        throw "Missing the required parameter 'invoiceWorksheetId' when calling deleteInvoiceWorksheetTag";
      }

      // verify the required parameter 'invoiceWorksheetTag' is set
      if (invoiceWorksheetTag == undefined || invoiceWorksheetTag == null) {
        throw "Missing the required parameter 'invoiceWorksheetTag' when calling deleteInvoiceWorksheetTag";
      }


      var pathParams = {
        'invoiceWorksheetId': invoiceWorksheetId,
        'invoiceWorksheetTag': invoiceWorksheetTag
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
        '/beta/invoiceWorksheet/{invoiceWorksheetId}/tag/{invoiceWorksheetTag}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDuplicateInvoiceWorksheetById operation.
     * @callback module:api/InvoiceWorksheetApi~getDuplicateInvoiceWorksheetByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InvoiceWorksheet} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated an invoiceWorksheet by id
     * Returns a duplicated invoiceWorksheet identified by the specified id.
     * @param {Integer} invoiceWorksheetId Id of the invoiceWorksheet to be duplicated.
     * @param {module:api/InvoiceWorksheetApi~getDuplicateInvoiceWorksheetByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/InvoiceWorksheet}
     */
    this.getDuplicateInvoiceWorksheetById = function(invoiceWorksheetId, callback) {
      var postBody = null;

      // verify the required parameter 'invoiceWorksheetId' is set
      if (invoiceWorksheetId == undefined || invoiceWorksheetId == null) {
        throw "Missing the required parameter 'invoiceWorksheetId' when calling getDuplicateInvoiceWorksheetById";
      }


      var pathParams = {
        'invoiceWorksheetId': invoiceWorksheetId
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
      var returnType = InvoiceWorksheet;

      return this.apiClient.callApi(
        '/beta/invoiceWorksheet/duplicate/{invoiceWorksheetId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getInvoiceWorksheetByFilter operation.
     * @callback module:api/InvoiceWorksheetApi~getInvoiceWorksheetByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InvoiceWorksheet>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search invoiceWorksheets by filter
     * Returns the list of invoiceWorksheets that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/InvoiceWorksheetApi~getInvoiceWorksheetByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/InvoiceWorksheet>}
     */
    this.getInvoiceWorksheetByFilter = function(opts, callback) {
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
      var returnType = [InvoiceWorksheet];

      return this.apiClient.callApi(
        '/beta/invoiceWorksheet/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getInvoiceWorksheetById operation.
     * @callback module:api/InvoiceWorksheetApi~getInvoiceWorksheetByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InvoiceWorksheet} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an invoiceWorksheet by id
     * Returns the invoiceWorksheet identified by the specified id.
     * @param {Integer} invoiceWorksheetId Id of the invoiceWorksheet to be returned.
     * @param {module:api/InvoiceWorksheetApi~getInvoiceWorksheetByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/InvoiceWorksheet}
     */
    this.getInvoiceWorksheetById = function(invoiceWorksheetId, callback) {
      var postBody = null;

      // verify the required parameter 'invoiceWorksheetId' is set
      if (invoiceWorksheetId == undefined || invoiceWorksheetId == null) {
        throw "Missing the required parameter 'invoiceWorksheetId' when calling getInvoiceWorksheetById";
      }


      var pathParams = {
        'invoiceWorksheetId': invoiceWorksheetId
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
      var returnType = InvoiceWorksheet;

      return this.apiClient.callApi(
        '/beta/invoiceWorksheet/{invoiceWorksheetId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getInvoiceWorksheetTags operation.
     * @callback module:api/InvoiceWorksheetApi~getInvoiceWorksheetTagsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the tags for an invoiceWorksheet.
     * Get all existing invoiceWorksheet tags.
     * @param {Integer} invoiceWorksheetId Id of the invoiceWorksheet to get tags for
     * @param {module:api/InvoiceWorksheetApi~getInvoiceWorksheetTagsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getInvoiceWorksheetTags = function(invoiceWorksheetId, callback) {
      var postBody = null;

      // verify the required parameter 'invoiceWorksheetId' is set
      if (invoiceWorksheetId == undefined || invoiceWorksheetId == null) {
        throw "Missing the required parameter 'invoiceWorksheetId' when calling getInvoiceWorksheetTags";
      }


      var pathParams = {
        'invoiceWorksheetId': invoiceWorksheetId
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
        '/beta/invoiceWorksheet/{invoiceWorksheetId}/tag', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateInvoiceWorksheet operation.
     * @callback module:api/InvoiceWorksheetApi~updateInvoiceWorksheetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an invoiceWorksheet
     * Updates an existing invoiceWorksheet using the specified data.
     * @param {module:model/InvoiceWorksheet} body InvoiceWorksheet to be updated.
     * @param {module:api/InvoiceWorksheetApi~updateInvoiceWorksheetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateInvoiceWorksheet = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateInvoiceWorksheet";
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
        '/beta/invoiceWorksheet', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
