---
id: how-to-create-a-time-trigger
title: Cómo crear un Disparador Temporal
sidebar_label: Crear un Disparador Temporal
sidebar_position: 6
---

# Cómo crear un Disparador Temporal

## Paso 1: Acceder a Disparadores Temporales
Desde la barra lateral, expanda **Mantenimiento** y seleccione **Disparador Temporal**.

## Paso 2: Abrir el formulario de creación
Haga clic en **+ Crear** en la esquina superior derecha.

## Paso 3: Definir los parámetros

| Campo | Instrucción | Requerido |
|---|---|---|
| **Nombre** | Introduzca un identificador descriptivo para esta programación. | ✅ Sí |
| **Recurrencia** | Seleccione el patrón de programación (**Semanal** o **Mensual**). | ✅ Sí |
| **Fecha de inicio** | Seleccione la fecha en que la programación se activa. | — |
| **Fecha de fin** | Seleccione la fecha en que la programación expira. | — |
| **Descripción** | Proporcione contexto sobre el propósito de este disparador. | — |

## Paso 4: Configurar la lógica de recurrencia

**Semanal:**
- **Cada**: Seleccione uno o más días de la semana.
- **A las**: Establezca la hora de ejecución exacta.

**Mensual (Días específicos):**
- **Cada**: Seleccione los meses aplicables.
- **El día**: Seleccione fechas de calendario específicas.
- **A las**: Establezca la hora de ejecución exacta.

**Mensual (Últimos días):**
- **Cada**: Seleccione los meses aplicables.
- **Ejecutar en**: Elija una fecha relativa de fin de mes.
- **A las**: Establezca la hora de ejecución exacta.

## Paso 5: Finalizar y guardar
Haga clic en **Enviar**. El sistema calculará automáticamente la próxima hora de ejecución y la mostrará en la columna **Próxima ejecución**.
