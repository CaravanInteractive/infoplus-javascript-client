# infoplus.ItemBuyerApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getItemBuyerBySearchText**](ItemBuyerApi.md#getItemBuyerBySearchText) | **GET** /beta/itemBuyer/search | Search itemBuyers
[**getTranslateBuyerById**](ItemBuyerApi.md#getTranslateBuyerById) | **GET** /beta/itemBuyer/{itemBuyerId} | Get an itemBuyer by id


<a name="getItemBuyerBySearchText"></a>
# **getItemBuyerBySearchText**
> [ItemBuyer] getItemBuyerBySearchText(opts)

Search itemBuyers

Returns the list of itemBuyers that match the given searchText.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ItemBuyerApi()

var opts = { 
  'searchText': "searchText_example", // {String} Search text, used to filter results.
  'page': 56, // {Integer} Result page number.  Defaults to 1.
  'limit': 56 // {Integer} Maximum results per page.  Defaults to 20.  Max allowed value is 250.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getItemBuyerBySearchText(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchText** | **String**| Search text, used to filter results. | [optional] 
 **page** | **Integer**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Integer**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 

### Return type

[**[ItemBuyer]**](ItemBuyer.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTranslateBuyerById"></a>
# **getTranslateBuyerById**
> ItemBuyer getTranslateBuyerById(itemBuyerId)

Get an itemBuyer by id

Returns the itemBuyer identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ItemBuyerApi()

var itemBuyerId = "itemBuyerId_example"; // {String} Id of itemBuyer to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getTranslateBuyerById(itemBuyerId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemBuyerId** | **String**| Id of itemBuyer to be returned. | 

### Return type

[**ItemBuyer**](ItemBuyer.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json
