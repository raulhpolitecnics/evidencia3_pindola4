/**
 * Representa un producto en el catálogo de la tienda.
 */
class Producto {
  /**
   * Crea una instancia de Producto
   * @param {string} nombre - Nombre descriptivo del producto.
   * @param {number} precio - Precio unitario del producto en euros.
   * @param {number} cantidad - Cantidad inicial del producto.
   */
  constructor(nombre, precio, cantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
  }

  /**
   * Calcula el subtotal multiplicando precio por cantidad.
   * @returns {number} Subtotal del producto.
   */
  calcularTotal() {
    return this.precio * this.cantidad;
  }
}

/**
 * Representa el carrito de compras de un usuario.
 */
class Carrito {
  /**
   * Crea una instancia de Carrito con una lista vacía de productos.
   */
  constructor() {
    /**
     * @type {Producto[]} Array de productos almacenados en el carrito.
     */
    this.productos = [];
  }

  /**
   * Agrega un nuevo producto a la lista del carrito.
   * @param {Producto} producto - Objeto de tipo Producto a añadir al carrito.
   */
  agregarProducto(producto) {
    this.productos.push(producto);
  }

  /**
   * Calcula el total del carrito sumando los subtotales de todos los productos.
   * @returns {number} Total del carrito.
   */
  calcularTotalCarrito() {
    return this.productos.reduce((total, producto) => total + producto.calcularTotal(), 0);
  }

  /**
   * Elimina todos los productos agregados al carrito.
   */
  vaciarCarrito() {
    this.productos = [];
  }
}

/**
 * Representa a un usuario registrado en el sistema.
 */
class Usuario {
  /**
   * Crea una instancia de Usuario.
   * @param {string} nombre - Nombre completo del usuario.
   * @param {string} correo - Correo electrónico de contacto del usuario.
   */
  constructor(nombre, correo) {
    this.nombre = nombre;
    this.correo = correo;
    /** @type {Carrito} Instancia del carrito asociada al usuario */
    this.carrito = new Carrito();
  }

  /**
   * Añade un producto al carrito personal del usuario.
   * @param {Producto} producto - Producto a incluir en el carrito.
   */
  agregarProductoAlCarrito(producto) {
    this.carrito.agregarProducto(producto);
  }

  /**
   * Finaliza el proceso de compra, muestra el importe total por consola y vacía el carrito.
   */
  finalizarCompra() {
    const total = this.carrito.calcularTotalCarrito();
    console.log(`Usuario ${this.nombre} ha realizado una compra por un total de ${total}€`);
    this.carrito.vaciarCarrito();
  }
}

// --- Instanciación y flujo de ejemplo ---

/** @type {Producto} Instancia de producto: Laptop */
const producto1 = new Producto("Laptop", 1200, 1);

/** @type {Producto} Instancia de producto: Mouse */
const producto2 = new Producto("Mouse", 20, 2);

/** @type {Producto} Instancia de usuario principal */
const usuario = new Usuario("Juan", "juan@example.com");

usuario.agregarProductoAlCarrito(producto1);
usuario.agregarProductoAlCarrito(producto2);

usuario.finalizarCompra();
