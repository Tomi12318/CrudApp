import { Sequelize } from 'sequelize';

const db = new Sequelize('database_app', 'root', 'tomas21345', {
  host: 'localhost',
  dialect: 'mysql',
});

export default db;
