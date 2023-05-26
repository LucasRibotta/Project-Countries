const { DataTypes } = require('sequelize');
//c
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    
  sequelize.define('activity', {
      id: {
           type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          allowNull: false,
          primaryKey: true,
      },
  
      names: {
          type: DataTypes.STRING,
          allowNull: false
      },
   
      difficulty: {
          type: DataTypes.ENUM('1','2','3','4','5'),
          allowNull: false
      },
  
      duration: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            isInt: true,
            min:1,
            max: 2,
          }
      },
  
      season: {
          type: DataTypes.ENUM('All','Summer', 'Spring', 'Autumn', 'Winter',)
          
      },
  },
   { timestamps: false }
  )
}