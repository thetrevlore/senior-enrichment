const router = require('express').Router();
const Student = require('../db/models').Student;

router.get('/', (req, res) => {
	Student.findAll({})
	.then(students => res.send(students))
	.catch(err => console.error(err));
});

router.post('/', (req, res) => {
  Student.create(req.body)
  .then(newStudent => res.send(newStudent))
  .catch(err => console.error(err));
});

router.get('/:studentId', (req, res) => {
  const studentId = req.params.studentId;
  Student.findOne({ where: { id: studentId }})
  .then(student => res.send(student))
  .catch(err => console.error(err));
});

router.put('/:studentId', (req, res) => {
  const studentId = req.params.studentId;
  Student.findOne({ where: { id: studentId }})
    .then(student => student.update(req.body))
    .then(updatedStudent => res.send(updatedStudent))
    .catch(err => console.error(err));
});

router.delete('/:studentId', (req, res) => {
  const studentId = req.params.studentId;
  Student.findOne({ where: { id: studentId }})
    .then((student) => {
      student.destroy();
      res.json(student);
    })
    .catch(err => console.error(err));
});

module.exports = router;