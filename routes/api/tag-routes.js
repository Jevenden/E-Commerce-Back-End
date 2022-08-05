const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", async (req, res) => {
  try {
    const tagData = await Tag.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(tagData);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const tagById = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    if (!tagById) {
      res.status(404).json({ message: "No tag found with that ID!" });
      return;
    }
    res.status(200).json(tagById);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const tagData = await Tag.create(req.body);
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", (req, res) => {
  // update a tag's name by its `id` value
});

router.delete("/:id", async (req, res) => {
  try {
    const delData = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!delData) {
      res.status(404).json({ message: "No tag found with that ID!" });
      return;
    }
    res.status(200).json(delData);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
