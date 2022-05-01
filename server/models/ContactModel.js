module.exports = (sequelize, DataTypes) => {
  const Contacts = sequelize.define("Contacts", {
    first_Name: { type: DataTypes.STRING, allowNull: false },
    last_Name: { type: DataTypes.STRING, allowNull: false },
    occupation: { type: DataTypes.STRING, allowNull: false },
    phone: { type: DataTypes.INTEGER },
  })
  return Contacts
}
