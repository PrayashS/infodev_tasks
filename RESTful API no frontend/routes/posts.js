const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

// Show all the Items
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

// Adding Items
router.post("/", async (req, res) => {
  const post = new Post({
    item: req.body.item,
  });

  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

// Specific Item
router.get("/:postId", async (req, res) => {
  const post = await Post.findById(req.params.postId);
  try {
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
});

// Delete Item
router.delete("/:postId", async (req, res) => {
  try {
    const removedPost = await Post.remove({ _id: req.params.postId });
    res.json(removedPost);
    console.log("Item Updated")
  } catch (err) {
    res.json({ message: err });
  }
});

//Update Item
router.patch('/:postId', async (req, res) => {
    try{
        const updatedPost = await Post.updateOne(
            { _id: req.params.postId},
            {$set: {item: req.body.item}}
        );
        res.json(updatedPost);
        console.log("Item Updated");
    } catch (err) {
        res.json({ message: err})
    }
})

module.exports = router;
