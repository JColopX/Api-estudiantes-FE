require('dotenv').config();
const app = require('../app');
const { sequelize } = require('../server/models');

const PORT = process.env.PORT || 8010;
async function iniciar() {
  if (!process.env.JWT_SECRET) {
    console.error('Falta JWT_SECRET en el .env (o en las variables de render)');
    process.exit(1);
  }

  try {
    await sequelize.authenticate();
    console.log('Conexión a PostgreSQL establecida correctamente.');

    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('No se pudo conectar a la base de datos:', error.message);
    process.exit(1);
  }
}

iniciar();
