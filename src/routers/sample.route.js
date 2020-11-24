const Router = require("express").Router;

const router = Router();

/// SUPPORT FUNCTIONS ZONE

/// END OF SUPPORT FUNCTIONS ZONE

/// CRUD ZONE
router.get("ping", (req, res) => {
  res.send({ message: "Hello, world" });
});
/// END OF CRUD ZONE

module.exports = router;
