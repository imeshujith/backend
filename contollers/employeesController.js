const db = require("../models");

// create main Model
const Employee = db.employees;

// 1. create employee
const addEmployee = async (req, res, err) => {
  try {
    const employee = await Employee.bulkCreate(req.body, {
      fields: ["id", "login", "name", "salary"],
      updateOnDuplicate: ["login", "name", "salary"],
    });
    res.status(201).send(employee);
  } catch (e) {
    res.status(400).send("Duplication error. Login cannot be duplicate");
  }
};

// 2. get all employees
const getAllEmployees = async (req, res) => {
  try {
    let employee = await Employee.findAll({});
    res.status(200).send(employee);
  } catch (e) {
    res.status(400).send("Server error");
  }
};

// 4. update Employee
const updateEmployee = async (req, res) => {
  try {
    let id = req.params.id;
    const employee = await Employee.update(req.body, { where: { id: id } });
    res.status(204).send(employee);
  } catch (e) {
    res.status(400).send("Server error");
  }
};

// 5. delete employee by id
const deleteEmployee = async (req, res) => {
  try {
    let id = req.params.id;
    await Employee.destroy({ where: { id: id } });
    let employee = await Employee.findAll({});
    res.status(204).send();
  } catch (e) {
    res.status(400).send("Server error");
  }
};

module.exports = {
  addEmployee,
  getAllEmployees,
  updateEmployee,
  deleteEmployee,
};
