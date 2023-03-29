const apiAdapter = require('../../apiAdapter');
const {
  URL_SERVICE_POKEMON
} = process.env;

const api = apiAdapter(URL_SERVICE_POKEMON);

module.exports = async (req, res) => {
  try {
    const id = req.params.id;
    const userId = req.user.data.id;
    console.log(id)
    console.log(userId)
    const pokemon = await api.post(`/catch/${id}`, {
      user_id: userId
    });
    
    return res.json(pokemon.data);
  } catch (error) {
    if (error.code === 'ECONNREFUSED') {
      return res.status(500).json({ status: 'error', message: 'service unavailable' });
    }

    if (error.response) {
      const { status, data } = error.response;
      return res.status(status).json(data);
    } else {
      return res.status(500).json({ status: 'error', message: 'unknown error' });
    }
  }
}
