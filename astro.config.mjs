import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import { SITE } from './src/utils/config.ts';

const isGitHub = process.env.GITHUB === 'true';

// https://astro.build/config
export default defineConfig({
  site: isGitHub ? 'https://josephmartin09.github.io/nextstage': 'http://localhost:4321',
  base: '/nextstage',
  outDir: 'dist',
  integrations: [
    icon({
      include: {
        tabler: ['*'],
        'flat-color-icons': [
          'template',
          'gallery',
          'approval',
          'document',
          'advertising',
          'currency-exchange',
          'voice-presentation',
          'business-contact',
          'database',
        ],
      },
    }),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
