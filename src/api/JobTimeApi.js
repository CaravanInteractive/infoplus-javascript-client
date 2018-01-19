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
 * Swagger Codegen version: 2.3.0
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ApiResponse', 'model/JobTime'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiResponse'), require('../model/JobTime'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.JobTimeApi = factory(root.infoplus.ApiClient, root.infoplus.ApiResponse, root.infoplus.JobTime);
  }
}(this, function(ApiClient, ApiResponse, JobTime) {
  'use strict';

  /**
   * JobTime service.
   * @module api/JobTimeApi
   * @version beta
   */

  /**
   * Constructs a new JobTimeApi. 
   * @alias module:api/JobTimeApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addJobTime operation.
     * @callback module:api/JobTimeApi~addJobTimeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/JobTime} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a jobTime
     * Inserts a new jobTime using the specified data.
     * @param {module:model/JobTime} body JobTime to be inserted.
     * @param {module:api/JobTimeApi~addJobTimeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/JobTime}
     */
    this.addJobTime = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addJobTime");
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
      var returnType = JobTime;

      return this.apiClient.callApi(
        '/beta/jobTime', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addJobTimeAudit operation.
     * @callback module:api/JobTimeApi~addJobTimeAuditCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new audit for a jobTime
     * Adds an audit to an existing jobTime.
     * @param {Number} jobTimeId Id of the jobTime to add an audit to
     * @param {String} jobTimeAudit The audit to add
     * @param {module:api/JobTimeApi~addJobTimeAuditCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addJobTimeAudit = function(jobTimeId, jobTimeAudit, callback) {
      var postBody = null;

      // verify the required parameter 'jobTimeId' is set
      if (jobTimeId === undefined || jobTimeId === null) {
        throw new Error("Missing the required parameter 'jobTimeId' when calling addJobTimeAudit");
      }

      // verify the required parameter 'jobTimeAudit' is set
      if (jobTimeAudit === undefined || jobTimeAudit === null) {
        throw new Error("Missing the required parameter 'jobTimeAudit' when calling addJobTimeAudit");
      }


      var pathParams = {
        'jobTimeId': jobTimeId,
        'jobTimeAudit': jobTimeAudit
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
        '/beta/jobTime/{jobTimeId}/audit/{jobTimeAudit}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addJobTimeTag operation.
     * @callback module:api/JobTimeApi~addJobTimeTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new tags for a jobTime.
     * Adds a tag to an existing jobTime.
     * @param {Number} jobTimeId Id of the jobTime to add a tag to
     * @param {String} jobTimeTag The tag to add
     * @param {module:api/JobTimeApi~addJobTimeTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addJobTimeTag = function(jobTimeId, jobTimeTag, callback) {
      var postBody = null;

      // verify the required parameter 'jobTimeId' is set
      if (jobTimeId === undefined || jobTimeId === null) {
        throw new Error("Missing the required parameter 'jobTimeId' when calling addJobTimeTag");
      }

      // verify the required parameter 'jobTimeTag' is set
      if (jobTimeTag === undefined || jobTimeTag === null) {
        throw new Error("Missing the required parameter 'jobTimeTag' when calling addJobTimeTag");
      }


      var pathParams = {
        'jobTimeId': jobTimeId,
        'jobTimeTag': jobTimeTag
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
        '/beta/jobTime/{jobTimeId}/tag/{jobTimeTag}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteJobTime operation.
     * @callback module:api/JobTimeApi~deleteJobTimeCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a jobTime
     * Deletes the jobTime identified by the specified id.
     * @param {Number} jobTimeId Id of the jobTime to be deleted.
     * @param {module:api/JobTimeApi~deleteJobTimeCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteJobTime = function(jobTimeId, callback) {
      var postBody = null;

      // verify the required parameter 'jobTimeId' is set
      if (jobTimeId === undefined || jobTimeId === null) {
        throw new Error("Missing the required parameter 'jobTimeId' when calling deleteJobTime");
      }


      var pathParams = {
        'jobTimeId': jobTimeId
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
        '/beta/jobTime/{jobTimeId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteJobTimeTag operation.
     * @callback module:api/JobTimeApi~deleteJobTimeTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a tag for a jobTime.
     * Deletes an existing jobTime tag using the specified data.
     * @param {Number} jobTimeId Id of the jobTime to remove tag from
     * @param {String} jobTimeTag The tag to delete
     * @param {module:api/JobTimeApi~deleteJobTimeTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteJobTimeTag = function(jobTimeId, jobTimeTag, callback) {
      var postBody = null;

      // verify the required parameter 'jobTimeId' is set
      if (jobTimeId === undefined || jobTimeId === null) {
        throw new Error("Missing the required parameter 'jobTimeId' when calling deleteJobTimeTag");
      }

      // verify the required parameter 'jobTimeTag' is set
      if (jobTimeTag === undefined || jobTimeTag === null) {
        throw new Error("Missing the required parameter 'jobTimeTag' when calling deleteJobTimeTag");
      }


      var pathParams = {
        'jobTimeId': jobTimeId,
        'jobTimeTag': jobTimeTag
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
        '/beta/jobTime/{jobTimeId}/tag/{jobTimeTag}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDuplicateJobTimeById operation.
     * @callback module:api/JobTimeApi~getDuplicateJobTimeByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/JobTime} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated a jobTime by id
     * Returns a duplicated jobTime identified by the specified id.
     * @param {Number} jobTimeId Id of the jobTime to be duplicated.
     * @param {module:api/JobTimeApi~getDuplicateJobTimeByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/JobTime}
     */
    this.getDuplicateJobTimeById = function(jobTimeId, callback) {
      var postBody = null;

      // verify the required parameter 'jobTimeId' is set
      if (jobTimeId === undefined || jobTimeId === null) {
        throw new Error("Missing the required parameter 'jobTimeId' when calling getDuplicateJobTimeById");
      }


      var pathParams = {
        'jobTimeId': jobTimeId
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
      var returnType = JobTime;

      return this.apiClient.callApi(
        '/beta/jobTime/duplicate/{jobTimeId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getJobTimeByFilter operation.
     * @callback module:api/JobTimeApi~getJobTimeByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/JobTime>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search jobTimes by filter
     * Returns the list of jobTimes that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Number} opts.page Result page number.  Defaults to 1.
     * @param {Number} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/JobTimeApi~getJobTimeByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/JobTime>}
     */
    this.getJobTimeByFilter = function(opts, callback) {
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
      var returnType = [JobTime];

      return this.apiClient.callApi(
        '/beta/jobTime/search', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getJobTimeById operation.
     * @callback module:api/JobTimeApi~getJobTimeByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/JobTime} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a jobTime by id
     * Returns the jobTime identified by the specified id.
     * @param {Number} jobTimeId Id of the jobTime to be returned.
     * @param {module:api/JobTimeApi~getJobTimeByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/JobTime}
     */
    this.getJobTimeById = function(jobTimeId, callback) {
      var postBody = null;

      // verify the required parameter 'jobTimeId' is set
      if (jobTimeId === undefined || jobTimeId === null) {
        throw new Error("Missing the required parameter 'jobTimeId' when calling getJobTimeById");
      }


      var pathParams = {
        'jobTimeId': jobTimeId
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
      var returnType = JobTime;

      return this.apiClient.callApi(
        '/beta/jobTime/{jobTimeId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getJobTimeTags operation.
     * @callback module:api/JobTimeApi~getJobTimeTagsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the tags for a jobTime.
     * Get all existing jobTime tags.
     * @param {Number} jobTimeId Id of the jobTime to get tags for
     * @param {module:api/JobTimeApi~getJobTimeTagsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getJobTimeTags = function(jobTimeId, callback) {
      var postBody = null;

      // verify the required parameter 'jobTimeId' is set
      if (jobTimeId === undefined || jobTimeId === null) {
        throw new Error("Missing the required parameter 'jobTimeId' when calling getJobTimeTags");
      }


      var pathParams = {
        'jobTimeId': jobTimeId
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
        '/beta/jobTime/{jobTimeId}/tag', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateJobTime operation.
     * @callback module:api/JobTimeApi~updateJobTimeCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a jobTime
     * Updates an existing jobTime using the specified data.
     * @param {module:model/JobTime} body JobTime to be updated.
     * @param {module:api/JobTimeApi~updateJobTimeCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateJobTime = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateJobTime");
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
        '/beta/jobTime', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateJobTimeCustomFields operation.
     * @callback module:api/JobTimeApi~updateJobTimeCustomFieldsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a jobTime custom fields
     * Updates an existing jobTime custom fields using the specified data.
     * @param {module:model/JobTime} body JobTime to be updated.
     * @param {module:api/JobTimeApi~updateJobTimeCustomFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateJobTimeCustomFields = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateJobTimeCustomFields");
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
        '/beta/jobTime/customFields', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
