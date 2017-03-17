(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/Zone', '../model/ApiResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Zone'), require('../model/ApiResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.ZoneApi = factory(root.infoplus.ApiClient, root.infoplus.Zone, root.infoplus.ApiResponse);
  }
}(this, function(ApiClient, Zone, ApiResponse) {
  'use strict';

  /**
   * Zone service.
   * @module api/ZoneApi
   * @version beta
   */

  /**
   * Constructs a new ZoneApi. 
   * @alias module:api/ZoneApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addZone operation.
     * @callback module:api/ZoneApi~addZoneCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Zone} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a zone
     * Inserts a new zone using the specified data.
     * @param {module:model/Zone} body Zone to be inserted.
     * @param {module:api/ZoneApi~addZoneCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Zone}
     */
    this.addZone = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling addZone";
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
      var returnType = Zone;

      return this.apiClient.callApi(
        '/beta/zone', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addZoneAudit operation.
     * @callback module:api/ZoneApi~addZoneAuditCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new audit for a zone
     * Adds an audit to an existing zone.
     * @param {Integer} zoneId Id of the zone to add an audit to
     * @param {String} zoneAudit The audit to add
     * @param {module:api/ZoneApi~addZoneAuditCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addZoneAudit = function(zoneId, zoneAudit, callback) {
      var postBody = null;

      // verify the required parameter 'zoneId' is set
      if (zoneId == undefined || zoneId == null) {
        throw "Missing the required parameter 'zoneId' when calling addZoneAudit";
      }

      // verify the required parameter 'zoneAudit' is set
      if (zoneAudit == undefined || zoneAudit == null) {
        throw "Missing the required parameter 'zoneAudit' when calling addZoneAudit";
      }


      var pathParams = {
        'zoneId': zoneId,
        'zoneAudit': zoneAudit
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
        '/beta/zone/{zoneId}/audit/{zoneAudit}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addZoneTag operation.
     * @callback module:api/ZoneApi~addZoneTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new tags for a zone.
     * Adds a tag to an existing zone.
     * @param {Integer} zoneId Id of the zone to add a tag to
     * @param {String} zoneTag The tag to add
     * @param {module:api/ZoneApi~addZoneTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addZoneTag = function(zoneId, zoneTag, callback) {
      var postBody = null;

      // verify the required parameter 'zoneId' is set
      if (zoneId == undefined || zoneId == null) {
        throw "Missing the required parameter 'zoneId' when calling addZoneTag";
      }

      // verify the required parameter 'zoneTag' is set
      if (zoneTag == undefined || zoneTag == null) {
        throw "Missing the required parameter 'zoneTag' when calling addZoneTag";
      }


      var pathParams = {
        'zoneId': zoneId,
        'zoneTag': zoneTag
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
        '/beta/zone/{zoneId}/tag/{zoneTag}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteZone operation.
     * @callback module:api/ZoneApi~deleteZoneCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a zone
     * Deletes the zone identified by the specified id.
     * @param {Integer} zoneId Id of the zone to be deleted.
     * @param {module:api/ZoneApi~deleteZoneCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteZone = function(zoneId, callback) {
      var postBody = null;

      // verify the required parameter 'zoneId' is set
      if (zoneId == undefined || zoneId == null) {
        throw "Missing the required parameter 'zoneId' when calling deleteZone";
      }


      var pathParams = {
        'zoneId': zoneId
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
        '/beta/zone/{zoneId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteZoneTag operation.
     * @callback module:api/ZoneApi~deleteZoneTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a tag for a zone.
     * Deletes an existing zone tag using the specified data.
     * @param {Integer} zoneId Id of the zone to remove tag from
     * @param {String} zoneTag The tag to delete
     * @param {module:api/ZoneApi~deleteZoneTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteZoneTag = function(zoneId, zoneTag, callback) {
      var postBody = null;

      // verify the required parameter 'zoneId' is set
      if (zoneId == undefined || zoneId == null) {
        throw "Missing the required parameter 'zoneId' when calling deleteZoneTag";
      }

      // verify the required parameter 'zoneTag' is set
      if (zoneTag == undefined || zoneTag == null) {
        throw "Missing the required parameter 'zoneTag' when calling deleteZoneTag";
      }


      var pathParams = {
        'zoneId': zoneId,
        'zoneTag': zoneTag
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
        '/beta/zone/{zoneId}/tag/{zoneTag}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDuplicateZoneById operation.
     * @callback module:api/ZoneApi~getDuplicateZoneByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Zone} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated a zone by id
     * Returns a duplicated zone identified by the specified id.
     * @param {Integer} zoneId Id of the zone to be duplicated.
     * @param {module:api/ZoneApi~getDuplicateZoneByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Zone}
     */
    this.getDuplicateZoneById = function(zoneId, callback) {
      var postBody = null;

      // verify the required parameter 'zoneId' is set
      if (zoneId == undefined || zoneId == null) {
        throw "Missing the required parameter 'zoneId' when calling getDuplicateZoneById";
      }


      var pathParams = {
        'zoneId': zoneId
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
      var returnType = Zone;

      return this.apiClient.callApi(
        '/beta/zone/duplicate/{zoneId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getZoneByFilter operation.
     * @callback module:api/ZoneApi~getZoneByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Zone>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search zones by filter
     * Returns the list of zones that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/ZoneApi~getZoneByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/Zone>}
     */
    this.getZoneByFilter = function(opts, callback) {
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
      var returnType = [Zone];

      return this.apiClient.callApi(
        '/beta/zone/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getZoneById operation.
     * @callback module:api/ZoneApi~getZoneByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Zone} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a zone by id
     * Returns the zone identified by the specified id.
     * @param {Integer} zoneId Id of the zone to be returned.
     * @param {module:api/ZoneApi~getZoneByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Zone}
     */
    this.getZoneById = function(zoneId, callback) {
      var postBody = null;

      // verify the required parameter 'zoneId' is set
      if (zoneId == undefined || zoneId == null) {
        throw "Missing the required parameter 'zoneId' when calling getZoneById";
      }


      var pathParams = {
        'zoneId': zoneId
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
      var returnType = Zone;

      return this.apiClient.callApi(
        '/beta/zone/{zoneId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getZoneTags operation.
     * @callback module:api/ZoneApi~getZoneTagsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the tags for a zone.
     * Get all existing zone tags.
     * @param {Integer} zoneId Id of the zone to get tags for
     * @param {module:api/ZoneApi~getZoneTagsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getZoneTags = function(zoneId, callback) {
      var postBody = null;

      // verify the required parameter 'zoneId' is set
      if (zoneId == undefined || zoneId == null) {
        throw "Missing the required parameter 'zoneId' when calling getZoneTags";
      }


      var pathParams = {
        'zoneId': zoneId
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
        '/beta/zone/{zoneId}/tag', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateZone operation.
     * @callback module:api/ZoneApi~updateZoneCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a zone
     * Updates an existing zone using the specified data.
     * @param {module:model/Zone} body Zone to be updated.
     * @param {module:api/ZoneApi~updateZoneCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateZone = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateZone";
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
        '/beta/zone', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateZoneCustomFields operation.
     * @callback module:api/ZoneApi~updateZoneCustomFieldsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a zone custom fields
     * Updates an existing zone custom fields using the specified data.
     * @param {module:model/Zone} body Zone to be updated.
     * @param {module:api/ZoneApi~updateZoneCustomFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateZoneCustomFields = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateZoneCustomFields";
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
        '/beta/zone/customFields', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
