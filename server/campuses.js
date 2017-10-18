const router = require('express').Router();
const Campus = require('../db/models').Campus;

router.get('/', (req, res) => {
	Campus.findAll({})
	  .then(campuses => res.send(campuses))
	  .catch(err => console.error(err));
});

router.post('/', (req, res) => {
  Campus.create(req.body)
    .then(newCampus => res.send(newCampus))
    .catch(err => console.error(err));
});

router.get('/:campusId', (req, res) => {
  const campusId = req.params.campusId;
  Campus.findOne({ where: { id: campusId }})
    .then(campus => res.send(campus))
    .catch(err => console.error(err));
});

router.put('/:campusId', (req, res) => {
  const campusId = req.params.campusId;
  Campus.findOne({ where: { id: campusId }})
    .then(campus => campus.update(req.body))
    .then(response => res.send(response))
    .catch(err => console.error(err));
})

router.delete('/:campusId', (req, res) => {
  const campusId = req.params.campusId;
  Campus.findOne({ where: { id: campusId }})
    .then((campus) => {
      campus.destroy();
      res.json(campus);
    })
    .catch(err => console.error(err));
});


module.exports = router;