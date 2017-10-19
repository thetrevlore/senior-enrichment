const { Campus, Student } = require('../db/models/index');

const campuses = [{
  name: 'House Lannister',
  image: '../public/assets/House-Lannister-Main-Shield.png'
}, {
  name: 'House Stark',
  image: '../public/assets/House-Stark-Main-Shield.png'
}, {
  name: 'House Targaryen',
  image: '../public/assets/House-Targaryen-Main-Shield.png'
}, {
  name: 'House Tarly',
  image: '../public/assets/House-Tarly-Main-Shield.png'
}];

const students = [
  { name: 'Tywin Lannister', email: 'tywin@lion.com', campusId: 1 },
  { name: 'Jaime Lannister', email: 'jaime@lion.com', campusId: 1 },
  { name: 'Cersei Lannister', email: 'cersei@lion.com', campusId: 1 },
  { name: 'Tyrion Lannister', email: 'tyrion@lion.com', campusId: 1 },
  { name: 'Tommen Lannister', email: 'tommen@lion.com', campusId: 1 },
  { name: 'Eddard Stark', email: 'eddard@wolf.com', campusId: 2 },
  { name: 'Arya Stark', email: 'arya@wolf.com', campusId: 2 },
  { name: 'Robb Stark', email: 'robb@wolf.com', campusId: 2 },
  { name: 'Bran Stark', email: 'bran@wolf.com', campusId: 2 },
  { name: 'Catelyn Stark', email: 'cateyln@wolf.com', campusId: 2 },
  { name: 'Daenerys Targaryen', email: 'daenerys@dragon.com', campusId: 3 },
  { name: 'Rhaegar Targaryen', email: 'rhaegar@dragon.com', campusId: 3 },
  { name: 'Aegon Targaryen', email: 'aegon@dragon.com', campusId: 3 },
  { name: 'Viserys Targaryen', email: 'viserys@dragon.com', campusId: 3 },
  { name: 'Aerys Targaryen', email: 'aerys@dragon.com', campusId: 3 },
  { name: 'Samwell Tarly', email: 'sam@archer.com', campusId: 4 },
  { name: 'Dickon Tarly', email: 'dickon@archer.com', campusId: 4 },
  { name: 'Randyll Tarly', email: 'randyll@archer.com', campusId: 4 },
  { name: 'Talla Tarly', email: 'talla@archer.com', campusId: 4 },
  { name: 'Melessa Tarly', email: 'melessa@archer.com', campusId: 4 },
];

const seed = () =>
  Promise.all(campuses.map(campus =>
    Campus.create(campus))
  )
  .then(() =>
  Promise.all(students.map(student =>
    Student.create(student))
  ));

module.exports = seed;

// const main = () => {
//   console.log('Syncing db...');
//   db.sync({ force: true })
//     .then(() => {
//       console.log('Seeding databse...');
//       return seed();
//     })
    // .catch(err => {
    //   console.log('Error while seeding');
    //   console.log(err.stack);
    // })
    // .then(() => {
    //   db.close();
    //   return null;
    // });
// };

// main();