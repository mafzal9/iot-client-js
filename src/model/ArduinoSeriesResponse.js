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
import BatchQueryResponseSeriesMediaV1 from './BatchQueryResponseSeriesMediaV1';

/**
 * The ArduinoSeriesResponse model module.
 * @module model/ArduinoSeriesResponse
 * @version 0.0.1
 */
class ArduinoSeriesResponse {
    /**
     * Constructs a new <code>ArduinoSeriesResponse</code>.
     * ArduinoSeriesResponse media type (default view)
     * @alias module:model/ArduinoSeriesResponse
     * @param fromDate {Date} From date
     * @param interval {Number} Resolution in seconds
     * @param query {String} Query of for the data
     * @param respVersion {Number} Response version
     * @param series {Array.<module:model/BatchQueryResponseSeriesMediaV1>} Series information
     * @param status {String} Status of the response
     * @param times {Array.<Date>} Timestamp in RFC3339
     * @param toDate {Date} To date
     * @param values {Array.<Array.<Number>>} Values in Float
     */
    constructor(fromDate, interval, query, respVersion, series, status, times, toDate, values) { 
        
        ArduinoSeriesResponse.initialize(this, fromDate, interval, query, respVersion, series, status, times, toDate, values);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fromDate, interval, query, respVersion, series, status, times, toDate, values) { 
        obj['from_date'] = fromDate;
        obj['interval'] = interval;
        obj['query'] = query;
        obj['resp_version'] = respVersion;
        obj['series'] = series;
        obj['status'] = status;
        obj['times'] = times;
        obj['to_date'] = toDate;
        obj['values'] = values;
    }

    /**
     * Constructs a <code>ArduinoSeriesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ArduinoSeriesResponse} obj Optional instance to populate.
     * @return {module:model/ArduinoSeriesResponse} The populated <code>ArduinoSeriesResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ArduinoSeriesResponse();

            if (data.hasOwnProperty('from_date')) {
                obj['from_date'] = ApiClient.convertToType(data['from_date'], 'Date');
            }
            if (data.hasOwnProperty('interval')) {
                obj['interval'] = ApiClient.convertToType(data['interval'], 'Number');
            }
            if (data.hasOwnProperty('query')) {
                obj['query'] = ApiClient.convertToType(data['query'], 'String');
            }
            if (data.hasOwnProperty('resp_version')) {
                obj['resp_version'] = ApiClient.convertToType(data['resp_version'], 'Number');
            }
            if (data.hasOwnProperty('series')) {
                obj['series'] = ApiClient.convertToType(data['series'], [BatchQueryResponseSeriesMediaV1]);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('times')) {
                obj['times'] = ApiClient.convertToType(data['times'], ['Date']);
            }
            if (data.hasOwnProperty('to_date')) {
                obj['to_date'] = ApiClient.convertToType(data['to_date'], 'Date');
            }
            if (data.hasOwnProperty('values')) {
                obj['values'] = ApiClient.convertToType(data['values'], [['Number']]);
            }
        }
        return obj;
    }


}

/**
 * From date
 * @member {Date} from_date
 */
ArduinoSeriesResponse.prototype['from_date'] = undefined;

/**
 * Resolution in seconds
 * @member {Number} interval
 */
ArduinoSeriesResponse.prototype['interval'] = undefined;

/**
 * Query of for the data
 * @member {String} query
 */
ArduinoSeriesResponse.prototype['query'] = undefined;

/**
 * Response version
 * @member {Number} resp_version
 */
ArduinoSeriesResponse.prototype['resp_version'] = undefined;

/**
 * Series information
 * @member {Array.<module:model/BatchQueryResponseSeriesMediaV1>} series
 */
ArduinoSeriesResponse.prototype['series'] = undefined;

/**
 * Status of the response
 * @member {String} status
 */
ArduinoSeriesResponse.prototype['status'] = undefined;

/**
 * Timestamp in RFC3339
 * @member {Array.<Date>} times
 */
ArduinoSeriesResponse.prototype['times'] = undefined;

/**
 * To date
 * @member {Date} to_date
 */
ArduinoSeriesResponse.prototype['to_date'] = undefined;

/**
 * Values in Float
 * @member {Array.<Array.<Number>>} values
 */
ArduinoSeriesResponse.prototype['values'] = undefined;






export default ArduinoSeriesResponse;

