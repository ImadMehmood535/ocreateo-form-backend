const express = require("express");
const router = express.Router();

const validateRequest = require("../../middleware/validateRequestJoi.middleware");
const { feedbackSchema } = require("../../validations/form");
const {
  registerForm,
  allForms,
} = require("../../controllers/form/form.controller");
const verifyAuthentication = require("../../middleware/adminAuth.middleware");

router.post("/", validateRequest(feedbackSchema), registerForm);
router.get("/", verifyAuthentication, allForms);

module.exports = router;
