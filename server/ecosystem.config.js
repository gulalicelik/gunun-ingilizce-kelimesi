module.exports = {
    apps: [{
        script  : 'app.js',
        watch   : '.',
        env_dev : {
            name        : 'gik-development',
            NODE_ENV    : 'development',
            PORT        : 3000,
            TOKEN_SECRET: "Malatya44"
        },
        env_test: {
            name        : "gik-test",
            PORT        : 3001,
            NODE_ENV    : "test",
            TOKEN_SECRET: "Malatya44"
        },
        env_prod: {
            name        : "gik-prod",
            PORT        : 3002,
            NODE_ENV    : "production",
            TOKEN_SECRET: "Malatya44"
        },
    }],
};