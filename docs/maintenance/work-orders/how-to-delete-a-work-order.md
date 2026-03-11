---
id: how-to-delete-a-work-order
title: How to Delete a Work Order
sidebar_label: Delete a Work Order
sidebar_position: 5
---

# How to Delete a Work Order

Follow these steps to permanently remove a Work Order from your database.

:::info System Constraint: Permitted Statuses for Deletion
You can only delete a Work Order if its current Status is set to **Draft** or **Open**. Once a Work Order progresses beyond these initial stages, the Delete option is permanently locked. This is a strict compliance measure to prevent the erasure of active labor or completed historical data.
:::

1. Navigate to **Maintenance > Work Orders**.
2. Locate the Work Order. Ensure its status is either **"Draft"** or **"Open"**, then click the **More (⋯)** icon.
3. Click the **Delete** option from the dropdown menu.

:::danger Critical Warning: Audit Trails
Deleting a Work Order is a **permanent action**. If you need to cancel a task that is no longer required, but still want to keep a record, **do not delete it**. Instead, use the **Mark as** function to change its status to **"Cancelled"**.
:::

4. Confirm the action in the confirmation dialog to permanently remove the Work Order.
