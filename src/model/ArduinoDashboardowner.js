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
 * The ArduinoDashboardowner model module.
 * @module model/ArduinoDashboardowner
 * @version 1.4.4
 */
class ArduinoDashboardowner {
    /**
     * Constructs a new <code>ArduinoDashboardowner</code>.
     * ArduinoDashboardowner media type (default view)
     * @alias module:model/ArduinoDashboardowner
     * @param userId {String} The userID of the user who created the dashboard
     */
    constructor(userId) { 
        
        ArduinoDashboardowner.initialize(this, userId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, userId) { 
        obj['user_id'] = userId;
    }

    /**
     * Constructs a <code>ArduinoDashboardowner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ArduinoDashboardowner} obj Optional instance to populate.
     * @return {module:model/ArduinoDashboardowner} The populated <code>ArduinoDashboardowner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ArduinoDashboardowner();

            if (data.hasOwnProperty('user_id')) {
                obj['user_id'] = ApiClient.convertToType(data['user_id'], 'String');
            }
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The userID of the user who created the dashboard
 * @member {String} user_id
 */
ArduinoDashboardowner.prototype['user_id'] = undefined;

/**
 * The username of the user who created the dashboard
 * @member {String} username
 */
ArduinoDashboardowner.prototype['username'] = undefined;






export default ArduinoDashboardowner;

