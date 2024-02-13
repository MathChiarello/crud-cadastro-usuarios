const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');

const app = require('../../src/app');
const conn = require('../../src/db/connection');

const { expect, use } = chai;

use(chaiHttp);

const MOCK_USERS = [
  {
    fullName: 'Naruto Uzumaki',
    birthName: '2012/12/12',
    email: 'datebayo@gmail.com',
    phone: '11987987987',
    cpf: '65465465454',
  }, 
  {
    fullName: 'Sasuke Uchiha',
    birthName: '1990/01/01',
    email: 'sasuke@gmail.com',
    phone: '11987987987',
    cpf: '12345678901',
  },
  {
    fullName: 'Sakura Haruno',
    birthName: '2000/01/01',
    email: 'sakura@gmail.com',
    phone: '1122222222',
    cpf: '98765432109',
  },
];

describe('POST - Testando o endpont de criação de usuário', () => {
  it('Verifica se o cadastro de um usuário é feito corretamente', async () => {
    sinon.stub(conn, 'execute').resolves([{ insertId: 3 }]);

    const response = await chai
      .request(app)
      .post('/users')
      .send(MOCK_USERS[0]);

    expect(response.status).to.be.equal(201);
    expect(response.body).to.be.deep.equal({ message: 'Pessoa cadastrada com sucesso com o id 3' });

    afterEach(sinon.restore);
  });
});

describe('GET - Testando o endpont de consulta de todos os usuários', () => {
  it('Verifica se retorna a listagem de todos os usuários corretamente', async () => {
    sinon.stub(conn, 'execute').resolves([MOCK_USERS]);

    const response = await chai
      .request(app)
      .get('/users');

    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.deep.equal(MOCK_USERS);

    afterEach(sinon.restore);
  });
});

describe('GET - Testando o endpont de consulta de usuário', () => {
  it('Verifica se apenas um usuário é listado corretamente', async () => {
    sinon.stub(conn, 'execute').resolves([MOCK_USERS[0]]);

    const response = await chai
      .request(app)
      .get('/users/1');

    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.deep.equal(MOCK_USERS[0]);

    afterEach(sinon.restore);
  });
});

describe('DELETE - Testando o endpont de deleção de usuário', () => {
  it('Verifica se o usuário é deletado corretamente', async () => {
    sinon.stub(conn, 'execute').resolves([{ affectedRows: 1 }]);

    const response = await chai
      .request(app)
      .delete('/users/1')
      .send(MOCK_USERS[0]);

    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.deep.equal({ message: 'Usuário deletado com sucesso' });

    afterEach(sinon.restore);
  });
});

describe('PUT - Testando o endpoint de atualização de usuário', () => {
  it('Verifica se a atualização de um usuário é feita corretamente', async () => {
    sinon.stub(conn, 'execute').resolves([{ affectedRows: 1 }]);

    const response = await chai
      .request(app)
      .put('/users/1')
      .send(MOCK_USERS[1]);

    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.deep.equal({ message: 'Usuário atualizado com sucesso' });

    afterEach(sinon.restore);
  });
});