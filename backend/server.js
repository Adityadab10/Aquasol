const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json()); // Middleware to parse JSON data
app.use(cors({
  origin: 'http://localhost:3000', // Your React app's URL
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
})); // Allow requests from frontend

// 📌 Step 3: Connect to MongoDB Locally
mongoose
  .connect("mongodb://localhost:27017/AQUASOL", {  // Change 'AQUASOL' to your database name
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected Successfully!"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// 📌 Step 4: Create a Mongoose Schema (Define the structure of our data)
const bookingSchema = new mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  message: String,
});

const Booking = mongoose.model("Booking", bookingSchema);

// Contact Schema
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  message: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Contact = mongoose.model("Contact", contactSchema);

// 📌 Step 5: API Routes
// Fetch all bookings
app.get("/api/bookings", async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ error: "Error fetching bookings" });
  }
});

// Add a new booking
app.post("/api/bookings", async (req, res) => {
  try {
    const newBooking = new Booking(req.body);
    await newBooking.save();
    res.status(201).json(newBooking);
  } catch (error) {
    res.status(500).json({ error: "Error saving booking" });
  }
});

// Contact Form API Routes
app.post("/api/contact", async (req, res) => {
  try {
    // Log the incoming request body for debugging
    console.log('Received contact form data:', req.body);

    // Validate required fields
    const { name, email, subject, message } = req.body;
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      });
    }

    // Create and save new contact
    const newContact = new Contact({
      name,
      email,
      subject,
      message,
      createdAt: new Date()
    });

    await newContact.save();

    // Send success response
    res.status(201).json({
      success: true,
      message: "Contact form submitted successfully",
      data: newContact
    });
  } catch (error) {
    console.error("Error saving contact form:", error);
    res.status(500).json({
      success: false,
      message: "Error submitting contact form",
      error: error.message
    });
  }
});

// Get all contacts (optional - for admin purposes)
app.get("/api/contacts", async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      data: contacts
    });
  } catch (error) {
    console.error("Error fetching contacts:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching contacts",
      error: error.message
    });
  }
});

// Add this before your routes
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// 📌 Step 6: Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
