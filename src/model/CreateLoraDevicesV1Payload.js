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
 * The CreateLoraDevicesV1Payload model module.
 * @module model/CreateLoraDevicesV1Payload
 * @version 1.4.0
 */
class CreateLoraDevicesV1Payload {
    /**
     * Constructs a new <code>CreateLoraDevicesV1Payload</code>.
     * @alias module:model/CreateLoraDevicesV1Payload
     * @param app {String} The app name
     * @param eui {String} The eui of the lora device
     * @param frequencyPlan {module:model/CreateLoraDevicesV1Payload.FrequencyPlanEnum} The frequency plan required by your country 
     * @param name {String} A common name for the device
     * @param type {module:model/CreateLoraDevicesV1Payload.TypeEnum} The type of device
     * @param userId {String} The id of the user. Can be the special string 'me'
     */
    constructor(app, eui, frequencyPlan, name, type, userId) { 
        
        CreateLoraDevicesV1Payload.initialize(this, app, eui, frequencyPlan, name, type, userId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, app, eui, frequencyPlan, name, type, userId) { 
        obj['app'] = app;
        obj['eui'] = eui;
        obj['frequency_plan'] = frequencyPlan;
        obj['name'] = name;
        obj['type'] = type;
        obj['user_id'] = userId;
    }

    /**
     * Constructs a <code>CreateLoraDevicesV1Payload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateLoraDevicesV1Payload} obj Optional instance to populate.
     * @return {module:model/CreateLoraDevicesV1Payload} The populated <code>CreateLoraDevicesV1Payload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateLoraDevicesV1Payload();

            if (data.hasOwnProperty('app')) {
                obj['app'] = ApiClient.convertToType(data['app'], 'String');
            }
            if (data.hasOwnProperty('app_eui')) {
                obj['app_eui'] = ApiClient.convertToType(data['app_eui'], 'String');
            }
            if (data.hasOwnProperty('app_key')) {
                obj['app_key'] = ApiClient.convertToType(data['app_key'], 'String');
            }
            if (data.hasOwnProperty('eui')) {
                obj['eui'] = ApiClient.convertToType(data['eui'], 'String');
            }
            if (data.hasOwnProperty('frequency_plan')) {
                obj['frequency_plan'] = ApiClient.convertToType(data['frequency_plan'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('serial')) {
                obj['serial'] = ApiClient.convertToType(data['serial'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('user_id')) {
                obj['user_id'] = ApiClient.convertToType(data['user_id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The app name
 * @member {String} app
 */
CreateLoraDevicesV1Payload.prototype['app'] = undefined;

/**
 * The app eui of the lora device
 * @member {String} app_eui
 */
CreateLoraDevicesV1Payload.prototype['app_eui'] = undefined;

/**
 * The app key of the lora device
 * @member {String} app_key
 */
CreateLoraDevicesV1Payload.prototype['app_key'] = undefined;

/**
 * The eui of the lora device
 * @member {String} eui
 */
CreateLoraDevicesV1Payload.prototype['eui'] = undefined;

/**
 * The frequency plan required by your country 
 * @member {module:model/CreateLoraDevicesV1Payload.FrequencyPlanEnum} frequency_plan
 */
CreateLoraDevicesV1Payload.prototype['frequency_plan'] = undefined;

/**
 * A common name for the device
 * @member {String} name
 */
CreateLoraDevicesV1Payload.prototype['name'] = undefined;

/**
 * The optional serial number
 * @member {String} serial
 */
CreateLoraDevicesV1Payload.prototype['serial'] = undefined;

/**
 * The type of device
 * @member {module:model/CreateLoraDevicesV1Payload.TypeEnum} type
 */
CreateLoraDevicesV1Payload.prototype['type'] = undefined;

/**
 * The id of the user. Can be the special string 'me'
 * @member {String} user_id
 */
CreateLoraDevicesV1Payload.prototype['user_id'] = undefined;





/**
 * Allowed values for the <code>frequency_plan</code> property.
 * @enum {String}
 * @readonly
 */
CreateLoraDevicesV1Payload['FrequencyPlanEnum'] = {

    /**
     * value: "EU_863_870_TTN"
     * @const
     */
    "EU_863_870_TTN": "EU_863_870_TTN",

    /**
     * value: "US_902_928_FSB_2"
     * @const
     */
    "US_902_928_FSB_2": "US_902_928_FSB_2",

    /**
     * value: "EU_433"
     * @const
     */
    "EU_433": "EU_433",

    /**
     * value: "AU_915_928_FSB_2"
     * @const
     */
    "AU_915_928_FSB_2": "AU_915_928_FSB_2",

    /**
     * value: "CN_470_510_FSB_11"
     * @const
     */
    "CN_470_510_FSB_11": "CN_470_510_FSB_11",

    /**
     * value: "AS_920_923"
     * @const
     */
    "AS_920_923": "AS_920_923",

    /**
     * value: "AS_920_923_TTN_AU"
     * @const
     */
    "AS_920_923_TTN_AU": "AS_920_923_TTN_AU",

    /**
     * value: "AS_923_925"
     * @const
     */
    "AS_923_925": "AS_923_925",

    /**
     * value: "AS_923_925_TTN_AU"
     * @const
     */
    "AS_923_925_TTN_AU": "AS_923_925_TTN_AU",

    /**
     * value: "KR_920_923_TTN"
     * @const
     */
    "KR_920_923_TTN": "KR_920_923_TTN",

    /**
     * value: "IN_865_867"
     * @const
     */
    "IN_865_867": "IN_865_867"
};


/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
CreateLoraDevicesV1Payload['TypeEnum'] = {

    /**
     * value: "lora-device"
     * @const
     */
    "lora-device": "lora-device",

    /**
     * value: "mkrwan1300"
     * @const
     */
    "mkrwan1300": "mkrwan1300",

    /**
     * value: "mkrwan1310"
     * @const
     */
    "mkrwan1310": "mkrwan1310"
};



export default CreateLoraDevicesV1Payload;

