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
 * The list of workflows.
 */
class WorkflowListResult extends Array {
  /**
   * Create a WorkflowListResult.
   * @property {string} [nextLink] The URL to get the next set of results.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of WorkflowListResult
   *
   * @returns {object} metadata of WorkflowListResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'WorkflowListResult',
      type: {
        name: 'Composite',
        className: 'WorkflowListResult',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'WorkflowElementType',
                  type: {
                    name: 'Composite',
                    className: 'Workflow'
                  }
              }
            }
          },
          nextLink: {
            required: false,
            serializedName: 'nextLink',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = WorkflowListResult;
