---
id: how-to-create-a-pm-schedule
title: How to Create a Regular Maintenance Schedule
sidebar_label: Create a PM Schedule
sidebar_position: 2
---

# How to Create a Regular Maintenance Schedule (PM)

Follow these steps to configure an automated, recurring maintenance plan for a piece of equipment or a facility.

## Step 1: Navigate to Regular Maintenances
From the main sidebar, expand **Maintenance** and select **Regular Maintenances**. Click the **+ Create** button in the top-right corner.

## Step 2: Define General Parameters

| Field | Instruction | Required |
|---|---|---|
| **Name** | Enter a clear identifier (e.g., "Air Compressor — Monthly Inspection"). | ✅ Yes |
| **Work On** | Toggle between **Assets** or **Facility**, then search for the specific target. | ✅ Yes |
| **Category** | Categorize the nature of the work (e.g., Preventive, Inspection). | ✅ Yes |
| **Priority** | Select the urgency level: None, Low, Medium, High, or Critical. | ✅ Yes |
| **Types** | Specify the exact maintenance type (e.g., Safety, Lubrication, Replacement). | ✅ Yes |
| **Assign to** | Select the specific user or technician responsible for this recurring task. | — |
| **Estimated Duration** | Input the anticipated working time in Hours and Minutes. | — |
| **Description** | Enter the detailed instructions or scope of work. | — |
| **Budget Account** | Select the applicable financial account to track PM expenses. | — |
| **Charge Department** | Select the internal department responsible for the cost. | — |

## Step 3: Configure the Trigger Source

Link either a **Time Trigger** or a **Meter Trigger** to define when new Work Orders are generated automatically.

:::tip
Triggers must be created in **Maintenance > Triggers** before they can be linked here. See the [Triggers documentation](../triggers/about) for instructions.
:::

## Step 4: Attach a Procedure Template *(Optional)*

In the **Procedure Template** field, search for and select the applicable template. Every time a new Work Order is auto-generated from this schedule, the procedure will be automatically attached.

## Step 5: Set the Schedule Window *(Optional)*

| Field | Instruction |
|---|---|
| **Start Date** | The date the PM schedule becomes active and starts generating Work Orders. |
| **End Date** | The date the PM schedule expires. Leave blank for an open-ended, ongoing plan. |

## Step 6: Save the PM Schedule
Review all parameters. Click the **Submit** button to activate the Regular Maintenance schedule.
