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

INSERT INTO clientes (nombre, email, telefono, direccion) VALUES
('Juan Pérez', 'juan.perez@email.com', '555-1234', 'Av. Principal 123'),
('María Rodríguez', 'maria.rodriguez@email.com', '555-5678', 'Calle Secundaria 456'),
('Abelardo Leon', 'abelardo.leon@email.com', '555-5778', 'Calle Secundaria 456'),
('Luis Leon', 'luis.leon@email.com', '555-5778', 'Calle Secundaria 456'),
('Vicente Leon', 'vicente.leon@email.com', '555-5778', 'Calle Secundaria 456'),
('Amen Leon', 'amen.leon@email.com', '555-5778', 'Calle Secundaria 456'),
('Manuel Leon', 'manuel.leon@email.com', '555-5778', 'Calle Secundaria 456'),
('Antonio Leon', 'antonio.leon@email.com', '555-5778', 'Calle Secundaria 456'),
('Paola Leon', 'paola.leon@email.com', '555-5778', 'Calle Secundaria 456'),
('Cristina Leon', 'cristina.leon@email.com', '555-5778', 'Calle Secundaria 456');

INSERT INTO productos (nombre, precio, stock) VALUES
('Laptop HP', 899.99, 10),
('Smartphone Samsung', 599.99, 15),
('Laptop Dell', 899.99, 12),
('Tablet Apple', 499.99, 20),
('Smartwatch Fitbit', 129.99, 8);

INSERT INTO vendedores (nombre, email, telefono, direccion) VALUES
('Pedro Gómez', 'pedro.gomez@email.com', '555-9876', 'Ruta 7, Km 89'),
('Ana Martínez', 'ana.martinez@email.com', '555-4321', 'Avenida Central 789');

INSERT INTO ventas (id_cliente, id_producto, id_vendedor, cantidad, fecha_venta) VALUES
(1, 1, 1, 3, '2023-01-05'),
(2, 2, 2, 4, '2023-01-05'),
(3, 3, 1, 10, '2023-01-05'),
(4, 4, 2, 6, '2023-01-05'),
(5, 5, 1, 7, '2023-01-05'),
(6, 1, 2, 9, '2023-01-05'),
(7, 2, 1, 2, '2023-01-05'),
(8, 3, 2, 1, '2023-01-05'),
(9, 4, 1, 4, '2023-01-06');
