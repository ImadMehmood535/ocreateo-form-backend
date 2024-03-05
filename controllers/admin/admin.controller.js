const {
  forbiddenResponse,
  okResponse,
  serverErrorResponse,
  notFound,
  unauthorizedResponse,
} = require("../../constants/responses");
const {
  registerAdminDto,
  loginAdminDto,
  updatedAdminDto,
} = require("../../dto/admin");
const Admin = require("../../models/admin");
const TokenService = require("../../services/tokenService");
const tokenService = new TokenService(process.env.JWT_SECRET_KEY);

const registerAdmin = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const userCheck = await Admin.findOne({ email });

    if (userCheck) {
      const response = forbiddenResponse("Already registered");
      return res.status(response.status.code).json(response);
    }

    const registeration = await Admin.create({
      name,
      email,
      password,
    });

    const response = okResponse(
      registerAdminDto(registeration),
      "Admin created Successfully"
    );
    return res.status(response.status.code).json(response);
  } catch (error) {
    const response = serverErrorResponse(error.message);
    return res.status(response.status.code).json(response);
  }
};

const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email, password });

    if (!admin) {
      const response = unauthorizedResponse("Invalid Credentials");
      return res.status(response.status.code).json(response);
    }

    const access_token = tokenService.generateAccessToken(admin?.id);

    const response = okResponse(
      loginAdminDto({ admin, token: access_token }),
      "Admin login successful."
    );

    return res.status(response.status.code).json(response);
  } catch (error) {
    const response = serverErrorResponse(error.message);
    return res.status(response.status.code).json(response);
  }
};

const updateAdmin = async (req, res) => {
  try {
    const updateFields = req.body;
    const id = req.adminId;
    const updatedAdmin = await Admin.findByIdAndUpdate(id, updateFields, {
      new: true,
    });

    if (!updatedAdmin) {
      const response = notFound("Admin not found");
      return res.status(response.status.code).json(response);
    }

    const response = okResponse(
      updatedAdminDto(updatedAdmin),
      "Admin updated successfully"
    );
    return res.status(response.status.code).json(response);
  } catch (error) {
    const response = serverErrorResponse(error.message);
    return res.status(response.status.code).json(response);
  }
};

const changePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;
    const id = req.adminId;
    const admin = await Admin.findOne({
      _id: id,
      password: oldPassword,
    });

    if (!admin) {
      const response = forbiddenResponse("Incorrect Password");
      return res.status(response.status.code).json(response);
    }
    const updatedAdmin = await Admin.findByIdAndUpdate(
      id,
      { password: newPassword },
      { new: true } 
    );

    if (!updatedAdmin) {
      const response = forbiddenResponse("Try later...something went wrong");
      return res.status(response.status.code).json(response);
    }

    const response = okResponse(
      updatedAdminDto(updatedAdmin),
      "Password Changed Successfully"
    );

    return res.status(response.status.code).json(response);
  } catch (error) {
    const response = serverErrorResponse(error.message);
    return res.status(response.status.code).json(response);
  }
};


module.exports = { registerAdmin, loginAdmin, updateAdmin, changePassword };
