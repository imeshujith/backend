// import controllers review, products
const employeeController = require("../contollers/employeesController");

// router
const router = require("express").Router();

// Employee router
router.post("/upload", employeeController.addEmployee);
router.get("/", employeeController.getAllEmployees);
router.put("/:id", employeeController.updateEmployee);
router.delete("/:id", employeeController.deleteEmployee);

module.exports = router;
