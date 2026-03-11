---
id: how-to-create-a-meter-trigger
title: How to Create a Meter Trigger
sidebar_label: Create a Meter Trigger
sidebar_position: 2
---

# How to Create a Meter Trigger

Follow these steps to configure an automated monitoring rule for an existing meter.

## Step 1: Navigate to Meter Triggers
From the main sidebar, navigate to **Maintenance** and select the **Meter Triggers** sub-menu.

## Step 2: Open the Creation Form
Click the **+ Create** button located in the top right corner of the Meter Triggers list view.

## Step 3: Define Trigger Parameters

| Field | Instruction | Required |
|---|---|---|
| **Name** | Enter a clear, descriptive identifier (e.g., "Boiler Pressure Drop Alert"). | ✅ Yes |
| **Meter** | Select the target Meter from the dropdown menu. | ✅ Yes |
| **Condition** | Select the mathematical logic (e.g., is above, is below, increases by). | ✅ Yes |
| **Enable Spike Model** | *(Conditional)* This toggle only appears if condition is set to **increases by** or **decreases by**. | Optional |
| **Threshold** | Enter the numerical value that activates the trigger. | ✅ Yes |
| **Is Active** | Check this box to enable the trigger immediately. | — |
| **Description** | Provide context, instructions, or operational notes. | — |

## Step 4: Finalize and Activate
Click the **Submit** button to save the configuration. If you checked the "Is Active" box, the system will immediately begin evaluating all future readings for the selected meter.
