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
 * The access keys for the given database account.
 *
 */
class DatabaseAccountListKeysResult {
  /**
   * Create a DatabaseAccountListKeysResult.
   * @member {string} [primaryMasterKey] Base 64 encoded value of the primary
   * read-write key.
   * @member {string} [secondaryMasterKey] Base 64 encoded value of the
   * secondary read-write key.
   * @member {string} [primaryReadonlyMasterKey] Base 64 encoded value of the
   * primary read-only key.
   * @member {string} [secondaryReadonlyMasterKey] Base 64 encoded value of the
   * secondary read-only key.
   */
  constructor() {
  }

  /**
   * Defines the metadata of DatabaseAccountListKeysResult
   *
   * @returns {object} metadata of DatabaseAccountListKeysResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DatabaseAccountListKeysResult',
      type: {
        name: 'Composite',
        className: 'DatabaseAccountListKeysResult',
        modelProperties: {
          primaryMasterKey: {
            required: false,
            readOnly: true,
            serializedName: 'primaryMasterKey',
            type: {
              name: 'String'
            }
          },
          secondaryMasterKey: {
            required: false,
            readOnly: true,
            serializedName: 'secondaryMasterKey',
            type: {
              name: 'String'
            }
          },
          primaryReadonlyMasterKey: {
            required: false,
            readOnly: true,
            serializedName: 'properties.primaryReadonlyMasterKey',
            type: {
              name: 'String'
            }
          },
          secondaryReadonlyMasterKey: {
            required: false,
            readOnly: true,
            serializedName: 'properties.secondaryReadonlyMasterKey',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = DatabaseAccountListKeysResult;
