# Argos Frontend Config

Shared frontend configuration package for Argos UI projects.
Provides reusable Tailwind, PostCSS, and TypeScript base settings.

## Exports

- `@argos/frontend-config/postcss`
- `@argos/frontend-config/tailwind`
- `@argos/frontend-config/tsconfig`

## Usage

### Tailwind

```ts
import { makeTailwindConfig } from "@argos/frontend-config/tailwind";

export default makeTailwindConfig(["./src/**/*.{ts,tsx,js,jsx}"]);
```

### PostCSS

```js
import config from "@argos/frontend-config/postcss";

export default config;
```

### TypeScript

```json
{
  "extends": "@argos/frontend-config/tsconfig"
}
```
