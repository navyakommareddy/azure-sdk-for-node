/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { BaseResource } from 'ms-rest-azure';
import { CloudError } from 'ms-rest-azure';
import * as moment from 'moment';

export { BaseResource } from 'ms-rest-azure';
export { CloudError } from 'ms-rest-azure';


/**
 * @class
 * Initializes a new instance of the ClusterDefinition class.
 * @constructor
 * The cluster definition.
 *
 * @member {string} [blueprint] The link to the blueprint.
 * @member {string} [kind] The type of cluster.
 * @member {object} [componentVersion] The versions of different services in
 * the cluster.
 * @member {object} [configurations] The cluster configurations.
 */
export interface ClusterDefinition {
  blueprint?: string;
  kind?: string;
  componentVersion?: { [propertyName: string]: string };
  configurations?: any;
}

/**
 * @class
 * Initializes a new instance of the SecurityProfile class.
 * @constructor
 * The security profile which contains Ssh public key for the HDInsight
 * cluster.
 *
 * @member {string} [directoryType] The directory type. Possible values
 * include: 'ActiveDirectory'
 * @member {string} [domain] The organization's active directory domain.
 * @member {string} [organizationalUnitDN] The organizational unit within the
 * Active Directory to place the cluster and service accounts.
 * @member {array} [ldapsUrls] The LDAPS protocol URLs to communicate with the
 * Active Directory.
 * @member {string} [domainUsername] The domain user account that will have
 * admin privileges on the cluster.
 * @member {string} [domainUserPassword] The domain admin password.
 * @member {array} [clusterUsersGroupDNs] Optional. The Distinguished Names for
 * cluster user groups
 */
export interface SecurityProfile {
  directoryType?: string;
  domain?: string;
  organizationalUnitDN?: string;
  ldapsUrls?: string[];
  domainUsername?: string;
  domainUserPassword?: string;
  clusterUsersGroupDNs?: string[];
}

/**
 * @class
 * Initializes a new instance of the HardwareProfile class.
 * @constructor
 * The hardware profile.
 *
 * @member {string} [vmSize] The size of the VM
 */
export interface HardwareProfile {
  vmSize?: string;
}

/**
 * @class
 * Initializes a new instance of the VirtualNetworkProfile class.
 * @constructor
 * The virtual network properties.
 *
 * @member {string} [id] The ID of the virtual network.
 * @member {string} [subnet] The name of the subnet.
 */
export interface VirtualNetworkProfile {
  id?: string;
  subnet?: string;
}

/**
 * @class
 * Initializes a new instance of the DataDisksGroups class.
 * @constructor
 * The data disks groups for the role.
 *
 * @member {number} [disksPerNode] The number of disks per node.
 * @member {string} [storageAccountType] ReadOnly. The storage account type. Do
 * not set this value.
 * @member {number} [diskSizeGB] ReadOnly. The DiskSize in GB. Do not set this
 * value.
 */
export interface DataDisksGroups {
  disksPerNode?: number;
  readonly storageAccountType?: string;
  readonly diskSizeGB?: number;
}

/**
 * @class
 * Initializes a new instance of the SshPublicKey class.
 * @constructor
 * The SSH public key for the cluster nodes.
 *
 * @member {string} [certificateData] The certificate for SSH.
 */
export interface SshPublicKey {
  certificateData?: string;
}

/**
 * @class
 * Initializes a new instance of the SshProfile class.
 * @constructor
 * The list of SSH public keys.
 *
 * @member {array} [publicKeys] The list of SSH public keys.
 */
export interface SshProfile {
  publicKeys?: SshPublicKey[];
}

/**
 * @class
 * Initializes a new instance of the LinuxOperatingSystemProfile class.
 * @constructor
 * The ssh username, password, and ssh public key.
 *
 * @member {string} [username] The username.
 * @member {string} [password] The password.
 * @member {object} [sshProfile] The SSH profile.
 * @member {array} [sshProfile.publicKeys] The list of SSH public keys.
 */
export interface LinuxOperatingSystemProfile {
  username?: string;
  password?: string;
  sshProfile?: SshProfile;
}

/**
 * @class
 * Initializes a new instance of the OsProfile class.
 * @constructor
 * The Linux operation systems profile.
 *
 * @member {object} [linuxOperatingSystemProfile] The Linux OS profile.
 * @member {string} [linuxOperatingSystemProfile.username] The username.
 * @member {string} [linuxOperatingSystemProfile.password] The password.
 * @member {object} [linuxOperatingSystemProfile.sshProfile] The SSH profile.
 * @member {array} [linuxOperatingSystemProfile.sshProfile.publicKeys] The list
 * of SSH public keys.
 */
export interface OsProfile {
  linuxOperatingSystemProfile?: LinuxOperatingSystemProfile;
}

/**
 * @class
 * Initializes a new instance of the ScriptAction class.
 * @constructor
 * Describes a script action on role on the cluster.
 *
 * @member {string} name The name of the script action.
 * @member {string} uri The URI to the script.
 * @member {string} parameters The parameters for the script provided.
 */
export interface ScriptAction {
  name: string;
  uri: string;
  parameters: string;
}

/**
 * @class
 * Initializes a new instance of the Role class.
 * @constructor
 * Describes a role on the cluster.
 *
 * @member {string} [name] The name of the role.
 * @member {number} [minInstanceCount] The minimum instance count of the
 * cluster.
 * @member {number} [targetInstanceCount] The instance count of the cluster.
 * @member {object} [hardwareProfile] The hardware profile.
 * @member {string} [hardwareProfile.vmSize] The size of the VM
 * @member {object} [osProfile] The operating system profile.
 * @member {object} [osProfile.linuxOperatingSystemProfile] The Linux OS
 * profile.
 * @member {string} [osProfile.linuxOperatingSystemProfile.username] The
 * username.
 * @member {string} [osProfile.linuxOperatingSystemProfile.password] The
 * password.
 * @member {object} [osProfile.linuxOperatingSystemProfile.sshProfile] The SSH
 * profile.
 * @member {array}
 * [osProfile.linuxOperatingSystemProfile.sshProfile.publicKeys] The list of
 * SSH public keys.
 * @member {object} [virtualNetworkProfile] The virtual network profile.
 * @member {string} [virtualNetworkProfile.id] The ID of the virtual network.
 * @member {string} [virtualNetworkProfile.subnet] The name of the subnet.
 * @member {array} [dataDisksGroups] The data disks groups for the role.
 * @member {array} [scriptActions] The list of script actions on the role.
 */
export interface Role {
  name?: string;
  minInstanceCount?: number;
  targetInstanceCount?: number;
  hardwareProfile?: HardwareProfile;
  osProfile?: OsProfile;
  virtualNetworkProfile?: VirtualNetworkProfile;
  dataDisksGroups?: DataDisksGroups[];
  scriptActions?: ScriptAction[];
}

/**
 * @class
 * Initializes a new instance of the ComputeProfile class.
 * @constructor
 * Describes the compute profile.
 *
 * @member {array} [roles] The list of roles in the cluster.
 */
export interface ComputeProfile {
  roles?: Role[];
}

/**
 * @class
 * Initializes a new instance of the StorageAccount class.
 * @constructor
 * The storage Account.
 *
 * @member {string} [name] The name of the storage account.
 * @member {boolean} [isDefault] Whether or not the storage account is the
 * default storage account.
 * @member {string} [container] The container in the storage account, only to
 * be specified for WASB storage accounts.
 * @member {string} [fileSystem] The filesystem, only to be specified for Azure
 * Data Lake Storage type Gen 2.
 * @member {string} [key] The storage account access key.
 */
export interface StorageAccount {
  name?: string;
  isDefault?: boolean;
  container?: string;
  fileSystem?: string;
  key?: string;
}

/**
 * @class
 * Initializes a new instance of the StorageProfile class.
 * @constructor
 * The storage profile.
 *
 * @member {array} [storageaccounts] The list of storage accounts in the
 * cluster.
 */
export interface StorageProfile {
  storageaccounts?: StorageAccount[];
}

/**
 * @class
 * Initializes a new instance of the ClusterCreateProperties class.
 * @constructor
 * The cluster create parameters.
 *
 * @member {string} [clusterVersion] The version of the cluster.
 * @member {string} [osType] The type of operating system. Possible values
 * include: 'Windows', 'Linux'
 * @member {string} [tier] The cluster tier. Possible values include:
 * 'Standard', 'Premium'
 * @member {object} [clusterDefinition] The cluster definition.
 * @member {string} [clusterDefinition.blueprint] The link to the blueprint.
 * @member {string} [clusterDefinition.kind] The type of cluster.
 * @member {object} [clusterDefinition.componentVersion] The versions of
 * different services in the cluster.
 * @member {object} [clusterDefinition.configurations] The cluster
 * configurations.
 * @member {object} [securityProfile] The security profile.
 * @member {string} [securityProfile.directoryType] The directory type.
 * Possible values include: 'ActiveDirectory'
 * @member {string} [securityProfile.domain] The organization's active
 * directory domain.
 * @member {string} [securityProfile.organizationalUnitDN] The organizational
 * unit within the Active Directory to place the cluster and service accounts.
 * @member {array} [securityProfile.ldapsUrls] The LDAPS protocol URLs to
 * communicate with the Active Directory.
 * @member {string} [securityProfile.domainUsername] The domain user account
 * that will have admin privileges on the cluster.
 * @member {string} [securityProfile.domainUserPassword] The domain admin
 * password.
 * @member {array} [securityProfile.clusterUsersGroupDNs] Optional. The
 * Distinguished Names for cluster user groups
 * @member {object} [computeProfile] The compute profile.
 * @member {array} [computeProfile.roles] The list of roles in the cluster.
 * @member {object} [storageProfile] The storage profile.
 * @member {array} [storageProfile.storageaccounts] The list of storage
 * accounts in the cluster.
 */
export interface ClusterCreateProperties {
  clusterVersion?: string;
  osType?: string;
  tier?: string;
  clusterDefinition?: ClusterDefinition;
  securityProfile?: SecurityProfile;
  computeProfile?: ComputeProfile;
  storageProfile?: StorageProfile;
}

/**
 * @class
 * Initializes a new instance of the ClusterCreateParametersExtended class.
 * @constructor
 * The CreateCluster request parameters.
 *
 * @member {string} [location] The location of the cluster.
 * @member {object} [tags] The resource tags.
 * @member {object} [properties] The cluster create parameters.
 * @member {string} [properties.clusterVersion] The version of the cluster.
 * @member {string} [properties.osType] The type of operating system. Possible
 * values include: 'Windows', 'Linux'
 * @member {string} [properties.tier] The cluster tier. Possible values
 * include: 'Standard', 'Premium'
 * @member {object} [properties.clusterDefinition] The cluster definition.
 * @member {string} [properties.clusterDefinition.blueprint] The link to the
 * blueprint.
 * @member {string} [properties.clusterDefinition.kind] The type of cluster.
 * @member {object} [properties.clusterDefinition.componentVersion] The
 * versions of different services in the cluster.
 * @member {object} [properties.clusterDefinition.configurations] The cluster
 * configurations.
 * @member {object} [properties.securityProfile] The security profile.
 * @member {string} [properties.securityProfile.directoryType] The directory
 * type. Possible values include: 'ActiveDirectory'
 * @member {string} [properties.securityProfile.domain] The organization's
 * active directory domain.
 * @member {string} [properties.securityProfile.organizationalUnitDN] The
 * organizational unit within the Active Directory to place the cluster and
 * service accounts.
 * @member {array} [properties.securityProfile.ldapsUrls] The LDAPS protocol
 * URLs to communicate with the Active Directory.
 * @member {string} [properties.securityProfile.domainUsername] The domain user
 * account that will have admin privileges on the cluster.
 * @member {string} [properties.securityProfile.domainUserPassword] The domain
 * admin password.
 * @member {array} [properties.securityProfile.clusterUsersGroupDNs] Optional.
 * The Distinguished Names for cluster user groups
 * @member {object} [properties.computeProfile] The compute profile.
 * @member {array} [properties.computeProfile.roles] The list of roles in the
 * cluster.
 * @member {object} [properties.storageProfile] The storage profile.
 * @member {array} [properties.storageProfile.storageaccounts] The list of
 * storage accounts in the cluster.
 */
export interface ClusterCreateParametersExtended {
  location?: string;
  tags?: { [propertyName: string]: string };
  properties?: ClusterCreateProperties;
}

/**
 * @class
 * Initializes a new instance of the ClusterPatchParameters class.
 * @constructor
 * The PatchCluster request parameters
 *
 * @member {object} [tags] The resource tags.
 */
export interface ClusterPatchParameters {
  tags?: { [propertyName: string]: string };
}

/**
 * @class
 * Initializes a new instance of the QuotaInfo class.
 * @constructor
 * The quota properties for the cluster.
 *
 * @member {number} [coresUsed] The cores used by the cluster.
 */
export interface QuotaInfo {
  coresUsed?: number;
}

/**
 * @class
 * Initializes a new instance of the Errors class.
 * @constructor
 * The error message associated with the cluster creation.
 *
 * @member {string} [code] The error code.
 * @member {string} [message] The error message.
 */
export interface Errors {
  code?: string;
  message?: string;
}

/**
 * @class
 * Initializes a new instance of the ConnectivityEndpoint class.
 * @constructor
 * The connectivity properties
 *
 * @member {string} [name] The name of the endpoint.
 * @member {string} [protocol] The protocol of the endpoint.
 * @member {string} [location] The location of the endpoint.
 * @member {number} [port] The port to connect to.
 */
export interface ConnectivityEndpoint {
  name?: string;
  protocol?: string;
  location?: string;
  port?: number;
}

/**
 * @class
 * Initializes a new instance of the ClusterGetProperties class.
 * @constructor
 * The properties of cluster.
 *
 * @member {string} [clusterVersion] The version of the cluster.
 * @member {string} [osType] The type of operating system. Possible values
 * include: 'Windows', 'Linux'
 * @member {string} [tier] The cluster tier. Possible values include:
 * 'Standard', 'Premium'
 * @member {object} clusterDefinition The cluster definition.
 * @member {string} [clusterDefinition.blueprint] The link to the blueprint.
 * @member {string} [clusterDefinition.kind] The type of cluster.
 * @member {object} [clusterDefinition.componentVersion] The versions of
 * different services in the cluster.
 * @member {object} [clusterDefinition.configurations] The cluster
 * configurations.
 * @member {object} [securityProfile] The security profile.
 * @member {string} [securityProfile.directoryType] The directory type.
 * Possible values include: 'ActiveDirectory'
 * @member {string} [securityProfile.domain] The organization's active
 * directory domain.
 * @member {string} [securityProfile.organizationalUnitDN] The organizational
 * unit within the Active Directory to place the cluster and service accounts.
 * @member {array} [securityProfile.ldapsUrls] The LDAPS protocol URLs to
 * communicate with the Active Directory.
 * @member {string} [securityProfile.domainUsername] The domain user account
 * that will have admin privileges on the cluster.
 * @member {string} [securityProfile.domainUserPassword] The domain admin
 * password.
 * @member {array} [securityProfile.clusterUsersGroupDNs] Optional. The
 * Distinguished Names for cluster user groups
 * @member {object} [computeProfile] The compute profile.
 * @member {array} [computeProfile.roles] The list of roles in the cluster.
 * @member {string} [provisioningState] The provisioning state, which only
 * appears in the response. Possible values include: 'InProgress', 'Failed',
 * 'Succeeded', 'Canceled', 'Deleting'
 * @member {string} [createdDate] The date on which the cluster was created.
 * @member {string} [clusterState] The state of the cluster.
 * @member {object} [quotaInfo] The quota information.
 * @member {number} [quotaInfo.coresUsed] The cores used by the cluster.
 * @member {array} [errors] The list of errors.
 * @member {array} [connectivityEndpoints] The list of connectivity endpoints.
 */
export interface ClusterGetProperties {
  clusterVersion?: string;
  osType?: string;
  tier?: string;
  clusterDefinition: ClusterDefinition;
  securityProfile?: SecurityProfile;
  computeProfile?: ComputeProfile;
  provisioningState?: string;
  createdDate?: string;
  clusterState?: string;
  quotaInfo?: QuotaInfo;
  errors?: Errors[];
  connectivityEndpoints?: ConnectivityEndpoint[];
}

/**
 * @class
 * Initializes a new instance of the Resource class.
 * @constructor
 * The core properties of ARM resources
 *
 * @member {string} [id] Fully qualified resource Id for the resource.
 * @member {string} [name] The name of the resource
 * @member {string} [type] The type of the resource.
 */
export interface Resource extends BaseResource {
  readonly id?: string;
  readonly name?: string;
  readonly type?: string;
}

/**
 * @class
 * Initializes a new instance of the TrackedResource class.
 * @constructor
 * The resource model definition for a ARM tracked top level resource
 *
 * @member {string} [location] The Azure Region where the resource lives
 * @member {object} [tags] Resource tags.
 */
export interface TrackedResource extends Resource {
  location?: string;
  tags?: { [propertyName: string]: string };
}

/**
 * @class
 * Initializes a new instance of the Cluster class.
 * @constructor
 * The HDInsight cluster.
 *
 * @member {string} [etag] The ETag for the resource
 * @member {object} [properties] The properties of the cluster.
 * @member {string} [properties.clusterVersion] The version of the cluster.
 * @member {string} [properties.osType] The type of operating system. Possible
 * values include: 'Windows', 'Linux'
 * @member {string} [properties.tier] The cluster tier. Possible values
 * include: 'Standard', 'Premium'
 * @member {object} [properties.clusterDefinition] The cluster definition.
 * @member {string} [properties.clusterDefinition.blueprint] The link to the
 * blueprint.
 * @member {string} [properties.clusterDefinition.kind] The type of cluster.
 * @member {object} [properties.clusterDefinition.componentVersion] The
 * versions of different services in the cluster.
 * @member {object} [properties.clusterDefinition.configurations] The cluster
 * configurations.
 * @member {object} [properties.securityProfile] The security profile.
 * @member {string} [properties.securityProfile.directoryType] The directory
 * type. Possible values include: 'ActiveDirectory'
 * @member {string} [properties.securityProfile.domain] The organization's
 * active directory domain.
 * @member {string} [properties.securityProfile.organizationalUnitDN] The
 * organizational unit within the Active Directory to place the cluster and
 * service accounts.
 * @member {array} [properties.securityProfile.ldapsUrls] The LDAPS protocol
 * URLs to communicate with the Active Directory.
 * @member {string} [properties.securityProfile.domainUsername] The domain user
 * account that will have admin privileges on the cluster.
 * @member {string} [properties.securityProfile.domainUserPassword] The domain
 * admin password.
 * @member {array} [properties.securityProfile.clusterUsersGroupDNs] Optional.
 * The Distinguished Names for cluster user groups
 * @member {object} [properties.computeProfile] The compute profile.
 * @member {array} [properties.computeProfile.roles] The list of roles in the
 * cluster.
 * @member {string} [properties.provisioningState] The provisioning state,
 * which only appears in the response. Possible values include: 'InProgress',
 * 'Failed', 'Succeeded', 'Canceled', 'Deleting'
 * @member {string} [properties.createdDate] The date on which the cluster was
 * created.
 * @member {string} [properties.clusterState] The state of the cluster.
 * @member {object} [properties.quotaInfo] The quota information.
 * @member {number} [properties.quotaInfo.coresUsed] The cores used by the
 * cluster.
 * @member {array} [properties.errors] The list of errors.
 * @member {array} [properties.connectivityEndpoints] The list of connectivity
 * endpoints.
 */
export interface Cluster extends TrackedResource {
  etag?: string;
  properties?: ClusterGetProperties;
}

/**
 * @class
 * Initializes a new instance of the RuntimeScriptAction class.
 * @constructor
 * Describes a script action on a running cluster.
 *
 * @member {string} name The name of the script action.
 * @member {string} uri The URI to the script.
 * @member {string} [parameters] The parameters for the script
 * @member {array} roles The list of roles where script will be executed.
 * @member {string} [applicationName] The application name of the script
 * action, if any.
 */
export interface RuntimeScriptAction {
  name: string;
  uri: string;
  parameters?: string;
  roles: string[];
  readonly applicationName?: string;
}

/**
 * @class
 * Initializes a new instance of the ExecuteScriptActionParameters class.
 * @constructor
 * The parameters for the script actions to execute on a running cluster.
 *
 * @member {array} [scriptActions] The list of run time script actions.
 * @member {boolean} persistOnSuccess Gets or sets if the scripts needs to be
 * persisted.
 */
export interface ExecuteScriptActionParameters {
  scriptActions?: RuntimeScriptAction[];
  persistOnSuccess: boolean;
}

/**
 * @class
 * Initializes a new instance of the ClusterListPersistedScriptActionsResult class.
 * @constructor
 * The ListPersistedScriptActions operation response.
 *
 * @member {array} [value] The list of Persisted Script Actions.
 * @member {string} [nextLink] The link (url) to the next page of results.
 */
export interface ClusterListPersistedScriptActionsResult {
  value?: RuntimeScriptAction[];
  readonly nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the ScriptActionExecutionSummary class.
 * @constructor
 * The execution summary of a script action.
 *
 * @member {string} [status] The status of script action execution.
 * @member {number} [instanceCount] The instance count for a given script
 * action execution status.
 */
export interface ScriptActionExecutionSummary {
  readonly status?: string;
  readonly instanceCount?: number;
}

/**
 * @class
 * Initializes a new instance of the RuntimeScriptActionDetail class.
 * @constructor
 * The execution details of a script action.
 *
 * @member {number} [scriptExecutionId] The execution id of the script action.
 * @member {string} [startTime] The start time of script action execution.
 * @member {string} [endTime] The end time of script action execution.
 * @member {string} [status] The current execution status of the script action.
 * @member {string} [operation] The reason why the script action was executed.
 * @member {array} [executionSummary] The summary of script action execution
 * result.
 * @member {string} [debugInformation] The script action execution debug
 * information.
 */
export interface RuntimeScriptActionDetail extends RuntimeScriptAction {
  readonly scriptExecutionId?: number;
  readonly startTime?: string;
  readonly endTime?: string;
  readonly status?: string;
  readonly operation?: string;
  readonly executionSummary?: ScriptActionExecutionSummary[];
  readonly debugInformation?: string;
}

/**
 * @class
 * Initializes a new instance of the ClusterListRuntimeScriptActionDetailResult class.
 * @constructor
 * The list runtime script action detail response.
 *
 * @member {array} [value] The list of persisted script action details for the
 * cluster.
 * @member {string} [nextLink] The link (url) to the next page of results.
 */
export interface ClusterListRuntimeScriptActionDetailResult {
  readonly value?: RuntimeScriptActionDetail[];
  readonly nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the ClusterResizeParameters class.
 * @constructor
 * The Resize Cluster request parameters.
 *
 * @member {number} [targetInstanceCount] The target instance count for the
 * operation.
 */
export interface ClusterResizeParameters {
  targetInstanceCount?: number;
}

/**
 * @class
 * Initializes a new instance of the OperationResource class.
 * @constructor
 * The azure async operation response.
 *
 * @member {string} [status] The async operation state. Possible values
 * include: 'InProgress', 'Succeeded', 'Failed'
 * @member {object} [error] The operation error information.
 * @member {string} [error.code] The error code.
 * @member {string} [error.message] The error message.
 */
export interface OperationResource {
  status?: string;
  error?: Errors;
}

/**
 * @class
 * Initializes a new instance of the ProxyResource class.
 * @constructor
 * The resource model definition for a ARM proxy resource. It will have
 * everything other than required location and tags
 *
 */
export interface ProxyResource extends Resource {
}

/**
 * @class
 * Initializes a new instance of the ErrorResponse class.
 * @constructor
 * Describes the format of Error response.
 *
 * @member {string} [code] Error code
 * @member {string} [message] Error message indicating why the operation
 * failed.
 */
export interface ErrorResponse {
  code?: string;
  message?: string;
}

/**
 * @class
 * Initializes a new instance of the ApplicationGetHttpsEndpoint class.
 * @constructor
 * Gets the application HTTP endpoints.
 *
 * @member {array} [accessModes] The list of access modes for the application.
 * @member {string} [location] The location of the endpoint.
 * @member {number} [destinationPort] The destination port to connect to.
 * @member {number} [publicPort] The public port to connect to.
 */
export interface ApplicationGetHttpsEndpoint {
  accessModes?: string[];
  location?: string;
  destinationPort?: number;
  publicPort?: number;
  /**
   * @property Describes unknown properties. The value of an unknown property
   * MUST be of type "string". Due to valid TS constraints we have modeled this
   * as a union of `string | any`.
   */
  [property: string]: string | any;
}

/**
 * @class
 * Initializes a new instance of the ApplicationGetEndpoint class.
 * @constructor
 * Gets the application SSH endpoint
 *
 * @member {string} [location] The location of the endpoint.
 * @member {number} [destinationPort] The destination port to connect to.
 * @member {number} [publicPort] The public port to connect to.
 */
export interface ApplicationGetEndpoint {
  location?: string;
  destinationPort?: number;
  publicPort?: number;
}

/**
 * @class
 * Initializes a new instance of the ApplicationProperties class.
 * @constructor
 * The HDInsight cluster application GET response.
 *
 * @member {object} [computeProfile] The list of roles in the cluster.
 * @member {array} [computeProfile.roles] The list of roles in the cluster.
 * @member {array} [installScriptActions] The list of install script actions.
 * @member {array} [uninstallScriptActions] The list of uninstall script
 * actions.
 * @member {array} [httpsEndpoints] The list of application HTTPS endpoints.
 * @member {array} [sshEndpoints] The list of application SSH endpoints.
 * @member {string} [provisioningState] The provisioning state of the
 * application.
 * @member {string} [applicationType] The application type.
 * @member {string} [applicationState] The application state.
 * @member {array} [errors] The list of errors.
 * @member {string} [createdDate] The application create date time.
 * @member {string} [marketplaceIdentifier] The marketplace identifier.
 * @member {string} [additionalProperties] The additional properties for
 * application.
 */
export interface ApplicationProperties {
  computeProfile?: ComputeProfile;
  installScriptActions?: RuntimeScriptAction[];
  uninstallScriptActions?: RuntimeScriptAction[];
  httpsEndpoints?: ApplicationGetHttpsEndpoint[];
  sshEndpoints?: ApplicationGetEndpoint[];
  readonly provisioningState?: string;
  applicationType?: string;
  readonly applicationState?: string;
  errors?: Errors[];
  readonly createdDate?: string;
  readonly marketplaceIdentifier?: string;
  additionalProperties?: string;
}

/**
 * @class
 * Initializes a new instance of the Application class.
 * @constructor
 * The HDInsight cluster application
 *
 * @member {string} [etag] The ETag for the application
 * @member {object} [tags] The tags for the application.
 * @member {object} [properties] The properties of the application.
 * @member {object} [properties.computeProfile] The list of roles in the
 * cluster.
 * @member {array} [properties.computeProfile.roles] The list of roles in the
 * cluster.
 * @member {array} [properties.installScriptActions] The list of install script
 * actions.
 * @member {array} [properties.uninstallScriptActions] The list of uninstall
 * script actions.
 * @member {array} [properties.httpsEndpoints] The list of application HTTPS
 * endpoints.
 * @member {array} [properties.sshEndpoints] The list of application SSH
 * endpoints.
 * @member {string} [properties.provisioningState] The provisioning state of
 * the application.
 * @member {string} [properties.applicationType] The application type.
 * @member {string} [properties.applicationState] The application state.
 * @member {array} [properties.errors] The list of errors.
 * @member {string} [properties.createdDate] The application create date time.
 * @member {string} [properties.marketplaceIdentifier] The marketplace
 * identifier.
 * @member {string} [properties.additionalProperties] The additional properties
 * for application.
 */
export interface Application extends ProxyResource {
  etag?: string;
  tags?: { [propertyName: string]: string };
  properties?: ApplicationProperties;
}

/**
 * @class
 * Initializes a new instance of the LocalizedName class.
 * @constructor
 * The details about the localizable name of a type of usage.
 *
 * @member {string} [value] The name of the used resource.
 * @member {string} [localizedValue] The localized name of the used resource.
 */
export interface LocalizedName {
  value?: string;
  localizedValue?: string;
}

/**
 * @class
 * Initializes a new instance of the Usage class.
 * @constructor
 * The details about the usage of a particular limited resource.
 *
 * @member {string} [unit] The type of measurement for usage.
 * @member {number} [currentValue] The current usage.
 * @member {number} [limit] The maximum allowed usage.
 * @member {object} [name] The details about the localizable name of the used
 * resource.
 * @member {string} [name.value] The name of the used resource.
 * @member {string} [name.localizedValue] The localized name of the used
 * resource.
 */
export interface Usage {
  unit?: string;
  currentValue?: number;
  limit?: number;
  name?: LocalizedName;
}

/**
 * @class
 * Initializes a new instance of the UsagesListResult class.
 * @constructor
 * The response for the operation to get regional usages for a subscription.
 *
 * @member {array} [value] The list of usages.
 */
export interface UsagesListResult {
  value?: Usage[];
}

/**
 * @class
 * Initializes a new instance of the Extension class.
 * @constructor
 * Cluster monitoring extensions
 *
 * @member {string} [workspaceId] The workspace ID for the cluster monitoring
 * extension.
 * @member {string} [primaryKey] The certificate for the cluster monitoring
 * extensions.
 */
export interface Extension {
  workspaceId?: string;
  primaryKey?: string;
}

/**
 * @class
 * Initializes a new instance of the ClusterMonitoringResponse class.
 * @constructor
 * The Operations Management Suite (OMS) status response
 *
 * @member {boolean} [clusterMonitoringEnabled] The status of the Operations
 * Management Suite (OMS) on the HDInsight cluster.
 * @member {string} [workspaceId] The workspace ID of the Operations Management
 * Suite (OMS) on the HDInsight cluster.
 */
export interface ClusterMonitoringResponse {
  clusterMonitoringEnabled?: boolean;
  workspaceId?: string;
}

/**
 * @class
 * Initializes a new instance of the ClusterMonitoringRequest class.
 * @constructor
 * The Operations Management Suite (OMS) parameters.
 *
 * @member {string} [workspaceId] The Operations Management Suite (OMS)
 * workspace ID.
 * @member {string} [primaryKey] The Operations Management Suite (OMS)
 * workspace key.
 */
export interface ClusterMonitoringRequest {
  workspaceId?: string;
  primaryKey?: string;
}

/**
 * @class
 * Initializes a new instance of the ScriptActionPersistedGetResponseSpec class.
 * @constructor
 * The persisted script action for cluster.
 *
 * @member {string} [name] The name of script action.
 * @member {string} [uri] The URI to the script.
 * @member {string} [parameters] The parameters for the script provided.
 * @member {array} [roles] The list of roles where script will be executed.
 * @member {string} [applicationName] The application name for the script
 * action.
 */
export interface ScriptActionPersistedGetResponseSpec {
  name?: string;
  uri?: string;
  parameters?: string;
  roles?: string[];
  applicationName?: string;
}

/**
 * @class
 * Initializes a new instance of the OperationDisplay class.
 * @constructor
 * The object that represents the operation.
 *
 * @member {string} [provider] The service provider: Microsoft.HDInsight
 * @member {string} [resource] The resource on which the operation is
 * performed: Cluster, Applications, etc.
 * @member {string} [operation] The operation type: read, write, delete, etc.
 */
export interface OperationDisplay {
  provider?: string;
  resource?: string;
  operation?: string;
}

/**
 * @class
 * Initializes a new instance of the Operation class.
 * @constructor
 * The HDInsight REST API operation.
 *
 * @member {string} [name] The operation name:
 * {provider}/{resource}/{operation}
 * @member {object} [display] The object that represents the operation.
 * @member {string} [display.provider] The service provider:
 * Microsoft.HDInsight
 * @member {string} [display.resource] The resource on which the operation is
 * performed: Cluster, Applications, etc.
 * @member {string} [display.operation] The operation type: read, write,
 * delete, etc.
 */
export interface Operation {
  name?: string;
  display?: OperationDisplay;
}


/**
 * @class
 * Initializes a new instance of the ClusterListResult class.
 * @constructor
 * The List Cluster operation response.
 *
 * @member {string} [nextLink] The link (url) to the next page of results.
 */
export interface ClusterListResult extends Array<Cluster> {
  readonly nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the ApplicationListResult class.
 * @constructor
 * Result of the request to list cluster Applications. It contains a list of
 * operations and a URL link to get the next set of results.
 *
 * @member {string} [nextLink] The URL to get the next set of operation list
 * results if there are any.
 */
export interface ApplicationListResult extends Array<Application> {
  readonly nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the ScriptActionsList class.
 * @constructor
 * The persisted script action for the cluster.
 *
 * @member {string} [nextLink] The link (url) to the next page of results.
 */
export interface ScriptActionsList extends Array<RuntimeScriptActionDetail> {
  readonly nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the ScriptActionExecutionHistoryList class.
 * @constructor
 * The list script execution history response.
 *
 * @member {string} [nextLink] The link (url) to the next page of results.
 */
export interface ScriptActionExecutionHistoryList extends Array<RuntimeScriptActionDetail> {
  readonly nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the OperationListResult class.
 * @constructor
 * Result of the request to list HDInsight operations. It contains a list of
 * operations and a URL link to get the next set of results.
 *
 * @member {string} [nextLink] The URL to get the next set of operation list
 * results if there are any.
 */
export interface OperationListResult extends Array<Operation> {
  nextLink?: string;
}
