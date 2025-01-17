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


import ApiClient from './ApiClient';
import ArduinoCompressedv2 from './model/ArduinoCompressedv2';
import ArduinoDashboardowner from './model/ArduinoDashboardowner';
import ArduinoDashboardshare from './model/ArduinoDashboardshare';
import ArduinoDashboardv2 from './model/ArduinoDashboardv2';
import ArduinoDevicev2 from './model/ArduinoDevicev2';
import ArduinoDevicev2Cert from './model/ArduinoDevicev2Cert';
import ArduinoDevicev2EventProperties from './model/ArduinoDevicev2EventProperties';
import ArduinoDevicev2Pass from './model/ArduinoDevicev2Pass';
import ArduinoDevicev2SimpleProperties from './model/ArduinoDevicev2SimpleProperties';
import ArduinoDevicev2Webhook from './model/ArduinoDevicev2Webhook';
import ArduinoDevicev2properties from './model/ArduinoDevicev2properties';
import ArduinoDevicev2propertyvalue from './model/ArduinoDevicev2propertyvalue';
import ArduinoDevicev2propertyvalueValue from './model/ArduinoDevicev2propertyvalueValue';
import ArduinoDevicev2propertyvalueValueStatistics from './model/ArduinoDevicev2propertyvalueValueStatistics';
import ArduinoDevicev2propertyvalues from './model/ArduinoDevicev2propertyvalues';
import ArduinoDevicev2propertyvaluesLastEvaluatedKey from './model/ArduinoDevicev2propertyvaluesLastEvaluatedKey';
import ArduinoLinkedvariable from './model/ArduinoLinkedvariable';
import ArduinoLoradevicev1 from './model/ArduinoLoradevicev1';
import ArduinoLorafreqplansv1 from './model/ArduinoLorafreqplansv1';
import ArduinoLorafreqplanv1 from './model/ArduinoLorafreqplanv1';
import ArduinoProperty from './model/ArduinoProperty';
import ArduinoSeriesBatch from './model/ArduinoSeriesBatch';
import ArduinoSeriesRawBatch from './model/ArduinoSeriesRawBatch';
import ArduinoSeriesRawBatchLastvalue from './model/ArduinoSeriesRawBatchLastvalue';
import ArduinoSeriesRawLastValueResponse from './model/ArduinoSeriesRawLastValueResponse';
import ArduinoSeriesRawResponse from './model/ArduinoSeriesRawResponse';
import ArduinoSeriesResponse from './model/ArduinoSeriesResponse';
import ArduinoTags from './model/ArduinoTags';
import ArduinoThing from './model/ArduinoThing';
import ArduinoTimeseriesmedia from './model/ArduinoTimeseriesmedia';
import ArduinoTimezone from './model/ArduinoTimezone';
import ArduinoVariableslinks from './model/ArduinoVariableslinks';
import ArduinoWidgetv2 from './model/ArduinoWidgetv2';
import BatchLastValueRequestsMediaV1 from './model/BatchLastValueRequestsMediaV1';
import BatchQueryRawLastValueRequestMediaV1 from './model/BatchQueryRawLastValueRequestMediaV1';
import BatchQueryRawRequestMediaV1 from './model/BatchQueryRawRequestMediaV1';
import BatchQueryRawRequestsMediaV1 from './model/BatchQueryRawRequestsMediaV1';
import BatchQueryRawResponseSeriesMediaV1 from './model/BatchQueryRawResponseSeriesMediaV1';
import BatchQueryRequestMediaV1 from './model/BatchQueryRequestMediaV1';
import BatchQueryRequestsMediaV1 from './model/BatchQueryRequestsMediaV1';
import CheckDevicesV2PassPayload from './model/CheckDevicesV2PassPayload';
import CreateDevicesV2CertsPayload from './model/CreateDevicesV2CertsPayload';
import CreateDevicesV2Payload from './model/CreateDevicesV2Payload';
import CreateLoraDevicesV1Payload from './model/CreateLoraDevicesV1Payload';
import Dashboardshare from './model/Dashboardshare';
import Dashboardv2 from './model/Dashboardv2';
import Devicev2 from './model/Devicev2';
import Devicev2Cert from './model/Devicev2Cert';
import Devicev2Otabinaryurl from './model/Devicev2Otabinaryurl';
import Devicev2Pass from './model/Devicev2Pass';
import Error from './model/Error';
import HistoricDataRequest from './model/HistoricDataRequest';
import InlineObject from './model/InlineObject';
import PropertiesValue from './model/PropertiesValue';
import PropertiesValues from './model/PropertiesValues';
import Property from './model/Property';
import PropertyValue from './model/PropertyValue';
import Sharerequest from './model/Sharerequest';
import Tag from './model/Tag';
import ThingCreate from './model/ThingCreate';
import ThingSketch from './model/ThingSketch';
import ThingUpdate from './model/ThingUpdate';
import TimeseriesDataPoint from './model/TimeseriesDataPoint';
import UpdateSketch from './model/UpdateSketch';
import Widget from './model/Widget';
import Widgetlink from './model/Widgetlink';
import DashboardsV2Api from './api/DashboardsV2Api';
import DevicesV2Api from './api/DevicesV2Api';
import DevicesV2CertsApi from './api/DevicesV2CertsApi';
import DevicesV2OtaApi from './api/DevicesV2OtaApi';
import DevicesV2PassApi from './api/DevicesV2PassApi';
import DevicesV2TagsApi from './api/DevicesV2TagsApi';
import LoraDevicesV1Api from './api/LoraDevicesV1Api';
import LoraFreqPlanV1Api from './api/LoraFreqPlanV1Api';
import PropertiesV2Api from './api/PropertiesV2Api';
import SeriesV2Api from './api/SeriesV2Api';
import ThingsV2Api from './api/ThingsV2Api';
import ThingsV2TagsApi from './api/ThingsV2TagsApi';


/**
* Provides_a_set_of_endpoints_to_manage_Arduino_IoT_Cloud_Devices_Things_Properties_and_Timeseries__This_API_can_be_called_just_with_any_HTTP_Client_or_using_one_of_these_clients__Javascript_NPM_package_https__www_npmjs_com_package_arduino_arduino_iot_client__Python_PYPI_Package_https__pypi_org_project_arduino_iot_client___Golang_Module_https__github_com_arduino_iot_client_go.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var ArduinoIotClient = require('index'); // See note below*.
* var xxxSvc = new ArduinoIotClient.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new ArduinoIotClient.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new ArduinoIotClient.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new ArduinoIotClient.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.4.4
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The ArduinoCompressedv2 model constructor.
     * @property {module:model/ArduinoCompressedv2}
     */
    ArduinoCompressedv2,

    /**
     * The ArduinoDashboardowner model constructor.
     * @property {module:model/ArduinoDashboardowner}
     */
    ArduinoDashboardowner,

    /**
     * The ArduinoDashboardshare model constructor.
     * @property {module:model/ArduinoDashboardshare}
     */
    ArduinoDashboardshare,

    /**
     * The ArduinoDashboardv2 model constructor.
     * @property {module:model/ArduinoDashboardv2}
     */
    ArduinoDashboardv2,

    /**
     * The ArduinoDevicev2 model constructor.
     * @property {module:model/ArduinoDevicev2}
     */
    ArduinoDevicev2,

    /**
     * The ArduinoDevicev2Cert model constructor.
     * @property {module:model/ArduinoDevicev2Cert}
     */
    ArduinoDevicev2Cert,

    /**
     * The ArduinoDevicev2EventProperties model constructor.
     * @property {module:model/ArduinoDevicev2EventProperties}
     */
    ArduinoDevicev2EventProperties,

    /**
     * The ArduinoDevicev2Pass model constructor.
     * @property {module:model/ArduinoDevicev2Pass}
     */
    ArduinoDevicev2Pass,

    /**
     * The ArduinoDevicev2SimpleProperties model constructor.
     * @property {module:model/ArduinoDevicev2SimpleProperties}
     */
    ArduinoDevicev2SimpleProperties,

    /**
     * The ArduinoDevicev2Webhook model constructor.
     * @property {module:model/ArduinoDevicev2Webhook}
     */
    ArduinoDevicev2Webhook,

    /**
     * The ArduinoDevicev2properties model constructor.
     * @property {module:model/ArduinoDevicev2properties}
     */
    ArduinoDevicev2properties,

    /**
     * The ArduinoDevicev2propertyvalue model constructor.
     * @property {module:model/ArduinoDevicev2propertyvalue}
     */
    ArduinoDevicev2propertyvalue,

    /**
     * The ArduinoDevicev2propertyvalueValue model constructor.
     * @property {module:model/ArduinoDevicev2propertyvalueValue}
     */
    ArduinoDevicev2propertyvalueValue,

    /**
     * The ArduinoDevicev2propertyvalueValueStatistics model constructor.
     * @property {module:model/ArduinoDevicev2propertyvalueValueStatistics}
     */
    ArduinoDevicev2propertyvalueValueStatistics,

    /**
     * The ArduinoDevicev2propertyvalues model constructor.
     * @property {module:model/ArduinoDevicev2propertyvalues}
     */
    ArduinoDevicev2propertyvalues,

    /**
     * The ArduinoDevicev2propertyvaluesLastEvaluatedKey model constructor.
     * @property {module:model/ArduinoDevicev2propertyvaluesLastEvaluatedKey}
     */
    ArduinoDevicev2propertyvaluesLastEvaluatedKey,

    /**
     * The ArduinoLinkedvariable model constructor.
     * @property {module:model/ArduinoLinkedvariable}
     */
    ArduinoLinkedvariable,

    /**
     * The ArduinoLoradevicev1 model constructor.
     * @property {module:model/ArduinoLoradevicev1}
     */
    ArduinoLoradevicev1,

    /**
     * The ArduinoLorafreqplansv1 model constructor.
     * @property {module:model/ArduinoLorafreqplansv1}
     */
    ArduinoLorafreqplansv1,

    /**
     * The ArduinoLorafreqplanv1 model constructor.
     * @property {module:model/ArduinoLorafreqplanv1}
     */
    ArduinoLorafreqplanv1,

    /**
     * The ArduinoProperty model constructor.
     * @property {module:model/ArduinoProperty}
     */
    ArduinoProperty,

    /**
     * The ArduinoSeriesBatch model constructor.
     * @property {module:model/ArduinoSeriesBatch}
     */
    ArduinoSeriesBatch,

    /**
     * The ArduinoSeriesRawBatch model constructor.
     * @property {module:model/ArduinoSeriesRawBatch}
     */
    ArduinoSeriesRawBatch,

    /**
     * The ArduinoSeriesRawBatchLastvalue model constructor.
     * @property {module:model/ArduinoSeriesRawBatchLastvalue}
     */
    ArduinoSeriesRawBatchLastvalue,

    /**
     * The ArduinoSeriesRawLastValueResponse model constructor.
     * @property {module:model/ArduinoSeriesRawLastValueResponse}
     */
    ArduinoSeriesRawLastValueResponse,

    /**
     * The ArduinoSeriesRawResponse model constructor.
     * @property {module:model/ArduinoSeriesRawResponse}
     */
    ArduinoSeriesRawResponse,

    /**
     * The ArduinoSeriesResponse model constructor.
     * @property {module:model/ArduinoSeriesResponse}
     */
    ArduinoSeriesResponse,

    /**
     * The ArduinoTags model constructor.
     * @property {module:model/ArduinoTags}
     */
    ArduinoTags,

    /**
     * The ArduinoThing model constructor.
     * @property {module:model/ArduinoThing}
     */
    ArduinoThing,

    /**
     * The ArduinoTimeseriesmedia model constructor.
     * @property {module:model/ArduinoTimeseriesmedia}
     */
    ArduinoTimeseriesmedia,

    /**
     * The ArduinoTimezone model constructor.
     * @property {module:model/ArduinoTimezone}
     */
    ArduinoTimezone,

    /**
     * The ArduinoVariableslinks model constructor.
     * @property {module:model/ArduinoVariableslinks}
     */
    ArduinoVariableslinks,

    /**
     * The ArduinoWidgetv2 model constructor.
     * @property {module:model/ArduinoWidgetv2}
     */
    ArduinoWidgetv2,

    /**
     * The BatchLastValueRequestsMediaV1 model constructor.
     * @property {module:model/BatchLastValueRequestsMediaV1}
     */
    BatchLastValueRequestsMediaV1,

    /**
     * The BatchQueryRawLastValueRequestMediaV1 model constructor.
     * @property {module:model/BatchQueryRawLastValueRequestMediaV1}
     */
    BatchQueryRawLastValueRequestMediaV1,

    /**
     * The BatchQueryRawRequestMediaV1 model constructor.
     * @property {module:model/BatchQueryRawRequestMediaV1}
     */
    BatchQueryRawRequestMediaV1,

    /**
     * The BatchQueryRawRequestsMediaV1 model constructor.
     * @property {module:model/BatchQueryRawRequestsMediaV1}
     */
    BatchQueryRawRequestsMediaV1,

    /**
     * The BatchQueryRawResponseSeriesMediaV1 model constructor.
     * @property {module:model/BatchQueryRawResponseSeriesMediaV1}
     */
    BatchQueryRawResponseSeriesMediaV1,

    /**
     * The BatchQueryRequestMediaV1 model constructor.
     * @property {module:model/BatchQueryRequestMediaV1}
     */
    BatchQueryRequestMediaV1,

    /**
     * The BatchQueryRequestsMediaV1 model constructor.
     * @property {module:model/BatchQueryRequestsMediaV1}
     */
    BatchQueryRequestsMediaV1,

    /**
     * The CheckDevicesV2PassPayload model constructor.
     * @property {module:model/CheckDevicesV2PassPayload}
     */
    CheckDevicesV2PassPayload,

    /**
     * The CreateDevicesV2CertsPayload model constructor.
     * @property {module:model/CreateDevicesV2CertsPayload}
     */
    CreateDevicesV2CertsPayload,

    /**
     * The CreateDevicesV2Payload model constructor.
     * @property {module:model/CreateDevicesV2Payload}
     */
    CreateDevicesV2Payload,

    /**
     * The CreateLoraDevicesV1Payload model constructor.
     * @property {module:model/CreateLoraDevicesV1Payload}
     */
    CreateLoraDevicesV1Payload,

    /**
     * The Dashboardshare model constructor.
     * @property {module:model/Dashboardshare}
     */
    Dashboardshare,

    /**
     * The Dashboardv2 model constructor.
     * @property {module:model/Dashboardv2}
     */
    Dashboardv2,

    /**
     * The Devicev2 model constructor.
     * @property {module:model/Devicev2}
     */
    Devicev2,

    /**
     * The Devicev2Cert model constructor.
     * @property {module:model/Devicev2Cert}
     */
    Devicev2Cert,

    /**
     * The Devicev2Otabinaryurl model constructor.
     * @property {module:model/Devicev2Otabinaryurl}
     */
    Devicev2Otabinaryurl,

    /**
     * The Devicev2Pass model constructor.
     * @property {module:model/Devicev2Pass}
     */
    Devicev2Pass,

    /**
     * The Error model constructor.
     * @property {module:model/Error}
     */
    Error,

    /**
     * The HistoricDataRequest model constructor.
     * @property {module:model/HistoricDataRequest}
     */
    HistoricDataRequest,

    /**
     * The InlineObject model constructor.
     * @property {module:model/InlineObject}
     */
    InlineObject,

    /**
     * The PropertiesValue model constructor.
     * @property {module:model/PropertiesValue}
     */
    PropertiesValue,

    /**
     * The PropertiesValues model constructor.
     * @property {module:model/PropertiesValues}
     */
    PropertiesValues,

    /**
     * The Property model constructor.
     * @property {module:model/Property}
     */
    Property,

    /**
     * The PropertyValue model constructor.
     * @property {module:model/PropertyValue}
     */
    PropertyValue,

    /**
     * The Sharerequest model constructor.
     * @property {module:model/Sharerequest}
     */
    Sharerequest,

    /**
     * The Tag model constructor.
     * @property {module:model/Tag}
     */
    Tag,

    /**
     * The ThingCreate model constructor.
     * @property {module:model/ThingCreate}
     */
    ThingCreate,

    /**
     * The ThingSketch model constructor.
     * @property {module:model/ThingSketch}
     */
    ThingSketch,

    /**
     * The ThingUpdate model constructor.
     * @property {module:model/ThingUpdate}
     */
    ThingUpdate,

    /**
     * The TimeseriesDataPoint model constructor.
     * @property {module:model/TimeseriesDataPoint}
     */
    TimeseriesDataPoint,

    /**
     * The UpdateSketch model constructor.
     * @property {module:model/UpdateSketch}
     */
    UpdateSketch,

    /**
     * The Widget model constructor.
     * @property {module:model/Widget}
     */
    Widget,

    /**
     * The Widgetlink model constructor.
     * @property {module:model/Widgetlink}
     */
    Widgetlink,

    /**
    * The DashboardsV2Api service constructor.
    * @property {module:api/DashboardsV2Api}
    */
    DashboardsV2Api,

    /**
    * The DevicesV2Api service constructor.
    * @property {module:api/DevicesV2Api}
    */
    DevicesV2Api,

    /**
    * The DevicesV2CertsApi service constructor.
    * @property {module:api/DevicesV2CertsApi}
    */
    DevicesV2CertsApi,

    /**
    * The DevicesV2OtaApi service constructor.
    * @property {module:api/DevicesV2OtaApi}
    */
    DevicesV2OtaApi,

    /**
    * The DevicesV2PassApi service constructor.
    * @property {module:api/DevicesV2PassApi}
    */
    DevicesV2PassApi,

    /**
    * The DevicesV2TagsApi service constructor.
    * @property {module:api/DevicesV2TagsApi}
    */
    DevicesV2TagsApi,

    /**
    * The LoraDevicesV1Api service constructor.
    * @property {module:api/LoraDevicesV1Api}
    */
    LoraDevicesV1Api,

    /**
    * The LoraFreqPlanV1Api service constructor.
    * @property {module:api/LoraFreqPlanV1Api}
    */
    LoraFreqPlanV1Api,

    /**
    * The PropertiesV2Api service constructor.
    * @property {module:api/PropertiesV2Api}
    */
    PropertiesV2Api,

    /**
    * The SeriesV2Api service constructor.
    * @property {module:api/SeriesV2Api}
    */
    SeriesV2Api,

    /**
    * The ThingsV2Api service constructor.
    * @property {module:api/ThingsV2Api}
    */
    ThingsV2Api,

    /**
    * The ThingsV2TagsApi service constructor.
    * @property {module:api/ThingsV2TagsApi}
    */
    ThingsV2TagsApi
};
