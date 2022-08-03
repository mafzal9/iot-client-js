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
import ArduinoLoradevicev1 from '../model/ArduinoLoradevicev1';
import CreateLoraDevicesV1Payload from '../model/CreateLoraDevicesV1Payload';

/**
* LoraDevicesV1 service.
* @module api/LoraDevicesV1Api
* @version 1.4.2
*/
export default class LoraDevicesV1Api {

    /**
    * Constructs a new LoraDevicesV1Api. 
    * @alias module:api/LoraDevicesV1Api
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * create lora_devices_v1
     * Create a new lora device. Its info are saved on our database, and on the lora provider network. Creates a device_v2 automatically
     * @param {module:model/CreateLoraDevicesV1Payload} createLoraDevicesV1Payload 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ArduinoLoradevicev1} and HTTP response
     */
    loraDevicesV1CreateWithHttpInfo(createLoraDevicesV1Payload) {
      let postBody = createLoraDevicesV1Payload;
      // verify the required parameter 'createLoraDevicesV1Payload' is set
      if (createLoraDevicesV1Payload === undefined || createLoraDevicesV1Payload === null) {
        throw new Error("Missing the required parameter 'createLoraDevicesV1Payload' when calling loraDevicesV1Create");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = ArduinoLoradevicev1;
      return this.apiClient.callApi(
        '/v1/lora-devices/', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * create lora_devices_v1
     * Create a new lora device. Its info are saved on our database, and on the lora provider network. Creates a device_v2 automatically
     * @param {module:model/CreateLoraDevicesV1Payload} createLoraDevicesV1Payload 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ArduinoLoradevicev1}
     */
    loraDevicesV1Create(createLoraDevicesV1Payload) {
      return this.loraDevicesV1CreateWithHttpInfo(createLoraDevicesV1Payload)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
