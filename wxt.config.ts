import { defineConfig } from 'wxt';

export default defineConfig({
  manifest: {
    name: 'Sentra Assist - ePuskesmas CDSS',
    description: 'Clinical Decision Support with Auto-Fill for ePuskesmas RME',
    version: '1.0.1',
    permissions: ['activeTab', 'storage', 'sidePanel', 'identity', 'scripting'],
    host_permissions: ['https://kotakediri.epuskesmas.id/*', 'https://*.googleapis.com/*'],
    action: {
      default_title: 'Open Sentra Assist',
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
  runner: {
    disabled: true, // Disable auto-open browser
  },
});
