const express = require("express");
const router = require("express-promise-router")();
const int_quizController = require("../Controllers");
router.route("/").get(int_quizController.index);
router.route("/:id").get(int_quizController.GetIdByDisplayName);
router.route("/displayName").post(int_quizController.GetByDisplayName);
router.route("/status").post(int_quizController.getAdvisorsByStatus);
// router.route("/category").post(int_quizController.GetByDisplayNameCategories);
module.exports = router;
