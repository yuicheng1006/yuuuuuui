// import { paths } from 'src/routes/paths';

import packageJson from '@/package.json';

// ----------------------------------------------------------------------

export const CONFIG = {
  appName: 'Yuuuuuui',
  appVersion: packageJson.version,
  assetsDir: process.env.NEXT_PUBLIC_ASSETS_DIR ?? '',
  // serverUrl: process.env.NEXT_PUBLIC_SERVER_URL ?? '',
  // hostUrl: process.env.NEXT_PUBLIC_HOST_URL ?? '',
};
