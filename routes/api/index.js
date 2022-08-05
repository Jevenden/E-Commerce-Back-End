const router = require("express").Router();
const categoryRoutes = require("./category-routes");
const productRoutes = require("./product-routes");
const tagRoutes = require("./tag-routes");

router.use("/categories", categoryRoutes);
router.use("/products", productRoutes);
router.use("/tags", tagRoutes);

module.exports = router;

// {
//   "product_name": "Basketball",
//   "price": 200.00,
//   "stock": 3,
//   "category_id": 6,
//   "tagIds": [1, 2, 3, 4]
// }
