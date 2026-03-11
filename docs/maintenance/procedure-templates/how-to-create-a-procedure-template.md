---
id: how-to-create-a-procedure-template
title: How to Create a Procedure Template
sidebar_label: Create a Procedure Template
sidebar_position: 2
---

# How to Create a Procedure Template

Follow these steps to build standard operating procedures (SOPs), safety checklists, or maintenance workflows.

## Step 1: Navigate to Procedure Templates
From the main sidebar, expand **Maintenance** and select **Procedure Templates**. Click the **+ Create** button in the top-right corner.

## Step 2: Define General Parameters

| Field | Instruction | Required |
|---|---|---|
| **Name** | Enter a clear identifier (e.g., "Air Compressor Daily Pre-Start Check"). | ✅ Yes |
| **Asset** | Link this procedure to a specific asset. Leave blank for a global template. | — |
| **Types** | Categorize the template using the dropdown (e.g., "Preventive"). | — |
| **Description** | Provide overarching instructions or safety context for the technician. | — |

## Step 3: Understand the Builder Toolbar

Use the top toolbar to construct your workflow. You can add a **maximum of 20 fields per template**.

| Button | Function |
|---|---|
| **H (Add Heading)** | Inserts a visual separator to group tasks into distinct sections. |
| **! (Add Callout)** | Inserts a non-actionable informational block (e.g., a safety warning). |
| **+ (Add Task)** | Inserts an actionable step that the technician must complete. |

## Step 4: Configure Tasks and Inputs

When you add a **Task** block:
1. Enter the **Task Name** and **Description**.
2. Toggle **Required** if the technician must complete this step to submit.
3. Select the **Input Type** from the dropdown menu (see [About Procedure Templates](./about) for full reference).

## Step 5: Configure Conditional Logic *(Optional)*

Build **dynamic workflows** where specific follow-up tasks only appear based on a technician's answer.

1. **Activate Logic**: On any Task block, click the **Logic Tree icon**.
2. **Set the Condition**: Define your rule using "When answer is" with operators: **Higher Than**, **Lower Than**, **Equal To**, **Not Equal To**, or **Between**.
3. **Define the Value**: Enter the target value.
4. **Add Sub-Tasks**: Click **+** inside the logic block to create follow-up tasks.

## Step 6: Preview and Save

- **EDITOR** mode — for building and configuring.
- **PREVIEW** mode — shows exactly how the SOP will look to the technician.

Review in Preview mode, then switch back to Editor and click **Submit**.
