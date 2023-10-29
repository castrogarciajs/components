# Qwik UI⚡️

---

## Project Structure

Inside your project, you'll see the following directories and files:

```
├── doc/
│   └── ...
└── src/
    ├── components/
    │   └── ...
    └── index.ts
```

- `src/components`: Recommended directory for components.
- `index.ts`: The entry point of your component library, make sure all the public components are exported from this file.

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
