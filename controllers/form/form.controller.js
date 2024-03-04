const {
  forbiddenResponse,
  okResponse,
  serverErrorResponse,
  notFound,
  unauthorizedResponse,
  badRequestResponse,
} = require("../../constants/responses");
const { allFormDataDto } = require("../../dto/form");
const Form = require("../../models/form");

const registerForm = async (req, res) => {
  try {
    const registeration = await Form.create({
      ...req.body,
    });

    if (!registeration) {
      const response = badRequestResponse("Invalid Credentials");
      return res.status(response.status.code).json(response);
    }

    const response = okResponse(null, "Form created Successfully");
    return res.status(response.status.code).json(response);
  } catch (error) {
    const response = serverErrorResponse(error.message);
    return res.status(response.status.code).json(response);
  }
};

const allForms = async (req, res) => {
  try {
    const data = await Form.find({});

    if (data.length === 0) {
      const response = badRequestResponse("No data yet");
      return res.status(response.status.code).json(response);
    }

    const response = okResponse(
      allFormDataDto(data),
      "Feedback forms are available"
    );
    return res.status(response.status.code).json(response);
  } catch (error) {
    const response = serverErrorResponse(error.message);
    return res.status(response.status.code).json(response);
  }
};

module.exports = { registerForm, allForms };
