---
id: how-to-create-a-procedure-template
title: Cómo crear una Plantilla de Procedimiento
sidebar_label: Crear una Plantilla de Procedimiento
sidebar_position: 2
---

# Cómo crear una Plantilla de Procedimiento

## Paso 1: Acceder a Plantillas de Procedimientos
Desde la barra lateral, expanda **Mantenimiento** y seleccione **Plantillas de Procedimientos**. Haga clic en **+ Crear**.

## Paso 2: Definir los parámetros generales

| Campo | Instrucción | Requerido |
|---|---|---|
| **Nombre** | Introduzca un identificador claro (ej.: «Verificación diaria previa al arranque del compresor»). | ✅ Sí |
| **Activo** | Vincule este procedimiento a un activo específico. Deje en blanco para una plantilla global. | — |
| **Tipos** | Categorice la plantilla (ej.: «Preventivo»). | — |
| **Descripción** | Proporcione instrucciones generales o contexto de seguridad para el técnico. | — |

## Paso 3: Usar la barra de herramientas del constructor
Máximo **20 campos por plantilla**.

| Botón | Función |
|---|---|
| **H (Añadir título)** | Inserta un separador visual para agrupar tareas en secciones distintas. |
| **! (Añadir aviso)** | Inserta un bloque de información no accionable (ej.: aviso de seguridad). |
| **+ (Añadir tarea)** | Inserta un paso accionable que el técnico debe completar. |

## Paso 4: Configurar tareas e inputs
Para cada bloque **Tarea**: introduzca el nombre y descripción, active **Requerido** si es necesario y seleccione el **Tipo de entrada**.

## Paso 5: Lógica condicional *(Opcional)*
1. Haga clic en el **ícono Árbol de lógica** en cualquier tarea.
2. Defina la regla: **Mayor que**, **Menor que**, **Igual a**, **Distinto de**, o **Entre**.
3. Haga clic en **+** dentro del bloque lógico para crear sub-tareas.

## Paso 6: Vista previa y guardar
Verifique en modo **VISTA PREVIA**, luego regrese al modo **EDITOR** y haga clic en **Enviar**.
