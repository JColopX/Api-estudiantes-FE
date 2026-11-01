require('dotenv').config();

const ssl = process.env.DB_SSL === 'true'
  ? { ssl: { require: true, rejectUnauthorized: false } }
  : {};

const base = {
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT || 5432,
  dialect: 'postgres',
  logging: false,
  dialectOptions: ssl,
};

module.exports = {
  development: base,
  production: base,
};