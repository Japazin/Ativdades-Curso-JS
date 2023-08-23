const Sequelize= require('sequelize');
const sequelize = new Sequelize('cadastro','root','1234',{
    host: 'localhost',
    dialect:'mysql'
})
sequelize.authenticate().then(function (){
    console.log('conectou!!');
}).catch( function(err){
    console.log('erro não conectado!!'+err);
})

// const root = ('root', {
//     nome: Sequelize.STRING,
//     email: Sequelize.STRING
//   });

// root.create({
//     nome: 'João',
//     email: 'joao@example.com'
//   })
//     .then(usuario => {
//       console.log('Novo usuário criado:', usuario.get());
//     })
//     .catch(error => {
//       console.error('Erro ao criar usuário:', error);
//     });
  