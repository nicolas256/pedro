import { server } from './server';


server.listen(process.env.PORT || 3213, () => {
  console.log(`App rodando na porta ${process.env.PORT || 3213}`);
});
