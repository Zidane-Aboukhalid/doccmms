---
id: about
title: About Work Orders
sidebar_label: About Work Orders
sidebar_position: 1
description: Learn what Work Orders are in UniCMMS and how they manage the full lifecycle of maintenance tasks.
keywords: [UniCMMS, work orders, maintenance tasks, corrective maintenance, lifecycle, status management]
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

## Work Order Lifecycle and Status Management

A Work Order represents active labor and financial expenditure. To ensure data integrity, the system utilizes a **strict state machine**. A Work Order must move through specific lifecycle phases, and certain status changes will trigger permanent financial and inventory actions.

### Understanding Status Groups

Every Work Order exists in one of two distinct states:

| State | Statuses | Description |
|---|---|---|
| **Processing (Active)** | Draft, Open, In Progress, On Hold, In Review | The Work Order is "alive." Technicians can edit details, log parts, and adjust schedules. No parts are permanently deducted from live warehouse stock yet. |
| **Terminal (Closed)** | Completed, Cancelled | The Work Order is "dead." It becomes a **locked historical and financial record**. |

### The Status Transition Matrix

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

### System Safeguards

#### Rule A: Negative Inventory Prevention
The system will **not** allow you to complete a Work Order if you consume parts you do not have. When you click Submit on the completion form, the system verifies your "Parts and Supplies" list against live stock levels.

- If the required quantity exceeds your available stock, the completion action is **strictly blocked**.
- **Resolution**: You must physically add stock to the system before completing the Work Order.

#### Rule B: The Total Data Lock
The second a Work Order is marked as **Completed** or **Cancelled**, the entire profile becomes **strictly Read-Only**.

#### Rule C: System Admin Override (Reopening Work Orders)
System Administrators can configure a tenant-level override allowing authorized users to reopen closed Work Orders via **Admin Portal > Tenant Settings > Operational Permissions**.

:::danger Admin Warning: Historical Data Integrity
Reopening a "Completed" task actively **alters finalized operational and financial data**. If your organization requires strict financial compliance, it is highly recommended to leave these settings **disabled**.
:::
