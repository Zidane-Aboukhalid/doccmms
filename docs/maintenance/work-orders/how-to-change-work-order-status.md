---
id: how-to-change-work-order-status
title: How to Change a Work Order Status
sidebar_label: Change Work Order Status
sidebar_position: 6
---

# How to Change a Work Order Status

To move a task through the workflow (e.g., from "Open" to "In Progress"):

1. Navigate to **Maintenance > Work Orders**. Locate your Work Order in the list view.
2. Click the **More (⋯)** icon in the far-right column, and hover over **Mark as >**.
3. The secondary menu will display only the **allowed statuses** based on the Transition Matrix. Click the appropriate status to update the record.

## The "Completed" Trigger: Financials and Inventory

Changing a Work Order to **Completed** is the most critical event in the workflow.

### Step 1: Confirm Completion
When you select **Completed** from the "Mark as" menu, the system shows a **Confirm Completion** modal. You must provide:

| Field | Instruction | Required |
|---|---|---|
| **Duration** | Enter the total, final time spent executing the job. | ✅ Yes |
| **End Date** | Select the exact calendar date and time the labor concluded. | ✅ Yes |

### Step 2: Review Labor Costs
The bottom half of the modal automatically calculates the exact financial cost of the labor per assigned technician (Hours × Hourly Rate + Overtime = Total Cost).

### Step 3: Submit and Trigger Deductions
Click **Submit**. At this exact moment, the system **finalizes labor costs** and **permanently deducts** all items in the "Parts and Supplies" tab from your live warehouse inventory.
