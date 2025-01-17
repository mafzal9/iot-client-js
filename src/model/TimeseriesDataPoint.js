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

/**
 * The TimeseriesDataPoint model module.
 * @module model/TimeseriesDataPoint
 * @version 1.4.4
 */
class TimeseriesDataPoint {
    /**
     * Constructs a new <code>TimeseriesDataPoint</code>.
     * @alias module:model/TimeseriesDataPoint
     * @param time {Date} Binning timestamp
     * @param value {Number} Avg value on the binning interval
     */
    constructor(time, value) { 
        
        TimeseriesDataPoint.initialize(this, time, value);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, time, value) { 
        obj['time'] = time;
        obj['value'] = value;
    }

    /**
     * Constructs a <code>TimeseriesDataPoint</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TimeseriesDataPoint} obj Optional instance to populate.
     * @return {module:model/TimeseriesDataPoint} The populated <code>TimeseriesDataPoint</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TimeseriesDataPoint();

            if (data.hasOwnProperty('time')) {
                obj['time'] = ApiClient.convertToType(data['time'], 'Date');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Binning timestamp
 * @member {Date} time
 */
TimeseriesDataPoint.prototype['time'] = undefined;

/**
 * Avg value on the binning interval
 * @member {Number} value
 */
TimeseriesDataPoint.prototype['value'] = undefined;






export default TimeseriesDataPoint;

