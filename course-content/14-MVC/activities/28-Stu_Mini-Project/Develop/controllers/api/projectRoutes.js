const router = require('express').Router();
const { Project } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const dbGalleryData = await Project.findAll();

    const galleries = dbGalleryData.map((project) =>
    project.get({ plain: true })
    );

    res.render('homepage', {
      galleries
    });
    res.status(200).json(dbGalleryData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});





router.post('/', async (req, res) => {
  try {
    const newProject = await Project.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newProject);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const projectData = await Project.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!projectData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(projectData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
