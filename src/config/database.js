const dbConfig = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'root',
  password: 'root',
  database: 'sd',
  define: {
    timestamps: true,
    underscored: true,
  }
}

module.exports = dbConfig;