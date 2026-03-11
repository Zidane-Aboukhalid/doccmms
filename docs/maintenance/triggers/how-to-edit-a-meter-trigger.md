---
id: how-to-edit-a-meter-trigger
title: How to Edit a Meter Trigger
sidebar_label: Edit a Meter Trigger
sidebar_position: 4
---

# How to Edit a Meter Trigger

Follow these steps to modify the logic or status of an existing automated monitoring rule.

1. **Navigate to Meter Triggers** — From the main sidebar, go to **Maintenance** and select **Meter Triggers**.
2. **Open the Edit Form** — Locate the specific trigger in the list view. Click the **More (⋮)** button in the far-right column and select **Edit**.
3. **Modify Trigger Parameters** — Update the necessary fields:

| Field | Instruction | Required |
|---|---|---|
| **Name** | Enter a clear, descriptive identifier (e.g., "Air Compressor High Temp Alert"). | ✅ Yes |
| **Condition** | Select the mathematical logic. Refer to the Trigger Condition Logic table in [About Triggers](./about). | ✅ Yes |
| **Threshold** | Enter the numerical value or interval that activates the trigger. | ✅ Yes |
| **Is Active** | Check this box to enable the trigger immediately. | — |
| **Description** | Provide context or notes regarding why this trigger exists. | — |

4. **Save Changes** — Click the **Submit** button. The system will immediately begin applying the updated logic to all future incoming meter data.
