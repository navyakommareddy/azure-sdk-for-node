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
 * Api details.
 *
 * @extends models['Resource']
 */
class ApiContract extends models['Resource'] {
  /**
   * Create a ApiContract.
   * @property {string} [description] Description of the API. May include HTML
   * formatting tags.
   * @property {object} [authenticationSettings] Collection of authentication
   * settings included into this API.
   * @property {object} [authenticationSettings.oAuth2] OAuth2 Authentication
   * settings
   * @property {string} [authenticationSettings.oAuth2.authorizationServerId]
   * OAuth authorization server identifier.
   * @property {string} [authenticationSettings.oAuth2.scope] operations scope.
   * @property {object} [authenticationSettings.openid] OpenID Connect
   * Authentication Settings
   * @property {string} [authenticationSettings.openid.openidProviderId] OAuth
   * authorization server identifier.
   * @property {array}
   * [authenticationSettings.openid.bearerTokenSendingMethods] How to send
   * token to the server.
   * @property {boolean} [authenticationSettings.subscriptionKeyRequired]
   * Specifies whether subscription key is required during call to this API,
   * true - API is included into closed products only, false - API is included
   * into open products alone, null - there is a mix of products.
   * @property {object} [subscriptionKeyParameterNames] Protocols over which
   * API is made available.
   * @property {string} [subscriptionKeyParameterNames.header] Subscription key
   * header name.
   * @property {string} [subscriptionKeyParameterNames.query] Subscription key
   * query string parameter name.
   * @property {string} [apiType] Type of API. Possible values include: 'http',
   * 'soap'
   * @property {string} [apiRevision] Describes the Revision of the Api. If no
   * value is provided, default revision 1 is created
   * @property {string} [apiVersion] Indicates the Version identifier of the
   * API if the API is versioned
   * @property {boolean} [isCurrent] Indicates if API revision is current api
   * revision.
   * @property {boolean} [isOnline] Indicates if API revision is accessible via
   * the gateway.
   * @property {string} [apiRevisionDescription] Description of the Api
   * Revision.
   * @property {string} [apiVersionDescription] Description of the Api Version.
   * @property {string} [apiVersionSetId] A resource identifier for the related
   * ApiVersionSet.
   * @property {boolean} [subscriptionRequired] Specifies whether an API or
   * Product subscription is required for accessing the API.
   * @property {string} [sourceApiId] API identifier of the source API.
   * @property {string} [displayName] API name. Must be 1 to 300 characters
   * long.
   * @property {string} [serviceUrl] Absolute URL of the backend service
   * implementing this API. Cannot be more than 2000 characters long.
   * @property {string} path Relative URL uniquely identifying this API and all
   * of its resource paths within the API Management service instance. It is
   * appended to the API endpoint base URL specified during the service
   * instance creation to form a public URL for this API.
   * @property {array} [protocols] Describes on which protocols the operations
   * in this API can be invoked.
   * @property {object} [apiVersionSet] Version set details
   * @property {string} [apiVersionSet.id] Identifier for existing API Version
   * Set. Omit this value to create a new Version Set.
   * @property {string} [apiVersionSet.name] The display Name of the API
   * Version Set.
   * @property {string} [apiVersionSet.description] Description of API Version
   * Set.
   * @property {string} [apiVersionSet.versioningScheme] An value that
   * determines where the API Version identifer will be located in a HTTP
   * request. Possible values include: 'Segment', 'Query', 'Header'
   * @property {string} [apiVersionSet.versionQueryName] Name of query
   * parameter that indicates the API Version if versioningScheme is set to
   * `query`.
   * @property {string} [apiVersionSet.versionHeaderName] Name of HTTP header
   * parameter that indicates the API Version if versioningScheme is set to
   * `header`.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ApiContract
   *
   * @returns {object} metadata of ApiContract
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ApiContract',
      type: {
        name: 'Composite',
        className: 'ApiContract',
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
          description: {
            required: false,
            serializedName: 'properties.description',
            type: {
              name: 'String'
            }
          },
          authenticationSettings: {
            required: false,
            serializedName: 'properties.authenticationSettings',
            type: {
              name: 'Composite',
              className: 'AuthenticationSettingsContract'
            }
          },
          subscriptionKeyParameterNames: {
            required: false,
            serializedName: 'properties.subscriptionKeyParameterNames',
            type: {
              name: 'Composite',
              className: 'SubscriptionKeyParameterNamesContract'
            }
          },
          apiType: {
            required: false,
            serializedName: 'properties.type',
            type: {
              name: 'String'
            }
          },
          apiRevision: {
            required: false,
            serializedName: 'properties.apiRevision',
            constraints: {
              MaxLength: 100,
              MinLength: 1
            },
            type: {
              name: 'String'
            }
          },
          apiVersion: {
            required: false,
            serializedName: 'properties.apiVersion',
            constraints: {
              MaxLength: 100
            },
            type: {
              name: 'String'
            }
          },
          isCurrent: {
            required: false,
            serializedName: 'properties.isCurrent',
            type: {
              name: 'Boolean'
            }
          },
          isOnline: {
            required: false,
            readOnly: true,
            serializedName: 'properties.isOnline',
            type: {
              name: 'Boolean'
            }
          },
          apiRevisionDescription: {
            required: false,
            serializedName: 'properties.apiRevisionDescription',
            constraints: {
              MaxLength: 256
            },
            type: {
              name: 'String'
            }
          },
          apiVersionDescription: {
            required: false,
            serializedName: 'properties.apiVersionDescription',
            constraints: {
              MaxLength: 256
            },
            type: {
              name: 'String'
            }
          },
          apiVersionSetId: {
            required: false,
            serializedName: 'properties.apiVersionSetId',
            type: {
              name: 'String'
            }
          },
          subscriptionRequired: {
            required: false,
            serializedName: 'properties.subscriptionRequired',
            type: {
              name: 'Boolean'
            }
          },
          sourceApiId: {
            required: false,
            serializedName: 'properties.sourceApiId',
            type: {
              name: 'String'
            }
          },
          displayName: {
            required: false,
            serializedName: 'properties.displayName',
            constraints: {
              MaxLength: 300,
              MinLength: 1
            },
            type: {
              name: 'String'
            }
          },
          serviceUrl: {
            required: false,
            serializedName: 'properties.serviceUrl',
            constraints: {
              MaxLength: 2000,
              MinLength: 0
            },
            type: {
              name: 'String'
            }
          },
          path: {
            required: true,
            serializedName: 'properties.path',
            constraints: {
              MaxLength: 400,
              MinLength: 0
            },
            type: {
              name: 'String'
            }
          },
          protocols: {
            required: false,
            serializedName: 'properties.protocols',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ProtocolElementType',
                  type: {
                    name: 'Enum',
                    allowedValues: [ 'http', 'https' ]
                  }
              }
            }
          },
          apiVersionSet: {
            required: false,
            serializedName: 'properties.apiVersionSet',
            type: {
              name: 'Composite',
              className: 'ApiVersionSetContractDetails'
            }
          }
        }
      }
    };
  }
}

module.exports = ApiContract;
