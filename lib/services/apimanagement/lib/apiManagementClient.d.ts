/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { ServiceClientCredentials } from 'ms-rest';
import { AzureServiceClient, AzureServiceClientOptions } from 'ms-rest-azure';
import * as models from "./models";
import * as operations from "./operations";

export default class ApiManagementClient extends AzureServiceClient {
  /**
   * Initializes a new instance of the ApiManagementClient class.
   * @constructor
   *
   * @class
   * @param {credentials} credentials - Credentials needed for the client to connect to Azure.
   *
   * @param {string} subscriptionId - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
   *
   * @param {string} [baseUri] - The base URI of the service.
   *
   * @param {object} [options] - The parameter options
   *
   * @param {Array} [options.filters] - Filters to be added to the request pipeline
   *
   * @param {object} [options.requestOptions] - Options for the underlying request object
   * {@link https://github.com/request/request#requestoptions-callback Options doc}
   *
   * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
   *
   * @param {string} [options.acceptLanguage] - Gets or sets the preferred language for the response.
   *
   * @param {number} [options.longRunningOperationRetryTimeout] - Gets or sets the retry timeout in seconds for Long Running Operations. Default value is 30.
   *
   * @param {boolean} [options.generateClientRequestId] - When set to true a unique x-ms-client-request-id value is generated and included in each request. Default is true.
   *
   */
  constructor(credentials: ServiceClientCredentials, subscriptionId: string, baseUri?: string, options?: AzureServiceClientOptions);

  credentials: ServiceClientCredentials;

  apiVersion: string;

  subscriptionId: string;

  acceptLanguage: string;

  longRunningOperationRetryTimeout: number;

  generateClientRequestId: boolean;

  // Operation groups
  policy: operations.Policy;
  policySnippets: operations.PolicySnippets;
  regions: operations.Regions;
  api: operations.Api;
  apiRevisions: operations.ApiRevisions;
  apiRelease: operations.ApiRelease;
  apiOperation: operations.ApiOperation;
  apiOperationPolicy: operations.ApiOperationPolicy;
  apiProduct: operations.ApiProduct;
  apiPolicy: operations.ApiPolicy;
  apiSchema: operations.ApiSchema;
  apiDiagnostic: operations.ApiDiagnostic;
  apiDiagnosticLogger: operations.ApiDiagnosticLogger;
  authorizationServer: operations.AuthorizationServer;
  backend: operations.Backend;
  certificate: operations.Certificate;
  apiManagementOperations: operations.ApiManagementOperations;
  apiManagementService: operations.ApiManagementService;
  diagnostic: operations.Diagnostic;
  diagnosticLogger: operations.DiagnosticLogger;
  emailTemplate: operations.EmailTemplate;
  group: operations.Group;
  groupUser: operations.GroupUser;
  identityProvider: operations.IdentityProvider;
  logger: operations.Logger;
  notification: operations.Notification;
  notificationRecipientUser: operations.NotificationRecipientUser;
  notificationRecipientEmail: operations.NotificationRecipientEmail;
  networkStatus: operations.NetworkStatus;
  openIdConnectProvider: operations.OpenIdConnectProvider;
  signInSettings: operations.SignInSettings;
  signUpSettings: operations.SignUpSettings;
  delegationSettings: operations.DelegationSettings;
  product: operations.Product;
  productApi: operations.ProductApi;
  productGroup: operations.ProductGroup;
  productSubscriptions: operations.ProductSubscriptions;
  productPolicy: operations.ProductPolicy;
  property: operations.Property;
  quotaByCounterKeys: operations.QuotaByCounterKeys;
  quotaByPeriodKeys: operations.QuotaByPeriodKeys;
  reports: operations.Reports;
  subscription: operations.Subscription;
  tagResource: operations.TagResource;
  tag: operations.Tag;
  tagDescription: operations.TagDescription;
  operationOperations: operations.OperationOperations;
  tenantAccess: operations.TenantAccess;
  tenantAccessGit: operations.TenantAccessGit;
  tenantConfiguration: operations.TenantConfiguration;
  user: operations.User;
  userGroup: operations.UserGroup;
  userSubscription: operations.UserSubscription;
  userIdentities: operations.UserIdentities;
  apiVersionSet: operations.ApiVersionSet;
  apiExport: operations.ApiExport;
}

export { ApiManagementClient, models as ApiManagementModels };
