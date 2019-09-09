/**
 * Iot API
 * Collection of all public API endpoints.
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
 * The ArduinoDevicev2propertyvaluesLastEvaluatedKey model module.
 * @module model/ArduinoDevicev2propertyvaluesLastEvaluatedKey
 * @version 0.0.1
 */
class ArduinoDevicev2propertyvaluesLastEvaluatedKey {
    /**
     * Constructs a new <code>ArduinoDevicev2propertyvaluesLastEvaluatedKey</code>.
     * @alias module:model/ArduinoDevicev2propertyvaluesLastEvaluatedKey
     */
    constructor() { 
        
        ArduinoDevicev2propertyvaluesLastEvaluatedKey.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ArduinoDevicev2propertyvaluesLastEvaluatedKey</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ArduinoDevicev2propertyvaluesLastEvaluatedKey} obj Optional instance to populate.
     * @return {module:model/ArduinoDevicev2propertyvaluesLastEvaluatedKey} The populated <code>ArduinoDevicev2propertyvaluesLastEvaluatedKey</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ArduinoDevicev2propertyvaluesLastEvaluatedKey();

            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Date} created_at
 */
ArduinoDevicev2propertyvaluesLastEvaluatedKey.prototype['created_at'] = undefined;

/**
 * @member {String} id
 */
ArduinoDevicev2propertyvaluesLastEvaluatedKey.prototype['id'] = undefined;

/**
 * @member {String} name
 */
ArduinoDevicev2propertyvaluesLastEvaluatedKey.prototype['name'] = undefined;






export default ArduinoDevicev2propertyvaluesLastEvaluatedKey;

