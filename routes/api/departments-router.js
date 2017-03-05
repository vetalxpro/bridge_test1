const
  router = require('express').Router(),
  models = require('../../models');

/**
 *
 */
router.route('/')
/**
 *GET All Departments
 */
  .get((req, res, next) => {
    models.Department.findAll()
      .then(departments => {
        res.json({
          departments
        });
      }).catch(err => next(err));
  })
  /**
   * POST (Create) New Department
   */
  .post((req, res, next) => {
    const {name} = req.body;
    if (!name) {
      return res.status(400).json({
        error: {
          message: 'Please enter a name'
        }
      });
    }
    models.Department.create({name})
      .then(department => {
        res.json({
          department
        });
      }).catch(err => next(err));
  });

/**
 *
 */
router.route('/:id')
/**
 *GET Department with the specified ID
 */
  .get((req, res, next) => {
    models.Department.findById(req.params.id)
      .then(department => {
        if (!department) {
          return res.status(404).json({
            error: {
              message: 'Department not found'
            }
          });
        }
        res.json({department})
      }).catch(err => next(err));
  })
  /**
   *PUT (Update) Department with the specified ID
   */
  .put((req, res, next) => {
    const {name} = req.body;
    if (!name) {
      return res.status(400).json({
        error: {
          message: 'Bad Request'
        }
      });
    }
    models.Department.update({name}, {where: {id: req.params.id}})
      .then(affected => {
        res.json({
          affected
        });
      }).catch(err => next(err));
  })
  /**
   * DELETE Department with the specified ID
   */
  .delete((req, res, next) => {
    models.Department.destroy({where: {id: req.params.id}})
      .then(affected => {
        res.json({
          affected
        });
      }).catch(err => next(err));
  });


module.exports = router;