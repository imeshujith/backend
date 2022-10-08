module.exports = (sequelize, DataTypes) => {
  const Employees = sequelize.define(
    "employees",
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      login: {
        type: DataTypes.STRING,
        unique: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      salary: {
        type: DataTypes.FLOAT,
      },
    },
    {
      charset: "utf8",
      collate: "utf8_general_ci",
      timestamps: false,
    }
  );
  return Employees;
};
