module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        uri: env('DATABASE_URI')
        // host: env('DATABASE_HOST', 'strapi-cluster.cugpx.mongodb.net'),
        // srv: env.bool('DATABASE_SRV', true),
        // port: env.int('DATABASE_PORT', 27017),
        // database: env('DATABASE_NAME', 'backend'),
        // username: env('DATABASE_USERNAME', 'admin'),
        // password: env('DATABASE_PASSWORD', 'admin'),
      },
      options: {
        // authenticationDatabase: env('AUTHENTICATION_DATABASE', null),
        ssl:  true //env.bool('DATABASE_SSL', true),
      },
    },
  },
});
