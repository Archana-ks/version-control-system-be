const express = require("express");
const { addRepo, viewAllRepo, viewOneRepo, updateRepo, deleteRepo } = require("../controllers/repoController");

const router = express.Router();

router.post("/add", addRepo);

router.get("/view", viewAllRepo);

router.get("/:repoId", viewOneRepo);

router.put("/:repoId", updateRepo);

router.delete("/:repoId", deleteRepo);

module.exports = router;
