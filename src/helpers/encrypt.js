const bcrypt = require("bcrypt");

module.exports = {
  encrypt: async value => {
    const hash = await bcrypt.hash(value, 10);
    return hash;
  },
  compare: async (value, hash) => {
    const verify = await bcrypt.compare(value, hash);
    return verify;
  }
};
