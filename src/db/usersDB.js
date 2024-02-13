const conn = require('./connection');

const insert = async (user) => {
  const { fullName, birthName, email, phone, cpf } = user;
  const [result] = await conn.execute(
    'INSERT INTO usuarios (full_name, birth_date, email, phone, cpf) VALUES (?, ?, ?, ?, ?)',
    [fullName, birthName, email, phone, cpf],
  );
  return [result];
};

const update = async (user, id) => {
  const { fullName, birthName, email, phone, cpf } = user;
  const [result] = await conn.execute(
    'UPDATE usuarios SET full_name = ?, birth_date = ?, email = ?, phone = ?, cpf = ? WHERE id = ?',
    [fullName, birthName, email, phone, cpf, id],
  );

  return [result];
};

const remove = async (id) => {
  const [result] = await conn.execute('DELETE FROM usuarios WHERE id = ?', [id]);
  return [result];
};

const findAll = async () => {
  const [users] = await conn.execute('SELECT * FROM usuarios');
  return users;
};

const findById = async (id) => {
  const [user] = await conn.execute('SELECT * FROM usuarios WHERE id = ?', [id]);
  return [user];
};

module.exports = {
  insert,
  update,
  remove,
  findAll,
  findById,
};