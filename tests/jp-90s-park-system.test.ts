import { describe, expect, it } from 'vitest';

import {
  JP_90S_PARK_SYSTEM_BOOT_LINES,
  JP_90S_PARK_SYSTEM_CSS_SELECTOR,
  JP_90S_PARK_SYSTEM_PALETTE_FLAVOR,
  JP_90S_PARK_SYSTEM_SKIN_ID,
  jp90sParkSystemSkin,
} from '../src/index';

describe('jp90sParkSystemSkin', () => {
  it('exports a stable portable SkinDefinition', () => {
    expect(jp90sParkSystemSkin.id).toBe(JP_90S_PARK_SYSTEM_SKIN_ID);
    expect(jp90sParkSystemSkin.label).toBe('JP 90s Park System');
    expect(jp90sParkSystemSkin.family).toBe('facility-terminal');
    expect(jp90sParkSystemSkin.bootIntroLines).toEqual([
      ...JP_90S_PARK_SYSTEM_BOOT_LINES,
    ]);
    expect(jp90sParkSystemSkin.bootIntroLines?.length).toBeGreaterThanOrEqual(5);
    expect(jp90sParkSystemSkin.paletteFlavor).toMatchObject(
      JP_90S_PARK_SYSTEM_PALETTE_FLAVOR,
    );
  });

  it('exports the CSS selector sentinel', () => {
    expect(JP_90S_PARK_SYSTEM_CSS_SELECTOR).toBe(
      "html[data-skin='jp-90s-park-system']",
    );
  });
});
