import { readFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

import { describe, expect, it } from 'vitest';

describe('jp-90s-park-system.css contract', () => {
  const dir = dirname(fileURLToPath(import.meta.url));
  const css = readFileSync(join(dir, '../src/jp-90s-park-system.css'), 'utf8');

  it('scopes to the JP skin selector', () => {
    expect(css).toContain("html[data-skin='jp-90s-park-system']");
  });

  it('exports map/facility terminal variables', () => {
    for (const token of [
      '--jp-bg-base',
      '--jp-green-hot',
      '--skin-map-grid-color',
      '--sidebar-background',
      '--background',
    ]) {
      expect(css).toContain(token);
    }
  });

  it('excludes host route and component selectors', () => {
    expect(css).not.toMatch(/\/dashboard/i);
    expect(css).not.toMatch(/AppSidebar/);
    expect(css).not.toMatch(/data-nextjs/i);
  });
});
