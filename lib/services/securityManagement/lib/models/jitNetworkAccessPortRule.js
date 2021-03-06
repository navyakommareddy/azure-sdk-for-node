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
 * Class representing a JitNetworkAccessPortRule.
 */
class JitNetworkAccessPortRule {
  /**
   * Create a JitNetworkAccessPortRule.
   * @member {number} number
   * @member {string} protocol Possible values include: 'TCP', 'UDP', 'All'
   * @member {string} [allowedSourceAddressPrefix] Mutually exclusive with the
   * "allowedSourceAddressPrefixes" parameter. Should be an IP address or CIDR,
   * for example "192.168.0.3" or "192.168.0.0/16".
   * @member {array} [allowedSourceAddressPrefixes] Mutually exclusive with the
   * "allowedSourceAddressPrefix" parameter.
   * @member {string} maxRequestAccessDuration Maximum duration requests can be
   * made for. In ISO 8601 duration format. Minimum 5 minutes, maximum 1 day
   */
  constructor() {
  }

  /**
   * Defines the metadata of JitNetworkAccessPortRule
   *
   * @returns {object} metadata of JitNetworkAccessPortRule
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'JitNetworkAccessPortRule',
      type: {
        name: 'Composite',
        className: 'JitNetworkAccessPortRule',
        modelProperties: {
          number: {
            required: true,
            serializedName: 'number',
            type: {
              name: 'Number'
            }
          },
          protocol: {
            required: true,
            serializedName: 'protocol',
            type: {
              name: 'String'
            }
          },
          allowedSourceAddressPrefix: {
            required: false,
            serializedName: 'allowedSourceAddressPrefix',
            type: {
              name: 'String'
            }
          },
          allowedSourceAddressPrefixes: {
            required: false,
            serializedName: 'allowedSourceAddressPrefixes',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          maxRequestAccessDuration: {
            required: true,
            serializedName: 'maxRequestAccessDuration',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = JitNetworkAccessPortRule;
