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
 * Defines the parameters for the URL file extension condition.
 *
 */
class UrlFileExtensionConditionParameters {
  /**
   * Create a UrlFileExtensionConditionParameters.
   * @member {array} extensions A list of extensions for the condition of the
   * delivery rule.
   */
  constructor() {
  }

  /**
   * Defines the metadata of UrlFileExtensionConditionParameters
   *
   * @returns {object} metadata of UrlFileExtensionConditionParameters
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'UrlFileExtensionConditionParameters',
      type: {
        name: 'Composite',
        className: 'UrlFileExtensionConditionParameters',
        modelProperties: {
          odatatype: {
            required: true,
            isConstant: true,
            serializedName: '@odata\\.type',
            defaultValue: 'Microsoft.Azure.Cdn.Models.DeliveryRuleUrlFileExtensionConditionParameters',
            type: {
              name: 'String'
            }
          },
          extensions: {
            required: true,
            serializedName: 'extensions',
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
          }
        }
      }
    };
  }
}

module.exports = UrlFileExtensionConditionParameters;