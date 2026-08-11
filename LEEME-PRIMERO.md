# Jotape Creativo — sitio web

Esta carpeta contiene el sitio completo de Jotape Creativo, listo para guardarlo en un repositorio de GitHub y luego conectarlo con un servicio de publicación como Cloudflare.

## Algo importante

No vas a encontrar un único archivo `index.html`. El sitio está hecho con una tecnología moderna llamada React/Next, que genera automáticamente el HTML cuando se publica.

Los archivos principales están organizados así:

- `app/`: páginas, textos, estructura y estilos del sitio.
- `app/page.tsx`: página de inicio.
- `app/globals.css`: estilos generales.
- `app/proyectos/`: páginas de los proyectos y clientes.
- `public/`: fotografías, logos, videos y demás recursos gráficos.
- `package.json`: instrucciones técnicas para construir y publicar el sitio.

## La forma más sencilla de subirlo a GitHub

Por la cantidad de imágenes y archivos, conviene usar **GitHub Desktop**. No necesitás escribir código.

1. Descomprimí el archivo ZIP que recibiste.
2. Descargá GitHub Desktop desde https://desktop.github.com/ e instalalo.
3. Abrí GitHub Desktop e iniciá sesión con tu cuenta de GitHub.
4. Elegí `File` > `New repository`.
5. En `Name`, escribí `jpcreativo`.
6. Elegí una ubicación fácil de encontrar y presioná `Create repository`.
7. GitHub Desktop te mostrará la carpeta creada. Abrila desde `Repository` > `Show in Explorer` (Windows) o `Show in Finder` (Mac).
8. Copiá **todo el contenido** de esta carpeta dentro de la carpeta del repositorio.
9. Volvé a GitHub Desktop. Abajo a la izquierda, en `Summary`, escribí `Primera versión del sitio`.
10. Presioná `Commit to main`.
11. Presioná `Publish repository`.

Si querés que cualquier persona pueda ver el código, dejalo público. Si preferís reservarlo, desmarcá la opción correspondiente para que sea privado. Ambas opciones sirven para publicarlo después.

## Qué no tenés que hacer todavía

- No hace falta comprar hosting.
- No hace falta crear archivos HTML manualmente.
- No hace falta modificar los DNS de `jpcreativo.com.ar` hasta conectar el repositorio con el servicio de publicación.
- No subas solamente el ZIP a GitHub: primero hay que descomprimirlo y subir su contenido.

## Próximo paso

Cuando el repositorio figure en tu cuenta de GitHub, el próximo paso será conectarlo con Cloudflare y después vincular `jpcreativo.com.ar`. Esa configuración puede hacerse con un plan gratuito.

## Para una persona técnica

El proyecto requiere Node.js 22. Para verificarlo localmente:

```bash
npm install
npm run dev
```

Para generar la versión de producción:

```bash
npm run build
```

