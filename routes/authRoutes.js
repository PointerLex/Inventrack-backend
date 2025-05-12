const { Router } = require("express");


const router = Router();

router.get("/testconnection", (req = request, res = response) => {
  res.status(200).json({
    msg: "test API",
  });
});

module.exports = router;