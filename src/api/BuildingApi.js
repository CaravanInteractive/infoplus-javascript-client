(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/Building', '../model/ApiResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Building'), require('../model/ApiResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.BuildingApi = factory(root.infoplus.ApiClient, root.infoplus.Building, root.infoplus.ApiResponse);
  }
}(this, function(ApiClient, Building, ApiResponse) {
  'use strict';

  /**
   * Building service.
   * @module api/BuildingApi
   * @version beta
   */

  /**
   * Constructs a new BuildingApi. 
   * @alias module:api/BuildingApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addBuilding operation.
     * @callback module:api/BuildingApi~addBuildingCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Building} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a building
     * Inserts a new building using the specified data.
     * @param {module:model/Building} body Building to be inserted.
     * @param {module:api/BuildingApi~addBuildingCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Building}
     */
    this.addBuilding = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling addBuilding";
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
      var returnType = Building;

      return this.apiClient.callApi(
        '/beta/building', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addBuildingAudit operation.
     * @callback module:api/BuildingApi~addBuildingAuditCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new audit for a building
     * Adds an audit to an existing building.
     * @param {Integer} buildingId Id of the building to add an audit to
     * @param {String} buildingAudit The audit to add
     * @param {module:api/BuildingApi~addBuildingAuditCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addBuildingAudit = function(buildingId, buildingAudit, callback) {
      var postBody = null;

      // verify the required parameter 'buildingId' is set
      if (buildingId == undefined || buildingId == null) {
        throw "Missing the required parameter 'buildingId' when calling addBuildingAudit";
      }

      // verify the required parameter 'buildingAudit' is set
      if (buildingAudit == undefined || buildingAudit == null) {
        throw "Missing the required parameter 'buildingAudit' when calling addBuildingAudit";
      }


      var pathParams = {
        'buildingId': buildingId,
        'buildingAudit': buildingAudit
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
        '/beta/building/{buildingId}/audit/{buildingAudit}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addBuildingTag operation.
     * @callback module:api/BuildingApi~addBuildingTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new tags for a building.
     * Adds a tag to an existing building.
     * @param {Integer} buildingId Id of the building to add a tag to
     * @param {String} buildingTag The tag to add
     * @param {module:api/BuildingApi~addBuildingTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addBuildingTag = function(buildingId, buildingTag, callback) {
      var postBody = null;

      // verify the required parameter 'buildingId' is set
      if (buildingId == undefined || buildingId == null) {
        throw "Missing the required parameter 'buildingId' when calling addBuildingTag";
      }

      // verify the required parameter 'buildingTag' is set
      if (buildingTag == undefined || buildingTag == null) {
        throw "Missing the required parameter 'buildingTag' when calling addBuildingTag";
      }


      var pathParams = {
        'buildingId': buildingId,
        'buildingTag': buildingTag
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
        '/beta/building/{buildingId}/tag/{buildingTag}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteBuilding operation.
     * @callback module:api/BuildingApi~deleteBuildingCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a building
     * Deletes the building identified by the specified id.
     * @param {Integer} buildingId Id of the building to be deleted.
     * @param {module:api/BuildingApi~deleteBuildingCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteBuilding = function(buildingId, callback) {
      var postBody = null;

      // verify the required parameter 'buildingId' is set
      if (buildingId == undefined || buildingId == null) {
        throw "Missing the required parameter 'buildingId' when calling deleteBuilding";
      }


      var pathParams = {
        'buildingId': buildingId
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
        '/beta/building/{buildingId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteBuildingTag operation.
     * @callback module:api/BuildingApi~deleteBuildingTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a tag for a building.
     * Deletes an existing building tag using the specified data.
     * @param {Integer} buildingId Id of the building to remove tag from
     * @param {String} buildingTag The tag to delete
     * @param {module:api/BuildingApi~deleteBuildingTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteBuildingTag = function(buildingId, buildingTag, callback) {
      var postBody = null;

      // verify the required parameter 'buildingId' is set
      if (buildingId == undefined || buildingId == null) {
        throw "Missing the required parameter 'buildingId' when calling deleteBuildingTag";
      }

      // verify the required parameter 'buildingTag' is set
      if (buildingTag == undefined || buildingTag == null) {
        throw "Missing the required parameter 'buildingTag' when calling deleteBuildingTag";
      }


      var pathParams = {
        'buildingId': buildingId,
        'buildingTag': buildingTag
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
        '/beta/building/{buildingId}/tag/{buildingTag}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getBuildingByFilter operation.
     * @callback module:api/BuildingApi~getBuildingByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Building>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search buildings by filter
     * Returns the list of buildings that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/BuildingApi~getBuildingByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/Building>}
     */
    this.getBuildingByFilter = function(opts, callback) {
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
      var returnType = [Building];

      return this.apiClient.callApi(
        '/beta/building/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getBuildingById operation.
     * @callback module:api/BuildingApi~getBuildingByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Building} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a building by id
     * Returns the building identified by the specified id.
     * @param {Integer} buildingId Id of the building to be returned.
     * @param {module:api/BuildingApi~getBuildingByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Building}
     */
    this.getBuildingById = function(buildingId, callback) {
      var postBody = null;

      // verify the required parameter 'buildingId' is set
      if (buildingId == undefined || buildingId == null) {
        throw "Missing the required parameter 'buildingId' when calling getBuildingById";
      }


      var pathParams = {
        'buildingId': buildingId
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
      var returnType = Building;

      return this.apiClient.callApi(
        '/beta/building/{buildingId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getBuildingTags operation.
     * @callback module:api/BuildingApi~getBuildingTagsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the tags for a building.
     * Get all existing building tags.
     * @param {Integer} buildingId Id of the building to get tags for
     * @param {module:api/BuildingApi~getBuildingTagsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getBuildingTags = function(buildingId, callback) {
      var postBody = null;

      // verify the required parameter 'buildingId' is set
      if (buildingId == undefined || buildingId == null) {
        throw "Missing the required parameter 'buildingId' when calling getBuildingTags";
      }


      var pathParams = {
        'buildingId': buildingId
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
        '/beta/building/{buildingId}/tag', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDuplicateBuildingById operation.
     * @callback module:api/BuildingApi~getDuplicateBuildingByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Building} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated a building by id
     * Returns a duplicated building identified by the specified id.
     * @param {Integer} buildingId Id of the building to be duplicated.
     * @param {module:api/BuildingApi~getDuplicateBuildingByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Building}
     */
    this.getDuplicateBuildingById = function(buildingId, callback) {
      var postBody = null;

      // verify the required parameter 'buildingId' is set
      if (buildingId == undefined || buildingId == null) {
        throw "Missing the required parameter 'buildingId' when calling getDuplicateBuildingById";
      }


      var pathParams = {
        'buildingId': buildingId
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
      var returnType = Building;

      return this.apiClient.callApi(
        '/beta/building/duplicate/{buildingId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateBuilding operation.
     * @callback module:api/BuildingApi~updateBuildingCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a building
     * Updates an existing building using the specified data.
     * @param {module:model/Building} body Building to be updated.
     * @param {module:api/BuildingApi~updateBuildingCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateBuilding = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateBuilding";
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
        '/beta/building', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateBuildingCustomFields operation.
     * @callback module:api/BuildingApi~updateBuildingCustomFieldsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a building custom fields
     * Updates an existing building custom fields using the specified data.
     * @param {module:model/Building} body Building to be updated.
     * @param {module:api/BuildingApi~updateBuildingCustomFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateBuildingCustomFields = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateBuildingCustomFields";
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
        '/beta/building/customFields', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
