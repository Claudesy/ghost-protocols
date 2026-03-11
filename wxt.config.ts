import { defineConfig } from 'wxt';

export default defineConfig({
  manifest: {
    name: 'Ghost Protocols — Iskandar Diagnosis Engine V1',
    description:
      'Sentra Assist delivers trustworthy clinical decision support for ePuskesmas with safer diagnosis workflows, smarter medication guidance, and doctor-first efficiency.',
    version: '1.0.4',
    icons: {
      16: 'icon/16.png',
      32: 'icon/32.png',
      48: 'icon/48.png',
      96: 'icon/96.png',
      128: 'icon/128.png',
    },
    permissions: ['activeTab', 'storage', 'sidePanel', 'identity', 'scripting'],
    host_permissions: ['https://kotakediri.epuskesmas.id/*', 'https://*.googleapis.com/*'],
    action: {
      default_title: 'Open Ghost Protocols',
      default_icon: {
        16: 'icon/16.png',
        32: 'icon/32.png',
        48: 'icon/48.png',
        128: 'icon/128.png',
      },
    },
    oauth2: {
      client_id: '822368940562-qis7fdf5ivccgeov04o75rtrf7ghc7u4.apps.googleusercontent.com',
      scopes: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    content_security_policy: {
      extension_pages:
        "script-src 'self'; object-src 'self'; font-src 'self' https://*.vscode-cdn.net data:;",
    },
  },
  modules: ['@wxt-dev/module-react'],
  webExt: {
    disabled: true, // Disable auto-open browser
  },
  vite: () => ({
    build: {
      chunkSizeWarningLimit: 2000,
    },
  }),
});
