const Joke = require('../models/jokes.model');

module.exports = {
  getAllJokes: async (req, res) => {
    try {
      const jokes = await Joke.find();
      res.json(jokes);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  getJokeById: async (req, res) => {
    const { id } = req.params;
    try {
      const joke = await Joke.findById(id);
      if (!joke) {
        return res.status(404).json({ message: 'Joke not found' });
      }
      res.json(joke);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  createJoke: async (req, res) => {
    const { setup, punchline } = req.body;
    try {
      const joke = new Joke({ setup, punchline });
      await joke.save();
      res.status(201).json(joke);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },
  updateJoke: async (req, res) => {
    const { id } = req.params;
    const { setup, punchline } = req.body;
    try {
      const joke = await Joke.findByIdAndUpdate(
        id,
        { setup, punchline },
        { new: true }
      );
      if (!joke) {
        return res.status(404).json({ message: 'Joke not found' });
      }
      res.json(joke);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },
  deleteJoke: async (req, res) => {
    const { id } = req.params;
    try {
      const joke = await Joke.findByIdAndRemove(id);
      if (!joke) {
        return res.status(404).json({ message: 'Joke not found' });
      }
      res.json({ message: 'Joke deleted' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
};
