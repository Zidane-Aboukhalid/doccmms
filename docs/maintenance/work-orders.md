---
id: work-orders
title: Work Orders
sidebar_label: Work Orders
sidebar_position: 4
description: Learn how to create, manage, and track Work Orders in UniCMMS. Understand the lifecycle, status transitions, and financial tracking.
keywords: [UniCMMS, work orders, maintenance tasks, corrective maintenance, lifecycle, status management, parts, costs]
---

# Work Orders

The **Work Order** is the central engine of your maintenance operations. It is a formal, trackable digital record that authorizes, details, and monitors a specific maintenance task from start to finish.

Whether your team is responding to a sudden equipment breakdown (**Corrective Maintenance**) or executing a routine safety inspection (**Preventive Maintenance**), the Work Order acts as the **single source of truth**. It tells your technicians exactly:
- What needs to be done
- Where to do it
- Who is responsible
- When it is due

...while simultaneously tracking the **financial cost** of the labor and parts.

---

## How to Create a Work Order

Follow these steps to generate an actionable task for your maintenance team, track its schedule, and associate it with specific financial codes.

### Step 1: Navigate to Work Orders
From the main sidebar, expand **Maintenance** and select **Work Orders**. Click the **+ Create** button located in the top-right corner of the dashboard.

### Step 2: Complete the Creation Form

| Field | Instruction | Required |
|---|---|---|
| **Name** | Enter a clear, concise title for the task (e.g., "Replace Primary Air Filter"). | ✅ Yes |
| **Status** | Select the current state of the order. Options typically include Draft or Open. | ✅ Yes |
| **Work On** | Toggle between Assets or Facility, then search for the specific target. | ✅ Yes |
| **Category** | Categorize the nature of the work (e.g., Corrective, Preventive, or Other). | ✅ Yes |
| **Priority** | Select the urgency level: None, Low, Medium, High, or Critical. | ✅ Yes |
| **Types** | Specify the exact maintenance type (e.g., Replacement, Safety, Inspection). | ✅ Yes |
| **Assign to** | Select the specific user or technician responsible for executing the work. | — |
| **Suggested Start Date** | Select the calendar date and exact time the work should begin. | — |
| **Due Date** | Select the absolute deadline date and time for task completion. | — |
| **Estimated Duration** | Input the anticipated working time in Hours and Minutes. | — |
| **Description** | Enter the full diagnostic details or operational instructions. | — |
| **Budget Account** | Select the applicable financial account to track expenses. | — |
| **Charge Department** | Select the internal department responsible for the cost. | — |

:::tip System Admin Tip
Are you missing a specific dropdown option for **Types**, **Budget Account**, or **Charge Department**? These lists are controlled globally. You must add the missing values in the **Reference Data** module first.
:::

### Step 3: Submit the Work Order
Review all entered data for accuracy. Click the **Submit** button at the bottom right of the form to generate the Work Order and immediately notify the assigned technician.

---

## How to Duplicate a Work Order

Duplicating a Work Order allows you to quickly clone a complex or recurring task without manually re-entering all the financial codes, descriptions, and asset links.

### Step 1: Navigate to Work Orders
From the main sidebar, expand **Maintenance** and select **Work Orders**.

### Step 2: Open the Action Menu
Locate the specific Work Order you want to copy in the list view. Click the **More (⋯)** icon in the far-right column of that row.

### Step 3: Select Duplicate
Click the **Duplicate** option from the dropdown menu.

### Step 4: Modify the Cloned Work Order
The system will generate a new Work Order form pre-filled with the original task's exact data.

:::warning Crucial First Step
You **must** update the **Suggested Start Date** and **Due Date**. If you leave the historical dates, your scheduling metrics will be immediately inaccurate.
:::

- **Adjust Identifiers**: Update the Name or Description if this new task has slight variations.
- **Verify Assignment**: Reassign the task if a different technician is handling this instance.

### Step 5: Submit the New Work Order
Review the cloned details for accuracy. Click the **Submit** button at the bottom right of the modal to save this as a distinct, newly generated Work Order.

---

## How to Edit a Work Order

Follow these steps to modify an existing task, such as reassigning a technician, adjusting a deadline, or adding more context.

1. Navigate to **Maintenance > Work Orders**.
2. Locate the specific Work Order. Click the **More (⋯)** icon in the far-right column and select **Edit**.
3. The Edit Work Order form will open, pre-filled with the current task data. Update the necessary fields.
4. Click the **Submit** button to save the updated Work Order.

---

## How to Delete a Work Order

Follow these steps to permanently remove a Work Order from your database.

:::info System Constraint: Permitted Statuses for Deletion
You can only delete a Work Order if its current Status is set to **Draft** or **Open**. Once a Work Order progresses beyond these initial stages (e.g., to "In Progress," "Completed," or "Closed"), the Delete option is permanently locked. This is a strict compliance measure built into the CMMS to prevent the erasure of active labor or completed historical data.
:::

1. Navigate to **Maintenance > Work Orders**.
2. Locate the Work Order. Ensure its status is either **"Draft"** or **"Open"**, then click the **More (⋯)** icon.
3. Click the **Delete** option from the dropdown menu.

:::danger Critical Warning: Audit Trails
Deleting a Work Order is a **permanent action**. If you need to cancel a task that is no longer required, but you still want to keep a record that it was requested, **do not delete it**. Instead, use the **Mark as** function to change its status to **"Cancelled"**.
:::

4. If the system prompts you with a confirmation dialog box, confirm to permanently remove the Work Order.

---

## Work Order Lifecycle and Status Management

A Work Order represents active labor and financial expenditure. To ensure data integrity, the system utilizes a **strict state machine**. A Work Order must move through specific lifecycle phases, and certain status changes will trigger permanent financial and inventory actions.

### 1. Understanding Status Groups

Every Work Order exists in one of two distinct states:

| State | Statuses | Description |
|---|---|---|
| **Processing (Active)** | Draft, Open, In Progress, On Hold, In Review | The Work Order is "alive." Technicians can edit details, log parts, and adjust schedules. No parts are permanently deducted from live warehouse stock yet. |
| **Terminal (Closed)** | Completed, Cancelled | The Work Order is "dead." It becomes a **locked historical and financial record**. |

### 2. The Status Transition Matrix

Users cannot bypass workflow steps. The system restricts status movements to these logical pathways:

| Current Status | Allowed Next Status(es) | System Permissions & Triggers |
|---|---|---|
| **Draft** | Open | Allowed: Edit core details, log parts, adjust schedules. Disallowed: Permanent stock deductions. |
| **Open** | In Progress | Allowed: Edit core details, log parts, adjust schedules. |
| **In Progress** | On Hold, In Review, Completed, or Cancelled | Allowed: Edit core details, log parts, adjust schedules. |
| **On Hold** | In Progress, In Review, Completed, or Cancelled | Allowed: Edit core details, log parts, adjust schedules. |
| **In Review** | In Progress, Completed, or Cancelled | Allowed: Edit core details, log parts, adjust schedules. |
| **Completed** | *(Locked)* | **System Trigger**: Instantly finalizes labor costs and permanently deducts inventory. Requires final Duration and End Date. Blocked if inventory is negative. |
| **Cancelled** | *(Locked)* | Allowed: View historical record. Disallowed: Editing anything (Total Data Lock). |

### How to Change a Work Order Status

To move a task through the workflow (e.g., from "Open" to "In Progress"):

1. Navigate to **Maintenance > Work Orders**. Locate your Work Order in the list view.
2. Click the **More (⋯)** icon in the far-right column, and hover over **Mark as >**.
3. The secondary menu will display only the **allowed statuses** based on the Transition Matrix. Click the appropriate status to update the record.

### The "Completed" Trigger: Financials and Inventory

Changing a Work Order to **Completed** is the most critical event in the workflow. It triggers immediate financial calculations and permanent stock deductions.

#### Step 1: Confirm Completion
When you select **Completed** from the "Mark as" menu, the system will show a **Confirm Completion** modal. You must provide:

| Field | Instruction | Required |
|---|---|---|
| **Duration** | Enter the total, final time spent executing the job. | ✅ Yes |
| **End Date** | Select the exact calendar date and time the labor concluded. | ✅ Yes |

#### Step 2: Review Labor Costs
The bottom half of the modal automatically calculates the exact financial cost of the labor per assigned technician (Hours × Hourly Rate + Overtime = Total Cost). Review this grid for accuracy.

#### Step 3: Submit and Trigger Deductions
Click the **Submit** button. At this exact moment, the system **finalizes the labor costs** and **permanently deducts** all items listed in the "Parts and Supplies" tab from your live warehouse inventory.

### System Safeguards and Edge Cases

#### Rule A: Negative Inventory Prevention

The system will **not** allow you to complete a Work Order if you consume parts you do not have. When you click Submit on the completion form, the system verifies your "Parts and Supplies" list against live stock levels.

- If the required quantity exceeds your available stock, the completion action is **strictly blocked**.
- You will receive a system notification stating the Work Order cannot be completed due to insufficient stock, identifying the exact Part Inventories causing the blockage.
- **Resolution**: You must physically add stock to the system before completing the Work Order.

#### Rule B: The Total Data Lock
The second a Work Order is successfully marked as **Completed** or **Cancelled**, the entire profile becomes **strictly Read-Only**. You are permanently blocked from editing the core details, Procedures, Parts & Supplies, Additional Costs, or Attachments.

#### Rule C: System Admin Override (Reopening Work Orders)
System Administrators can configure a tenant-level override allowing authorized users to reopen closed Work Orders.

**How to Configure Reopen Permissions:**
1. Navigate to **Admin Portal > Tenant Settings** in the main sidebar.
2. Select the **Operational Permissions** tab.
3. Scroll down to the **WORK ORDER** configuration block.
4. Toggle two system overrides:
   - **Allow Opening Completed Work Orders**: Allows authorized users to transition a finalized Work Order back to an active processing state.
   - **Allow Opening Cancelled Work Orders**: Allows authorized users to revive an aborted task.
5. Click the **Update** button at the bottom right to enforce these rules globally.

:::danger Admin Warning: Historical Data Integrity
Reopening a "Completed" task actively **alters finalized operational and financial data**. If your organization requires strict financial compliance, it is highly recommended to leave these settings **disabled**. Instead, use the **Duplicate** function to spin up a new Work Order to finish remaining work.
:::

---

## How to Add a Procedure to a Work Order

While a Work Order tells a technician **what** to fix, a Procedure Template provides the step-by-step checklist of **how** to fix it safely.

### Step 1: Open the Work Order Details
From the main sidebar, expand **Maintenance** and select **Work Orders**. Locate the Work Order you want to update. Click the blue alphanumeric **Code** (e.g., WO12) in the far-left column to open the Work Order's detailed profile.

### Step 2: Navigate to the Procedures Tab
Inside the Work Order profile, look at the internal left-hand navigation menu and click on **Procedures**. Next, click the **+ (Add)** icon located on the far right side of the Procedures panel.

### Step 3: Configure the Procedure Assignment
The **Add Procedure** modal will appear. Complete the fields:

| Field | Instruction | Required |
|---|---|---|
| **Procedure Template** | Select the pre-built checklist you want to attach (e.g., "Air Compressor Daily Pre-Start Check"). | ✅ Yes |
| **Assignee** | Select the specific technician responsible for completing this checklist. | — |

:::info System Logic: The Assignee Dropdown Constraint
The **Assignee** dropdown in this modal does **not** display every user in your system. It is strictly filtered to only show the specific technicians who were assigned to the parent Work Order.

*Example: If you only assigned John and Sarah to this Work Order, the Procedure Assignee dropdown will only show John and Sarah. If the dropdown is empty, you must add assignees to the main Work Order first.*
:::

### Step 4: Save the Attachment
Review your selections. Click the **Submit** button to formally attach the checklist to the Work Order. The assigned technician will now see this procedure as a required task when they open the Work Order.

---

## How to Add Parts and Supplies to a Work Order

To accurately track inventory consumption and maintenance costs, technicians must log the exact parts used to complete a job.

### Step 1: Open the Work Order Details
Locate the specific Work Order (e.g., WO2). Click the blue alphanumeric **Code** to open the task's detailed profile.

### Step 2: Navigate to Parts and Supplies
Inside the Work Order profile, use the internal left-hand menu to select **Parts and Supplies**. Click the **+ (Add)** icon on the far right of this panel.

### Step 3: Select Parts (Two Methods)

**Method A: Use a Part Set (For Standard Kits)**
A "Part Set" is a pre-configured bundle of items frequently used together for a specific routine task.
1. Click the **Select Part Set** dropdown.
2. Choose your kit. The system will automatically populate the required items and default quantities.
3. You must then select the specific **Location** (warehouse, shelf, or bin) from which you are pulling each item.

**Method B: Add Individual Items**
1. Click the **New Item** button.
2. A new blank row will appear. Configure the three required fields:
   - **Part**: Search for and select the specific item.
   - **Location**: Select the physical storage location you are pulling the item from.
   - **Quantity**: Enter the exact number of units consumed.

:::tip Sourcing One Part from Multiple Locations
You can add the same Part to the list multiple times, provided you log the different storage locations you pulled them from.

**Real-World Example:** You need 4 "Heavy Duty V-Belts" for the compressor. Main Cage has only 3, so you take those and get 1 more from Overflow Storage:
- **Row 1**: Part: Heavy Duty V-Belt | Location: Main Cage - Bin 4 | Quantity: 3
- **Row 2**: Part: Heavy Duty V-Belt | Location: Overflow Storage | Quantity: 1
:::

### Step 4: Save the Allocation
Review your item list carefully. Click the **Submit** button. The system will immediately deduct these quantities from your active inventory and add the financial cost of the parts to the Work Order.

---

## How to Log Additional Costs on a Work Order

To calculate the **true total cost** of a maintenance job, you must track expenses that fall outside of standard inventory consumption and internal labor. Use this section to log non-inventory expenses such as equipment rentals, external contractor invoices, shipping fees, or environmental permits.

### Step 1: Navigate to Additional Costs
Inside the Work Order profile (e.g., WO2), use the internal left-hand menu to select the **Additional Costs** tab. Click the **+ (Add)** icon on the far right.

### Step 2: Define the Expense
The **Add Additional Cost** modal will appear. Complete the fields:

| Field | Instruction | Required |
|---|---|---|
| **Additional Cost** | Select the specific category of the expense (e.g., "Hazardous Waste Disposal Fee"). | ✅ Yes |
| **Total Cost** | Enter the exact monetary value of the expense. | ✅ Yes |
| **Note** | Provide context or a vendor reference number. | — |

### Step 3: Save the Record
Review the cost amount and notes for accuracy. Click the **Submit** button. The system will automatically add this value to the Work Order's **cumulative cost analysis**.
