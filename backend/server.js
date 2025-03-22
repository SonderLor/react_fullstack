const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const db = require('./models');

const app = express();

app.use(cors({
  origin: 'http://localhost',
  credentials: true,
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

db.sequelize.sync();

require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);
require('./routes/post.routes')(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
  console.log(process.env.DB_USER);
});
