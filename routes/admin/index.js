const express = require("express");
const validateRequest = require("../../middleware/validateRequestJoi.middleware");
const {
  registerSchema,
  loginSchema,
  updateSchema,
  passwordSchema,
} = require("../../validations/admin");
const {
  registerAdmin,
  loginAdmin,
  updateAdmin,
  changePassword,
} = require("../../controllers/admin/admin.controller");
const verifyAuthentication = require("../../middleware/adminAuth.middleware");
const router = express.Router();

router.post("/", validateRequest(registerSchema), registerAdmin);
router.post("/login", validateRequest(loginSchema), loginAdmin);
router.patch(
  "/",
  verifyAuthentication,
  validateRequest(updateSchema),
  updateAdmin
);
router.patch(
  "/password",
  verifyAuthentication,
  validateRequest(passwordSchema),
  changePassword
);

module.exports = router;
