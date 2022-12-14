const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

// Get all categories
router.get("/", async (req, res) => {
  try {
    const catData = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(catData);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Get one category
router.get("/:id", async (req, res) => {
  try {
    const catById = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    if (!catById) {
      res.status(404).json({ message: "No category found with that ID!" });
      return;
    }
    res.status(200).json(catById);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create a new category
router.post("/", async (req, res) => {
  try {
    const catData = await Category.create(req.body);
    res.status(200).json(catData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Update an existing category
router.put("/:id", async (req, res) => {
  try {
    const upCat = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    }).then((upCat) => {
      res.json(upCat);
    });
  } catch (error) {
    res.json(error);
  }
});

// Delete a category
router.delete("/:id", async (req, res) => {
  try {
    const delData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!delData) {
      res.status(404).json({ message: "No category found with that ID!" });
      return;
    }
    res.status(200).json(delData);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
