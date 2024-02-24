// const express=require('express');
// const bodyParser=require('body-parser');
// const app=express();
// const PORT=3000;

// app.use(bodyParser.urlencoded({extended:false}));
// app.use(bodyParser.json());

// //Dummy data
// const rooms=[];
// const bookings=[];

// //Define a function to generate unique booking id
// function generateBookingId(){
//   return bookings.length+1;
// }

// //Route to list all rooms
// app.get('/rooms',(req,res)=>{
//   res.json(rooms);
// });

// //Route to create a room
// app.post('/create-room',(req,res)=>{
//   const{ roomNumber,seatsAvailable,amenities,pricePerHour}=req.body;
  
//   //Validate input
//   if(!roomNumber||!seatsAvailable||!pricePerHour){
//     return res.status(400).json({message:'Room number,seats Available,pricePer hour are required'})
//   }
//   //check if the room number already exits
//   const isRoomExist=rooms.some((room)=>room.roomNumber===roomNumber);

//   if(isRoomExist){
//     return res.status(409).json({message:'Room number already exists'});
//   }
//   //Add the room to the list
//   rooms.push({
//     roomNumber,
//     seatsAvailable,
//     amenities,
//     pricePerHour,
//   });
//   res.json({message:'Room created successfully'});
// });

// //Route to book a room
// app.post('/book-room',(req,res)=>{
//   const{roomId,customerName,date,startTime,endTime}=req.body;

//   //Validate input
//   if (!roomId || !customerName ||!date||!startTime ||!endTime ) {
//     return  res.status(400).json({ message:"RoomId,customerName,date,startTime,endTime are required" }) ;
//   }

//   //check if the room exists
//   const room=rooms.find((room)=>room.roomNumber===roomId);
//   if(!room){
//     return res.status(404).json({message:'Room not Found'})
//   }

//   //check if the room is available for booking
//   const isRoomAvailable=true;
//   if(!isRoomAvailable){
//     return res.status(409).json({message:'Room is not available for specified time'});
//   }
// //Generate a unique bookingId
// const bookingId=generateBookingId();
//   //Add the booking to the list
//   bookings.push({
//     bookingId,
//     roomId,
//     customerName,
//     date,
//     startTime,
//     endTime,
//     bookingDate:new Date(),//Timestamp of the booking
//     bookingStatus:'Confirmed',
//   });
//   res.json({message:'Room booked successfully'});
// });

// //Route to list all rooms with bookings
// app.get('/rooms-with-bookings',(req,res)=>{
//   const roomsWithBookings=rooms.map((room)=>{
//   const roomBookings=bookings.filter((booking)=>booking.roomId===room.roomNumber);
//     return{
//       roomNumber:room.roomNumber,
//       bookings:roomBookings.map((booking)=>({
//         customerName:booking.customerName,
//         date:booking.date,
//         startTime:booking.startTime,
//         endTime:booking.endTime,
//         bookingStatus:booking.bookingStatus,
//       })),
//     };
//   });
//   res.json(roomsWithBookings);
// });

// //Route to list all customer with bookings
// app.get('/customers-with-bookings',(req,res)=>{
//   const customersWithBookings= bookings.map((booking)=>({
//     customerName:booking.customerName,
//     roomId:booking.roomId,
//     date:booking.date,
//     startTime:booking.startTime,
//     endTime:booking.endTime,
//     bookingStatus:booking.bookingStatus,
//   }));
//   res.json(customersWithBookings);
// });

// //Route to list how many times a customer has booked a room with details
// app.get('/customer-booking-history/:customerName',(req,res)=>{
//   const customerName=req.params.customerName;
//   console.log(customerName);
//   const customerBookingHistory=
//     bookings.filter((booking)=>booking.customerName === customerName );
//     res.json(customerBookingHistory);
// });
// app.listen(PORT,()=>{
//   console.log(`Hall Booking Api listening a http://locahost:${PORT}`);
// });
// const express = require('express');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');

// const app = express();
// const PORT = 3000;

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/hallBookingDB', { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('Connected to MongoDB'))
//   .catch(err => console.error('Error connecting to MongoDB:', err));

// // Define Mongoose schema and model for Room
// const roomSchema = new mongoose.Schema({
//   roomNumber: { type: String, required: true, unique: true },
//   seatsAvailable: { type: Number, required: true },
//   amenities: { type: [String], default: [] },
//   pricePerHour: { type: Number, required: true }
// });

// // Replace ensureIndex with createIndexes
// roomSchema.set('timestamps', true); // Enable timestamps
// roomSchema.index({ roomNumber: 1 }, { unique: true }); // Indexing roomNumber for uniqueness

// const Room = mongoose.model('Room', roomSchema);


// // Define Mongoose schema and model for Booking
// const bookingSchema = new mongoose.Schema({
//   roomId: { type: mongoose.Schema.Types.ObjectId, ref: 'Room' },
//   customerName: { type: String, required: true },
//   date: { type: Date, required: true },
//   startTime: { type: String, required: true },
//   endTime: { type: String, required: true },
//   bookingDate: { type: Date, default: Date.now },
//   bookingStatus: { type: String, default: 'Confirmed' }
// });

// const Booking = mongoose.model('Booking', bookingSchema);

// // Define your routes

// // Route to list all rooms
// app.get('/rooms', async (req, res) => {
//   try {
//     const rooms = await Room.find();
//     res.json(rooms);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // Route to create a room
// app.post('/create-room', async (req, res) => {
//   const { roomNumber, seatsAvailable, amenities, pricePerHour } = req.body;

//   try {
//     const room = new Room({ roomNumber, seatsAvailable, amenities, pricePerHour });
//     await room.save();
//     res.status(201).json(room);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// // Route to book a room
// app.post('/book-room', async (req, res) => {
//   const { roomNumber, customerName, date, startTime, endTime } = req.body;

//   try {
//     // Find the room based on the roomNumber
//     const room = await Room.findOne({ roomNumber });
//     if (!room) {
//       return res.status(404).json({ message: 'Room not found' });
//     }

//     const booking = new Booking({ roomId: room._id, customerName, date, startTime, endTime });
//     await booking.save();
//     res.status(201).json(booking);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });


// // Route to list all rooms with bookings
// app.get('/rooms-with-bookings', async (req, res) => {
//   try {
//     const roomsWithBookings = await Room.aggregate([
//       {
//         $lookup: {
//           from: 'bookings',
//           localField: '_id',
//           foreignField: 'roomId',
//           as: 'bookings'
//         }
//       }
//     ]);
//     res.json(roomsWithBookings);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // Route to list all customers with bookings
// app.get('/customers-with-bookings', async (req, res) => {
//   try {
//     const customersWithBookings = await Booking.find();
//     res.json(customersWithBookings);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // Route to list booking history for a customer
// app.get('/customer-booking-history/:customerName', async (req, res) => {
//   const { customerName } = req.params;
//   try {
//     const customerBookingHistory = await Booking.find({ customerName });
//     res.json(customerBookingHistory);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Hall Booking API listening at http://localhost:${PORT}`);
// });
// const express = require('express');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');

// const app = express();
// const PORT = 3000;

// // Middleware
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// // Connect to MongoDB
// mongoose.connect('mongodb+srv://giridharan721:giridharan721@cluster0.ntohrqz.mongodb.net/Booking', { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('Connected to MongoDB'))
//   .catch(err => console.error('Error connecting to MongoDB:', err));

// // Mongoose models
// const Room = mongoose.model('Room', new mongoose.Schema({
//   roomNumber: { type: String, required: true, unique: true },
//   seatsAvailable: { type: Number, required: true },
//   amenities: { type: [String], default: [] },
//   pricePerHour: { type: Number, required: true }
// }));

// const Booking = mongoose.model('Booking', new mongoose.Schema({
//   roomId: { type: mongoose.Schema.Types.ObjectId, ref: 'Room' },
//   customerName: { type: String, required: true },
//   date: { type: Date, required: true },
//   startTime: { type: String, required: true },
//   endTime: { type: String, required: true },
//   bookingDate: { type: Date, default: Date.now },
//   bookingStatus: { type: String, default: 'Confirmed' }
// }));

// // Routes

// // Route to list all rooms
// app.get('/rooms', async (req, res) => {
//   try {
//     const rooms = await Room.find();
//     res.json(rooms);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // Route to create a room
// app.post('/rooms', async (req, res) => {
//   const { roomNumber, seatsAvailable, amenities, pricePerHour } = req.body;

//   try {
//     const room = new Room({ roomNumber, seatsAvailable, amenities, pricePerHour });
//     await room.save();
//     res.status(201).json(room);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// // Route to book a room
// app.post('/bookings', async (req, res) => {
//   const { roomNumber, customerName, date, startTime, endTime } = req.body;

//   try {
//     const room = await Room.findOne({ roomNumber });
//     if (!room) {
//       return res.status(404).json({ message: 'Room not found' });
//     }

//     const booking = new Booking({ roomId: room._id, customerName, date, startTime, endTime });
//     await booking.save();
//     res.status(201).json(booking);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// // Route to list all rooms with bookings
// app.get('/rooms-with-bookings', async (req, res) => {
//   try {
//     const roomsWithBookings = await Room.aggregate([
//       {
//         $lookup: {
//           from: 'bookings',
//           localField: '_id',
//           foreignField: 'roomId',
//           as: 'bookings'
//         }
//       }
//     ]);
//     res.json(roomsWithBookings);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // Route to list all customers with bookings
// app.get('/customers-with-bookings', async (req, res) => {
//   try {
//     const customersWithBookings = await Booking.find();
//     res.json(customersWithBookings);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // Route to list booking history for a customer
// app.get('/customer-booking-history/:customerName', async (req, res) => {
//   const { customerName } = req.params;
//   try {
//     const customerBookingHistory = await Booking.find({ customerName });
//     res.json(customerBookingHistory);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // Server
// app.listen(PORT, () => {
//   console.log(`Hall Booking API listening at http://localhost:${PORT}`);
// });
const express = require('express');
const bodyParser = require('body-parser'); // Body parser is no longer maintained, consider alternatives
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json({ limit: '10mb' })); // Use json parser with appropriate limit
app.use(bodyParser.urlencoded({ extended: false })); // Use urlencoded parser if needed

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Mongoose models (consider validation and data normalization)
const roomSchema = new mongoose.Schema({
  roomNumber: { type: String, required: true, unique: true },
  seatsAvailable: { type: Number, required: true, min: 1 }, // Ensure at least one seat
  amenities: { type: [String], default: [] },
  pricePerHour: { type: Number, required: true, min: 0 } // Ensure non-negative price
});

const bookingSchema = new mongoose.Schema({
  roomId: { type: mongoose.Schema.Types.ObjectId, ref: 'Room' },
  customerName: { type: String, required: true },
  date: { type: Date, required: true },
  startTime: { type: String, required: true, validate: timeValidator }, // Validate time format
  endTime: { type: String, required: true, validate: timeValidator }, // Validate time format
  bookingDate: { type: Date, default: Date.now },
  bookingStatus: { type: String, default: 'Confirmed', enum: ['Confirmed', 'Pending', 'Cancelled'] } // Add possible statuses
});

const Room = mongoose.model('Room', roomSchema);
const Booking = mongoose.model('Booking', bookingSchema);

// Helper function for time validation
function timeValidator(value) {
  // Implement validation logic here (e.g., regular expression)
  return true; // Replace with actual validation
}

// Routes

// Route to list all rooms
app.get('/rooms', async (req, res) => {
  try {
    const rooms = await Room.find();
    res.json(rooms);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to create a room
app.post('/rooms', async (req, res) => {
  const { roomNumber, seatsAvailable, amenities, pricePerHour } = req.body;

  try {
    const room = new Room({ roomNumber, seatsAvailable, amenities, pricePerHour });
    await room.save();
    res.status(201).json(room);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Route to book a room
app.post('/bookings', async (req, res) => {
  const { roomNumber, customerName, date, startTime, endTime } = req.body;

  try {
    const room = await Room.findOne({ roomNumber });
    if (!room) {
      return res.status(404).json({ message: 'Room not found' });
    }

    const booking = new Booking({ roomId: room._id, customerName, date, startTime, endTime });
    await booking.save();
    res.status(201).json(booking);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


// Route to list all rooms with bookings
app.get('/rooms-with-bookings', async (req, res) => {
  try {
    const roomsWithBookings = await Room.aggregate([
      {
        $lookup: {
          from: 'bookings',
          localField: '_id',
          foreignField: 'roomId',
          as: 'bookings'
        }
      }
    ]);
    res.json(roomsWithBookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to list all customers with bookings
app.get('/customers-with-bookings', async (req, res) => {
  try {
    const customersWithBookings = await Booking.find();
    res.json(customersWithBookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to list booking history for a customer
app.get('/customer-booking-history/:customerName', async (req, res) => {
  const { customerName } = req.params;
  try {
    const customerBookingHistory = await Booking.find({ customerName });
    res.json(customerBookingHistory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Handler for the root route
app.get('/', (req, res) => {
  res.send('Hall Booking API is running');
});

// Server
app.listen(PORT, () => {
  console.log(`Hall Booking API listening at http://localhost:${PORT}`);
});
