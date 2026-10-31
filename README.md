# evidencia3_pindola4
# Sistema de Gestión de Carrito de Compras

Un script sencillo orientado a objetos escrito en JavaScript (ES6) que simula el funcionamiento de una tienda en línea. Permite gestionar productos, añadirlos al carrito de un usuario, calcular totales de compra y procesar el pago.

## 🚀 Características

* **Modelado Orientado a Objetos**: Estructurado mediante clases interconectadas (`Producto`, `Carrito` y `Usuario`).
* **Cálculo Dinámico**: Cálculo automático de subtotales por producto y totals del carrito utilizando métodos declarativos (`reduce`).
* **Flujo Completo de Usuario**: Asociación directa de carritos a usuarios específicos y gestión del ciclo de vida del carrito (limpieza posterior a la compra).

## 📁 Archivos del Proyecto

* `compras.js`: Contiene la definición de todas las clases y el flujo de prueba principal.

## 🛠️ Requisitos e Instalación

No requiere dependencias externas ni compiladores especiales. Puedes ejecutar el archivo en cualquier entorno con soporte para JavaScript (ES6+):

* Navegador web (Consola de Developer Tools).
* Node.js (v12 o superior).

### Ejecución con Node.js

```bash
node compras.js
