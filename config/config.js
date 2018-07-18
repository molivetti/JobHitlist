module.exports = {
  development: {
    username: 'username', //process.env.DB_USERNAME,
    password: 'password', //process.env.DB_PASSWORD,
    database: 'JobHitlist', //process.env.DB_NAME,
    host:     '127.0.0.1', //process.env.DB_HOSTNAME,  },
    dialect: "mssql",
    dialectOptions: {instanceName: 'SQLEXPRESS'},
    operatorsAliases: false,
    logging: console.log
  },
  test: {
    dialect: "mssql",
    storage: ":memory:"
  },
  production: {
    username: 'username', //process.env.DB_USERNAME,
    password: 'password', //process.env.DB_PASSWORD,
    database: 'JobHitlist', //process.env.DB_NAME,
    host:     '127.0.0.1', //process.env.DB_HOSTNAME,
    dialect:  'mssql',
    dialectOptions: {instanceName: 'SQLEXPRESS'},
    operatorsAliases: false,
    use_env_variable: 'DATABASE_URL'
  }
};
