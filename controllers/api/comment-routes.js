// Import the required modules
const router = require("express").Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");

// create a new comment
router.post("/", withAuth, async (req, res) => {
  try {
    // create a new comment with the provided data
    const newComment = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    // send a response with the new comment data
    res.status(200).json(newComment);
  } catch (err) {
    // send an error response if something went wrong
    res.status(400).json(err);
  }
});

// export the router
module.exports = router;
