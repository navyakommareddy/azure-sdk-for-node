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

const models = require('./index');

/**
 * Represents a user who has access to one or more shares on the Data Box
 * Edge/Gateway device.
 *
 * @extends models['ARMBaseModel']
 */
class User extends models['ARMBaseModel'] {
  /**
   * Create a User.
   * @property {object} [encryptedPassword] The password details.
   * @property {string} [encryptedPassword.value] The value of the secret.
   * @property {string} [encryptedPassword.encryptionCertThumbprint] Thumbprint
   * certificate used to encrypt \"Value\". If the value is unencrypted, it
   * will be null.
   * @property {string} [encryptedPassword.encryptionAlgorithm] The algorithm
   * used to encrypt "Value". Possible values include: 'None', 'AES256',
   * 'RSAES_PKCS1_v_1_5'
   * @property {array} [shareAccessRights] List of shares that the user has
   * rights on. This field should not be specified during user creation.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of User
   *
   * @returns {object} metadata of User
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'User',
      type: {
        name: 'Composite',
        className: 'User',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          encryptedPassword: {
            required: false,
            serializedName: 'properties.encryptedPassword',
            type: {
              name: 'Composite',
              className: 'AsymmetricEncryptedSecret'
            }
          },
          shareAccessRights: {
            required: false,
            serializedName: 'properties.shareAccessRights',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ShareAccessRightElementType',
                  type: {
                    name: 'Composite',
                    className: 'ShareAccessRight'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = User;