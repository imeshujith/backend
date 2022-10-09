const db = require("../models");

// create main Model
const Employee = db.employees;

// 1. create product
const addEmployee = async (req, res, err) => {
  const employee = await Employee.bulkCreate(req.body, {
    fields: ["id", "login", "name", "salary"],
    updateOnDuplicate: ["login", "name", "salary"],
  });
  res.status(201).send(employee);
};

// 2. get all products
const getAllEmployees = async (req, res) => {
  let employee = await Employee.findAll({});
  res.status(200).send(employee);
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
  res.status(204).send(product);
};

// 5. delete product by id
const deleteEmployee = async (req, res) => {
  let id = req.params.id;
  await Employee.destroy({ where: { id: id } });
  let employee = await Employee.findAll({});
  res.status(204).send();
};

module.exports = {
  addEmployee,
  getAllEmployees,
  updateEmployee,
  deleteEmployee,
};
