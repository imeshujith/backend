const db = require("../models");

// create main Model
const Employee = db.employees;

// 1. create product
const addEmployee = async (req, res) => {
  const employee = await Employee.bulkCreate(req.body, {
    fields: ["id", "login", "name", "salary"],
    updateOnDuplicate: ["id", "login"],
  });
  res.status(200).send(employee);
};

const getEmployee = async (req, res) => {
  // const product = await Employee.bulkCreate(req.body, {
  //   updateOnDuplicate: true,
  // });
  res.status(200).send({ message: "working" });
  console.log(req.body);
};

// 2. get all products
const getAllEmployees = async (req, res) => {
  let products = await Employee.findAll({});
  res.status(200).send(products);
};

// 3. get single product
const getOneEmployee = async (req, res) => {
  let id = req.params.id;
  let product = await Employee.findOne({ where: { id: id } });
  res.status(200).send(product);
};

// 4. update Employee
const updateEmployee = async (req, res) => {
  let id = req.params.id;

  const product = await Employee.update(req.body, { where: { id: id } });

  res.status(200).send(product);
};

// 5. delete product by id
const deleteEmployee = async (req, res) => {
  let id = req.params.id;

  await Employee.destroy({ where: { id: id } });

  res.status(200).send("Employee is deleted !");
};

module.exports = {
  addEmployee,
  getEmployee,
};
