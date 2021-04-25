const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')
const app = express();

const infoRoute = require('./routs/route.js')
app.use(express.json())

app.use(cors());

app.use('/info',infoRoute)

const CONNECTION_URL = 'mongodb+srv://Ravihansa:ravihansa123@cluster0.69ijw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((err) => console.log(err.message))

mongoose.set('useFindAndModify', false);