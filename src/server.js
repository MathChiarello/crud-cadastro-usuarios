const app = require('./app');
const conn = require('./db/connection');

const PORT = 3001;

app.listen(PORT, async () => {
  console.log(`Aplicação está sendo executada na porta ${PORT}`);

  const [result] = await conn.execute('SELECT 1');
  if (result) console.log('MySQL connection OK');
});