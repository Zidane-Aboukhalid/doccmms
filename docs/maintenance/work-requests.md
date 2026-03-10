---
id: work-requests
title: Work Requests
sidebar_label: Work Requests
sidebar_position: 5
description: Learn how to create, approve, decline, and manage Work Requests in UniCMMS, including internal and guest portal submissions.
keywords: [UniCMMS, work requests, maintenance tickets, approval, guest portal, requester]
---

# Work Requests

A **Work Request** is a formal submission to create a Work Order for maintenance, repairs, or facility issues.

| User Type | How They Submit |
|---|---|
| **Internal Users** | Staff with restricted system access (Requesters) create Work Requests directly from the main application. |
| **External Users** | Administrators can set up web-based **Guest Portals** where individuals without a system account can submit Work Requests. |

### The Approval Process

Maintenance Managers or Administrators must review all incoming requests to either **approve** or **decline** them.

- **Conversion**: Once approved, the Work Request is immediately converted into an active Work Order and can be assigned to a technician.

:::tip When to Skip the Work Request
Only limited "Requester" users are required to use this workflow. **System Administrators and Full Access users** can bypass this inbox and create Work Orders directly, as the approval process is redundant for their permission level.
:::

### The Work Requests Module

The Work Requests dashboard is the centralized inbox for ticket management:

- **For Requesters**: This is where they submit new tickets and track the real-time status of their reported issues.
- **For Administrators**: This is the triage center where they view, filter, approve, or decline all pending submissions.

### Guest Portals

A **Guest Portal** is a standalone, web-based form that allows anyone to report a problem **without needing a user account or login credentials**. Anyone who has the dedicated URL or scans the portal's printed QR code can instantly generate a Work Request.

Administrators can:
- Configure multiple Guest Portals
- Target them to specific machines or facility zones
- Place QR codes directly on equipment

---

## How to Create a Work Request (Internal Users)

For logged-in users with **"Requester"** permissions, follow these steps to log a new maintenance issue for management review.

### Step 1: Navigate to Work Requests
From the main sidebar, expand the **Maintenance** section and select **Work Requests**. Click the **+ Create** button located in the top-right corner of the dashboard.

### Step 2: Detail the Issue

| Field | Instruction | Required |
|---|---|---|
| **Name** | Enter a clear, brief title for the problem (e.g., "Loud vibration and oil leak on main line"). | ✅ Yes |
| **Priority** | Select the perceived urgency of the issue (e.g., Low, Medium, High). | ✅ Yes |
| **Asset** | Search for and select the specific equipment that is malfunctioning. | — |
| **Description** | Provide the full diagnostic details of what you observed, heard, or smelled. | — |
| **Note** | Add any additional administrative context or specific instructions for the reviewer. | — |

:::tip Best Practice: Always Tag the Asset
Even though the Asset field is technically optional, you should **always** attempt to link your request to a specific machine or facility. If you leave this blank, the maintenance manager will have to physically hunt down the issue, which **delays the approval and repair process**.
:::

### Step 3: Submit the Work Request
Review your information for accuracy. Click the **Submit** button to send the Work Request to the manager's queue for review.

---

## How to Edit a Work Request

Before a Work Request is approved or declined, you may need to update its details.

### Step 1: Navigate to Work Requests
From the main sidebar, expand **Maintenance** and select **Work Requests**.

### Step 2: Open the Work Request
Locate the specific Work Request in the list view. Click on the Work Request to open its detail view, or click the **More (⋯)** icon and select **Edit**.

### Step 3: Modify the Details
Update the relevant fields as needed:
- **Name**: Clarify the title of the issue.
- **Priority**: Adjust the urgency if the situation has changed.
- **Asset**: Update or add the affected equipment.
- **Description**: Provide more detailed observations or context.
- **Note**: Add instructions for the reviewing manager.

### Step 4: Save Your Changes
Click the **Submit** button to save the updated Work Request.

---

## How to Approve a Work Request (Conversion)

When you **approve** a Work Request, the system automatically converts it into an active **Work Order** that can be assigned to a technician.

> **Required Permission:** Approve Work Request (typically Maintenance Manager or Administrator)

### Step 1: Navigate to Work Requests
From the main sidebar, expand **Maintenance** and select **Work Requests**. The dashboard will display all pending requests awaiting review.

### Step 2: Open the Action Menu
Locate the specific Work Request you want to approve in the list view. Click the **More (⋯)** icon in the far-right column.

### Step 3: Select Approve
Click the **Approve** option from the dropdown menu.

### Step 4: Complete the Work Order Form
The system will immediately launch the **Create Work Order** form, pre-populated with the relevant data from the Work Request:
- Update and verify all fields (Category, Priority, Types, Assignment, Dates).
- The system inherits the Name, Description, and Asset from the original Work Request.

### Step 5: Submit the Work Order
Click the **Submit** button. The Work Request status will update to **"Approved"** and the Work Order will be created and visible in the Work Orders module.

---

## How to Decline a Work Request

If a maintenance request is not valid, is a duplicate, or cannot be actioned at this time, you can formally decline it.

> **Required Permission:** Decline Work Request (typically Maintenance Manager or Administrator)

### Step 1: Navigate to Work Requests
Navigate to **Maintenance > Work Requests** and locate the Work Request in the dashboard.

### Step 2: Open the Action Menu
Click the **More (⋯)** icon in the far-right column of the specific Work Request row.

### Step 3: Select Decline
Click the **Decline** option from the dropdown menu.

### Step 4: Provide a Reason *(if prompted)*
The system may prompt you to enter a reason for declining. This reason is visible to the requester, providing them with feedback on their submission.

### Step 5: Confirm
Confirm the action. The Work Request status will update to **"Declined"** and the requester will be notified.

---

## How to Delete a Work Request

> **Required Permission:** Delete Work Request (typically Administrator)

Deleting a Work Request permanently removes it from the system.

:::warning
Before deleting, consider whether you need to keep a historical record of the request. If you simply want to remove it from your active queue, **Declining** it (which preserves the record) may be more appropriate than deleting it.
:::

### Step 1: Navigate to Work Requests
Navigate to **Maintenance > Work Requests**.

### Step 2: Open the Action Menu
Locate the specific Work Request in the list view. Click the **More (⋯)** icon in the far-right column.

### Step 3: Select Delete
Click the **Delete** option (trash bin icon) from the dropdown menu.

### Step 4: Confirm Deletion
If the system prompts you with a confirmation dialog, confirm the action to permanently remove the Work Request from the system.
