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
import ArduinoDevicev2propertyvalueValueStatistics from './ArduinoDevicev2propertyvalueValueStatistics';

/**
 * The ArduinoDevicev2propertyvalueValue model module.
 * @module model/ArduinoDevicev2propertyvalueValue
 * @version 1.3.9
 */
class ArduinoDevicev2propertyvalueValue {
    /**
     * Constructs a new <code>ArduinoDevicev2propertyvalueValue</code>.
     * @alias module:model/ArduinoDevicev2propertyvalueValue
     */
    constructor() { 
        
        ArduinoDevicev2propertyvalueValue.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ArduinoDevicev2propertyvalueValue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ArduinoDevicev2propertyvalueValue} obj Optional instance to populate.
     * @return {module:model/ArduinoDevicev2propertyvalueValue} The populated <code>ArduinoDevicev2propertyvalueValue</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ArduinoDevicev2propertyvalueValue();

            if (data.hasOwnProperty('payload')) {
                obj['payload'] = ApiClient.convertToType(data['payload'], 'String');
            }
            if (data.hasOwnProperty('seqno')) {
                obj['seqno'] = ApiClient.convertToType(data['seqno'], 'Number');
            }
            if (data.hasOwnProperty('statistics')) {
                obj['statistics'] = ArduinoDevicev2propertyvalueValueStatistics.constructFromObject(data['statistics']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} payload
 */
ArduinoDevicev2propertyvalueValue.prototype['payload'] = undefined;

/**
 * @member {Number} seqno
 */
ArduinoDevicev2propertyvalueValue.prototype['seqno'] = undefined;

/**
 * @member {module:model/ArduinoDevicev2propertyvalueValueStatistics} statistics
 */
ArduinoDevicev2propertyvalueValue.prototype['statistics'] = undefined;






export default ArduinoDevicev2propertyvalueValue;

