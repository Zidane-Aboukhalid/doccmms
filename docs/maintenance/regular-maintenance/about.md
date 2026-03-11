---
id: about
title: About Regular Maintenance (PM)
sidebar_label: About Regular Maintenance
sidebar_position: 1
description: Learn what Preventive Maintenance (PM) schedules are in UniCMMS and why they are essential for proactive maintenance operations.
keywords: [UniCMMS, preventive maintenance, PM, scheduled maintenance, regular maintenance, recurring tasks]
---

# Regular Maintenance (Preventive Maintenance)

**Regular Maintenance** (PM) allows you to schedule **recurring, automated maintenance tasks** to keep your equipment running reliably and prevent unexpected breakdowns.

Instead of manually creating a new Work Order every time a routine check is due, a Regular Maintenance schedule automatically generates Work Orders on a predefined interval — whether time-based (every 30 days) or usage-based (every 500 hours on a meter).

## Why Use Preventive Maintenance?

| Corrective Maintenance | Preventive Maintenance |
|---|---|
| Reactive — fix after failure | Proactive — prevent failures |
| Unplanned downtime | Planned, scheduled downtime |
| Higher emergency repair costs | Lower long-term maintenance costs |
| Equipment fails unpredictably | Equipment life extended |

## PM Trigger Types

UniCMMS supports two types of PM triggers:

### Option A: Time-Based Trigger
The PM schedule fires based on a calendar schedule (e.g., every week, every month).

- In the **Trigger** field, select an existing **Time Trigger** from the dropdown (e.g., "Every Monday at 08:00 AM" or "1st of every month").
- The system will automatically generate a new Work Order each time the Time Trigger fires.

:::tip
Time Triggers must be created in **Maintenance > Time Triggers** before they can be linked here.
:::

### Option B: Meter-Based Trigger
The PM schedule fires based on usage data from a Meter (e.g., after every 500 operating hours).

- In the **Trigger** field, select an existing **Meter Trigger** from the dropdown (e.g., "Increases by 500 hours").
- The system will automatically generate a new Work Order each time that meter threshold is crossed.

:::tip
Meter Triggers must be created in **Maintenance > Meter Triggers** before they can be linked here.
:::
