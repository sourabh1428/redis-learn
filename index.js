// index.js
const express = require('express');
const cors = require('cors'); // Import cors package
const router = express.Router();

const app = express();
const authRoute = require('./routes/Auth.js');
const validateApiKey = require('./routes/DBauth.js');


const port = 3000;



app.use(cors());
app.use(express.json());
// Import routes




const routes = require('./routes/users.js');

const eventRoutes=require('./routes/events.js');

const campaignRoutes = require('./routes/campaign.js');
const { validate } = require('./Modal.js');



// Use routes


app.use('/auth', validateApiKey,authRoute);
app.use('/',validateApiKey,routes);
app.use('/events',validateApiKey, eventRoutes);
app.use('/campaigns',validateApiKey ,campaignRoutes);
app.use('/auth',validateApiKey,authRoute );
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});







// import redis



