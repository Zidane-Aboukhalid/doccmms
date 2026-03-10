---
id: how-to-duplicate-a-meter
title: How to Duplicate a Meter
sidebar_label: How to Duplicate a Meter
sidebar_position: 3
---

## How to Duplicate a Meter

> **Required Permission:** Add Meter

Duplicating a meter allows you to quickly create a new meter by **copying the configuration** of an existing one.

:::note
Historical readings and active trigger states are **not** copied to the new meter.
:::

### Step 1: Locate the Source Meter
Navigate to **Maintenance > Meters**. Use the search bar or filters to find the meter you wish to copy.

### Step 2: Initiate Duplication
Select the specific meter from the list. Click the **Duplicate** button located in the action column or the top right of the meter detail view.

### Step 3: Modify Copied Parameters

| Field | Instruction | Required |
|---|---|---|
| **Name** | Update the identifier. The system typically appends "- Copy" to the original name. You must provide a unique name. | ✅ Yes |
| **Asset** | Reassign the meter to the correct equipment if applicable. | — |
| **Measurement Unit** | Inherited from the source meter. Modify only if necessary. | ✅ Yes |
| **Reading Value** | Enter an initial reading for this new meter. Note: Historical readings from the source meter are **not** copied. | ✅ Yes |
| **Description** | Inherited from the source meter. Update to reflect the new meter's context. | — |

### Step 4: Finalize Configuration
Click the **Submit** button to save the newly duplicated meter.

---
