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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.IotApi);
  }
}(this, function(expect, IotApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new IotApi.CreateThingsV2Payload();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('CreateThingsV2Payload', function() {
    it('should create an instance of CreateThingsV2Payload', function() {
      // uncomment below and update the code to test CreateThingsV2Payload
      //var instane = new IotApi.CreateThingsV2Payload();
      //expect(instance).to.be.a(IotApi.CreateThingsV2Payload);
    });

    it('should have the property deviceId (base name: "device_id")', function() {
      // uncomment below and update the code to test the property deviceId
      //var instane = new IotApi.CreateThingsV2Payload();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new IotApi.CreateThingsV2Payload();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new IotApi.CreateThingsV2Payload();
      //expect(instance).to.be();
    });

    it('should have the property webhookActive (base name: "webhook_active")', function() {
      // uncomment below and update the code to test the property webhookActive
      //var instane = new IotApi.CreateThingsV2Payload();
      //expect(instance).to.be();
    });

    it('should have the property webhookUri (base name: "webhook_uri")', function() {
      // uncomment below and update the code to test the property webhookUri
      //var instane = new IotApi.CreateThingsV2Payload();
      //expect(instance).to.be();
    });

  });

}));
