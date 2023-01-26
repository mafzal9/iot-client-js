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
 * The Property model module.
 * @module model/Property
 * @version 1.4.4
 */
class Property {
    /**
     * Constructs a new <code>Property</code>.
     * PropertyPayload describes a property of a thing. No field is mandatory
     * @alias module:model/Property
     * @param name {String} The friendly name of the property
     * @param permission {module:model/Property.PermissionEnum} The permission of the property
     * @param type {module:model/Property.TypeEnum} The type of the property
     * @param updateStrategy {module:model/Property.UpdateStrategyEnum} The update strategy for the property value
     */
    constructor(name, permission, type, updateStrategy) { 
        
        Property.initialize(this, name, permission, type, updateStrategy);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, permission, type, updateStrategy) { 
        obj['name'] = name;
        obj['permission'] = permission;
        obj['type'] = type;
        obj['update_strategy'] = updateStrategy;
    }

    /**
     * Constructs a <code>Property</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Property} obj Optional instance to populate.
     * @return {module:model/Property} The populated <code>Property</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Property();

            if (data.hasOwnProperty('max_value')) {
                obj['max_value'] = ApiClient.convertToType(data['max_value'], 'Number');
            }
            if (data.hasOwnProperty('min_value')) {
                obj['min_value'] = ApiClient.convertToType(data['min_value'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('permission')) {
                obj['permission'] = ApiClient.convertToType(data['permission'], 'String');
            }
            if (data.hasOwnProperty('persist')) {
                obj['persist'] = ApiClient.convertToType(data['persist'], 'Boolean');
            }
            if (data.hasOwnProperty('tag')) {
                obj['tag'] = ApiClient.convertToType(data['tag'], 'Number');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('update_parameter')) {
                obj['update_parameter'] = ApiClient.convertToType(data['update_parameter'], 'Number');
            }
            if (data.hasOwnProperty('update_strategy')) {
                obj['update_strategy'] = ApiClient.convertToType(data['update_strategy'], 'String');
            }
            if (data.hasOwnProperty('variable_name')) {
                obj['variable_name'] = ApiClient.convertToType(data['variable_name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Maximum value of this property
 * @member {Number} max_value
 */
Property.prototype['max_value'] = undefined;

/**
 * Minimum value of this property
 * @member {Number} min_value
 */
Property.prototype['min_value'] = undefined;

/**
 * The friendly name of the property
 * @member {String} name
 */
Property.prototype['name'] = undefined;

/**
 * The permission of the property
 * @member {module:model/Property.PermissionEnum} permission
 */
Property.prototype['permission'] = undefined;

/**
 * If true, data will persist into a timeseries database
 * @member {Boolean} persist
 * @default true
 */
Property.prototype['persist'] = true;

/**
 * The integer id of the property
 * @member {Number} tag
 */
Property.prototype['tag'] = undefined;

/**
 * The type of the property
 * @member {module:model/Property.TypeEnum} type
 */
Property.prototype['type'] = undefined;

/**
 * The update frequency in seconds, or the amount of the property has to change in order to trigger an update
 * @member {Number} update_parameter
 */
Property.prototype['update_parameter'] = undefined;

/**
 * The update strategy for the property value
 * @member {module:model/Property.UpdateStrategyEnum} update_strategy
 */
Property.prototype['update_strategy'] = undefined;

/**
 * The  sketch variable name of the property
 * @member {String} variable_name
 */
Property.prototype['variable_name'] = undefined;





/**
 * Allowed values for the <code>permission</code> property.
 * @enum {String}
 * @readonly
 */
Property['PermissionEnum'] = {

    /**
     * value: "READ_ONLY"
     * @const
     */
    "ONLY": "READ_ONLY",

    /**
     * value: "READ_WRITE"
     * @const
     */
    "WRITE": "READ_WRITE"
};


/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
Property['TypeEnum'] = {

    /**
     * value: "ANALOG"
     * @const
     */
    "ANALOG": "ANALOG",

    /**
     * value: "CHARSTRING"
     * @const
     */
    "CHARSTRING": "CHARSTRING",

    /**
     * value: "FLOAT"
     * @const
     */
    "FLOAT": "FLOAT",

    /**
     * value: "INT"
     * @const
     */
    "INT": "INT",

    /**
     * value: "LENGHT_C"
     * @const
     */
    "LENGHT_C": "LENGHT_C",

    /**
     * value: "LENGHT_I"
     * @const
     */
    "LENGHT_I": "LENGHT_I",

    /**
     * value: "LENGHT_M"
     * @const
     */
    "LENGHT_M": "LENGHT_M",

    /**
     * value: "PERCENTAGE"
     * @const
     */
    "PERCENTAGE": "PERCENTAGE",

    /**
     * value: "STATUS"
     * @const
     */
    "STATUS": "STATUS",

    /**
     * value: "TEMPERATURE_C"
     * @const
     */
    "TEMPERATURE_C": "TEMPERATURE_C",

    /**
     * value: "TEMPERATURE_F"
     * @const
     */
    "TEMPERATURE_F": "TEMPERATURE_F",

    /**
     * value: "METER"
     * @const
     */
    "METER": "METER",

    /**
     * value: "KILOGRAM"
     * @const
     */
    "KILOGRAM": "KILOGRAM",

    /**
     * value: "GRAM"
     * @const
     */
    "GRAM": "GRAM",

    /**
     * value: "SECOND"
     * @const
     */
    "SECOND": "SECOND",

    /**
     * value: "AMPERE"
     * @const
     */
    "AMPERE": "AMPERE",

    /**
     * value: "KELVIN"
     * @const
     */
    "KELVIN": "KELVIN",

    /**
     * value: "CANDELA"
     * @const
     */
    "CANDELA": "CANDELA",

    /**
     * value: "MOLE"
     * @const
     */
    "MOLE": "MOLE",

    /**
     * value: "HERTZ"
     * @const
     */
    "HERTZ": "HERTZ",

    /**
     * value: "RADIAN"
     * @const
     */
    "RADIAN": "RADIAN",

    /**
     * value: "STERADIAN"
     * @const
     */
    "STERADIAN": "STERADIAN",

    /**
     * value: "NEWTON"
     * @const
     */
    "NEWTON": "NEWTON",

    /**
     * value: "PASCAL"
     * @const
     */
    "PASCAL": "PASCAL",

    /**
     * value: "JOULE"
     * @const
     */
    "JOULE": "JOULE",

    /**
     * value: "WATT"
     * @const
     */
    "WATT": "WATT",

    /**
     * value: "COULOMB"
     * @const
     */
    "COULOMB": "COULOMB",

    /**
     * value: "VOLT"
     * @const
     */
    "VOLT": "VOLT",

    /**
     * value: "FARAD"
     * @const
     */
    "FARAD": "FARAD",

    /**
     * value: "OHM"
     * @const
     */
    "OHM": "OHM",

    /**
     * value: "SIEMENS"
     * @const
     */
    "SIEMENS": "SIEMENS",

    /**
     * value: "WEBER"
     * @const
     */
    "WEBER": "WEBER",

    /**
     * value: "TESLA"
     * @const
     */
    "TESLA": "TESLA",

    /**
     * value: "HENRY"
     * @const
     */
    "HENRY": "HENRY",

    /**
     * value: "DEGREES_CELSIUS"
     * @const
     */
    "DEGREES_CELSIUS": "DEGREES_CELSIUS",

    /**
     * value: "LUMEN"
     * @const
     */
    "LUMEN": "LUMEN",

    /**
     * value: "LUX"
     * @const
     */
    "LUX": "LUX",

    /**
     * value: "BECQUEREL"
     * @const
     */
    "BECQUEREL": "BECQUEREL",

    /**
     * value: "GRAY"
     * @const
     */
    "GRAY": "GRAY",

    /**
     * value: "SIEVERT"
     * @const
     */
    "SIEVERT": "SIEVERT",

    /**
     * value: "KATAL"
     * @const
     */
    "KATAL": "KATAL",

    /**
     * value: "SQUARE_METER"
     * @const
     */
    "SQUARE_METER": "SQUARE_METER",

    /**
     * value: "CUBIC_METER"
     * @const
     */
    "CUBIC_METER": "CUBIC_METER",

    /**
     * value: "LITER"
     * @const
     */
    "LITER": "LITER",

    /**
     * value: "METER_PER_SECOND"
     * @const
     */
    "METER_PER_SECOND": "METER_PER_SECOND",

    /**
     * value: "METER_PER_SQUARE_SECOND"
     * @const
     */
    "METER_PER_SQUARE_SECOND": "METER_PER_SQUARE_SECOND",

    /**
     * value: "CUBIC_METER_PER_SECOND"
     * @const
     */
    "CUBIC_METER_PER_SECOND": "CUBIC_METER_PER_SECOND",

    /**
     * value: "LITER_PER_SECOND"
     * @const
     */
    "LITER_PER_SECOND": "LITER_PER_SECOND",

    /**
     * value: "WATT_PER_SQUARE_METER"
     * @const
     */
    "WATT_PER_SQUARE_METER": "WATT_PER_SQUARE_METER",

    /**
     * value: "CANDELA_PER_SQUARE_METER"
     * @const
     */
    "CANDELA_PER_SQUARE_METER": "CANDELA_PER_SQUARE_METER",

    /**
     * value: "BIT"
     * @const
     */
    "BIT": "BIT",

    /**
     * value: "BIT_PER_SECOND"
     * @const
     */
    "BIT_PER_SECOND": "BIT_PER_SECOND",

    /**
     * value: "DEGREES_LATITUDE"
     * @const
     */
    "DEGREES_LATITUDE": "DEGREES_LATITUDE",

    /**
     * value: "DEGREES_LONGITUDE"
     * @const
     */
    "DEGREES_LONGITUDE": "DEGREES_LONGITUDE",

    /**
     * value: "PH_VALUE"
     * @const
     */
    "PH_VALUE": "PH_VALUE",

    /**
     * value: "DECIBEL"
     * @const
     */
    "DECIBEL": "DECIBEL",

    /**
     * value: "DECIBEL_1W"
     * @const
     */
    "DECIBEL_1W": "DECIBEL_1W",

    /**
     * value: "BEL"
     * @const
     */
    "BEL": "BEL",

    /**
     * value: "COUNT"
     * @const
     */
    "COUNT": "COUNT",

    /**
     * value: "RATIO_DIV"
     * @const
     */
    "RATIO_DIV": "RATIO_DIV",

    /**
     * value: "RATIO_MOD"
     * @const
     */
    "RATIO_MOD": "RATIO_MOD",

    /**
     * value: "PERCENTAGE_RELATIVE_HUMIDITY"
     * @const
     */
    "PERCENTAGE_RELATIVE_HUMIDITY": "PERCENTAGE_RELATIVE_HUMIDITY",

    /**
     * value: "PERCENTAGE_BATTERY_LEVEL"
     * @const
     */
    "PERCENTAGE_BATTERY_LEVEL": "PERCENTAGE_BATTERY_LEVEL",

    /**
     * value: "SECONDS_BATTERY_LEVEL"
     * @const
     */
    "SECONDS_BATTERY_LEVEL": "SECONDS_BATTERY_LEVEL",

    /**
     * value: "EVENT_RATE_SECOND"
     * @const
     */
    "EVENT_RATE_SECOND": "EVENT_RATE_SECOND",

    /**
     * value: "EVENT_RATE_MINUTE"
     * @const
     */
    "EVENT_RATE_MINUTE": "EVENT_RATE_MINUTE",

    /**
     * value: "HEART_RATE"
     * @const
     */
    "HEART_RATE": "HEART_RATE",

    /**
     * value: "HEART_BEATS"
     * @const
     */
    "HEART_BEATS": "HEART_BEATS",

    /**
     * value: "SIEMENS_PER_METER"
     * @const
     */
    "SIEMENS_PER_METER": "SIEMENS_PER_METER",

    /**
     * value: "LOCATION"
     * @const
     */
    "LOCATION": "LOCATION",

    /**
     * value: "COLOR_HSB"
     * @const
     */
    "COLOR_HSB": "COLOR_HSB",

    /**
     * value: "COLOR_RGB"
     * @const
     */
    "COLOR_RGB": "COLOR_RGB",

    /**
     * value: "GENERIC_COMPLEX_PROPERTY"
     * @const
     */
    "GENERIC_COMPLEX_PROPERTY": "GENERIC_COMPLEX_PROPERTY",

    /**
     * value: "HOME_COLORED_LIGHT"
     * @const
     */
    "HOME_COLORED_LIGHT": "HOME_COLORED_LIGHT",

    /**
     * value: "HOME_DIMMED_LIGHT"
     * @const
     */
    "HOME_DIMMED_LIGHT": "HOME_DIMMED_LIGHT",

    /**
     * value: "HOME_LIGHT"
     * @const
     */
    "HOME_LIGHT": "HOME_LIGHT",

    /**
     * value: "HOME_CONTACT_SENSOR"
     * @const
     */
    "HOME_CONTACT_SENSOR": "HOME_CONTACT_SENSOR",

    /**
     * value: "HOME_MOTION_SENSOR"
     * @const
     */
    "HOME_MOTION_SENSOR": "HOME_MOTION_SENSOR",

    /**
     * value: "HOME_SMART_PLUG"
     * @const
     */
    "HOME_SMART_PLUG": "HOME_SMART_PLUG",

    /**
     * value: "HOME_TEMPERATURE"
     * @const
     */
    "HOME_TEMPERATURE": "HOME_TEMPERATURE",

    /**
     * value: "HOME_TEMPERATURE_C"
     * @const
     */
    "HOME_TEMPERATURE_C": "HOME_TEMPERATURE_C",

    /**
     * value: "HOME_TEMPERATURE_F"
     * @const
     */
    "HOME_TEMPERATURE_F": "HOME_TEMPERATURE_F",

    /**
     * value: "HOME_SWITCH"
     * @const
     */
    "HOME_SWITCH": "HOME_SWITCH",

    /**
     * value: "HOME_TELEVISION"
     * @const
     */
    "HOME_TELEVISION": "HOME_TELEVISION",

    /**
     * value: "ENERGY"
     * @const
     */
    "ENERGY": "ENERGY",

    /**
     * value: "FORCE"
     * @const
     */
    "FORCE": "FORCE",

    /**
     * value: "TEMPERATURE"
     * @const
     */
    "TEMPERATURE": "TEMPERATURE",

    /**
     * value: "POWER"
     * @const
     */
    "POWER": "POWER",

    /**
     * value: "ELECTRIC_CURRENT"
     * @const
     */
    "ELECTRIC_CURRENT": "ELECTRIC_CURRENT",

    /**
     * value: "ELECTRIC_POTENTIAL"
     * @const
     */
    "ELECTRIC_POTENTIAL": "ELECTRIC_POTENTIAL",

    /**
     * value: "ELECTRICAL_RESISTANCE"
     * @const
     */
    "ELECTRICAL_RESISTANCE": "ELECTRICAL_RESISTANCE",

    /**
     * value: "CAPACITANCE"
     * @const
     */
    "CAPACITANCE": "CAPACITANCE",

    /**
     * value: "TIME"
     * @const
     */
    "TIME": "TIME",

    /**
     * value: "FREQUENCY"
     * @const
     */
    "FREQUENCY": "FREQUENCY",

    /**
     * value: "DATA_RATE"
     * @const
     */
    "DATA_RATE": "DATA_RATE",

    /**
     * value: "ACCELERATION"
     * @const
     */
    "ACCELERATION": "ACCELERATION",

    /**
     * value: "AREA"
     * @const
     */
    "AREA": "AREA",

    /**
     * value: "LENGTH"
     * @const
     */
    "LENGTH": "LENGTH",

    /**
     * value: "VELOCITY"
     * @const
     */
    "VELOCITY": "VELOCITY",

    /**
     * value: "MASS"
     * @const
     */
    "MASS": "MASS",

    /**
     * value: "VOLUME"
     * @const
     */
    "VOLUME": "VOLUME",

    /**
     * value: "FLOW_RATE"
     * @const
     */
    "FLOW_RATE": "FLOW_RATE",

    /**
     * value: "ANGLE"
     * @const
     */
    "ANGLE": "ANGLE",

    /**
     * value: "ILLUMINANCE"
     * @const
     */
    "ILLUMINANCE": "ILLUMINANCE",

    /**
     * value: "LUMINOUS_FLUX"
     * @const
     */
    "LUMINOUS_FLUX": "LUMINOUS_FLUX",

    /**
     * value: "LUMINANCE"
     * @const
     */
    "LUMINANCE": "LUMINANCE",

    /**
     * value: "LUMINOUS_INTENSITY"
     * @const
     */
    "LUMINOUS_INTENSITY": "LUMINOUS_INTENSITY",

    /**
     * value: "LOGARITHMIC_QUANTITY"
     * @const
     */
    "LOGARITHMIC_QUANTITY": "LOGARITHMIC_QUANTITY",

    /**
     * value: "PRESSURE"
     * @const
     */
    "PRESSURE": "PRESSURE",

    /**
     * value: "INFORMATION_CONTENT"
     * @const
     */
    "INFORMATION_CONTENT": "INFORMATION_CONTENT",

    /**
     * value: "SCHEDULE"
     * @const
     */
    "SCHEDULE": "SCHEDULE"
};


/**
 * Allowed values for the <code>update_strategy</code> property.
 * @enum {String}
 * @readonly
 */
Property['UpdateStrategyEnum'] = {

    /**
     * value: "ON_CHANGE"
     * @const
     */
    "ON_CHANGE": "ON_CHANGE",

    /**
     * value: "TIMED"
     * @const
     */
    "TIMED": "TIMED"
};



export default Property;

