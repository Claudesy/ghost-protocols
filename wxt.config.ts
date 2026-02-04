import { defineConfig } from 'wxt';

export default defineConfig({
  manifest: {
    name: 'Sentra Assist - ePuskesmas CDSS',
    description: 'Clinical Decision Support with Auto-Fill for ePuskesmas RME',
    version: '1.0.0',
    permissions: ['activeTab', 'storage', 'sidePanel'],
    host_permissions: ['https://kotakediri.epuskesmas.id/*'],
    action: {
      default_title: 'Open Sentra Assist',
    },
    content_security_policy: {
      extension_pages: "script-src 'self'; object-src 'self'",
    },
  },
  modules: ['@wxt-dev/module-react'],
  runner: {
    disabled: true, // Disable auto-open browser
  },
});
