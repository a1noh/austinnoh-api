const express = require("express");
const router = express.Router();

const { checkJwt, checkRole } = require("../controller/auth");
const { getBlogs, getBlogById, getBlogBySlug } = require("../controller/blogs");

router.get("", getBlogs);
router.get("/:id", getBlogById);
router.get("/s/:slug", getBlogBySlug);

module.exports = router;
