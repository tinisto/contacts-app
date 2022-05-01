module.exports = (sequelize, DataTypes) => {
  const Contacts = sequelize.define("Contacts", {
    first_name: { type: DataTypes.STRING, allowNull: false },
    last_name: { type: DataTypes.STRING, allowNull: false },
    occupation: { type: DataTypes.STRING, allowNull: false },
    phone: { type: DataTypes.INTEGER },
  })
  return Contacts
}
