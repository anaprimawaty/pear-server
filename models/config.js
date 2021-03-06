module.exports = {
  development: {
    username: process.env.PEAR_USER_DEV,
    password: process.env.PEAR_PASSWORD_DEV,
    database: process.env.PEAR_DATABASE_DEV,
    host: process.env.PEAR_HOST_DEV,
    port: process.env.PEAR_PORT,
    dialect: 'mysql'
  },

  production: {
    username: process.env.PEAR_USER,
    password: process.env.PEAR_PASSWORD,
    database: process.env.PEAR_DATABASE,
    host: process.env.PEAR_HOST,
    port: process.env.PEAR_PORT,
    dialect: 'mysql'
  }
}
