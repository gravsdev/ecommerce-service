# Servicio E-Commerce

<img width="80" src="https://skillicons.dev/icons?i=nodejs,express,mongo" />

La API REST de Servicio de E-Commerce te permite gestionar información de usuarios, tener un catálogo de productos, realizar pedidos y compras, en un entorno de comercio electrónico.

- [Requisitos](#requisitos)
- [Configuración](#configuración)
- [Uso](#uso)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)

## Requisitos

Asegúrate de tener instalado lo siguiente antes de comenzar:

- Node.js
- npm (Administrador de paquetes de Node.js)
- MongoDB (Base de datos)
- Postman (opcional, para probar las solicitudes)

## Configuración

1. **Clonar el Repositorio:**

   Para comenzar, clona el repositorio en tu entorno de desarrollo utilizando el siguiente comando:

   ```bash
   git clone <URL_DEL_REPOSITORIO>
   ```

2. **Instalar Dependencias:**

   Una vez que hayas clonado el repositorio, instala las dependencias requeridas mediante npm:

   ```bash
   npm install
   ```

3. **Configuración de Variables de Entorno:**

   La configuración de la aplicación se gestiona a través de variables de entorno. Para asegurarte de que la aplicación funcione correctamente, configura las siguientes variables de entorno antes de iniciarla:

   - Variables del servidor:

     - `SERVER_PORT`: Define el puerto en el cual el servidor se ejecutará.
     - `ALLOWED_ORIGINS`: Define los dominios o URL permitidos que pueden acceder a tu API.
     - `ALLOWED_METHODS`: Define los métodos HTTP permitidos para las solicitudes a tu API.
     - `ALLOWED_HEADERS`: Especifica los encabezados HTTP que se permiten en las solicitudes.

   - Variables de la base de datos:

     - `DB_USER`: Debes proporcionar el nombre de usuario de la base de datos MongoDB que tu aplicación utilizará.
     - `DB_PASS`: Es la contraseña asociada al nombre de usuario para autenticarse en la base de datos.
     - `DB_HOST`: La dirección o ubicación del servidor de la base de datos.
     - `DB_PORT`: El puerto en el que la base de datos MongoDB está escuchando las solicitudes de conexión.
     - `DB_NAME`: El nombre de la base de datos que tu aplicación utilizará para almacenar datos.
     - `DB_SSL_MODE`: Indica si se utilizará SSL para la conexión con la base de datos. Puede ser "enable" para habilitar SSL o "disable" para deshabilitarlo.

   - Variables de autenticación:

     - `SECRET_AUTH_KEY`: Debe ser una cadena segura y secreta para garantizar la seguridad de la autenticación en tu aplicación.

   Puedes configurar estas variables de entorno en un archivo `.env` en la raíz del proyecto o directamente en tu entorno de desarrollo.

   **Ejemplo de archivo `.env`:**

   ```toml
   # Configuración del Servidor HTTP
   SERVER_PORT=3000
   ALLOWED_ORIGINS=*
   ALLOWED_METHODS=GET,HEAD,POST,PUT,PATCH,DELETE
   ALLOWED_HEADERS=Content-Type,Authorization,Custom-Headers

   # Configuración de la Base de Datos MongoDB
   DB_USER=mongo
   DB_PASS=password
   DB_HOST=localhost
   DB_PORT=27017
   DB_NAME=test_db
   DB_SSL_MODE=disable

   # Clave Secreta para Token de Autenticación
   SECRET_AUTH_KEY=your-jwt-secret-key
   ```

   Asegúrate de proporcionar la información correcta en estas variables de entorno para que la aplicación funcione según tus necesidades.

4. **Iniciar la Aplicación:**

   Con la configuración de las variables de entorno completada, puedes iniciar la aplicación ejecutando el siguiente comando:

   ```bash
   npm start
   ```

   La aplicación estará lista para recibir solicitudes una vez que se haya iniciado con éxito.

   Recuerda mantener seguras tus variables de entorno y no compartirlas en repositorios públicos.

## Uso

- [Documentación de la API](docs/API.md)

## Contribuciones

Si deseas contribuir a este proyecto, por favor abre un problema o envía una solicitud de extracción.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE.md) para obtener más detalles.

## Contacto

<!-- Si tienes preguntas o necesitas ayuda, no dudes en ponerte en contacto con nosotros en [contacto@novacors.pe](mailto:contacto@novacors.pe) o visita nuestra pagina [novacors](https://www.novacors.pe). -->

Si tienes preguntas o necesitas ayuda, no dudes en contactarnos:

- Sitio web : [novacors.pe](https://www.novacors.pe)
- Correo electrónico: [contacto@novacors.pe](mailto:contacto@novacors.pe)

¡Gracias por usar nuestra API REST de Servicio de E-Commerce!
