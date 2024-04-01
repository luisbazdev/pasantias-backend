const bcrypt = require("bcrypt");

export const bcryptHashPassword = async function (plainPassword: string) {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(plainPassword, salt);
    return hash;
  };