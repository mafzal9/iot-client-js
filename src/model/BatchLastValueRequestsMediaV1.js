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
import BatchQueryRawLastValueRequestMediaV1 from './BatchQueryRawLastValueRequestMediaV1';

/**
 * The BatchLastValueRequestsMediaV1 model module.
 * @module model/BatchLastValueRequestsMediaV1
 * @version 0.0.1
 */
class BatchLastValueRequestsMediaV1 {
    /**
     * Constructs a new <code>BatchLastValueRequestsMediaV1</code>.
     * @alias module:model/BatchLastValueRequestsMediaV1
     * @param requests {Array.<module:model/BatchQueryRawLastValueRequestMediaV1>} Requests
     */
    constructor(requests) { 
        
        BatchLastValueRequestsMediaV1.initialize(this, requests);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, requests) { 
        obj['requests'] = requests;
    }

    /**
     * Constructs a <code>BatchLastValueRequestsMediaV1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BatchLastValueRequestsMediaV1} obj Optional instance to populate.
     * @return {module:model/BatchLastValueRequestsMediaV1} The populated <code>BatchLastValueRequestsMediaV1</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BatchLastValueRequestsMediaV1();

            if (data.hasOwnProperty('requests')) {
                obj['requests'] = ApiClient.convertToType(data['requests'], [BatchQueryRawLastValueRequestMediaV1]);
            }
        }
        return obj;
    }


}

/**
 * Requests
 * @member {Array.<module:model/BatchQueryRawLastValueRequestMediaV1>} requests
 */
BatchLastValueRequestsMediaV1.prototype['requests'] = undefined;






export default BatchLastValueRequestsMediaV1;
