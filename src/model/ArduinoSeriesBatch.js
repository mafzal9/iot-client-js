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
import ArduinoSeriesResponse from './ArduinoSeriesResponse';

/**
 * The ArduinoSeriesBatch model module.
 * @module model/ArduinoSeriesBatch
 * @version 1.4.4
 */
class ArduinoSeriesBatch {
    /**
     * Constructs a new <code>ArduinoSeriesBatch</code>.
     * ArduinoSeriesBatch media type (default view)
     * @alias module:model/ArduinoSeriesBatch
     * @param respVersion {Number} Response version
     * @param responses {Array.<module:model/ArduinoSeriesResponse>} Responses of the request
     */
    constructor(respVersion, responses) { 
        
        ArduinoSeriesBatch.initialize(this, respVersion, responses);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, respVersion, responses) { 
        obj['resp_version'] = respVersion;
        obj['responses'] = responses;
    }

    /**
     * Constructs a <code>ArduinoSeriesBatch</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ArduinoSeriesBatch} obj Optional instance to populate.
     * @return {module:model/ArduinoSeriesBatch} The populated <code>ArduinoSeriesBatch</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ArduinoSeriesBatch();

            if (data.hasOwnProperty('resp_version')) {
                obj['resp_version'] = ApiClient.convertToType(data['resp_version'], 'Number');
            }
            if (data.hasOwnProperty('responses')) {
                obj['responses'] = ApiClient.convertToType(data['responses'], [ArduinoSeriesResponse]);
            }
        }
        return obj;
    }


}

/**
 * Response version
 * @member {Number} resp_version
 */
ArduinoSeriesBatch.prototype['resp_version'] = undefined;

/**
 * Responses of the request
 * @member {Array.<module:model/ArduinoSeriesResponse>} responses
 */
ArduinoSeriesBatch.prototype['responses'] = undefined;






export default ArduinoSeriesBatch;

