const uuid = require('uuid');
const mockData = require('./../mock/mockData');

exports.cookieParse = () => {};

exports.randomSecretKey = () => {
  mockData.superSecret = secretKey = uuid();
};

exports.findUser = (id, userName) => {
  const Users = mockData.Users;
  const user = Users.find(u => {
    return u.userName === userName && u.id === id;
  });
  return user;
};
