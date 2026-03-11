---
id: about
title: Acerca de las Órdenes de Trabajo
sidebar_label: Acerca de las Órdenes de Trabajo
sidebar_position: 1
---

# Órdenes de Trabajo

La **Orden de Trabajo** es el motor central de sus operaciones de mantenimiento. Es un registro digital formal y rastreable que autoriza, detalla y supervisa una tarea de mantenimiento específica de principio a fin.

## Ciclo de vida y gestión de estados

### Grupos de estados

| Estado | Estados | Descripción |
|---|---|---|
| **En proceso (Activo)** | Borrador, Abierto, En curso, En espera, En revisión | La Orden de Trabajo está «viva». Los técnicos pueden editar detalles, registrar piezas y ajustar programaciones. |
| **Terminal (Cerrado)** | Completado, Cancelado | La Orden de Trabajo está «muerta». Se convierte en un **registro histórico y financiero bloqueado**. |

### Matriz de transición de estados

| Estado actual | Estado(s) siguiente(s) permitido(s) |
|---|---|
| **Borrador** | Abierto |
| **Abierto** | En curso |
| **En curso** | En espera, En revisión, Completado, o Cancelado |
| **En espera** | En curso, En revisión, Completado, o Cancelado |
| **En revisión** | En curso, Completado, o Cancelado |
| **Completado** | *(Bloqueado)* — Finaliza costes de mano de obra y deduce inventario permanentemente. |
| **Cancelado** | *(Bloqueado)* — Solo lectura. No se puede editar nada. |

### Salvaguardas del sistema

**Regla A:** El sistema **no** permitirá completar una Orden de Trabajo si utiliza piezas que no tiene en stock.

**Regla B:** En cuanto una Orden de Trabajo se marca como **Completada** o **Cancelada**, el perfil completo se vuelve estrictamente de **solo lectura**.

**Regla C:** Los Administradores del sistema pueden configurar una anulación que permita a los usuarios autorizados reabrir Órdenes de Trabajo cerradas a través de **Portal de Administración > Configuración del inquilino > Permisos operativos**.
