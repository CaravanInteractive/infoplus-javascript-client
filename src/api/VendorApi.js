(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/Vendor', '../model/ApiResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Vendor'), require('../model/ApiResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.VendorApi = factory(root.infoplus.ApiClient, root.infoplus.Vendor, root.infoplus.ApiResponse);
  }
}(this, function(ApiClient, Vendor, ApiResponse) {
  'use strict';

  /**
   * Vendor service.
   * @module api/VendorApi
   * @version beta
   */

  /**
   * Constructs a new VendorApi. 
   * @alias module:api/VendorApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addVendor operation.
     * @callback module:api/VendorApi~addVendorCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Vendor} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a vendor
     * Inserts a new vendor using the specified data.
     * @param {module:model/Vendor} body Vendor to be inserted.
     * @param {module:api/VendorApi~addVendorCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Vendor}
     */
    this.addVendor = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling addVendor";
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
      var returnType = Vendor;

      return this.apiClient.callApi(
        '/beta/vendor', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addVendorAudit operation.
     * @callback module:api/VendorApi~addVendorAuditCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new audit for a vendor
     * Adds an audit to an existing vendor.
     * @param {Integer} vendorId Id of the vendor to add an audit to
     * @param {String} vendorAudit The audit to add
     * @param {module:api/VendorApi~addVendorAuditCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addVendorAudit = function(vendorId, vendorAudit, callback) {
      var postBody = null;

      // verify the required parameter 'vendorId' is set
      if (vendorId == undefined || vendorId == null) {
        throw "Missing the required parameter 'vendorId' when calling addVendorAudit";
      }

      // verify the required parameter 'vendorAudit' is set
      if (vendorAudit == undefined || vendorAudit == null) {
        throw "Missing the required parameter 'vendorAudit' when calling addVendorAudit";
      }


      var pathParams = {
        'vendorId': vendorId,
        'vendorAudit': vendorAudit
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
        '/beta/vendor/{vendorId}/audit/{vendorAudit}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addVendorTag operation.
     * @callback module:api/VendorApi~addVendorTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new tags for a vendor.
     * Adds a tag to an existing vendor.
     * @param {Integer} vendorId Id of the vendor to add a tag to
     * @param {String} vendorTag The tag to add
     * @param {module:api/VendorApi~addVendorTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addVendorTag = function(vendorId, vendorTag, callback) {
      var postBody = null;

      // verify the required parameter 'vendorId' is set
      if (vendorId == undefined || vendorId == null) {
        throw "Missing the required parameter 'vendorId' when calling addVendorTag";
      }

      // verify the required parameter 'vendorTag' is set
      if (vendorTag == undefined || vendorTag == null) {
        throw "Missing the required parameter 'vendorTag' when calling addVendorTag";
      }


      var pathParams = {
        'vendorId': vendorId,
        'vendorTag': vendorTag
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
        '/beta/vendor/{vendorId}/tag/{vendorTag}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteVendor operation.
     * @callback module:api/VendorApi~deleteVendorCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a vendor
     * Deletes the vendor identified by the specified id.
     * @param {Integer} vendorId Id of the vendor to be deleted.
     * @param {module:api/VendorApi~deleteVendorCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteVendor = function(vendorId, callback) {
      var postBody = null;

      // verify the required parameter 'vendorId' is set
      if (vendorId == undefined || vendorId == null) {
        throw "Missing the required parameter 'vendorId' when calling deleteVendor";
      }


      var pathParams = {
        'vendorId': vendorId
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
        '/beta/vendor/{vendorId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteVendorTag operation.
     * @callback module:api/VendorApi~deleteVendorTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a tag for a vendor.
     * Deletes an existing vendor tag using the specified data.
     * @param {Integer} vendorId Id of the vendor to remove tag from
     * @param {String} vendorTag The tag to delete
     * @param {module:api/VendorApi~deleteVendorTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteVendorTag = function(vendorId, vendorTag, callback) {
      var postBody = null;

      // verify the required parameter 'vendorId' is set
      if (vendorId == undefined || vendorId == null) {
        throw "Missing the required parameter 'vendorId' when calling deleteVendorTag";
      }

      // verify the required parameter 'vendorTag' is set
      if (vendorTag == undefined || vendorTag == null) {
        throw "Missing the required parameter 'vendorTag' when calling deleteVendorTag";
      }


      var pathParams = {
        'vendorId': vendorId,
        'vendorTag': vendorTag
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
        '/beta/vendor/{vendorId}/tag/{vendorTag}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDuplicateVendorById operation.
     * @callback module:api/VendorApi~getDuplicateVendorByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Vendor} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated a vendor by id
     * Returns a duplicated vendor identified by the specified id.
     * @param {Integer} vendorId Id of the vendor to be duplicated.
     * @param {module:api/VendorApi~getDuplicateVendorByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Vendor}
     */
    this.getDuplicateVendorById = function(vendorId, callback) {
      var postBody = null;

      // verify the required parameter 'vendorId' is set
      if (vendorId == undefined || vendorId == null) {
        throw "Missing the required parameter 'vendorId' when calling getDuplicateVendorById";
      }


      var pathParams = {
        'vendorId': vendorId
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
      var returnType = Vendor;

      return this.apiClient.callApi(
        '/beta/vendor/duplicate/{vendorId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getVendorByFilter operation.
     * @callback module:api/VendorApi~getVendorByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Vendor>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search vendors by filter
     * Returns the list of vendors that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/VendorApi~getVendorByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/Vendor>}
     */
    this.getVendorByFilter = function(opts, callback) {
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
      var returnType = [Vendor];

      return this.apiClient.callApi(
        '/beta/vendor/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getVendorById operation.
     * @callback module:api/VendorApi~getVendorByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Vendor} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a vendor by id
     * Returns the vendor identified by the specified id.
     * @param {Integer} vendorId Id of the vendor to be returned.
     * @param {module:api/VendorApi~getVendorByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Vendor}
     */
    this.getVendorById = function(vendorId, callback) {
      var postBody = null;

      // verify the required parameter 'vendorId' is set
      if (vendorId == undefined || vendorId == null) {
        throw "Missing the required parameter 'vendorId' when calling getVendorById";
      }


      var pathParams = {
        'vendorId': vendorId
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
      var returnType = Vendor;

      return this.apiClient.callApi(
        '/beta/vendor/{vendorId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getVendorTags operation.
     * @callback module:api/VendorApi~getVendorTagsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the tags for a vendor.
     * Get all existing vendor tags.
     * @param {Integer} vendorId Id of the vendor to get tags for
     * @param {module:api/VendorApi~getVendorTagsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getVendorTags = function(vendorId, callback) {
      var postBody = null;

      // verify the required parameter 'vendorId' is set
      if (vendorId == undefined || vendorId == null) {
        throw "Missing the required parameter 'vendorId' when calling getVendorTags";
      }


      var pathParams = {
        'vendorId': vendorId
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
        '/beta/vendor/{vendorId}/tag', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateVendor operation.
     * @callback module:api/VendorApi~updateVendorCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a vendor
     * Updates an existing vendor using the specified data.
     * @param {module:model/Vendor} body Vendor to be updated.
     * @param {module:api/VendorApi~updateVendorCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateVendor = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateVendor";
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
        '/beta/vendor', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateVendorCustomFields operation.
     * @callback module:api/VendorApi~updateVendorCustomFieldsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a vendor custom fields
     * Updates an existing vendor custom fields using the specified data.
     * @param {module:model/Vendor} body Vendor to be updated.
     * @param {module:api/VendorApi~updateVendorCustomFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateVendorCustomFields = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateVendorCustomFields";
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
        '/beta/vendor/customFields', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
