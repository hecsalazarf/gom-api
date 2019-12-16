module.exports = {
  apps : [{
    name: 'gom-api',
    script: './dist/main.js',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    instances: 1,
    autorestart: true,
    restart_delay: 3000,
    watch: false,
    max_memory_restart: '500M',
    source_map_support: true,
    env: {
      NODE_ENV: 'development'
    },
    env_staging: {
      NODE_ENV: 'production'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }]
};