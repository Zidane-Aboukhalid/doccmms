---
id: how-to-duplicate-a-meter
title: Cómo duplicar un Medidor
sidebar_label: Duplicar un Medidor
sidebar_position: 3
---

## Cómo duplicar un Medidor

> **Permiso requerido:** Añadir Medidor

Duplicar un medidor le permite crear rápidamente uno nuevo **copiando la configuración** de un medidor existente.

:::note
Las lecturas históricas y los estados activos de los disparadores **no** se copian al nuevo medidor.
:::

### Paso 1: Localizar el medidor fuente
Vaya a **Mantenimiento > Medidores**. Use la barra de búsqueda o los filtros para encontrar el medidor a copiar.

### Paso 2: Iniciar la duplicación
Seleccione el medidor de la lista. Haga clic en el botón **Duplicar** en la columna de acciones.

### Paso 3: Modificar los parámetros copiados

| Campo | Instrucción | Requerido |
|---|---|---|
| **Nombre** | Actualice el identificador. El sistema normalmente añade « - Copia» al nombre original. | ✅ Sí |
| **Activo** | Reasigne el medidor al equipo correcto si es necesario. | — |
| **Unidad de medida** | Heredada del medidor fuente. Modifique solo si es necesario. | ✅ Sí |
| **Valor de lectura** | Introduzca una lectura inicial para este nuevo medidor. Las lecturas históricas **no** se copian. | ✅ Sí |
| **Descripción** | Heredada del medidor fuente. Actualice para reflejar el contexto del nuevo medidor. | — |

### Paso 4: Finalizar la configuración
Haga clic en **Enviar** para guardar el medidor duplicado.
