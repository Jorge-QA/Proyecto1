// tests/userRoutes.test.js

const chai = require('chai');
const chaiHttp = require('chai-http');
const { app, server } = require('../index'); // Importa el archivo index.js (el punto de entrada de tu API)
const expect = chai.expect;

chai.use(chaiHttp);

describe('Rutas de usuarios', () => {
  // token de autenticación para nuestras pruebas
  const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSm9yZ2UiLCJpZCI6IjY0YTRmM2M3MjdiMGI4ZDQzMzFmODI5ZiIsInJvbCI6ImFkbWluIiwic3RhdGUiOiJhY3Rpdm8iLCJpYXQiOjE2OTA0ODk1Njh9.Yw5WKuDc_j7hV7lOrxwReCNz3we4UOLicBAI0wiELYo';

  // Probaremos la ruta para obtener todos los usuarios
  describe('GET /api/admin/users', () => {
    it('Debería obtener una lista de usuarios', (done) => {
      chai
        .request(app)
        .get('/api/admin/users')
        .set('Authorization', `Bearer ${authToken}`) //autenticación con el token
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('array');
          done();
        });
    });
  });

  // Probaremos la ruta para eliminar un usuario por su ID
  describe('DELETE /api/admin/users', () => {
    it('Debería eliminar un usuario existente', (done) => {
      // Suponemos que ya existe un usuario con el ID "64c2dc060bb13bd2895efcf2" en la base de datos
      const usuarioIdAEliminar = '64c2dc060bb13bd2895efcf2'; 

      chai
        .request(app)
        .delete(`/api/admin/users?id=${usuarioIdAEliminar}`)
        .set('Authorization', `Bearer ${authToken}`) //utenticación con el token
        .end((err, res) => {
          expect(res).to.have.status(204);
          done();
        });
    });

    it('Debería retornar un error si el ID del usuario no existe', (done) => {
      // Suponemos que no existe un usuario con el ID "64ae290628ec3cce5bfb5b99" en la base de datos
      const usuarioIdQueNoExiste = '64ae290628ec3cce5bfb5b99';

      chai
        .request(app)
        .delete(`/api/admin/users?id=${usuarioIdQueNoExiste}`)
        .set('Authorization', `Bearer ${authToken}`) // autenticación con el token
        .end((err, res) => {
          expect(res).to.have.status(404);
          expect(res.body).to.have.property('error', 'Usuario no encontrado');
          done();
        });
    });
  });
});

describe('Obtener Prompts', () => {
  //token de autenticación  para nuestras pruebas
  const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSm9yZ2UiLCJpZCI6IjY0YTRmM2M3MjdiMGI4ZDQzMzFmODI5ZiIsInJvbCI6ImFkbWluIiwic3RhdGUiOiJhY3Rpdm8iLCJpYXQiOjE2OTA0ODk1Njh9.Yw5WKuDc_j7hV7lOrxwReCNz3we4UOLicBAI0wiELYo';

  // Probaremos la ruta para obtener todos los usuarios
  describe('GET /api/handle/prompts', () => {
    it('Debería obtener una lista de prompts', (done) => {
      chai
        .request(app)
        .get('/api/handle/prompts')
        .set('Authorization', `Bearer ${authToken}`) //autenticación con el token
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('array');
          done();
        });
    });
  });
})