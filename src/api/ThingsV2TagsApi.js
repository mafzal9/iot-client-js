/**
 * Arduino IoT Cloud API
 *  Provides a set of endpoints to manage Arduino IoT Cloud **Devices**, **Things**, **Properties** and **Timeseries**. This API can be called just with any HTTP Client, or using one of these clients:  * [Javascript NPM package](https://www.npmjs.com/package/@arduino/arduino-iot-client)  * [Python PYPI Package](https://pypi.org/project/arduino-iot-client/)  * [Golang Module](https://github.com/arduino/iot-client-go)
 *
 * The version of the OpenAPI document: 2.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import ArduinoTags from '../model/ArduinoTags';
import Error from '../model/Error';
import Tag from '../model/Tag';

/**
* ThingsV2Tags service.
* @module api/ThingsV2TagsApi
* @version 1.4.4
*/
export default class ThingsV2TagsApi {

    /**
    * Constructs a new ThingsV2TagsApi. 
    * @alias module:api/ThingsV2TagsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * delete things_v2_tags
     * Delete a tag associated to the thing given its key.
     * @param {String} id The id of the thing
     * @param {String} key The key of the tag
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    thingsV2TagsDeleteWithHttpInfo(id, key) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling thingsV2TagsDelete");
      }
      // verify the required parameter 'key' is set
      if (key === undefined || key === null) {
        throw new Error("Missing the required parameter 'key' when calling thingsV2TagsDelete");
      }

      let pathParams = {
        'id': id,
        'key': key
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/v2/things/{id}/tags/{key}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * delete things_v2_tags
     * Delete a tag associated to the thing given its key.
     * @param {String} id The id of the thing
     * @param {String} key The key of the tag
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    thingsV2TagsDelete(id, key) {
      return this.thingsV2TagsDeleteWithHttpInfo(id, key)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * list things_v2_tags
     * List tags associated to the thing.
     * @param {String} id The id of the thing
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ArduinoTags} and HTTP response
     */
    thingsV2TagsListWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling thingsV2TagsList");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ArduinoTags;
      return this.apiClient.callApi(
        '/v2/things/{id}/tags', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * list things_v2_tags
     * List tags associated to the thing.
     * @param {String} id The id of the thing
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ArduinoTags}
     */
    thingsV2TagsList(id) {
      return this.thingsV2TagsListWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * upsert things_v2_tags
     * Creates or updates a tag associated to the thing.
     * @param {String} id The id of the thing
     * @param {module:model/Tag} tag 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    thingsV2TagsUpsertWithHttpInfo(id, tag) {
      let postBody = tag;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling thingsV2TagsUpsert");
      }
      // verify the required parameter 'tag' is set
      if (tag === undefined || tag === null) {
        throw new Error("Missing the required parameter 'tag' when calling thingsV2TagsUpsert");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/v2/things/{id}/tags', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * upsert things_v2_tags
     * Creates or updates a tag associated to the thing.
     * @param {String} id The id of the thing
     * @param {module:model/Tag} tag 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    thingsV2TagsUpsert(id, tag) {
      return this.thingsV2TagsUpsertWithHttpInfo(id, tag)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
