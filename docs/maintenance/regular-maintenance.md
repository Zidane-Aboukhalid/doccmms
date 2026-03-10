---
id: regular-maintenance
title: Regular Maintenance (PM)
sidebar_label: Regular Maintenance (PM)
sidebar_position: 6
description: Learn how to create, edit, and delete Preventive Maintenance (PM) schedules in UniCMMS to automate recurring maintenance tasks.
keywords: [UniCMMS, preventive maintenance, PM, scheduled maintenance, regular maintenance, recurring tasks]
---

# Regular Maintenance (Preventive Maintenance)

**Regular Maintenance** (PM) allows you to schedule **recurring, automated maintenance tasks** to keep your equipment running reliably and prevent unexpected breakdowns.

Instead of manually creating a new Work Order every time a routine check is due, a Regular Maintenance schedule automatically generates Work Orders on a predefined interval — whether time-based (every 30 days) or usage-based (every 500 hours on a meter).

### Why Use Preventive Maintenance?

| Corrective Maintenance | Preventive Maintenance |
|---|---|
| Reactive — fix after failure | Proactive — prevent failures |
| Unplanned downtime | Planned, scheduled downtime |
| Higher emergency repair costs | Lower long-term maintenance costs |
| Equipment fails unpredictably | Equipment life extended |

---

## How to Create a Regular Maintenance Schedule (PM)

Follow these steps to configure an automated, recurring maintenance plan for a piece of equipment or a facility.

### Step 1: Navigate to Regular Maintenances
From the main sidebar, expand **Maintenance** and select **Regular Maintenances**. Click the **+ Create** button located in the top-right corner.

### Step 2: Define General Parameters
Complete the header section of the PM form to define the scope and identify the work.

| Field | Instruction | Required |
|---|---|---|
| **Name** | Enter a clear identifier for this PM plan (e.g., "Air Compressor — Monthly Inspection"). | ✅ Yes |
| **Work On** | Toggle between **Assets** or **Facility**, then search for the specific target. | ✅ Yes |
| **Category** | Categorize the nature of the work (e.g., Preventive, Inspection). | ✅ Yes |
| **Priority** | Select the urgency level: None, Low, Medium, High, or Critical. | ✅ Yes |
| **Types** | Specify the exact maintenance type (e.g., Safety, Lubrication, Replacement). | ✅ Yes |
| **Assign to** | Select the specific user or technician responsible for this recurring task. | — |
| **Estimated Duration** | Input the anticipated working time in Hours and Minutes. | — |
| **Description** | Enter the detailed instructions or scope of work for this recurring task. | — |
| **Budget Account** | Select the applicable financial account to track PM expenses. | — |
| **Charge Department** | Select the internal department responsible for the cost. | — |

### Step 3: Configure the Trigger Source

This is the most critical step — you must define **what causes a new Work Order to be generated**.

UniCMMS supports two types of PM triggers:

---

#### Option A: Time-Based Trigger

The PM schedule fires based on a calendar schedule (e.g., every week, every month).

**Link a Time Trigger:**
- In the **Trigger** field, select an existing **Time Trigger** from the dropdown (e.g., "Every Monday at 08:00 AM" or "1st of every month").
- The system will automatically generate a new Work Order each time the Time Trigger fires.

:::tip
Time Triggers must be created in **Maintenance > Time Triggers** before they can be linked here. See the [Triggers documentation](./triggers) for instructions.
:::

---

#### Option B: Meter-Based Trigger

The PM schedule fires based on usage data from a Meter (e.g., after every 500 operating hours).

**Link a Meter Trigger:**
- In the **Trigger** field, select an existing **Meter Trigger** from the dropdown (e.g., "Increases by 500 hours").
- The system will automatically generate a new Work Order each time that meter threshold is crossed.

:::tip
Meter Triggers must be created in **Maintenance > Meter Triggers** before they can be linked here. See the [Triggers documentation](./triggers) for instructions.
:::

---

### Step 4: Attach a Procedure Template *(Optional)*

You can pre-attach a **Procedure Template** (SOP or checklist) to the PM schedule. Every time a new Work Order is automatically generated from this schedule, the procedure will be automatically attached to it.

- In the **Procedure Template** field, search for and select the applicable template (e.g., "Air Compressor Monthly Checklist").

### Step 5: Set the Schedule Window *(Optional)*

Configure how long the system should continue to generate Work Orders for this PM plan:

| Field | Instruction |
|---|---|
| **Start Date** | The date the PM schedule becomes active and starts generating Work Orders. |
| **End Date** | The date the PM schedule expires and permanently stops generating Work Orders. Leave blank for an open-ended, ongoing maintenance plan. |

### Step 6: Save the PM Schedule
Review all parameters. Click the **Submit** button to activate the Regular Maintenance schedule. The system will now automatically generate Work Orders according to your configured trigger.

---

## How to Edit a Regular Maintenance Schedule

Follow these steps to modify an existing PM plan — for example, to change the assigned technician, update the procedure, or modify the trigger.

### Step 1: Navigate to Regular Maintenances
From the main sidebar, expand **Maintenance** and select **Regular Maintenances**.

### Step 2: Open the Edit Form
Locate the specific PM schedule in the list view. Click the **More (⋯)** icon in the far-right column and select **Edit**.

### Step 3: Modify the Parameters
The Edit form will open, pre-filled with the current schedule's data. Update the necessary fields:

- **General Parameters**: Update the Name, Category, Priority, or Description as needed.
- **Assignment**: Reassign the schedule to a different technician if responsibilities have changed.
- **Trigger Source**: Change or re-link the Time Trigger or Meter Trigger if the maintenance interval needs to be updated.
- **Procedure Template**: Attach or change the SOP checklist linked to this schedule.
- **Schedule Window**: Adjust the Start Date or End Date of the PM plan.

### Step 4: Save Changes
Click the **Submit** button at the bottom right of the form to apply your changes.

:::info Operational Note
Editing a Regular Maintenance schedule updates the **master blueprint**. This affects all **future** auto-generated Work Orders from this schedule. It does **not** retroactively alter previously generated or completed Work Orders from this PM plan.
:::

---

## How to Delete a Regular Maintenance Schedule

Follow these steps to permanently stop and remove a PM plan from the system.

### Step 1: Navigate to Regular Maintenances
From the main sidebar, expand **Maintenance** and select **Regular Maintenances**.

### Step 2: Open the Action Menu
Locate the specific Regular Maintenance schedule you wish to remove in the list view. Click the **More (⋯)** icon in the far-right column of that row.

### Step 3: Select Delete
Click the **Delete** option (trash bin icon) from the dropdown menu.

:::warning Before You Delete
Consider whether you need to preserve the historical record of this PM plan. If you simply want to **pause** the schedule temporarily, consider editing it and:
1. Setting a past **End Date** to stop future Work Order generation without deleting the record.
2. Or unlinking the Trigger to prevent future executions.
:::

:::danger
Deleting a Regular Maintenance schedule is a **permanent action**. The system will permanently stop generating Work Orders from this plan. Any Work Orders already generated from this PM plan are **not** affected and remain in the system.
:::

### Step 4: Confirm Deletion
If the system prompts you with a confirmation dialog, confirm the action to permanently remove the Regular Maintenance schedule from your system.
