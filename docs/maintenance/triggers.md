---
id: triggers
title: Triggers
sidebar_label: Triggers
sidebar_position: 2
description: Learn how to use Meter Triggers and Time Triggers in UniCMMS to automate maintenance workflows based on conditions or schedules.
keywords: [UniCMMS, triggers, automation, meter triggers, time triggers, preventive maintenance]
---

# Triggers

## About Triggers

In UniCMMS, the **Triggers** module is the centralized hub for your automation rules. It allows you to define exactly **when** critical system events should automatically occur.

By managing Triggers as an independent module, UniCMMS gives you ultimate flexibility. Instead of rebuilding automation rules from scratch for individual records, you can build a **standardized library of triggers** and link them to various supported modules across your system.

To support different operational strategies, you can build two types of automation rules:

### 1. Time Triggers (Scheduler)
Time Triggers automate actions based on **strict calendar or clock intervals**. Powered by highly precise scheduling logic (cron expressions), these triggers ensure system events occur at exact, recurring moments, regardless of asset usage.

> **Example:** You create a Time Trigger for "Every Monday at 08:00 AM." You can then link this single trigger to multiple different automated workflows across your facility, ensuring everything executes at the exact same time.

### 2. Meter Triggers
Meter Triggers automate actions based on the **physical reality of your equipment**. These triggers actively monitor the numerical data you are logging in the Meters module. You define a specific threshold (the condition), and the moment a technician logs a reading that hits that threshold, the Trigger instantly fires its signal.

> **Example:** You create a Meter Trigger with the rule: "Reading exceeds 15,000 kWh." Once linked to an active module, the system will autonomously execute the associated action the exact moment that energy threshold is reached.

---

## Meter Triggers

A Meter Trigger is an automated **condition-monitoring rule**. It evaluates incoming meter readings against specific mathematical logic and instantly fires an action signal when those conditions are met. Triggers shift your operations from manual tracking to proactive, condition-based automation.

### Trigger Condition Logic

UniCMMS evaluates incoming meter readings against the following logical conditions. You must understand the **"Reset Requirement"** to prevent the system from firing duplicate actions for a single event.

| Condition | System Logic | Reset Requirement |
|---|---|---|
| **is above** | Executes when the entered reading is **higher** than the set threshold. | ✅ Yes: Reading must drop below the threshold before it can trigger again. |
| **is below** | Executes when the entered reading is **lower** than the set threshold. | ✅ Yes: Reading must rise above the threshold before it can trigger again. |
| **is equal to** | Executes every time the entered reading is **exactly equal** to the set threshold. | ❌ No: Triggers on every exact match. |
| **increases by** | Executes every time the total meter reading increases by the set threshold value. | ❌ No: Continuous interval from the last trigger point. |
| **decreases by** | Executes every time the total meter reading decreases by the set threshold value. | ❌ No: Continuous interval from the last trigger point. |
| **increases by** *(Spike Model)* | Executes when the difference between the last reading and the one before it **increases** by the set value. | ❌ No: Evaluates every new reading strictly against the one right before it. |
| **decreases by** *(Spike Model)* | Executes when the difference between the last reading and the one before it **decreases** by the set value. | ❌ No: Evaluates every new reading strictly against the one right before it. |

---

### How to Create a Meter Trigger

Follow these steps to configure an automated monitoring rule for an existing meter.

#### Step 1: Navigate to Meter Triggers
From the main sidebar, navigate to **Maintenance** and select the **Meter Triggers** sub-menu. This is the centralized dashboard for all active automation rules.

#### Step 2: Open the Creation Form
Click the **+ Create** button located in the top right corner of the Meter Triggers list view.

#### Step 3: Define Trigger Parameters
Complete the input fields in the creation form:

| Field | Instruction | Required |
|---|---|---|
| **Name** | Enter a clear, descriptive identifier (e.g., "Boiler Pressure Drop Alert"). | ✅ Yes |
| **Meter** | Select the target Meter from the dropdown menu. | ✅ Yes |
| **Condition** | Select the mathematical logic (e.g., is above, is below, increases by). | ✅ Yes |
| **Enable Spike Model** | *(Conditional)* This toggle only appears if condition is set to **increases by** or **decreases by**. | Optional |
| **Threshold** | Enter the numerical value that activates the trigger. | ✅ Yes |
| **Is Active** | Check this box to enable the trigger immediately. | — |
| **Description** | Provide context, instructions, or operational notes. | — |

#### Step 4: Finalize and Activate
Click the **Submit** button to save the configuration. If you checked the "Is Active" box, the system will immediately begin evaluating all future readings for the selected meter.

---

### How to Duplicate a Meter Trigger

Duplicating allows you to quickly create a new automation rule by copying the configuration of an existing one.

1. **Navigate to Meter Triggers** — From the main sidebar, select **Maintenance** and click **Meter Triggers**.
2. **Open the Action Menu** — Identify the trigger you wish to copy. Click the **More (⋯)** icon in the right-hand column.
3. **Select Duplicate** — Click the **Duplicate** option from the dropdown menu.
4. **Review and Save** — The Create Meter Trigger form will open, pre-filled with the details of the original rule.

:::note
The duplicate function acts as a clone, pulling all data directly from the recorded path of the original trigger. This allows you to maintain consistency without manual entry.
:::

Click the **Submit** button to save the new trigger.

---

### How to Edit a Meter Trigger

Follow these steps to modify the logic or status of an existing automated monitoring rule.

1. **Navigate to Meter Triggers** — From the main sidebar, go to **Maintenance** and select **Meter Triggers**.
2. **Open the Edit Form** — Locate the specific trigger in the list view. Click the **More (⋮)** button in the far-right column and select **Edit**.
3. **Modify Trigger Parameters** — Update the necessary fields:

| Field | Instruction | Required |
|---|---|---|
| **Name** | Enter a clear, descriptive identifier (e.g., "Air Compressor High Temp Alert"). | ✅ Yes |
| **Condition** | Select the mathematical logic. Refer to the Trigger Condition Logic table above. | ✅ Yes |
| **Threshold** | Enter the numerical value or interval that activates the trigger. | ✅ Yes |
| **Is Active** | Check this box to enable the trigger immediately. | — |
| **Description** | Provide context or notes regarding why this trigger exists. | — |

4. **Save Changes** — Click the **Submit** button. The system will immediately begin applying the updated logic to all future incoming meter data.

---

### How to Delete a Meter Trigger

Follow these steps to permanently remove an automated monitoring rule from the system.

1. **Navigate to Meter Triggers** — From the main sidebar, click **Maintenance** and select **Meter Triggers**.
2. **Open the Action Menu** — Locate the trigger you wish to remove. Click the **More (⋯)** icon in the final column of that row.
3. **Select Delete** — Select the **Delete** option (highlighted in red).

:::warning
Deleting a trigger is **permanent**. If you only want to stop the automation temporarily, consider unchecking the **Is Active** box in the Edit form instead.
:::

4. **Confirm Deletion** — If prompted by a confirmation dialog, confirm the action to remove the trigger from the dashboard.

---

## Time Triggers

### How to Create a Time Trigger

Follow these steps to configure an automated action based on a specific calendar schedule.

#### Step 1: Navigate to Time Triggers
From the main sidebar, expand **Maintenance** and select **Time Trigger**.

#### Step 2: Open the Creation Form
Click the **+ Create** button located in the top-right corner of the list view.

#### Step 3: Define Trigger Parameters

| Field | Instruction | Required |
|---|---|---|
| **Name** | Enter a clear, descriptive identifier for this schedule. | ✅ Yes |
| **Recurrence** | Select the scheduling pattern (**Weekly** or **Monthly**). | ✅ Yes |
| **Start Date** | Select the calendar date when the schedule becomes active. | — |
| **End Date** | Select the calendar date when the schedule expires and stops running. | — |
| **Description** | Provide context or notes regarding the purpose of this trigger. | — |

:::info Start and End Date Notes
- **Start Date**: The system will not evaluate the trigger before this date. If your Start Date does not naturally align with your Recurrence schedule, the system will wait for the next valid occurrence.  
  *(Example: If you schedule "Every Monday" but set Start Date to a Tuesday, the first execution will happen on the following Monday.)*
- **End Date**: This acts as a hard stop. The automation will immediately cease running after this specified date.
:::

#### Step 4: Configure Recurrence Logic

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

#### Step 5: Finalize and Save
Click the **Submit** button to save the configuration. Once saved, the system automatically calculates the next execution time and displays it in the **Next Run Date** column on the list.

---

### How to Duplicate a Time Trigger

Duplicating allows you to quickly create a new automated schedule by copying the exact configuration of an existing one.

1. Navigate to **Maintenance > Time Trigger**.
2. Locate the specific trigger. Click the **More (⋯)** icon in the far-right column.
3. Click **Duplicate** from the dropdown menu.
4. The Create Time Trigger form will open, pre-filled with the exact schedule and details of the original trigger.
   - **Update the Name**: Change the Name field immediately to ensure this new schedule has a unique identifier.
   - **Modify as Needed**: Adjust the Recurrence, Start/End Dates, or Is Active status.
5. Click **Submit** to save the new trigger.

:::note
The duplicate function only copies the **schedule configuration** (rules and times). It does **not** duplicate any past execution history associated with the original trigger.
:::

---

### How to Edit a Time Trigger

1. Navigate to **Maintenance > Time Trigger**.
2. Locate the trigger in the list. Click the **More (⋯)** icon in the far-right column and select **Edit**.
3. Update the fields in the Edit Time Trigger form:

| Field | Instruction |
|---|---|
| **Name** | Update the text identifier for this schedule. |
| **Is Active** | Check or uncheck to enable or disable the trigger without deleting the schedule. |
| **Recurrence** | Modify the scheduling pattern and the exact execution time. |
| **Start Date** | Adjust the calendar date that defines when the trigger becomes active. |
| **End Date** | Adjust the calendar date that defines when the trigger expires. |
| **Description** | Update the context or operational notes. |

4. Click **Submit** to apply your changes.

:::note
If you modified the **Recurrence** settings, the system will immediately recalculate the schedule and update the **Next Run Date** in your main dashboard.
:::

---

### How to Delete a Time Trigger

1. Navigate to **Maintenance > Time Trigger**.
2. Locate the trigger in the list view. Click the **More (⋯)** icon in the far-right column.
3. Click the **Delete** option from the dropdown menu.

:::warning
Deleting a Time Trigger is a **permanent action** and cannot be undone. If you only want to temporarily stop the schedule from executing, edit the trigger and **uncheck the Is Active box** instead.
:::

4. If prompted with a confirmation dialog, confirm the action to permanently remove the schedule from your dashboard.
