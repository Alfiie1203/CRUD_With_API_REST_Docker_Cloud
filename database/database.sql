-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS mydatabase;
USE mydatabase;

-- Tabla de Clientes
CREATE TABLE IF NOT EXISTS clientes (
    id_cliente INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    telefono VARCHAR(15),
    direccion VARCHAR(255)
);

-- Tabla de Productos
CREATE TABLE IF NOT EXISTS productos (
    id_producto INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    precio DECIMAL(10, 2) NOT NULL,
    stock INT NOT NULL
);

-- Tabla de Vendedores
CREATE TABLE IF NOT EXISTS vendedores (
    id_vendedor INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    telefono VARCHAR(15),
    direccion VARCHAR(255)
);

-- Tabla de Ventas
CREATE TABLE IF NOT EXISTS ventas (
    id_venta INT PRIMARY KEY AUTO_INCREMENT,
    id_cliente INT,
    id_producto INT,
    id_vendedor INT,
    cantidad INT NOT NULL,
    fecha_venta DATE NOT NULL,
    FOREIGN KEY (id_cliente) REFERENCES clientes(id_cliente),
    FOREIGN KEY (id_producto) REFERENCES productos(id_producto),
    FOREIGN KEY (id_vendedor) REFERENCES vendedores(id_vendedor)
);

-- Insertar algunos registros de ejemplo

-- Clientes
INSERT INTO clientes (nombre, email, telefono, direccion) VALUES
('Cliente1', 'cliente1@example.com', '123456789', 'Direccion Cliente 1'),
('Cliente2', 'cliente2@example.com', '987654321', 'Direccion Cliente 2');

-- Productos
INSERT INTO productos (nombre, precio, stock) VALUES
('Producto1', 19.99, 50),
('Producto2', 29.99, 30);

-- Vendedores
INSERT INTO vendedores (nombre, email, telefono, direccion) VALUES
('Vendedor1', 'vendedor1@example.com', '111222333', 'Direccion Vendedor 1'),
('Vendedor2', 'vendedor2@example.com', '444555666', 'Direccion Vendedor 2');

-- Ventas
INSERT INTO ventas (id_cliente, id_producto, id_vendedor, cantidad, fecha_venta) VALUES
(1, 1, 1, 5, '2023-01-01'),
(2, 2, 2, 3, '2023-01-02');