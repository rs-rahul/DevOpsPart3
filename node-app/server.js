const express = require('express')
const dotenv = require("dotenv")
const cors = require('cors');
const app = express()
dotenv.config();

const port = process.env.PORT || 5000;
const MongoClient = require('mongodb').MongoClient;
const uri = process.env.MONGO_URL;
const client = new MongoClient(uri, { useNewUrlParser: true });

client.connect(err => {
  console.log("connected to mongodb")
  client.close();
});

app.use(cors({
    origin: '*'
}));

app.get('/', (req, res) => {
  res.json({ message: 'hello' });
})

app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
})
