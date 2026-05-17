# @bstockwelldev/skin-pack-jp-90s-park-system

Portable **JP 90s park system** skin for hosts that use
`html[data-skin="jp-90s-park-system"]` with
`@bstockwelldev/react-skin-system`.

The pack is inspired by 1990s facility-management console mockups: green phosphor text,
metal panel contrast, map-grid overlays, warning yellow accents, and operations-console
copy. It does not ship app routes, component logic, or licensed assets.

## Install (unpublished)

```bash
pnpm add @bstockwelldev/skin-pack-jp-90s-park-system@file:../skin-pack-jp-90s-park-system
pnpm add @bstockwelldev/react-skin-system@file:../react-skin-system
```

## Runtime usage

```ts
import { createSkinRegistry } from '@bstockwelldev/react-skin-system';
import { jp90sParkSystemSkin } from '@bstockwelldev/skin-pack-jp-90s-park-system';

const registry = createSkinRegistry([jp90sParkSystemSkin], {
  storageKey: 'my-app/skin',
  defaultSkin: 'jp-90s-park-system',
});
```

## CSS import

```css
@import '@bstockwelldev/skin-pack-jp-90s-park-system/style.css';
```

## Host contract

The CSS only targets `html[data-skin='jp-90s-park-system']` plus generic
`.skin-*` helper classes. Hosts may opt into `.skin-map-grid`, `.skin-card`, and
`.skin-alert` where appropriate.

## Development

```bash
pnpm install
pnpm run build
pnpm run typecheck
pnpm run test
```

## License

MIT — see `LICENSE`.
