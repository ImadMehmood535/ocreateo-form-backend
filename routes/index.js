const { Router } = require("express");
const router = Router();
const adminRouter = require("./admin");
const formRouter = require("./form")

router.use("/admin", adminRouter);
router.use("/form" , formRouter);




module.exports = router;
