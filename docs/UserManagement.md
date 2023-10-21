# Gestión de Usuarios

- [Inicio de Sesión](#inicio-de-sesión-login)
- [Registro de Usuarios](#registro-de-usuarios)
- [Actualizar Perfil de Usuario](#actualización-de-perfil-de-usuario)
- [Accerder Perfil de Usuario](#acceder-al-perfil-de-usuario)

## Inicio de Sesión

Para iniciar sesión y obtener un token de autenticación válido que te permita realizar operaciones de [actualizar tú perfil](#actualización-de-perfil-de-usuario) y [acceder a tú perfil](#acceder-al-perfil-de-usuario), realiza una solicitud POST a la siguiente ruta:

```bash
POST /api/e/sign/in
```

**Parámetros de la Solicitud:**

A continuación, se describen los parámetros necesarios para realizar la solicitud:

- `email`: La dirección de correo electrónico asociada a tu cuenta.
- `password`: Tu contraseña de usuario.

**Ejemplo de Solicitud:**

```json
{
  "email": "tu-correo@mail.com",
  "password": "tu-contrasena-secreta"
}
```

Después de realizar con éxito la solicitud de inicio de sesión, recibirás un token de autenticación en la respuesta. Este token se utiliza para verificar la autorización del usuario al realizar las solicitudes de _`actualizar el perfil`_ y _`acceder al perfil`_.

**Uso del Token:**

Para actualizar el perfil o acceder al perfil, realiza las solicitudes correspondientes, asegurándote de incluir el token de autenticación en el encabezado de la solicitud de la siguiente manera:

```makefile
Authorization: Bearer <Tu-Token-De-Autorizacion>
```

Sin embargo, ten en cuenta que para otras solicitudes que no requieran este nivel de autorización, como solicitudes de lectura de datos o acciones menos sensibles, no será necesario proporcionar este token de autorización. Para esas solicitudes, se pueden utilizar tokens de acceso diferentes o no se requieren tokens en absoluto.

## Registro de Usuarios

Para registrar un nuevo usuario, realiza una solicitud POST a la siguiente ruta:

```bash
POST /api/e/user/sign/up
```

**Parámetros de la Solicitud:**

A continuación, se describen los parámetros necesarios para realizar la solicitud:

- `email`: La dirección de correo electrónico del usuario.
- `password`: La contraseña del usuario. Debe cumplir con los siguientes requisitos de seguridad:
  - Debe contener al menos 8 caracteres.
  - Debe incluir al menos una letra mayúscula y una minúscula.
  - Debe contener al menos un dígito.
  - Debe tener al menos un carácter especial, como un símbolo o un signo de puntuación.
- `image` (opcional): La ruta de la imagen del usuario.
- `firstName`: El nombre del usuario. Debe contener solo letras y espacios.
- `lastName` (opcional): Los apellidos del usuario.

**Ejemplo de Solicitud:**

```json
{
  "email": "user@mail.com",
  "password": "pA55=w0rd", // contraseña valida
  "image": "/ruta/de/imagen.jpg",
  "details": {
    "firstName": "Nombre de Usuario",
    "lastName": "Apellidos del Usuario"
  }
}
```

## Actualización de Perfil de Usuario

Para actualizar el perfil de un usuario existente, realiza una solicitud PUT a la siguiente ruta:

```bash
PUT /api/e/user/:id
```

Ten en cuenta que debes iniciar sesión y proporcionar un token válido en el encabezado de la solicitud para llevar a cabo la actualización. Si aún no has iniciado sesión, puedes hacerlo siguiendo la [solicitud de inicio de sesión](#inicio-de-sesión).

**Parámetros de la Solicitud:**

A continuación, se describen los parámetros necesarios para realizar la solicitud de actualización de usuario. Ten en cuenta que el campo `email` no es modificable, y todos los demás datos no opcionales deben proporcionarse para llevar a cabo la actualización.

- `email`: La dirección de correo electrónico del usuario. (No se puede modificar).
- `password`: La contraseña del usuario. Debe cumplir con los siguientes requisitos de seguridad:
  - Debe contener al menos 8 caracteres.
  - Debe incluir al menos una letra mayúscula y una minúscula.
  - Debe contener al menos un dígito.
  - Debe tener al menos un carácter especial, como un símbolo o un signo de puntuación.
- `image` (opcional): La ruta de la imagen del usuario.
- `firstName`: El nombre del usuario. Debe contener solo letras y espacios.
- `lastName` (opcional): Los apellidos del usuario.

**Ejemplo de Solicitud:**

```json
{
  "email": "user@mail.com", // No se puede modificar
  "password": "pA55=w0rd", // Contraseña válida
  "image": "/ruta/de/imagen.jpg",
  "details": {
    "firstName": "Nombre de usuario modificado",
    "lastName": "Apellidos del usuario modificados"
  }
}
```

## Acceder al Perfil de Usuario

Para ver el perfil de un usuario existente, realiza una solicitud GET a la siguiente ruta:

```bash
GET /api/e/user/:id
```

**Parámetros de la solicitud:**

- `id`: ID único del usuario cuyo perfil se desea ver.

**Ejemplo de Respuesta:**

```json
{
  "_id": "ID_DEL_USUARIO",
  "email": "CORREO_ELECTRONICO",
  "password": "",
  "isOwner": false,
  "image": "FOTO_DE_PERFIL",
  "details": {
    "firstName": "NOMBRE_DE_USUARIO",
    "lastName": "APELLIDOS_DEL_USUARIO"
  }
}
```

Utiliza la solicitud GET y proporciona el ID del usuario cuyo perfil deseas ver. Ten en cuenta que para realizar acciones de modificación en el perfil, debes iniciar sesión y proporcionar un token de autorización, como se explica en la [Solicitud de Inicio de Sesión](#inicio-de-sesión).
