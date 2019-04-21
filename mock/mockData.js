module.exports.Users = () => {
  return [
    { id: 1, userName: 'admin', password: 'admin1' },
    { id: 2, userName: 'guest', password: 'guest1' },
    { id: 3, userName: 'new', password: 'new1' },
  ];
};

module.exports.superSecret = 'null';

module.exports.jwtTime = '5sec';

module.exports.localeTime = new Date().toLocaleString();
