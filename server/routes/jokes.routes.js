const PirateController = require('../controllers/pirate.controller');

module.exports = (app) => {
router.get('/jokes', jokesController.getAllJokes);
router.get('/jokes/:id', jokesController.getJokeById);
router.post('/jokes', jokesController.createJoke);
router.put('/jokes/:id', jokesController.updateJoke);
router.delete('/jokes/:id', jokesController.deleteJoke);

}
