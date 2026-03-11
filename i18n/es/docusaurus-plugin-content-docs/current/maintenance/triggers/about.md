---
id: about
title: Acerca de los Disparadores
sidebar_label: Acerca de los Disparadores
sidebar_position: 1
description: Conozca qué son los Disparadores en UniCMMS y cómo los Disparadores de Medidor y Temporales automatizan los flujos de mantenimiento.
---

# Disparadores

## Acerca de los Disparadores

En UniCMMS, el módulo de **Disparadores** es el centro centralizado de sus reglas de automatización. Le permite definir exactamente **cuándo** deben ocurrir automáticamente los eventos críticos del sistema.

Al gestionar los Disparadores como un módulo independiente, UniCMMS le proporciona total flexibilidad. En lugar de reconstruir reglas de automatización desde cero para cada registro, puede crear una **biblioteca estándar de disparadores** y vincularlos a los distintos módulos de su sistema.

Para apoyar diferentes estrategias operativas, puede crear dos tipos de reglas de automatización:

### 1. Disparadores Temporales (Programador)
Los Disparadores Temporales automatizan acciones basadas en **intervalos de calendario u horarios estrictos**. Estos disparadores garantizan que los eventos del sistema ocurran en momentos precisos y recurrentes, independientemente del uso de los activos.

> **Ejemplo:** Crea un Disparador Temporal para «Cada lunes a las 08:00 AM». Puede vincular este único disparador a múltiples flujos de trabajo automatizados diferentes.

### 2. Disparadores de Medidor
Los Disparadores de Medidor automatizan acciones basadas en la **realidad física de su equipo**. Estos disparadores monitorean activamente los datos numéricos que registra en el módulo de Medidores. Define un umbral específico (la condición), y en el momento en que un técnico registra una lectura que alcanza ese umbral, el Disparador emite instantáneamente su señal.

> **Ejemplo:** Crea un Disparador de Medidor con la regla: «Lectura supera 15.000 kWh». El sistema ejecutará la acción asociada en el momento en que se alcance ese umbral energético.

---

## Lógica de condiciones del Disparador de Medidor

| Condición | Lógica del sistema | Restablecimiento requerido |
|---|---|---|
| **es superior a** | Se ejecuta cuando la lectura es **mayor** que el umbral. | ✅ Sí: la lectura debe bajar del umbral antes de volver a dispararse. |
| **es inferior a** | Se ejecuta cuando la lectura es **menor** que el umbral. | ✅ Sí: la lectura debe superar el umbral antes de volver a dispararse. |
| **es igual a** | Se ejecuta cada vez que la lectura es **exactamente igual** al umbral. | ❌ No: se activa en cada coincidencia exacta. |
| **aumenta en** | Se ejecuta cada vez que la lectura total aumenta en el valor umbral. | ❌ No: intervalo continuo desde el último punto de disparo. |
| **disminuye en** | Se ejecuta cada vez que la lectura total disminuye en el valor umbral. | ❌ No: intervalo continuo desde el último punto de disparo. |
| **aumenta en** *(Modelo Pico)* | Se ejecuta cuando la diferencia entre las dos últimas lecturas **aumenta** en el valor umbral. | ❌ No: evalúa cada nueva lectura frente a la anterior. |
| **disminuye en** *(Modelo Pico)* | Se ejecuta cuando la diferencia entre las dos últimas lecturas **disminuye** en el valor umbral. | ❌ No: evalúa cada nueva lectura frente a la anterior. |
