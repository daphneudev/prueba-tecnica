First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

*************************************

Se puede hacer login con cualquiera de estos correos registrados, acepta cualquier contraseña (por convención de reqres):

george.bluth@reqres.in — único usuario con rol de administrador

janet.weaver@reqres.in

emma.wong@reqres.in

eve.holt@reqres.in

Cualquier otro correo no registrado en reqres no permitirá iniciar sesión.

Por defecto, la página entra a /posts, la cual muestra todas las publicaciones registradas. El administrador es el único que puede ver el botón para editar los posts. Todos los usuarios pueden agregar publicaciones.

Al dar click en Usuarios (/users) se mostrarán todos los usuarios registrados y también se pueden ver las publicaciones especificas de cada uno.

Al dar click en cualquier publicación, se mostrarán sus comentarios.
