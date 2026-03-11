---
id: how-to-change-work-order-status
title: Cómo cambiar el estado de una Orden de Trabajo
sidebar_label: Cambiar el estado
sidebar_position: 6
---

# Cómo cambiar el estado de una Orden de Trabajo

1. Vaya a **Mantenimiento > Órdenes de Trabajo**. Localice su Orden de Trabajo.
2. Haga clic en **Más (⋯)**, luego pase el cursor sobre **Marcar como >**.
3. El submenú muestra solo los **estados permitidos**. Haga clic en el estado apropiado.

## El disparador «Completado»: Finanzas e inventario

### Paso 1: Confirmar la finalización
Cuando selecciona **Completado**, el sistema muestra un modal **Confirmar finalización**:

| Campo | Instrucción | Requerido |
|---|---|---|
| **Duración** | Introduzca el tiempo total final dedicado a la tarea. | ✅ Sí |
| **Fecha de fin** | Seleccione la fecha y hora exactas en que concluyó el trabajo. | ✅ Sí |

### Paso 2: Revisar costes de mano de obra
La parte inferior del modal calcula automáticamente el coste financiero exacto (Horas × Tarifa horaria + Horas extra = Coste total).

### Paso 3: Enviar
Haga clic en **Enviar**. En ese momento exacto, el sistema **finaliza los costes** y **deduce permanentemente** todos los artículos de «Piezas y Suministros» de su inventario en vivo.
