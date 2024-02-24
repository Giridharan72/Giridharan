require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const fs = require("fs");
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3001; // Use the PORT from environment variables or default to 3001

// Connect to MongoDB database
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("Connected to MongoDB");
  
  // Start the server after successfully connecting to MongoDB
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
})
.catch((error) => {
  console.error("Error connecting to MongoDB:", error);
});


// Create Mongoose schema for file information
const fileSchema = new mongoose.Schema({
  fileName: String,
  content: String,
  additionalInfo: Object,
});

// Create Mongoose model for file information
const File = mongoose.model("File", fileSchema);

// Endpoint to create a file with content and additional information
app.post("/create-file", async (req, res) => {
  const { content, additionalInfo } = req.body; // Extract content and additional information from request body

  try {
    // Check if content is provided
    if (!content) {
      return res.status(400).json({ error: "Content not provided" });
    }

    // Generate filename based on current date and time
    const dt = Date.now();
    const dateObj = new Date(dt);
    const date = dateObj.getDate();
    const month = dateObj.getMonth() + 1;
    const year = dateObj.getFullYear();
    const time = dateObj.getTime();
    const fileName = `${year}-${month}-${date}-${time}.txt`;

    // Construct data to write to the file
    const fileData = `Content:\n${content}\nAdditional Information:\n${JSON.stringify(additionalInfo, null, 2)}`;

    // Write data to file
    fs.writeFile(fileName, fileData, async (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Error writing file" });
      }

      // Save file information to MongoDB
      const file = new File({
        fileName,
        content,
        additionalInfo,
      });
      await file.save();
      console.log("File information saved to database");
      res.status(201).json({ message: "File created and information saved successfully", fileName });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

// Endpoint to list files
app.get("/", async (req, res) => {
  try {
    const files = await File.find({});
    res.json({ files });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error fetching files from database" });
  }
});
