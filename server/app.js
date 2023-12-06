const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Sequelize, Model, DataTypes } = require('sequelize');

const app = express();
const port = 3000;

app.use(cors());

// Create Sequelize instance
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite'
});

// Define User model
class Profile extends Model {}
Profile.init({
  name: DataTypes.STRING,
  lastName: DataTypes.STRING,
  email: DataTypes.STRING,
  city: DataTypes.STRING,
  country: DataTypes.STRING,
  summary: DataTypes.STRING,
  frameworks: {
    type: DataTypes.ARRAY(DataTypes.JSON)
  },
  hobbies: {
    type: DataTypes.ARRAY(DataTypes.JSON)
  }
}, { sequelize, modelName: 'profile' });

// Sync models with database
sequelize.sync();

// Middleware for parsing request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// CRUD routes for User model
app.get('/api/profile', async (req, res) => {
  try {
    const profile = await Profile.findAll();
    res.json(profile);  
  } catch (error) {
    console.log(error);
  }
  
});

app.post('/api/profile', async (req, res) => {
  try {
    const profile = await Profile.create(req.body);
    res.json(profile);  
  } catch (error) {
    console.log(error);
  }
  
});

// Start server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});