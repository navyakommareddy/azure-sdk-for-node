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
 * Software update configuration machine run job navigation properties.
 *
 */
class JobNavigation {
  /**
   * Create a JobNavigation.
   * @member {string} [id] Id of the job associated with the software update
   * configuration run
   */
  constructor() {
  }

  /**
   * Defines the metadata of JobNavigation
   *
   * @returns {object} metadata of JobNavigation
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'jobNavigation',
      type: {
        name: 'Composite',
        className: 'JobNavigation',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = JobNavigation;
