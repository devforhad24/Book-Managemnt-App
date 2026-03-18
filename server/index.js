const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ quiet: true });
const { MongoClient, ServerApiVersion } = require("mongodb");
const port = process.env.PORT || 3000;

// middleware
app.use(cors());
app.use(express.json());

// connect mongoDB
const uri = process.env.MONGODB_URL;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    // create db collection
    const db = client.db("book-managemnt-system");
    const booksCollection = db.collection("books");

    // crate a book (POST)
    app.post("/books", async (req, res) => {
      const bookData = req.body;
      // console.log(bookData);
      try {
        const result = await booksCollection.insertOne(bookData);
        res.status(201).json({ message: "Book created successfully", result });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });

    // get all books (GET)
    app.get('/books', async (req, res) => {
      try{
        const books = await booksCollection.find().toArray();
        res.status(201).json({books});
      }catch(error){
        res.status(500).json({ error: error.message });
      }
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!",
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Welcome to Book Management Server API!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// admin
// caDIgIpG3VTbIH3a
