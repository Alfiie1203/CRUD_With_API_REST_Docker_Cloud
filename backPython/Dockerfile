# Establecemos la imagen base con Python
# De esta manera, evitamos tener que instalar manualmente Python.
FROM python:latest
# Establecemos el directorio de trabajo en el contenedor,
# es decir, a partir de ahora, trabajaremos sobre este directorio.
# Debemos considerar que esto h a r un cambio de directorio.
WORKDIR /app
# Instalamos las dependencias de la aplicacion
# En este caso, solo necesitaremos Flask y el conector a MySQL.
RUN pip install Flask mysql-connector-python
RUN pip install flask-cors
# Copiamos el codigo fuente de la aplicacion al contenedor
# Esto incluye tanto el archivo app.py como formulario.html
COPY back.py app/
# Exponemos el puerto 5000 para Flask
# Esto no abre el puerto, simplemente es una forma de documentacion,
# Explica que el puerto e s t abierto.
EXPOSE 5000
# Finalmente, declaramos el comando a ejecutar por defecto al lanzar, el contenedor.
# Comando por defecto al ejecutar el contenedor
CMD ["python", "app/back.py"]