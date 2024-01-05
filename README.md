# Proyecto CRUD con Dockerización y Orquestación de Contenedores

Este proyecto implementa un sistema de gestión CRUD (Crear, Leer, Actualizar, Eliminar) con una arquitectura basada en contenedores Docker y orquestación utilizando Docker Compose. La aplicación consta de tres componentes principales: una base de datos MySQL, un backend desarrollado en Python con Flask y un frontend desarrollado en Angular.

## Estructura del Proyecto

```
app/
│
├── database/
│   ├── Dockerfile
│   └── database.sql
│
├── BackPython/
│   ├── Dockerfile
│   └── back.py
│
└── FrontAngular/
    └── angularProyect/
        ├── Dockerfile
        └── ... (proyecto Angular)
```

## Base de Datos

### Descripción:

La base de datos MySQL almacena información sobre clientes, productos, vendedores y ventas. La estructura se define en el archivo `database.sql`, y la inicialización se realiza a través del Dockerfile.

### Configuración Docker:

- Imagen: `mysql:latest`
- Variables de Entorno:
  - `MYSQL_DATABASE=mydatabase`
  - `MYSQL_ROOT_PASSWORD=password`
  - `MYSQL_USER=test`
  - `MYSQL_PASSWORD=password`
- Puerto Externo: `3306`

## Backend (Python Flask)

### Descripción:

El backend, desarrollado en Python con Flask, proporciona servicios API RESTful para realizar operaciones CRUD en la base de datos. Se encuentra en la carpeta `BackPython`.

### Configuración Docker:

- Imagen: `python:latest`
- Dependencias: Flask, mysql-connector-python, flask-cors
- Puerto Externo: `5000`

## Frontend (Angular)

### Descripción:

El frontend, desarrollado en Angular, consume los servicios del backend y presenta la interfaz de usuario para interactuar con el sistema. Se encuentra en la carpeta `FrontAngular/angularProyect`.

### Configuración Docker:

- Imagen: `nginx:latest`
- Puerto Externo: `80`

## Docker Compose

El archivo `docker-compose.yml` orquesta la ejecución de los tres servicios (base de datos, backend y frontend) y establece redes para la comunicación entre ellos.

## Instrucciones de Ejecución

1. Clonar el repositorio: `git clone https://github.com/Alfiie1203/CRUD_Docker_Cloud.git`
2. Navegar al directorio del proyecto: `cd app`
3. Ejecutar: `docker-compose up -d`
4. Acceder al frontend en [http://localhost](http://localhost)
5. Acceder al backend en [http://localhost:5000](http://localhost:5000)

## Colaboración y Gestión de Versiones

El desarrollo se llevó a cabo utilizando Git y GitHub. Se crearon ramas específicas para el backend y frontend, siguiendo un flujo de trabajo basado en GitFlow. Los commits y merges se realizaron de manera estructurada, facilitando la colaboración y la gestión de versiones.

## Desafíos Superados

Durante el desarrollo, se superaron desafíos como la gestión de versiones, escalabilidad y seguridad. Estrategias como ramificación en Git, optimización de código y prácticas de seguridad permitieron superar estos desafíos de manera efectiva.

## Resultados y Conclusiones

El proyecto ha sido exitoso en la implementación de un sistema CRUD con Dockerización y Orquestación de Contenedores. Los resultados satisfactorios demuestran la capacidad del equipo para abordar desafíos y sentar las bases para futuros proyectos en el ámbito de la gestión de datos y la computación en la nube.
