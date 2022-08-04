const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  try {
    const catData = await Category.findAll({
      // include: [{ model: Product }],
    });
    res.status(200).json(catData);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const catById = await Category.findByPk(req.params.id, {
      // include: [{ model: Product }],
    });

    if (!catById) {
      res.status(404).json({ message: "No category found with that ID!" });
      return;
    }
    res.status(200).json(catById);
  } catch (err) {
    res.status(500).json(err);
  }

  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post("/", (req, res) => {
  // create a new category
});

router.put("/:id", (req, res) => {
  // update a category by its `id` value
});

router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;