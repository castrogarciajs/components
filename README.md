<h1>Qwik UI</h1>

---

## Development

Development mode uses [Vite's development server](https://vitejs.dev/). For Qwik during development, the `dev` command will also server-side render (SSR) the output. The client-side development modules are loaded by the browser.

```
pnpm dev
```

> Note: during dev mode, Vite will request many JS files, which does not represent a Qwik production build.

## Production

The production build should generate the production build of your component library in (./lib) and the typescript type definitions in (./lib-types).

```
pnpm build
```
