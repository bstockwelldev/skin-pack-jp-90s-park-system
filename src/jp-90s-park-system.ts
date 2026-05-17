import type { SkinDefinition } from '@bstockwelldev/react-skin-system';

export const JP_90S_PARK_SYSTEM_SKIN_ID = 'jp-90s-park-system' as const;

export type Jp90sParkSystemSkinId = typeof JP_90S_PARK_SYSTEM_SKIN_ID;

export const JP_90S_PARK_SYSTEM_CSS_SELECTOR =
  "html[data-skin='jp-90s-park-system']";

export const JP_90S_PARK_SYSTEM_BOOT_LINES = [
  'INGEN SYSTEMS MANAGEMENT CONSOLE v2.4.1',
  'ISLA NUBLAR FACILITY CONTROL... ONLINE',
  'SECURITY CLEARANCE: LEVEL G',
  'WEATHER SYSTEMS: TROPICAL STORM WATCH',
  'POWER GRID STABILITY: 99.1%',
  'VEHICLE SYSTEMS: READY',
  'PARK OPERATIONS TERMINAL ENGAGED',
] as const;

export const JP_90S_PARK_SYSTEM_PALETTE_FLAVOR = {
  prompt: 'JP-SYS> ',
  placeholder: 'enter command, paddock id, project id, or skin jp-90s-park-system',
  welcome:
    'InGen systems nominal. Park operations console ready for design control.',
} as const;

export const jp90sParkSystemSkin = {
  id: JP_90S_PARK_SYSTEM_SKIN_ID,
  label: 'JP 90s Park System',
  family: 'facility-terminal',
  bootIntroLines: JP_90S_PARK_SYSTEM_BOOT_LINES,
  paletteFlavor: { ...JP_90S_PARK_SYSTEM_PALETTE_FLAVOR },
  cycle: true,
} satisfies SkinDefinition<Jp90sParkSystemSkinId>;
