const bcrypt = require('bcrypt');

const hash = (password) => {
  return bcrypt.hash(password, 10);
}

const verify = (password, hashed) => {
  return bcrypt.compare(password, hashed);
}

module.exports = {
  hash,
  verify
};