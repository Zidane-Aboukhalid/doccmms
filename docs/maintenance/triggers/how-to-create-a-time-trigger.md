---
id: how-to-create-a-time-trigger
title: How to Create a Time Trigger
sidebar_label: Create a Time Trigger
sidebar_position: 6
---

# How to Create a Time Trigger

Follow these steps to configure an automated action based on a specific calendar schedule.

## Step 1: Navigate to Time Triggers
From the main sidebar, expand **Maintenance** and select **Time Trigger**.

## Step 2: Open the Creation Form
Click the **+ Create** button located in the top-right corner of the list view.

## Step 3: Define Trigger Parameters

| Field | Instruction | Required |
|---|---|---|
| **Name** | Enter a clear, descriptive identifier for this schedule. | ✅ Yes |
| **Recurrence** | Select the scheduling pattern (**Weekly** or **Monthly**). | ✅ Yes |
| **Start Date** | Select the calendar date when the schedule becomes active. | — |
| **End Date** | Select the calendar date when the schedule expires and stops running. | — |
| **Description** | Provide context or notes regarding the purpose of this trigger. | — |

:::info Start and End Date Notes
- **Start Date**: The system will not evaluate the trigger before this date. If your Start Date does not naturally align with your Recurrence schedule, the system will wait for the next valid occurrence.
- **End Date**: This acts as a hard stop. The automation will immediately cease running after this specified date.
:::

## Step 4: Configure Recurrence Logic

Based on the **Recurrence** type selected in Step 3:

**Weekly:**
- **Every**: Select one or more days of the week (e.g., Monday, Wednesday).
- **At**: Set the exact execution time.

**Monthly (Specific Days):**
- **Every**: Select the applicable months.
- **On the**: Select specific calendar dates (e.g., 1st, 15th, 31st).
- **At**: Set the exact execution time.

**Monthly (Last Days):**
- **Every**: Select the applicable months.
- **Run on**: Choose a relative end-of-month date (e.g., "On the last day" or "1 to 4 Days before the end of the month").
- **At**: Set the exact execution time.

## Step 5: Finalize and Save
Click the **Submit** button to save the configuration. Once saved, the system automatically calculates the next execution time and displays it in the **Next Run Date** column on the list.
