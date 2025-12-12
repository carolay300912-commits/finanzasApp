"# finanzasApp"  
FinanzasApp:

Esta aplicación móvil desarrollada con Ionic + React + TypeScript para administrar ingresos, gastos, ahorros, deudas y visualizar informes financieros.

Tecnologías utilizadas

Ionic Framework

React + TypeScript

React Router DOM

CSS / Ionic Components

Visual studio code

Node js

Estructura de proyecto para llevar a cabo la cascara de esta app mas las que viene por defecto en al crear el proyecto en visual studio code:

/src

/components

/page

Tab1.css

Tab1.tsx

App.test.tsx

App.tsx

Main.tsx

Index.htm

Instalaciones:

Para llevar a cabo este proyecto se instalaron todos los softwares necesarios, desde la terminal se ejecuto ionic + react, para luego habilitar el puerto //localhost:8100.

Funcionalidades implementas:

La pantalla inicial que se encuentra en tab1 en ella se despliegan las opciones que tendrá esta aplicación de finanzas guiándome por el mapa de navegabilidad y también apoyándome de los wireframes realizados en la unidad2:

/AgregarIngreso

/AgregarGasto

/Ahorros

/AdministrarDeuda

/Deuda

/Informes

/Notificaciones

List item
Navegación con React Router

Incluye redirección automática desde / hacia /inicio.

Estructura 100% operativa para evaluación
Cada vista fue creada con componentes de Ionic para asegurar compatibilidad móvil.

Durante el desarrollo se presentaron algunos desafíos:

Pantalla en blanco al ejecutar en localhost

Problema:
La app cargaba en blanco sin mostrar errores visibles.

Causa:
El archivo index.html estaba cargando main.tsx, pero la estructura original del proyecto había cambiado y Ionic no encontraba correctamente los estilos ni el router.

Solución:
Se revisó:

Importaciones en main.tsx

Enrutamiento en App.tsx

Elemento root en index.html

Finalmente, reiniciar el servidor y reconstruir la estructura de páginas corrigió el error.

También al crear el proyecto venia por defecto tab1 el cual intente realizar el cambio y dejarlo como inicio pero al realizar los cambios correspondientes en cada parte del código donde llamaba dicho archivo tab1 y dejarlo como inicio también me arrojaba la pantalla en blanco, intente varias veces pero persistió tuve que dejar el archivo con ese nombre de la carpeta raíz pero a través del navegador cambio.

Al final mi cascara quedo de la siguiente manera visualmente realice cambios para que se viera de manera mas profesional e importe iconos de ionic y con la ayuda de css.

Aplicaion/Imagen1.png


Parte Parcial – Unidad 4
En esta etapa del proyecto se implementa aproximadamente el 50% del funcionamiento principal de la aplicación, desarrollando las pantallas esenciales para el registro de ingresos, egresos y deudas. A partir de la estructura base (carcasa), se comienzan a integrar los componentes lógicos y funcionales.
AgregarIngreso.tsx
Se implementa la funcionalidad para registrar ingresos dentro de la aplicación.
El módulo permite:
Ingresar una descripción del ingreso
Registrar el monto
Seleccionar una fecha
Guardar el ingreso de manera exitosa
Mostrar la lista de ingresos registrados
Eliminar ingresos cuando sea necesario
Visualizar el total acumulado de ingresos
Todos los datos se almacenan en el estado interno del componente.
AgregarEgresos.tsx
De forma similar al módulo de ingresos, esta sección permite gestionar los egresos del usuario.
Incluye:
Descripción del egreso
Monto
Fecha
Categoría
Opción de guardar un egreso
Opción de eliminar un egreso registrado
Lista completa de egresos almacenados
Cálculo automático del total de egresos
AdminDeuda.tsx
Este módulo gestiona el listado general de deudas registradas.
Permite:
Agregar nuevas deudas
Visualizar el listado completo
Eliminar deudas cuando sea necesario
AgregarDeudaAdmin.tsx
Pantalla dedicada a la creación de nuevas deudas mediante un formulario completo.
Campos disponibles:
Nombre de la deuda
Monto
Fecha
Observación
Cada registro se almacena automáticamente en localStorage, permitiendo persistencia de datos incluso al cerrar la aplicación.
Almacenamiento de Datos
Todos los ingresos, egresos y deudas quedan guardados en:
localStorage, para asegurar persistencia
Listas internas para visualización dinámica
Totales calculados en tiempo real
Estado del Proyecto
Con estas funcionalidades implementadas, la aplicación cuenta con:
Gestión completa de ingresos
Gestión completa de egresos
Administración de deudas
Persistencia local de la información
Cálculos en tiempo real
Esto representa aproximadamente el 50% del avance general del proyecto.
