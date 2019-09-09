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
import ArduinoProperty from './ArduinoProperty';

/**
 * The ArduinoThing model module.
 * @module model/ArduinoThing
 * @version 0.0.1
 */
class ArduinoThing {
    /**
     * Constructs a new <code>ArduinoThing</code>.
     * ArduinoThing media type (default view)
     * @alias module:model/ArduinoThing
     * @param href {String} The api reference of this thing
     * @param id {String} The id of the thing
     * @param name {String} The friendly name of the thing
     * @param userId {String} The user id of the owner
     */
    constructor(href, id, name, userId) { 
        
        ArduinoThing.initialize(this, href, id, name, userId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, href, id, name, userId) { 
        obj['href'] = href;
        obj['id'] = id;
        obj['name'] = name;
        obj['user_id'] = userId;
    }

    /**
     * Constructs a <code>ArduinoThing</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ArduinoThing} obj Optional instance to populate.
     * @return {module:model/ArduinoThing} The populated <code>ArduinoThing</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ArduinoThing();

            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('deleted_at')) {
                obj['deleted_at'] = ApiClient.convertToType(data['deleted_at'], 'Date');
            }
            if (data.hasOwnProperty('device_id')) {
                obj['device_id'] = ApiClient.convertToType(data['device_id'], 'String');
            }
            if (data.hasOwnProperty('href')) {
                obj['href'] = ApiClient.convertToType(data['href'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('properties')) {
                obj['properties'] = ApiClient.convertToType(data['properties'], [ArduinoProperty]);
            }
            if (data.hasOwnProperty('properties_count')) {
                obj['properties_count'] = ApiClient.convertToType(data['properties_count'], 'Number');
            }
            if (data.hasOwnProperty('sketch_id')) {
                obj['sketch_id'] = ApiClient.convertToType(data['sketch_id'], 'String');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('user_id')) {
                obj['user_id'] = ApiClient.convertToType(data['user_id'], 'String');
            }
            if (data.hasOwnProperty('webhook_active')) {
                obj['webhook_active'] = ApiClient.convertToType(data['webhook_active'], 'Boolean');
            }
            if (data.hasOwnProperty('webhook_uri')) {
                obj['webhook_uri'] = ApiClient.convertToType(data['webhook_uri'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Creation date of the thing
 * @member {Date} created_at
 */
ArduinoThing.prototype['created_at'] = undefined;

/**
 * Delete date of the thing
 * @member {Date} deleted_at
 */
ArduinoThing.prototype['deleted_at'] = undefined;

/**
 * The arn of the device
 * @member {String} device_id
 */
ArduinoThing.prototype['device_id'] = undefined;

/**
 * The api reference of this thing
 * @member {String} href
 */
ArduinoThing.prototype['href'] = undefined;

/**
 * The id of the thing
 * @member {String} id
 */
ArduinoThing.prototype['id'] = undefined;

/**
 * The friendly name of the thing
 * @member {String} name
 */
ArduinoThing.prototype['name'] = undefined;

/**
 * ArduinoPropertyCollection is the media type for an array of ArduinoProperty (default view)
 * @member {Array.<module:model/ArduinoProperty>} properties
 */
ArduinoThing.prototype['properties'] = undefined;

/**
 * The number of properties of the thing
 * @member {Number} properties_count
 */
ArduinoThing.prototype['properties_count'] = undefined;

/**
 * The id of the attached sketch
 * @member {String} sketch_id
 */
ArduinoThing.prototype['sketch_id'] = undefined;

/**
 * Update date of the thing
 * @member {Date} updated_at
 */
ArduinoThing.prototype['updated_at'] = undefined;

/**
 * The user id of the owner
 * @member {String} user_id
 */
ArduinoThing.prototype['user_id'] = undefined;

/**
 * Webhook uri
 * @member {Boolean} webhook_active
 */
ArduinoThing.prototype['webhook_active'] = undefined;

/**
 * Webhook uri
 * @member {String} webhook_uri
 */
ArduinoThing.prototype['webhook_uri'] = undefined;






export default ArduinoThing;

