const models = require('../models');

let departments = [];
for (let i = 1; i <= 10; i += 1) {
  departments.push({name: `department ${i}`});
}

models.sequelize.sync({force: true}).then(() => {
  models.Department.bulkCreate(departments).then(() => {
    console.log('departments created');
  });
});
