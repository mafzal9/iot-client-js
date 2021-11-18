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

import ApiClient from '../ApiClient';
import BatchQueryRawRequestMediaV1 from './BatchQueryRawRequestMediaV1';

/**
 * The BatchQueryRawRequestsMediaV1 model module.
 * @module model/BatchQueryRawRequestsMediaV1
 * @version 1.4.0
 */
class BatchQueryRawRequestsMediaV1 {
    /**
     * Constructs a new <code>BatchQueryRawRequestsMediaV1</code>.
     * @alias module:model/BatchQueryRawRequestsMediaV1
     * @param requests {Array.<module:model/BatchQueryRawRequestMediaV1>} Requests
     * @param respVersion {Number} Response version
     */
    constructor(requests, respVersion) { 
        
        BatchQueryRawRequestsMediaV1.initialize(this, requests, respVersion);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, requests, respVersion) { 
        obj['requests'] = requests;
        obj['resp_version'] = respVersion;
    }

    /**
     * Constructs a <code>BatchQueryRawRequestsMediaV1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BatchQueryRawRequestsMediaV1} obj Optional instance to populate.
     * @return {module:model/BatchQueryRawRequestsMediaV1} The populated <code>BatchQueryRawRequestsMediaV1</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BatchQueryRawRequestsMediaV1();

            if (data.hasOwnProperty('requests')) {
                obj['requests'] = ApiClient.convertToType(data['requests'], [BatchQueryRawRequestMediaV1]);
            }
            if (data.hasOwnProperty('resp_version')) {
                obj['resp_version'] = ApiClient.convertToType(data['resp_version'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Requests
 * @member {Array.<module:model/BatchQueryRawRequestMediaV1>} requests
 */
BatchQueryRawRequestsMediaV1.prototype['requests'] = undefined;

/**
 * Response version
 * @member {Number} resp_version
 */
BatchQueryRawRequestsMediaV1.prototype['resp_version'] = undefined;






export default BatchQueryRawRequestsMediaV1;

