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
 * Properties for creating a schedule.
 *
 */
class ScheduleCreationParameterFragment {
  /**
   * Create a ScheduleCreationParameterFragment.
   * @property {string} [status] The status of the schedule (i.e. Enabled,
   * Disabled). Possible values include: 'Enabled', 'Disabled'
   * @property {string} [taskType] The task type of the schedule (e.g.
   * LabVmsShutdownTask, LabVmAutoStart).
   * @property {object} [weeklyRecurrence] If the schedule will occur only some
   * days of the week, specify the weekly recurrence.
   * @property {array} [weeklyRecurrence.weekdays] The days of the week for
   * which the schedule is set (e.g. Sunday, Monday, Tuesday, etc.).
   * @property {string} [weeklyRecurrence.time] The time of the day the
   * schedule will occur.
   * @property {object} [dailyRecurrence] If the schedule will occur once each
   * day of the week, specify the daily recurrence.
   * @property {string} [dailyRecurrence.time] The time of day the schedule
   * will occur.
   * @property {object} [hourlyRecurrence] If the schedule will occur multiple
   * times a day, specify the hourly recurrence.
   * @property {number} [hourlyRecurrence.minute] Minutes of the hour the
   * schedule will run.
   * @property {string} [timeZoneId] The time zone ID (e.g. Pacific Standard
   * time).
   * @property {object} [notificationSettings] Notification settings.
   * @property {string} [notificationSettings.status] If notifications are
   * enabled for this schedule (i.e. Enabled, Disabled). Possible values
   * include: 'Enabled', 'Disabled'
   * @property {number} [notificationSettings.timeInMinutes] Time in minutes
   * before event at which notification will be sent.
   * @property {string} [notificationSettings.webhookUrl] The webhook URL to
   * which the notification will be sent.
   * @property {string} [notificationSettings.emailRecipient] The email
   * recipient to send notifications to (can be a list of semi-colon separated
   * email addresses).
   * @property {string} [notificationSettings.notificationLocale] The locale to
   * use when sending a notification (fallback for unsupported languages is
   * EN).
   * @property {string} [targetResourceId] The resource ID to which the
   * schedule belongs
   * @property {string} [name] The name of the virtual machine or environment
   * @property {string} [location] The location of the new virtual machine or
   * environment
   * @property {object} [tags] The tags of the resource.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ScheduleCreationParameterFragment
   *
   * @returns {object} metadata of ScheduleCreationParameterFragment
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ScheduleCreationParameterFragment',
      type: {
        name: 'Composite',
        className: 'ScheduleCreationParameterFragment',
        modelProperties: {
          status: {
            required: false,
            serializedName: 'properties.status',
            type: {
              name: 'String'
            }
          },
          taskType: {
            required: false,
            serializedName: 'properties.taskType',
            type: {
              name: 'String'
            }
          },
          weeklyRecurrence: {
            required: false,
            serializedName: 'properties.weeklyRecurrence',
            type: {
              name: 'Composite',
              className: 'WeekDetailsFragment'
            }
          },
          dailyRecurrence: {
            required: false,
            serializedName: 'properties.dailyRecurrence',
            type: {
              name: 'Composite',
              className: 'DayDetailsFragment'
            }
          },
          hourlyRecurrence: {
            required: false,
            serializedName: 'properties.hourlyRecurrence',
            type: {
              name: 'Composite',
              className: 'HourDetailsFragment'
            }
          },
          timeZoneId: {
            required: false,
            serializedName: 'properties.timeZoneId',
            type: {
              name: 'String'
            }
          },
          notificationSettings: {
            required: false,
            serializedName: 'properties.notificationSettings',
            type: {
              name: 'Composite',
              className: 'NotificationSettingsFragment'
            }
          },
          targetResourceId: {
            required: false,
            serializedName: 'properties.targetResourceId',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          location: {
            required: false,
            serializedName: 'location',
            type: {
              name: 'String'
            }
          },
          tags: {
            required: false,
            serializedName: 'tags',
            type: {
              name: 'Dictionary',
              value: {
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

module.exports = ScheduleCreationParameterFragment;
