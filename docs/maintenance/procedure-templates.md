---
id: procedure-templates
title: Procedure Templates
sidebar_label: Procedure Templates
sidebar_position: 3
description: Learn how to create, duplicate, edit, and delete Procedure Templates (SOPs and checklists) in UniCMMS.
keywords: [UniCMMS, procedure templates, SOP, checklist, maintenance workflow, conditional logic]
---

# Procedure Templates

Procedure Templates allow you to build **Standard Operating Procedures (SOPs)**, safety checklists, or maintenance workflows that can be attached to Work Orders. They guide technicians through tasks step-by-step and capture structured data.

---

## How to Create a Procedure Template

Follow these steps to build standard operating procedures (SOPs), safety checklists, or maintenance workflows.

### Step 1: Navigate to Procedure Templates
From the main sidebar, expand **Maintenance** and select **Procedure Templates**. Click the **+ Create** button located in the top-right corner.

### Step 2: Define General Parameters
Complete the top section of the form to define the template's identity and scope.

| Field | Instruction | Required |
|---|---|---|
| **Name** | Enter a clear identifier for this SOP (e.g., "Air Compressor Daily Pre-Start Check"). | ✅ Yes |
| **Asset** | Link this procedure to a specific asset. Leave blank for a global template. | — |
| **Types** | Categorize the template using the dropdown (e.g., "Preventive"). | — |
| **Description** | Provide overarching instructions or safety context for the technician. | — |

### Step 3: Understand the Builder Toolbar

Use the top toolbar to construct your workflow. You can add a **maximum of 20 fields per template**, tracked by the `Fields: x / 20` counter.

| Button | Function |
|---|---|
| **H (Add Heading)** | Inserts a visual separator to group tasks into distinct sections (e.g., "1. Safety & Visual Checks"). |
| **! (Add Callout)** | Inserts a non-actionable informational block (e.g., a safety warning or note). |
| **+ (Add Task)** | Inserts an actionable step that the technician must complete. |

### Step 4: Configure Tasks and Inputs

When you add a **Task** block, you must define the instruction and how the technician will answer it:

1. Enter the **Task Name** and **Description**.
2. Toggle **Required** if the technician must complete this step to submit their work.
3. Select the **Input Type** from the dropdown menu.

#### Reference Guide: Task Input Types

Selecting the correct Input Type ensures your maintenance records remain clean and reportable.

| Input Type | Description | Best Use Case |
|---|---|---|
| **Text Field** | Allows the technician to type a short, open-ended text response. | Logging serial numbers, specific part names, or brief observation notes. |
| **Checkbox** | A simple toggle box for single-item confirmation. | Basic visual verifications (e.g., "Guards in place," "Area cleaned"). |
| **Number Field** | Strictly limits input to numerical values. | Recording meter readings, temperatures, PSI, or voltage levels. |
| **Single Choice** | Presents a custom list of options, forcing the technician to select exactly one answer. | Status conditions (e.g., "Pass / Needs Repair / Fail"). |
| **Check List** | Presents a custom list of options, allowing the technician to select multiple answers. | Multi-part checks (e.g., "Select all fluids topped off: Oil, Coolant, Brake Fluid"). |
| **Inspect Check** | A standardized condition input format specifically designed for asset inspections. | Routine physical asset condition audits. |
| **Yes-No-N/A** | Provides three pre-built quick-select buttons. Faster than creating a custom Single Choice list. | Standard compliance or safety questions (e.g., "Is the emergency stop functional?"). |
| **Date** | Opens a calendar picker to log a specific day. | Recording expiration dates or part installation dates. |
| **Datetime** | Opens a calendar and clock picker to log both the day and exact time. | Logging the precise moment an issue occurred or a test was completed. |

### Step 5: Configure Conditional Logic *(Optional)*

You can build **dynamic workflows** where specific follow-up tasks only appear if a technician provides a certain answer.

1. **Activate Logic**: On any Task block, click the **Logic Tree icon** (located next to the "Required" toggle).
2. **Set the Condition**: In the shaded block that appears, define your rule using the "When answer is" dropdown. Select a logical operator: **Higher Than**, **Lower Than**, **Equal To**, **Not Equal To**, or **Between**.
3. **Define the Value**: Enter the target value. *(If you select "Between", the system will prompt you to enter two values to create a range.)*
4. **Add Sub-Tasks**: Click the **+** icon inside the shaded logic block to create follow-up tasks. These nested tasks will remain **hidden** from the technician unless the initial condition is met.

### Step 6: Preview and Save

Use the toggle switch at the top right of the builder to switch workspace mode:

- **EDITOR** — The default mode for building and configuring input blocks.
- **PREVIEW** — Shows exactly how the finalized SOP will look to the technician.

Review your workflow in Preview mode to ensure the logic and formatting are correct. Switch back to Editor mode and click **Submit** in the top-right corner to save the template.

---

## How to Duplicate a Procedure Template

Duplicating a template allows you to clone a complex SOP — including all its tasks, input types, and conditional logic — saving you from rebuilding similar workflows from scratch.

### Step 1: Navigate to Procedure Templates
From the main sidebar, expand **Maintenance** and select **Procedure Templates**.

### Step 2: Open the Action Menu
Locate the specific template you want to copy in the list view. Click the **More (⋯)** icon in the far-right column of that row.

### Step 3: Select Duplicate
Click the **Duplicate** option from the dropdown menu.

### Step 4: Review and Modify the Clone
The builder will open with an **exact copy** of the original template's configuration.

:::warning Crucial First Step
Immediately **update the Name** field. If you leave it identical to the original, you will create database confusion and technicians will not know which SOP to select.
:::

- **Adjust Parameters**: Change the Asset or modify the Description to fit the purpose of the new workflow.
- **Tweak the Workflow**: Add, edit, or delete specific tasks and logic conditions to tailor the procedure.

### Step 5: Save the New Template
Once your cloned procedure is fully updated, switch to **PREVIEW** mode to verify the layout, then switch back to **EDITOR** mode and click the **Submit** button. This saves the clone as a distinct new template.

---

## How to Edit a Procedure Template

Follow these steps to update an existing standard operating procedure (SOP) or modify its checklist tasks.

### Step 1: Navigate to Procedure Templates
From the main sidebar, expand **Maintenance** and select **Procedure Templates**.

### Step 2: Open the Edit Builder
Locate the specific procedure you want to modify in the list view (e.g., "Air Compressor Daily Pre-Start Check"). Click the **More (⋯)** icon in the far-right column and select **Edit**.

:::tip
The Edit interface uses the exact same builder tools as the Create interface. Refer back to the **How to Create a Procedure Template** guide for detailed descriptions of Input Types and Conditional Logic.
:::

### Step 3: Modify General Parameters
The builder will open in **EDITOR** mode, pre-filled with the template's current data. You can update:
- **Name**: Update the identifier if the scope of the procedure has changed.
- **Asset**: Reassign the procedure or remove the asset to make it a global template.
- **Types / Description**: Update the category or general safety context.

### Step 4: Modify the Procedure Workflow
Scroll down to adjust the individual blocks (Headings, Callouts, Tasks, and Conditional Logic):
- **Edit Existing Steps**: Click into any existing block to change its text, make it Required, alter its Input Type, or adjust its Logic Tree rules.
- **Add New Steps**: Use the top toolbar (**H**, **!**, **+**) to insert new sections, warnings, or input tasks. The 20-field limit still applies.
- **Delete or Duplicate**: Use the icons on the top right of any block to copy it or permanently delete it from the workflow.

### Step 5: Review and Save
Toggle the workspace to **PREVIEW** mode to ensure your changes and conditional logic paths are formatted correctly. Switch back to **EDITOR** mode and click the **Submit** button to save the updated template.

:::info Operational Note
Updating a Procedure Template **alters the master blueprint**. This change will immediately apply to any future work orders that use this template, but it will **not retroactively alter previously completed work orders**. This ensures your historical maintenance records remain accurate.
:::

---

## How to Delete a Procedure Template

Follow these steps to permanently remove a standard operating procedure (SOP) or checklist from your system.

### Step 1: Navigate to Procedure Templates
From the main sidebar, expand **Maintenance** and select **Procedure Templates**.

### Step 2: Open the Action Menu
Locate the specific procedure you wish to remove in the list view. Click the **More (⋯)** icon in the far-right column of that row.

### Step 3: Select Delete
Click the **Delete** option (represented by the trash bin icon) from the dropdown menu.

:::danger Critical Warning
Deleting a Procedure Template is a **permanent action**.
- **Future Impact**: This template will no longer be available to attach to new Work Orders or Preventive Maintenance triggers.
- **Historical Data**: Deleting the master template generally does **not** erase the data from Work Orders that were already completed using this SOP, ensuring your past compliance records remain intact.
:::

### Step 4: Confirm Deletion
If the system prompts you with a confirmation dialog box to verify your choice, confirm the action to permanently remove the template from your database.
