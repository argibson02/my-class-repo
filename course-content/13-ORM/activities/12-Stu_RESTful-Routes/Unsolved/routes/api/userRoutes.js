const router = require('express').Router();
const User = require('../../models/User');

// TODO: Use try/catch to catch errors
// TODO: Return the appropriate HTTP status codes

// GET a user
router.get('/:id', async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id)
    res.status(200).res.json(userData);
  }
  catch (err) {
    res.status(400).json(err);
  }
});

// UPDATE a user
router.post('/', async (req, res) => {
  try {
    const userData = await User.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    res.status(200).res.json(userData);
  }
  catch (err) {
    res.status(400).json(err);
  }
});


// UPDATE a user
router.put('/:id', async (req, res) => {
  try {
    const userData = await User.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    res.status(200).res.json(userData);
  }
  catch (err) {
    res.status(400).json(err);
  }
});

// DELETE a user
router.delete('/:id', async (req, res) => {
  try {
    const userData = await User.destroy({
      where: {
        id: req.params.id,
      },
    })
    res.status(200).res.json(userData);
  }
  catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
