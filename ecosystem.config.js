module.exports = {
  apps: [{
    script  : 'app.js',
    watch   : '.',
    env_dev : {
      name    : 'gik-development',
      NODE_ENV: 'development',
      PORT    : 3000,
    },
    env_test: {
      name    : "gik-test",
      PORT    : 3001,
      NODE_ENV: "test",
    },
    env_prod: {
      name    : "gik-prod",
      PORT    : 3002,
      NODE_ENV: "production",
    },
  }],
};