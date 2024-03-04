const express = require("express");
const validateRequest = require("../../middleware/validateRequestJoi.middleware");
const { registerSchema, loginSchema, updateSchema } = require("../../validations/admin");
const { registerAdmin, loginAdmin, updateAdmin } = require("../../controllers/admin/admin.controller");
const verifyAuthentication = require("../../middleware/adminAuth.middleware");
const router = express.Router();

router.post("/", validateRequest(registerSchema), registerAdmin);
router.post("/login", validateRequest(loginSchema), loginAdmin);
router.patch("/" , verifyAuthentication,  validateRequest(updateSchema) , updateAdmin )

module.exports = router;
