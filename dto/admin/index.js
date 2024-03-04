const registerAdminDto = (data) => {
  return {
    name: data?.name,
    email: data?.email,
    password: data?.password,
  };
};

const loginAdminDto = (data) => {
  return {
    name: data?.admin?.name,
    email: data?.admin?.email,
    token: data?.token,
  };
};
const updatedAdminDto = (data) => {
  return {
    name: data?.name,
    email: data?.email,
  };
};

module.exports = { registerAdminDto, loginAdminDto, updatedAdminDto };
