const sequelize = require('../config/connection');
const { User} = require('../models');

const userdata = [
  {
    username: 'tong',
    email: 'tlor0@email.com',
    password: 'password123'
  },
  {
    username: 'tong1',
    email: 'tlor01@email.com',
    password: 'password123'
  },
  {
    username: 'tong2',
    email: 'tlor02@email.com',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
