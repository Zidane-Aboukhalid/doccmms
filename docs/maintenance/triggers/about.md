---
id: about
title: About Triggers
sidebar_label: About Triggers
sidebar_position: 1
description: Learn what Triggers are in UniCMMS and how Meter Triggers and Time Triggers help automate maintenance workflows.
keywords: [UniCMMS, triggers, automation, meter triggers, time triggers, preventive maintenance]
---

# Triggers

## About Triggers

In UniCMMS, the **Triggers** module is the centralized hub for your automation rules. It allows you to define exactly **when** critical system events should automatically occur.

By managing Triggers as an independent module, UniCMMS gives you ultimate flexibility. Instead of rebuilding automation rules from scratch for individual records, you can build a **standardized library of triggers** and link them to various supported modules across your system.

To support different operational strategies, you can build two types of automation rules:

### 1. Time Triggers (Scheduler)
Time Triggers automate actions based on **strict calendar or clock intervals**. Powered by highly precise scheduling logic (cron expressions), these triggers ensure system events occur at exact, recurring moments, regardless of asset usage.

> **Example:** You create a Time Trigger for "Every Monday at 08:00 AM." You can then link this single trigger to multiple different automated workflows across your facility, ensuring everything executes at the exact same time.

### 2. Meter Triggers
Meter Triggers automate actions based on the **physical reality of your equipment**. These triggers actively monitor the numerical data you are logging in the Meters module. You define a specific threshold (the condition), and the moment a technician logs a reading that hits that threshold, the Trigger instantly fires its signal.

> **Example:** You create a Meter Trigger with the rule: "Reading exceeds 15,000 kWh." Once linked to an active module, the system will autonomously execute the associated action the exact moment that energy threshold is reached.

---

## Meter Trigger Condition Logic

UniCMMS evaluates incoming meter readings against the following logical conditions. You must understand the **"Reset Requirement"** to prevent the system from firing duplicate actions for a single event.

| Condition | System Logic | Reset Requirement |
|---|---|---|
| **is above** | Executes when the entered reading is **higher** than the set threshold. | ✅ Yes: Reading must drop below the threshold before it can trigger again. |
| **is below** | Executes when the entered reading is **lower** than the set threshold. | ✅ Yes: Reading must rise above the threshold before it can trigger again. |
| **is equal to** | Executes every time the entered reading is **exactly equal** to the set threshold. | ❌ No: Triggers on every exact match. |
| **increases by** | Executes every time the total meter reading increases by the set threshold value. | ❌ No: Continuous interval from the last trigger point. |
| **decreases by** | Executes every time the total meter reading decreases by the set threshold value. | ❌ No: Continuous interval from the last trigger point. |
| **increases by** *(Spike Model)* | Executes when the difference between the last reading and the one before it **increases** by the set value. | ❌ No: Evaluates every new reading strictly against the one right before it. |
| **decreases by** *(Spike Model)* | Executes when the difference between the last reading and the one before it **decreases** by the set value. | ❌ No: Evaluates every new reading strictly against the one right before it. |
