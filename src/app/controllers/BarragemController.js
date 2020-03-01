import Queue from '../lib/Queue';

module.exports =  {
  
  async store(req, res) {

    const { id, nome } = req.body;

    const barragem = {
      id,
      nome,
    };

    const morador = {
      name:'José Ribamar',
      email:'bacelar.netto.analista@gmail.com'
    }

    // Adicionar job RegistrationMail na fila
    await Queue.add('AlertMail', { morador });

    return res.json(barragem);
  }
};