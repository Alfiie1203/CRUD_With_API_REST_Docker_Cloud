FROM mysql:latest
# Establecemos variables de entorno para MySQL
ENV MYSQL_DATABASE=mydatabase
ENV MYSQL_ROOT_PASSWORD=password
ENV MYSQL_USER=test
ENV MYSQL_PASSWORD=password
# Copiamos el script de SQL a la imagen
COPY database.sql /docker-entrypoint-initdb.d/

# Expose port 3306 to outside the container
EXPOSE 3306