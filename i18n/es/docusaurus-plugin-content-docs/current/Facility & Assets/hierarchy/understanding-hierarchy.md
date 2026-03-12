---
id: understanding-hierarchy
title: Entender la Jerarquía
---

Mientras que los módulos de Instalaciones y Activos proporcionan listas planas de sus registros, el módulo **Jerarquía** proporciona un árbol relacional centralizado de varios niveles. En lugar de solo saber que una máquina existe, la Jerarquía le muestra exactamente dónde está ubicada y con qué está conectada.

### 1. El Sitio (El Nodo Raíz)
Cada jerarquía en UniCMMS comienza con un único nodo raíz fundamental: el **Sitio**. El Sitio representa su organización global, campus o límite geográfico principal. Cada instalación y activo que cree en el sistema debe estar finalmente anidado bajo este nodo raíz.

### 2. El Concepto de Árbol Unificado
UniCMMS utiliza una arquitectura unificada. Esto significa que las ubicaciones físicas (**Instalaciones**) y los equipos (**Activos**) conviven en la misma vista bajo el Sitio. Esto permite a los equipos de mantenimiento rastrear un problema desde un edificio enorme hasta un solo motor de un vistazo.

### 3. Reglas de Anidamiento Estrictas
Para reflejar con precisión sus operaciones del mundo real, el sistema permite niveles infinitos de anidamiento bajo la raíz del Sitio. Puede estructurar las relaciones de tres maneras distintas:

*   **Geográfica (Instalación > Instalación)**: Colocar una zona, habitación o planta más pequeña dentro de un edificio más grande.
*   **Locativa (Instalación > Activo)**: Asignar un equipo independiente a una habitación o zona específica.
*   **Mecánica (Activo > Activo)**: Crear un perfil de equipo Padre/Hijo colocando un subcomponente dentro de una máquina más grande.

### 4. Ejemplo de Jerarquía del Mundo Real
Para entender cómo construir su árbol paso a paso, observe esta configuración industrial estándar:

*   🌐 **Campus de Operaciones Globales** (El Sitio / Nodo Raíz)
    *   ↳ 🏢 **Planta de Fabricación Principal** (Instalación de nivel superior)
        *   ↳ 📍 **Área de Producción A** (Instalación hijo)
            *   ↳ ⚙️ **Sistema de Cinta Transportadora 01** (Activo padre)
                *   ↳ 🔧 **Motor de Accionamiento Primario** (Activo hijo)
                *   ↳ 🔧 **Sensor de Proximidad** (Activo hijo)

Al estructurar sus datos de esta manera, si el "Motor de Accionamiento Primario" falla, el sistema sabe automáticamente que afecta al "Sistema de Cinta Transportadora 01" ubicado en el "Área de Producción A" en el "Campus de Operaciones Globales".
