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
import ArduinoLorafreqplansv1 from '../model/ArduinoLorafreqplansv1';
import Error from '../model/Error';

/**
* LoraFreqPlanV1 service.
* @module api/LoraFreqPlanV1Api
* @version 1.4.0
*/
export default class LoraFreqPlanV1Api {

    /**
    * Constructs a new LoraFreqPlanV1Api. 
    * @alias module:api/LoraFreqPlanV1Api
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * list lora_freq_plan_v1
     * List the lora frequency plans supported
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ArduinoLorafreqplansv1} and HTTP response
     */
    loraFreqPlanV1ListWithHttpInfo() {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ArduinoLorafreqplansv1;
      return this.apiClient.callApi(
        '/v1/lora-freq-plans/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * list lora_freq_plan_v1
     * List the lora frequency plans supported
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ArduinoLorafreqplansv1}
     */
    loraFreqPlanV1List() {
      return this.loraFreqPlanV1ListWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}