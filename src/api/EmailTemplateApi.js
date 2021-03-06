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
    define(['ApiClient', 'model/ApiResponse', 'model/EmailTemplate'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiResponse'), require('../model/EmailTemplate'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.EmailTemplateApi = factory(root.infoplus.ApiClient, root.infoplus.ApiResponse, root.infoplus.EmailTemplate);
  }
}(this, function(ApiClient, ApiResponse, EmailTemplate) {
  'use strict';

  /**
   * EmailTemplate service.
   * @module api/EmailTemplateApi
   * @version beta
   */

  /**
   * Constructs a new EmailTemplateApi. 
   * @alias module:api/EmailTemplateApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addEmailTemplate operation.
     * @callback module:api/EmailTemplateApi~addEmailTemplateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EmailTemplate} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an emailTemplate
     * Inserts a new emailTemplate using the specified data.
     * @param {module:model/EmailTemplate} body EmailTemplate to be inserted.
     * @param {module:api/EmailTemplateApi~addEmailTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EmailTemplate}
     */
    this.addEmailTemplate = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addEmailTemplate");
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
      var returnType = EmailTemplate;

      return this.apiClient.callApi(
        '/beta/emailTemplate', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addEmailTemplateAudit operation.
     * @callback module:api/EmailTemplateApi~addEmailTemplateAuditCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new audit for an emailTemplate
     * Adds an audit to an existing emailTemplate.
     * @param {Number} emailTemplateId Id of the emailTemplate to add an audit to
     * @param {String} emailTemplateAudit The audit to add
     * @param {module:api/EmailTemplateApi~addEmailTemplateAuditCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addEmailTemplateAudit = function(emailTemplateId, emailTemplateAudit, callback) {
      var postBody = null;

      // verify the required parameter 'emailTemplateId' is set
      if (emailTemplateId === undefined || emailTemplateId === null) {
        throw new Error("Missing the required parameter 'emailTemplateId' when calling addEmailTemplateAudit");
      }

      // verify the required parameter 'emailTemplateAudit' is set
      if (emailTemplateAudit === undefined || emailTemplateAudit === null) {
        throw new Error("Missing the required parameter 'emailTemplateAudit' when calling addEmailTemplateAudit");
      }


      var pathParams = {
        'emailTemplateId': emailTemplateId,
        'emailTemplateAudit': emailTemplateAudit
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
        '/beta/emailTemplate/{emailTemplateId}/audit/{emailTemplateAudit}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addEmailTemplateTag operation.
     * @callback module:api/EmailTemplateApi~addEmailTemplateTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new tags for an emailTemplate.
     * Adds a tag to an existing emailTemplate.
     * @param {Number} emailTemplateId Id of the emailTemplate to add a tag to
     * @param {String} emailTemplateTag The tag to add
     * @param {module:api/EmailTemplateApi~addEmailTemplateTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addEmailTemplateTag = function(emailTemplateId, emailTemplateTag, callback) {
      var postBody = null;

      // verify the required parameter 'emailTemplateId' is set
      if (emailTemplateId === undefined || emailTemplateId === null) {
        throw new Error("Missing the required parameter 'emailTemplateId' when calling addEmailTemplateTag");
      }

      // verify the required parameter 'emailTemplateTag' is set
      if (emailTemplateTag === undefined || emailTemplateTag === null) {
        throw new Error("Missing the required parameter 'emailTemplateTag' when calling addEmailTemplateTag");
      }


      var pathParams = {
        'emailTemplateId': emailTemplateId,
        'emailTemplateTag': emailTemplateTag
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
        '/beta/emailTemplate/{emailTemplateId}/tag/{emailTemplateTag}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteEmailTemplate operation.
     * @callback module:api/EmailTemplateApi~deleteEmailTemplateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an emailTemplate
     * Deletes the emailTemplate identified by the specified id.
     * @param {Number} emailTemplateId Id of the emailTemplate to be deleted.
     * @param {module:api/EmailTemplateApi~deleteEmailTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteEmailTemplate = function(emailTemplateId, callback) {
      var postBody = null;

      // verify the required parameter 'emailTemplateId' is set
      if (emailTemplateId === undefined || emailTemplateId === null) {
        throw new Error("Missing the required parameter 'emailTemplateId' when calling deleteEmailTemplate");
      }


      var pathParams = {
        'emailTemplateId': emailTemplateId
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
        '/beta/emailTemplate/{emailTemplateId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteEmailTemplateTag operation.
     * @callback module:api/EmailTemplateApi~deleteEmailTemplateTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a tag for an emailTemplate.
     * Deletes an existing emailTemplate tag using the specified data.
     * @param {Number} emailTemplateId Id of the emailTemplate to remove tag from
     * @param {String} emailTemplateTag The tag to delete
     * @param {module:api/EmailTemplateApi~deleteEmailTemplateTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteEmailTemplateTag = function(emailTemplateId, emailTemplateTag, callback) {
      var postBody = null;

      // verify the required parameter 'emailTemplateId' is set
      if (emailTemplateId === undefined || emailTemplateId === null) {
        throw new Error("Missing the required parameter 'emailTemplateId' when calling deleteEmailTemplateTag");
      }

      // verify the required parameter 'emailTemplateTag' is set
      if (emailTemplateTag === undefined || emailTemplateTag === null) {
        throw new Error("Missing the required parameter 'emailTemplateTag' when calling deleteEmailTemplateTag");
      }


      var pathParams = {
        'emailTemplateId': emailTemplateId,
        'emailTemplateTag': emailTemplateTag
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
        '/beta/emailTemplate/{emailTemplateId}/tag/{emailTemplateTag}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDuplicateEmailTemplateById operation.
     * @callback module:api/EmailTemplateApi~getDuplicateEmailTemplateByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EmailTemplate} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated an emailTemplate by id
     * Returns a duplicated emailTemplate identified by the specified id.
     * @param {Number} emailTemplateId Id of the emailTemplate to be duplicated.
     * @param {module:api/EmailTemplateApi~getDuplicateEmailTemplateByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EmailTemplate}
     */
    this.getDuplicateEmailTemplateById = function(emailTemplateId, callback) {
      var postBody = null;

      // verify the required parameter 'emailTemplateId' is set
      if (emailTemplateId === undefined || emailTemplateId === null) {
        throw new Error("Missing the required parameter 'emailTemplateId' when calling getDuplicateEmailTemplateById");
      }


      var pathParams = {
        'emailTemplateId': emailTemplateId
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
      var returnType = EmailTemplate;

      return this.apiClient.callApi(
        '/beta/emailTemplate/duplicate/{emailTemplateId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getEmailTemplateByFilter operation.
     * @callback module:api/EmailTemplateApi~getEmailTemplateByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/EmailTemplate>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search emailTemplates by filter
     * Returns the list of emailTemplates that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Number} opts.page Result page number.  Defaults to 1.
     * @param {Number} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/EmailTemplateApi~getEmailTemplateByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/EmailTemplate>}
     */
    this.getEmailTemplateByFilter = function(opts, callback) {
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
      var returnType = [EmailTemplate];

      return this.apiClient.callApi(
        '/beta/emailTemplate/search', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getEmailTemplateById operation.
     * @callback module:api/EmailTemplateApi~getEmailTemplateByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EmailTemplate} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an emailTemplate by id
     * Returns the emailTemplate identified by the specified id.
     * @param {Number} emailTemplateId Id of the emailTemplate to be returned.
     * @param {module:api/EmailTemplateApi~getEmailTemplateByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EmailTemplate}
     */
    this.getEmailTemplateById = function(emailTemplateId, callback) {
      var postBody = null;

      // verify the required parameter 'emailTemplateId' is set
      if (emailTemplateId === undefined || emailTemplateId === null) {
        throw new Error("Missing the required parameter 'emailTemplateId' when calling getEmailTemplateById");
      }


      var pathParams = {
        'emailTemplateId': emailTemplateId
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
      var returnType = EmailTemplate;

      return this.apiClient.callApi(
        '/beta/emailTemplate/{emailTemplateId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getEmailTemplateTags operation.
     * @callback module:api/EmailTemplateApi~getEmailTemplateTagsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the tags for an emailTemplate.
     * Get all existing emailTemplate tags.
     * @param {Number} emailTemplateId Id of the emailTemplate to get tags for
     * @param {module:api/EmailTemplateApi~getEmailTemplateTagsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getEmailTemplateTags = function(emailTemplateId, callback) {
      var postBody = null;

      // verify the required parameter 'emailTemplateId' is set
      if (emailTemplateId === undefined || emailTemplateId === null) {
        throw new Error("Missing the required parameter 'emailTemplateId' when calling getEmailTemplateTags");
      }


      var pathParams = {
        'emailTemplateId': emailTemplateId
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
        '/beta/emailTemplate/{emailTemplateId}/tag', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateEmailTemplate operation.
     * @callback module:api/EmailTemplateApi~updateEmailTemplateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an emailTemplate
     * Updates an existing emailTemplate using the specified data.
     * @param {module:model/EmailTemplate} body EmailTemplate to be updated.
     * @param {module:api/EmailTemplateApi~updateEmailTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateEmailTemplate = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateEmailTemplate");
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
        '/beta/emailTemplate', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateEmailTemplateCustomFields operation.
     * @callback module:api/EmailTemplateApi~updateEmailTemplateCustomFieldsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an emailTemplate custom fields
     * Updates an existing emailTemplate custom fields using the specified data.
     * @param {module:model/EmailTemplate} body EmailTemplate to be updated.
     * @param {module:api/EmailTemplateApi~updateEmailTemplateCustomFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateEmailTemplateCustomFields = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateEmailTemplateCustomFields");
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
        '/beta/emailTemplate/customFields', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
