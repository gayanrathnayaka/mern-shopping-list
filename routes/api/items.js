const express = require("express");
const router = express.Router();

//load models

const item = require("../../models/item");

//@route GET api/items
//@desc get all items
//@access public

router.get("/", (request, response) => {
  item
    .find()
    .sort({ date: -1 })
    .then((items) => response.json(items));
});

//@route POST api/items
//@desc create a new post
//@access public

router.post("/", (request, response) => {
  const newItem = new item({
    name: request.body.name,
  });

  newItem
    .save()
    .then((item) => response.status(201).json(item))
    .catch((err) => {
      console.log(`error saving item`, err);
    });
});

//@route DELETE api/items
//@desc Remove an item
//@access public

router.delete("/:id", (request, response) => {
  item
    .findById(request.params.id)
    .then((item) => {
      console.log(item);
      item
        .remove()
        .then(() => response.json({ success: true }))
        .catch((err) => {
          response.status(400).json({ success: false });
        });
    })
    .catch((err) => {
      response.status(400).json({ success: false });
    });
});

module.exports = router;
