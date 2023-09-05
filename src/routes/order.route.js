const { createOrder, getOrders, deleteOrder, getOrder } = require("../controllers/order.controller");
const isAuth = require("../middlewares/is-auth.middleware");

const router = require("express").Router();

router.post("/create/order", isAuth, createOrder);
router.get("/get/orders", isAuth, getOrders);
router.get("/get/order/:id", isAuth, getOrder);
router.delete("/delete/order/:id", isAuth, deleteOrder);

module.exports = router;