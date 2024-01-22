import express from 'express';


const server = express();


interface Teste {

}



server.put('/', (req, res) => {
  return res.send('Olá Pedro');
});




export { server };