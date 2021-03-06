/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Describes a reference to a service endpoint.
 *
 */
class EndpointRef {
  /**
   * Create a EndpointRef.
   * @property {string} [name] Name of the endpoint.
   */
  constructor() {
  }

  /**
   * Defines the metadata of EndpointRef
   *
   * @returns {object} metadata of EndpointRef
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'EndpointRef',
      type: {
        name: 'Composite',
        className: 'EndpointRef',
        modelProperties: {
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = EndpointRef;
