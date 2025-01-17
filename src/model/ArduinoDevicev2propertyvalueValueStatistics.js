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
 * The ArduinoDevicev2propertyvalueValueStatistics model module.
 * @module model/ArduinoDevicev2propertyvalueValueStatistics
 * @version 1.4.4
 */
class ArduinoDevicev2propertyvalueValueStatistics {
    /**
     * Constructs a new <code>ArduinoDevicev2propertyvalueValueStatistics</code>.
     * @alias module:model/ArduinoDevicev2propertyvalueValueStatistics
     */
    constructor() { 
        
        ArduinoDevicev2propertyvalueValueStatistics.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ArduinoDevicev2propertyvalueValueStatistics</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ArduinoDevicev2propertyvalueValueStatistics} obj Optional instance to populate.
     * @return {module:model/ArduinoDevicev2propertyvalueValueStatistics} The populated <code>ArduinoDevicev2propertyvalueValueStatistics</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ArduinoDevicev2propertyvalueValueStatistics();

            if (data.hasOwnProperty('adr')) {
                obj['adr'] = ApiClient.convertToType(data['adr'], 'Number');
            }
            if (data.hasOwnProperty('channel')) {
                obj['channel'] = ApiClient.convertToType(data['channel'], 'Number');
            }
            if (data.hasOwnProperty('duplicate')) {
                obj['duplicate'] = ApiClient.convertToType(data['duplicate'], 'Number');
            }
            if (data.hasOwnProperty('freq')) {
                obj['freq'] = ApiClient.convertToType(data['freq'], 'Number');
            }
            if (data.hasOwnProperty('modBW')) {
                obj['modBW'] = ApiClient.convertToType(data['modBW'], 'Number');
            }
            if (data.hasOwnProperty('rssi')) {
                obj['rssi'] = ApiClient.convertToType(data['rssi'], 'Number');
            }
            if (data.hasOwnProperty('seqno')) {
                obj['seqno'] = ApiClient.convertToType(data['seqno'], 'Number');
            }
            if (data.hasOwnProperty('sf')) {
                obj['sf'] = ApiClient.convertToType(data['sf'], 'Number');
            }
            if (data.hasOwnProperty('snr')) {
                obj['snr'] = ApiClient.convertToType(data['snr'], 'Number');
            }
            if (data.hasOwnProperty('time')) {
                obj['time'] = ApiClient.convertToType(data['time'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} adr
 */
ArduinoDevicev2propertyvalueValueStatistics.prototype['adr'] = undefined;

/**
 * @member {Number} channel
 */
ArduinoDevicev2propertyvalueValueStatistics.prototype['channel'] = undefined;

/**
 * @member {Number} duplicate
 */
ArduinoDevicev2propertyvalueValueStatistics.prototype['duplicate'] = undefined;

/**
 * @member {Number} freq
 */
ArduinoDevicev2propertyvalueValueStatistics.prototype['freq'] = undefined;

/**
 * @member {Number} modBW
 */
ArduinoDevicev2propertyvalueValueStatistics.prototype['modBW'] = undefined;

/**
 * @member {Number} rssi
 */
ArduinoDevicev2propertyvalueValueStatistics.prototype['rssi'] = undefined;

/**
 * @member {Number} seqno
 */
ArduinoDevicev2propertyvalueValueStatistics.prototype['seqno'] = undefined;

/**
 * @member {Number} sf
 */
ArduinoDevicev2propertyvalueValueStatistics.prototype['sf'] = undefined;

/**
 * @member {Number} snr
 */
ArduinoDevicev2propertyvalueValueStatistics.prototype['snr'] = undefined;

/**
 * @member {Number} time
 */
ArduinoDevicev2propertyvalueValueStatistics.prototype['time'] = undefined;






export default ArduinoDevicev2propertyvalueValueStatistics;

