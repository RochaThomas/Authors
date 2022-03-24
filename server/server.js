const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8000;
const DB = 'Authors_DB';

//middleware
app.use(express.json(), cors(), express.urlencoded({extended: true}));

//connect to database
require('./config/mongoose.config')(DB);

//connect routes
require('./routes/author.routes')(app);


app.listen(PORT , () => console.log(`>>>>> Server is up on port ${PORT} <<<<<`));