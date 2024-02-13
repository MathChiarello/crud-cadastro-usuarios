const express = require('express');

const router = express.Router();
const { 
  insert,
  update,
  remove,
  findAll,
  findById,
} = require('../db/usersDB');

router.post('/', async (req, res) => {
  const user = req.body;
  try {
    const [result] = await insert(user);
    return res.status(201)
      .json({ message: `Pessoa cadastrada com sucesso com o id ${result.insertId}` });
  } catch (error) {
    console.log(error);
    return res.status(500)
      .json({ message: 'Ocorreu um erro ao cadatrar uma pessoa' });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const [{ affectedRows }] = await remove(Number(id));
    if (Number(affectedRows) === 1) {
      return res.status(200)
        .json({ message: 'Usuário deletado com sucesso' });
    }
    return res.status(404)
    .json({ message: 'Usuário não encontrado' });
  } catch (error) {
    console.log(error);
    return res.status(500)
    .json({ message: 'Não foi possível realizar a consulta' });
  }
});

router.get('/', async (req, res) => {
  const users = await findAll();
  try {
    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
    return res.status(404)
    .json({ message: 'Não foi possível retornar a consulta' });
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const [user] = await findById(Number(id));
    if (user) return res.status(200).json(user);
    return res.status(404)
    .json({ message: 'Usuário não encontrado' });
  } catch (error) {
    console.log(error);
    return res.status(500)
    .json({ message: 'Não foi possível realizar a consulta' });
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const user = req.body;
  try {
    const [result] = await update(user, Number(id));
    if (Number(result.affectedRows) === 1) {
      return res.status(200)
      .json({ message: 'Usuário atualizado com sucesso' });
    }
    return res.status(404)
    .json({ message: 'Usuário não encontrado' });
  } catch (error) {
    console.log(error);
    return res.status(500)
    .json({ message: 'Não foi possível realizar a consulta' });
  }
});

module.exports = router;