---
id: understanding-hierarchy
title: Understanding the Hierarchy Module
---

While the individual Facilities and Assets modules provide flat lists of your records, the **Hierarchy** module provides a centralized, multi-level relational tree. Instead of just knowing that a machine exists, the Hierarchy shows you exactly where it is located and what it is connected to.

### 1. The Site (The Root Node)
Every hierarchy in UniCMMS begins with a single, foundational root node: the **Site**. The Site represents your overall organization, campus, or primary geographical boundary. Every single Facility and Asset you create in the system must ultimately be nested under this root.

### 2. The Unified Tree Concept
UniCMMS uses a unified architecture. This means physical locations (**Facilities**) and physical equipment (**Assets**) live together in the exact same view beneath the Site. This allows maintenance teams to trace a problem from a massive building down to a single motor in one glance.

### 3. Strict Nesting Rules
To accurately mirror your real-world operations, the system allows infinite levels of nesting below the Site root. You can structure relationships in three distinct ways:

*   **Geographical (Facility > Facility)**: Placing a smaller zone, room, or floor inside a larger building.
*   **Locational (Facility > Asset)**: Assigning a standalone piece of equipment to a specific room or zone.
*   **Mechanical (Asset > Asset)**: Building a Parent/Child equipment profile by placing a sub-component inside a larger machine.

### 4. Real-World Hierarchy Example
To understand how to build your tree step-by-step, look at this standard industrial setup:

*   🌐 **Global Operations Campus** (The Site / Root Node)
    *   ↳ 🏢 **Main Manufacturing Plant** (Top-level Facility)
        *   ↳ 📍 **Production Floor A** (Child Facility)
            *   ↳ ⚙️ **Conveyor System 01** (Parent Asset)
                *   ↳ 🔧 **Primary Drive Motor** (Child Asset)
                *   ↳ 🔧 **Proximity Sensor** (Child Asset)
