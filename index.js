// app.js
const express = require('express');
const bodyParser = require('body-parser');
const blogRoutes = require('./blog-backend/routes/blogRoutes');

const app = express();

app.use(bodyParser.json());
app.use('/api', blogRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
