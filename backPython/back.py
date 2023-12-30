from flask import Flask, request, jsonify
from flask_cors import CORS
import logging as log
import mysql.connector

log.basicConfig(level=log.INFO)
app = Flask(__name__)
CORS(app)

# Configura la conexión a la base de datos MySQL
db_config = {
    'host': 'mydatabase',  # Definido en el docker-compose en la sección posterior
    'user': 'root',
    'password': 'password',
    'database': 'mydatabase'
}

def execute_query(query, params=None, fetch_one=False):
    try:
        # Conecta a la base de datos MySQL
        conn = mysql.connector.connect(**db_config)
        cursor = conn.cursor()

        # Ejecuta la consulta
        cursor.execute(query, params)

        if fetch_one:
            result = cursor.fetchone()
        else:
            result = cursor.fetchall()

        # Realiza commit y cierra la conexión
        conn.commit()
        conn.close()

        return result

    except Exception as e:
        log.warning("Error executing query: %s" % e)
        return None

@app.route('/ventas', methods=['GET'])
def get_ventas():
    # Obtiene todas las ventas
    query = "SELECT * FROM ventas"
    ventas = execute_query(query)
    if ventas:
        return jsonify(ventas)
    else:
        return jsonify({"message": "Error al obtener las ventas"}), 500

@app.route('/ventas/<int:venta_id>', methods=['GET'])
def get_venta(venta_id):
    # Obtiene una venta por ID
    query = "SELECT * FROM ventas WHERE id_venta = %s"
    venta = execute_query(query, (venta_id,), fetch_one=True)
    if venta:
        return jsonify(venta)
    else:
        return jsonify({"message": "Venta no encontrada"}), 404

@app.route('/ventas', methods=['POST'])
def create_venta():
    # Crea una nueva venta
    data = request.get_json()
    id_cliente = data.get('id_cliente')
    id_producto = data.get('id_producto')
    id_vendedor = data.get('id_vendedor')
    cantidad = data.get('cantidad')
    fecha_venta = data.get('fecha_venta')

    query = "INSERT INTO ventas (id_cliente, id_producto, id_vendedor, cantidad, fecha_venta) VALUES (%s, %s, %s, %s, %s)"
    params = (id_cliente, id_producto, id_vendedor, cantidad, fecha_venta)
    
    execute_query(query, params)
    return jsonify({"message": "Venta creada exitosamente"})

@app.route('/ventas/<int:venta_id>', methods=['PUT'])
def update_venta(venta_id):
    # Actualiza una venta por ID
    data = request.get_json()
    cantidad = data.get('cantidad')
    fecha_venta = data.get('fecha_venta')

    query = "UPDATE ventas SET cantidad = %s, fecha_venta = %s WHERE id_venta = %s"
    params = (cantidad, fecha_venta, venta_id)

    execute_query(query, params)
    return jsonify({"message": "Venta actualizada exitosamente"})

@app.route('/ventas/<int:venta_id>', methods=['DELETE'])
def delete_venta(venta_id):
    # Elimina una venta por ID
    query = "DELETE FROM ventas WHERE id_venta = %s"
    params = (venta_id,)

    execute_query(query, params)
    return jsonify({"message": "Venta eliminada exitosamente"})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)